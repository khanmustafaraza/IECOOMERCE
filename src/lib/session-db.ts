import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import Session from "@/lib/models/Session";
import connectDB from "@/lib/db";

const secretKey = process.env.SESSION_SECRET!;
const encodedKey = new TextEncoder().encode(secretKey);

type DBSessionPayload = {
  sessionId: string;
  expiresAt: Date;
};

export async function encrypt(payload: DBSessionPayload) {
  return new SignJWT({
    sessionId: payload.sessionId,
    expiresAt: payload.expiresAt.toISOString(),
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as {
      sessionId: string;
      expiresAt: string;
    };
  } catch (error) {
    return null;
  }
}

export async function createDatabaseSession(userId: string) {
  await connectDB();

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  // 1. Create session in DB
  const newSession = await Session.create({
    userId,
    expiresAt,
  });

  // 2. Encrypt sessionId
  const encryptedSession = await encrypt({
    sessionId: newSession._id.toString(),
    expiresAt,
  });

  // 3. Save encrypted sessionId in cookie
  const cookieStore = await cookies();

  cookieStore.set("session", encryptedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getDatabaseSession() {
  await connectDB();

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) return null;

  const decrypted = await decrypt(sessionCookie);

  if (!decrypted?.sessionId) return null;

  const dbSession = await Session.findById(decrypted.sessionId).populate(
    "userId",
  );

  if (!dbSession) return null;

  if (new Date(dbSession.expiresAt) < new Date()) {
    await Session.findByIdAndDelete(dbSession._id);
    return null;
  }

  return dbSession;
}

export async function deleteDatabaseSession() {
  await connectDB();

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (sessionCookie) {
    const decrypted = await decrypt(sessionCookie);

    if (decrypted?.sessionId) {
      await Session.findByIdAndDelete(decrypted.sessionId);
    }
  }

  cookieStore.delete("session");
}

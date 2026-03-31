import "server-only";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET!;

export type UserRole = "user" | "admin" | "delivery";

export type SessionPayload = {
  userId: string;
  role: UserRole;
  name: string;
  expiresAt: string;
};

export const generateEncryptSessionToken = (user: SessionPayload) => {
  return jwt.sign(user, secretKey, {
    expiresIn: "7d",
  });
};

export const decryptSessionToken = (
  session: string | undefined = "",
): SessionPayload | null => {
  try {
    const decoded = jwt.verify(session, secretKey) as JwtPayload &
      SessionPayload;
    return {
      userId: decoded.userId,
      role: decoded.role,
      name: decoded.name,
      expiresAt: decoded.expiresAt,
    };
  } catch (error) {
    console.log("Invalid or expired token session");
    return null;
  }
};

export async function createTokenSession(user: {
  id: string;
  role: UserRole;
  name: string;
}) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = generateEncryptSessionToken({
    userId: user.id,
    role: user.role,
    name: user.name,
    expiresAt: expiresAt.toISOString(),
  });

  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getTokenSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  return decryptSessionToken(session);
}

export async function deleteTokenSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

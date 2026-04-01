// import "server-only";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import { cookies } from "next/headers";

// const secretKey = process.env.SESSION_SECRET!;

// export type UserRole = "user" | "admin" | "delivery";

// export type Payload = {
//   userId: string;
//   role: UserRole;
//   name: string;
//   expiresAt: string;
// };

// export const generateToken = (user: Payload) => {
//   return jwt.sign(user, secretKey, {
//     expiresIn: "7d",
//   });
// };

// export const decryptToken = (
//   token: string | undefined = "",
// ): Payload | null => {
//   try {
//     const decoded = jwt.verify(token, secretKey) as JwtPayload & Payload;
//     return {
//       userId: decoded.userId,
//       role: decoded.role,
//       name: decoded.name,
//       expiresAt: decoded.expiresAt,
//     };
//   } catch (error) {
//     console.log("Invalid or expired token session");
//     return null;
//   }
// };

// // **************************create the session***********************
// export async function createSession(user: {
//   id: string;
//   role: UserRole;
//   name: string;
// }) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

//   const session = generateToken({
//     userId: user.id,
//     role: user.role,
//     name: user.name,
//     expiresAt: expiresAt.toISOString(),
//   });

//   const cookieStore = await cookies();

//   cookieStore.set("session", session, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     expires: expiresAt,
//     sameSite: "lax",
//     path: "/",
//   });
//   console.log(cookieStore)
// }

// // **************************create the session***********************

// // get the session

// export async function getSession(): Promise<Payload | null> {
//   const cookieStore = await cookies();
//   const session = cookieStore.get("session")?.value;

//   if (!session) return null;

//   return decryptToken(session);
// }

// export async function deleteSession() {
//   const cookieStore = await cookies();
//   cookieStore.delete("session");
// }

import "server-only";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET!;

export type UserRole = "user" | "admin" | "delivery";

export type Payload = {
  userId: string;
  role: UserRole;
  name: string;
  expiresAt: string;
};

export const generateToken = (user: Payload) => {
  return jwt.sign(user, secretKey, {
    expiresIn: "7d",
  });
};

export const decryptToken = (
  token: string | undefined = "",
): Payload | null => {
  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload & Payload;

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

// **************************
// Create session using cookies()
// Best for Server Actions or direct cookie setting
// **************************

// **************************
// Get session
// **************************
export async function getSession(): Promise<Payload | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return null;

  return decryptToken(session);
}

// **************************
// Delete session
// **************************
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

// import { NextResponse } from "next/server";
// import { verifyToken } from "./lib/auth";

// export function middleware(req: any) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   try {
//     const decoded: any = verifyToken(token);

//     // Admin route protection
//     if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
//       return NextResponse.redirect(new URL("/", req.url));
//     }

//     return NextResponse.next();
//   } catch (err) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/admin/:path*"],
// };

const middleware = (req: any) => {};

export default middleware;

// import { NextRequest, NextResponse } from "next/server";
// import { jwtVerify } from "jose";

// const secretKey = process.env.SESSION_SECRET!;
// const encodedKey = new TextEncoder().encode(secretKey);

// async function decrypt(session: string | undefined = "") {
//   try {
//     const { payload } = await jwtVerify(session, encodedKey, {
//       algorithms: ["HS256"],
//     });

//     return payload as {
//       userId: string;
//       role: "user" | "admin";
//     };
//   } catch {
//     return null;
//   }
// }

// const protectedRoutes = ["/dashboard", "/admin"];
// const publicRoutes = ["/login", "/register", "/"];

// export default async function proxy(req: NextRequest) {
//   const path = req.nextUrl.pathname;

//   const isProtectedRoute = protectedRoutes.some((route) =>
//     path.startsWith(route),
//   );

//   const isPublicRoute = publicRoutes.includes(path);

//   const cookie = req.cookies.get("session")?.value;
//   const session = await decrypt(cookie);

//   // Not logged in -> block protected routes
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   }

//   // Logged in user trying to open login/register again
//   if (isPublicRoute && session?.userId) {
//     if (session.role === "admin") {
//       return NextResponse.redirect(new URL("/admin", req.nextUrl));
//     }

//     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
//   }

//   // Logged in but non-admin trying to open /admin
//   if (path.startsWith("/admin") && session?.role !== "admin") {
//     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };

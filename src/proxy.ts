import { NextRequest, NextResponse } from "next/server";
import { decryptToken } from "./lib/session-token-auth";

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute =
    path.startsWith("/user") ||
    path.startsWith("/admin") ||
    path.startsWith("/delivery");

  const isPublicRoute = ["/login", "/register"].includes(path);

  const session = req.cookies.get("session")?.value;
  const user = session ? decryptToken(session) : null;

  console.log("middleware hit:", path, user);

  // 1️⃣ Not logged in → redirect to login
  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 2️⃣ Already logged in on public page → redirect to their dashboard
  if (isPublicRoute && user) {
    if (user.role === "admin")
      return NextResponse.redirect(new URL("/admin", req.nextUrl));
    if (user.role === "delivery")
      return NextResponse.redirect(new URL("/delivery", req.nextUrl));
    return NextResponse.redirect(new URL("/user", req.nextUrl));
  }

  // 3️⃣ Role-based protection
  if (path.startsWith("/admin") && user?.role !== "admin") {
    return NextResponse.redirect(new URL("/user", req.nextUrl));
  }
  if (path.startsWith("/delivery") && user?.role !== "delivery") {
    return NextResponse.redirect(new URL("/user", req.nextUrl));
  }
  if (path.startsWith("/user") && user?.role !== "user") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  // ✅ All good → continue
  return NextResponse.next();
}

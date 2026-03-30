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

const middleware = (req:any) =>{
    
}

export default middleware
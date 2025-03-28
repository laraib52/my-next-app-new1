import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/products"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  console.log("Middleware triggered for:", request.nextUrl.pathname); // ✅ Debugging log
  console.log("Token exists?", !!token); // ✅ Check if token is found

  if (!token && protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    console.log("Redirecting to login..."); // ✅ Confirm redirection
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*"],
};

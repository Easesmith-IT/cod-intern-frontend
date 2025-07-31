import { NextResponse } from "next/server";
import { axiosInstance } from "./lib/axiosInstance";

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const isAuthenticated = request.cookies.get("isAuthenticated")?.value;
  console.log("in middleware", url);
  console.log("isAuthenticated", isAuthenticated);

  // Skip API routes or static assets
  if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const refreshToken = request.cookies.get("refreshToken")?.value;
  console.log("refreshToken", refreshToken);

  if (!isAuthenticated) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/auth/status`,
      {
        method: "GET",
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      }
    );
    const data = await res?.json();

    console.log("data", data);

    if (data?.isAuthenticated) {
      return NextResponse.next();
    }

    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: ["/user/:path*"],
};

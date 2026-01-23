import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/auth/onboard", "/auth/logincheck"];

async function checkAuthentication(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken");
  const accessToken = request.cookies.get("accessToken");

  // 둘 중 하나라도 없으면 인증 실패
  if (!refreshToken || !accessToken) {
    return false;
  }
  return true;
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  console.log("=== Middleware 실행 ===", pathname);

  // 1. 내부 리소스 / 정적 파일 / API는 체크 제외
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. 공개 경로는 체크 제외
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 3. 인증 상태 확인
  const isAuthenticated = await checkAuthentication(req);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/onboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/chat", "/summary", "/settings"],
};

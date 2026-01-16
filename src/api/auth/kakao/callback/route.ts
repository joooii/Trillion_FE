import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) { 
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');

    if (!code) { 
        return NextResponse.redirect(
            new URL('/onboard?error=no_code', request.url)
        );
    }

    try {
        const tokenResponse = await fetch('https://kauth.kakao.com/oatuh/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaiton/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                cliend_id: process.env.KAKAO_REST_API_KEY!,
                redirect_url: process.env.KAKAO_REDIRECT_URI!,
                code: code,
            }),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
            throw new Error('토큰 요청 실패');
        }
        const accessToken = tokenData.accessToken;

        const userResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const userData = await userResponse.json();

        if (!userResponse.ok) {
            throw new Error('사용자 정보 요청 실패!');
        }
        const redirectUrl = new URL('/auth/logincheck', request.url);
        redirectUrl.searchParams.set('kakaoId', userData.id.toString());
        redirectUrl.searchParams.set('nickname', userData.properties?.nickname || '');

        return NextResponse.redirect(redirectUrl);
    } catch (error) { 
        console.error('카카오 로그인 에러 : ', error);
        return NextResponse.redirect(
            new URL('/onboard?error=login_failed', request.url)
        );
    }
}
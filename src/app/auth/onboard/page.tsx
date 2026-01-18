'use client';

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo.svg";
import kakaoButtonImage from "@/assets/images/btn_login_kakao.svg";

export default function OnboardPage() {
  const handleKakaoLogin = () => { 
  const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logincheck`);
    
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao?redirect_uri=${redirectUri}`;
  };

  return (
    <div className="min-h-screen bg-text-inverse flex flex-col items-center justify-between px-6 py-8">
      <div className="flex-1" />

      <div className="flex flex-col items-center gap-[3px]">
        <div className="w-[50px] h-[50px]">
          <Image
            src={logoImage}
            alt="SO:U+ 로고"
            width={50}
            height={50}
            className="w-full h-full"
            priority
          />
        </div>

        <h1 className="text-4xl font-suite-extrabold text-text-darkgray">
          SO:U+
        </h1>
        <p className="text-base font-suite-medium text-text-lightgray">
          AI 기반 채팅 상담 요약서비스
        </p>
      </div>

      <div className="flex-1" />

      <div className="w-full max-w-[335px] flex flex-col items-center gap-4">
        <button onClick={handleKakaoLogin} className="w-full">
          <Image
            src={kakaoButtonImage}
            alt="카카오 로그인"
            width={335}
            height={54}
            className="w-full h-auto"
          />
        </button>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs font-suite-medium text-text-lightgray text-center">
            로그인 시 개인정보 처리방침 및 이용약관에 동의하게 됩니다
          </p>

          <div className="flex gap-4">
            <Link
              href="https://www.notion.so/2e8b3190d6008048a7bdfbd17011d460"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-suite-medium text-text-lightgray underline hover:text-text-darkgray transition-colors"
            >
              개인정보 처리방침
            </Link>
            <Link
              href="https://www.notion.so/2e8b3190d600806bbc49c659069629d3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-suite-medium text-text-lightgray underline hover:text-text-darkgray transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
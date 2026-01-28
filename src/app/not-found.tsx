import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import Moono from "@/assets/images/moono.svg";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-6">
          <Image
            src={Moono}
            alt="U+ 캐릭터"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        <h1 className="text-6xl font-bold text-secondary-800 mb-2">404</h1>
        <p className="text-lg text-text-darkgray mb-2">
          페이지를 찾을 수 없습니다
        </p>
        <p className="text-sm text-text-lightgray mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>

        <Link href="/">
          <div className="flex items-center justify-center bg-primary-500 active:bg-primary-700 text-white py-3 rounded-lg">
            <Home className="h-4 w-4 mr-2" />
            홈으로 돌아가기
          </div>
        </Link>
      </div>
    </div>
  );
}

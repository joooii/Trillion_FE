"use client";

import { CircleAlert, RotateCcw } from "lucide-react";
import { useState } from "react";

interface ErrorContentProps {
  variant?: "home" | "summary";
}

export default function ErrorContent({
  variant = "summary",
}: ErrorContentProps) {
  const heightClass = variant === "home" ? "h-[68px]" : "h-[73px]";

  const [isRetrying, setIsRetrying] = useState<boolean>(false);

  // TODO: 아래 함수에 api 연동하면 됩니당
  const handleRetrySummary = async () => {
    if (isRetrying) return; // 중복 클릭 방지

    try {
      setIsRetrying(true);

      // TODO: summary 재요청 API 연동

      console.log("요약 재시도 요청");

      // TODO: 성공 시
    } catch (error) {
      console.error("요약 재시도 실패:", error);
      // TODO: 실패 시
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <div
      className={`w-[311px] ${heightClass} bg-[#FFECEC] rounded-[10px] p-3 border-[0.5px] border-[#FFB4B4] flex items-center`}
    >
      <div className="w-8 h-8 bg-error-500 rounded-[10px] flex items-center justify-center">
        <CircleAlert className="w-[15px] h-[15px] stroke-white" />
      </div>

      <div className="ml-[10px] flex-1">
        <p className="text-error-600 font-semibold">생성 중 오류 발생</p>
        <p className="text-xs text-error-200">
          자세한 내용을 확인하려면 탭하세요
        </p>
      </div>

      <button onClick={handleRetrySummary}>
        <RotateCcw className="w-[22px] h-[22px] stroke-error-500 active:stroke-error-700" />
      </button>
    </div>
  );
}

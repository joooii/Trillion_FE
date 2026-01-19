"use client";

import { CircleX, X } from "lucide-react";

interface ErrorToastProps {
  message?: string;
  onClose: () => void;
}

export default function ErrorToast({
  message = "에러가 발생했습니다. 다시 시도해주세요.",
  onClose,
}: ErrorToastProps) {
  return (
    <div className="w-[361px] h-[44px] rounded-[10px] bg-[#FFECEC] py-[10px] pl-[15px] pr-[11px] flex items-center shadow-card">
      <CircleX className="w-[24px] h-[24px] stroke-error-500 ml-[4px]" />

      <p className="text-base text-error-600 ml-[9px]">{message}</p>

      <button
        type="button"
        onClick={onClose}
        aria-label="에러 토스트 닫기"
        className="ml-auto p-1"
      >
        <X className="stroke-error-200 w-[16px] h-[16px]" />
      </button>
    </div>
  );
}

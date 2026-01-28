"use client";

import { CircleAlert, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { postCounselSummary } from "@/lib/api/summary"; 

interface ErrorContentProps {
  variant?: "home" | "summary";
  counselId: number;
  title: string;
  date: string;
}

export default function ErrorContent({
  variant = "summary",
  counselId,
  title,
  date,
}: ErrorContentProps) {
  const heightClass = variant === "home" ? "h-[68px]" : "h-[73px]";
  const queryClient = useQueryClient();
  const [isRetrying, setIsRetrying] = useState<boolean>(false);

  const handleRetrySummary = async () => {
    if (isRetrying) return;

    try {
      setIsRetrying(true);

      const targetUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/counsels/${counselId}`;
      const detailRes = await fetch(targetUrl, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      
      if (!detailRes.ok) throw new Error("데이터를 불러오지 못했습니다.");
      
      const detailData = await detailRes.json();
      const chatOriginal = detailData.data?.chat; 

      if (!chatOriginal) {
        alert("재생성할 대화 내용이 없습니다.");
        return;
      }

      await postCounselSummary({
        counselId,
        title,
        date,
        chat: chatOriginal,
      });

      await queryClient.invalidateQueries({ queryKey: ["summary", "list"] });
      alert("재생성이 시작되었습니다.");

    } catch (error) {
      console.error("재시도 실패:", error);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <div className={`w-[311px] ${heightClass} bg-[#FFECEC] rounded-[10px] p-3 border-[0.5px] border-[#FFB4B4] flex items-center`}>
      <div className="w-8 h-8 bg-error-500 rounded-[10px] flex items-center justify-center">
        <CircleAlert className="w-[15px] h-[15px] stroke-white" />
      </div>
      <div className="ml-[10px] flex-1">
        <p className="text-error-600 font-semibold">생성 중 오류 발생</p>
        <p className="text-xs text-error-200">
          자세한 내용을 확인하려면 탭하세요
        </p>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleRetrySummary();
        }} 
        disabled={isRetrying}
      >
        <RotateCcw className={`w-[22px] h-[22px] stroke-error-500 ${isRetrying ? "animate-spin" : ""}`} />
      </button>
    </div>
  );
}
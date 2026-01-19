"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import ErrorToast from "@/components/common/ErrorToast";

export default function ChatActionButtons() {
  const router = useRouter();
  const [isSummarizing, setIsSummarizing] = useState<boolean>(false);
  const [showErrorToast, setShowErrorToast] = useState<boolean>(false);

  const handleCancel = () => {
    if (isSummarizing) return;
    router.push("/");
  };

  const handleStartSummary = async () => {
    if (isSummarizing) return;

    setIsSummarizing(true);

    try {
      // TODO: 요약 시작 API 호출
      //   await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/counsel/summary`, {
      //     method: "POST",
      //     credentials: "include",
      //   });

      // 요약 완료 -> 이동
      router.push("/summary");
    } catch (error) {
      console.error("요약 실패", error);
      setShowErrorToast(true);
      setIsSummarizing(false);
    }
  };

  useEffect(() => {
    if (!showErrorToast) return;

    const timer = setTimeout(() => {
      setShowErrorToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showErrorToast]);

  return (
    <>
      {showErrorToast && (
        <div className="fixed top-[80px] left-1/2 -translate-x-1/2 z-50">
          <ErrorToast onClose={() => setShowErrorToast(false)} />
        </div>
      )}

      <div className="mt-4 flex flex-row gap-[11px]">
        <Button
          size="small"
          className="text-secondary-800 bg-white active:bg-gray-100"
          onClick={handleCancel}
        >
          취소
        </Button>

        <Button
          size="small"
          onClick={handleStartSummary}
          disabled={isSummarizing}
        >
          {isSummarizing ? "요약 중..." : "요약 시작"}
        </Button>
      </div>
    </>
  );
}

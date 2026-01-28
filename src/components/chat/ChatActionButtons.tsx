"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import ErrorToast from "@/components/common/ErrorToast";
import { useCreateSummary } from "@/hooks/useCreateSummary";
interface ChatActionButtonsProps {
  requestData: {
    counselId?: number;
    title: string;
    date: string;
    chat: string;
  };
}

export default function ChatActionButtons({
  requestData,
}: ChatActionButtonsProps) {
  const router = useRouter();

  const { mutateAsync, isPending } = useCreateSummary();
  const [showErrorToast, setShowErrorToast] = useState<boolean>(false);

  const handleCancel = () => {
    if (isPending) return;
    router.push("/summary");
  };

  const handleStartSummary = async () => {
    if (isPending) return;

    try {
      await mutateAsync({
        counselId: requestData.counselId,
        title: requestData.title,
        date: requestData.date,
        chat: requestData.chat,
      });
    } catch (error) {
      console.error("요약 실패", error);
      setShowErrorToast(true);
    }
  };

  useEffect(() => {
    if (!showErrorToast) return;
    const timer = setTimeout(() => setShowErrorToast(false), 3000);
    return () => clearTimeout(timer);
  }, [showErrorToast]);

  return (
    <div className="relative w-full flex flex-col items-center">
      {showErrorToast && (
        <div className="absolute bottom-[55px]">
          <ErrorToast onClose={() => setShowErrorToast(false)} />
        </div>
      )}

      <div className="mt-4 flex flex-row gap-[11px]">
        <Button
          size="small"
          className="text-secondary-800 bg-white active:bg-gray-100"
          onClick={handleCancel}
          disabled={isPending}
        >
          취소
        </Button>

        <Button size="small" onClick={handleStartSummary} disabled={isPending}>
          {isPending ? "요약 중..." : "요약 시작"}
        </Button>
      </div>
    </div>
  );
}

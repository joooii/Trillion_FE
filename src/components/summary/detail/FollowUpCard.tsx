"use client";

import { useAdditionalQuestion } from "@/hooks/useAdditionalQuestion";
import { MessageSquarePlus, Send } from "lucide-react";
import { useState } from "react";

interface FollowUpCardProps {
  counselId: number;
}

export default function FollowUpCard({ counselId }: FollowUpCardProps) {
  const [isFollowUpChat, setIsFollowUpChat] = useState<boolean>(false);
  const [followUpText, setFollowUpText] = useState<string>("");

  const { mutate, isPending } = useAdditionalQuestion({ counselId });

  const handleSendFollowUp = () => {
    if (!followUpText.trim()) return;

    mutate(followUpText, {
      onSuccess: () => {
        setFollowUpText("");
        setIsFollowUpChat(false);
      },
    });
  };

  return (
    <section className="w-[335px] rounded-2xl border-2 border-dashed border-primary-500/30 bg-summary-ai-gradient shadow-content-card mt-[10px]">
      <div
        onClick={() => setIsFollowUpChat(!isFollowUpChat)}
        className="flex w-full flex-col text-left px-[18px] py-[12px]"
      >
        <div className="flex w-full items-start gap-3">
          <MessageSquarePlus className="w-[20px] h-[20px] stroke-primary-500 shrink-0" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-text-darkgray">
              추가 상담 이어가기
            </p>
            <p className="text-xs text-[#73757C]">
              AI가 생성한 참고용 요약입니다. 궁금한 점이 있으면 해당 버튼을 눌러
              추가 상담을 진행해 주세요.
            </p>
          </div>
        </div>

        {isFollowUpChat && (
          <div
            className="mt-3 flex w-full gap-2 border-t border-primary-100 pt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              placeholder="추가 질문을 입력하세요"
              value={followUpText}
              onChange={(e) => setFollowUpText(e.target.value)}
              disabled={isPending}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  handleSendFollowUp();
                }
              }}
              className="rounded-lg w-[262px] h-[26px] text-[10px] border border-text-muted bg-white px-[10px] py-[5px] focus:border-primary-200 focus:outline-none"
            />
            <button
              className="w-[25px] h-[25px] rounded-lg bg-primary-200 flex items-center justify-center"
              onClick={handleSendFollowUp}
              disabled={isPending}
            >
              <Send className="w-[12px] h-[12px] stroke-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

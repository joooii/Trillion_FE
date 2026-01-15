"server-only";

import Button from "@/components/common/Button";
import { ChevronRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function SummaryStartCard() {
  return (
    <div className="relative z-10 mx-auto w-[335px] h-[169px] rounded-[10px] bg-white shadow-card flex flex-col">
      <div className="flex gap-4 mt-[23px] ml-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10">
          <MessageSquare className="w-5 h-5 stroke-primary-500" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold text-base text-text-darkgray">
            요약 시작하기
          </p>
          <p className="text-sm text-text-darkgray/60">
            AI를 통한 상담 내용 실시간 요약
          </p>
        </div>
      </div>

      <div className="mt-auto mb-4 flex justify-center">
        <Link href="/chat">
          <Button size="medium" className="shadow-btn">
            요약 시작
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

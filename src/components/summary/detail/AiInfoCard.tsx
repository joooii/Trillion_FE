import { FileText } from "lucide-react";

export default function AiInfoCard() {
  return (
    <section className="w-[335px] h-[86px] px-[18px] py-[12px] rounded-2xl border-2 border-dashed border-primary-500/30 bg-summary-ai-gradient shadow-content-card">
      <div className="flex items-start gap-3">
        <FileText className="w-[20px] h-[22px] stroke-primary-500 shrink-0" />

        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-text-darkgray">
            AI 요약 정보
          </p>
          <p className="text-xs text-[#73757C]">
            AI가 상담 내용을 요약한 정보이며, 실제 상담 내용과 차이가 있을 수
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

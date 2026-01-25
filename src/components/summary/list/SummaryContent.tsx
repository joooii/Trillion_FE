import { SummaryStatus } from "@/types/summaryList";
import { bgMap } from "@/utils/cardBgUtil";
import { Calendar } from "lucide-react";

interface SummaryContentProps {
  status: Exclude<SummaryStatus, "error">;
  summaryPreview: string;
}

export default function SummaryContent({
  status,
  summaryPreview,
}: SummaryContentProps) {
  return (
    <div
      className={`w-[311px] min-h-[73px] rounded-[10px] p-3 flex flex-col gap-y-1.5 ${bgMap[status]}`}
    >
      <div className="flex items-center gap-[3px]">
        <Calendar className="w-3 h-3 stroke-primary-500" />
        <p className="text-xs font-bold text-primary-500">AI 요약</p>
      </div>
      <p className="text-sm text-white">{summaryPreview}</p>
    </div>
  );
}

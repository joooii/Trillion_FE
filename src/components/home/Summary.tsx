import { SummaryStatus } from "@/types/summaryList";
import { bgMap } from "@/utils/cardBgUtil";
import { Calendar } from "lucide-react";

interface SummaryContentProps {
  summaryPreview: string;
  status: Exclude<SummaryStatus, "FAILED">;
}

export default function Summary({
  summaryPreview,
  status,
}: SummaryContentProps) {
  return (
    <div
      className={`w-[311px] rounded-[10px] p-3 flex flex-col gap-y-2 ${bgMap[status]}`}
    >
      <div className="flex items-center gap-[3px] pb-2">
        <Calendar className="w-3 h-3 stroke-primary-500" />
        <p className="text-xs font-bold text-primary-500">AI 요약</p>
      </div>
      <p className="text-sm text-white">{summaryPreview}</p>
    </div>
  );
}

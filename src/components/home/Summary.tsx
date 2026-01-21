import { SummaryStatus } from "@/types/summaryList";
import { Calendar } from "lucide-react";

interface SummaryContentProps {
  status: Exclude<SummaryStatus, "error">;
  content: string;
}

const bgMap = {
  pending: "bg-pending-gradient",
  success: "bg-success-gradient",
};

export default function SummaryContent({
  status,
  content,
}: SummaryContentProps) {
  return (
    <div
      className={`w-[311px] rounded-[10px] p-3 flex flex-col gap-y-2 ${bgMap[status]}`}
    >
      <div className="flex items-center gap-[3px]">
        <Calendar className="w-3 h-3 stroke-primary-500" />
        <p className="text-xs font-bold text-primary-500">AI 요약</p>
      </div>
      <p className="text-sm text-white">{content}</p>
    </div>
  );
}

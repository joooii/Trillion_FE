import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import Badge from "@/components/common/Badge";
import ErrorContent from "@/components/summary/list/ErrorContent";
import SummaryContent from "@/components/summary/list/SummaryContent";
import { SummaryCardData } from "@/types/summaryList";

export default function SummaryCard({
  counselId,
  title,
  date,
  status,
  summaryPreview,
}: SummaryCardData) {
  const isClickable = status === "COMPLETED";

  const CardContent = (
    <div
      className={`relative z-20 flex flex-col mx-auto w-[335px] min-h-[141px]
        rounded-[10px] shadow-card bg-white p-3 transition-all duration-200 
        ${isClickable ? "active:bg-gray-100" : "cursor-default"}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-text-darkgray">{title ?? "-"}</p>
          <Badge status={status} />
        </div>

        {isClickable && (
          <ChevronRight className="w-6 h-4 stroke-text-lightgray" />
        )}
      </div>

      <div className="flex items-center mt-[2px] mb-[10px] gap-[3px]">
        <Calendar className="w-2 h-2 stroke-text-lightgray" />
        <p className="text-[8px] text-text-lightgray">{date}</p>
      </div>

      {status === "FAILED" ? (
        <ErrorContent counselId={counselId} title={title ?? ""} date={date} />
      ) : (
        <SummaryContent status={status} summaryPreview={summaryPreview ?? ""} />
      )}
    </div>
  );

  return isClickable ? (
    <Link href={`/summary/${counselId}`} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}

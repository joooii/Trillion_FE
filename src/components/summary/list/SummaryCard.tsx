import Badge from "@/components/common/Badge";
import { SummaryCardData } from "@/types/summaryList";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import ErrorContent from "@/components/summary/list/ErrorContent";
import SummaryContent from "@/components/summary/list/SummaryContent";

export default function SummaryCard({
  id,
  title,
  date,
  status,
  content,
}: SummaryCardData) {
  return (
    <Link href={`/summary/${id}`}>
      <div className="relative z-20 flex flex-col mx-auto w-[335px] min-h-[141px] rounded-[10px] shadow-card bg-white p-3 active:bg-gray-100 transition-all duration-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-text-darkgray">{title ?? "-"}</p>
            <Badge status={status} />
          </div>

          {status !== "error" && (
            <ChevronRight className="w-6 h-4 stroke-text-lightgray" />
          )}
        </div>

        <div className="flex items-center mt-[2px] mb-[10px] gap-[3px]">
          <Calendar className="w-2 h-2 stroke-text-lightgray" />
          <p className="text-[8px] text-text-lightgray">{date}</p>
        </div>

        {status === "error" ? (
          <ErrorContent />
        ) : (
          <SummaryContent status={status} content={content ?? ""} />
        )}
      </div>
    </Link>
  );
}

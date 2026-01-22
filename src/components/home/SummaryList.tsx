import { SummaryHome } from "@/types/summaryList";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Summary from "@/components/home/Summary";

const mockData: SummaryHome[] = [
  {
    id: 1,
    title: "온라인 결제 시스템 도입",
    date: "2025.07.30",
    content: "QR 코드 기반 결제 시스템 도입 희망",
  },
  {
    id: 2,
    title: "온라인 결제 시스템 도입",
    date: "2025.07.30",
    content: "QR 코드 기반 결제 시스템 도입",
  },
];

export default function SummaryList() { 
  return (
    <div className="pt-8">
      <div className="flex justify-between items-center mb-[15px] px-[29px]">
        <h2 className="text-lg font-bold text-text-darkgray">
          김소유님의 요약내용
        </h2>
        {mockData.length > 0 && (
          <Link 
            href="/summary" 
            className="text-xs text-text-lightgray hover:text-text-darkgray transition-colors"
          >
            더보기
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-[10px]">
        {mockData.map((item) => (
          <SummaryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function SummaryCard({
  id,
  title,
  date,
  content,
}: SummaryHome) {
  return (
    <Link href={`/summary/${id}`}>
      <div className="relative z-20 flex flex-col mx-auto w-[335px] min-h-[117px] rounded-[10px] shadow-card bg-white p-3 active:bg-gray-100 transition-all duration-200">
        <div className="flex justify-between items-center">
          <p className="text-text-darkgray">{title ?? "-"}</p>
          <ChevronRight className="w-6 h-4 stroke-text-lightgray" />
        </div>

        <div className="flex items-center mt-[2px] mb-[10px] gap-[3px]">
          <Calendar className="w-2 h-2 stroke-text-lightgray" />
          <p className="text-[8px] text-text-lightgray">{date}</p>
        </div>

        <Summary content={content ?? ""} />
      </div>
    </Link>
  );
}
"use client";

import { SummaryHome } from "@/types/summaryList";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Summary from "@/components/home/Summary";
import EmptyState from "@/components/home/EmptySummary";
import { useSummaryList } from "@/hooks/useSummaryList";
import ErrorContent from "@/components/summary/list/ErrorContent";

interface SummaryListProps {
  nickname: string;
}

export default function SummaryList({ nickname }: SummaryListProps) {
  const { data, isLoading, error } = useSummaryList();

  return (
    <div className="pt-8">
      <div className="flex justify-between items-center mb-[15px] px-[29px]">
        <h2 className="text-lg font-bold text-text-darkgray">
          {nickname || "김소유"}님의 요약내용
        </h2>
        {!isLoading && data.length > 0 && (
          <Link
            href="/summary"
            className="text-xs text-text-lightgray hover:text-text-darkgray transition-colors"
          >
            더보기
          </Link>
        )}
      </div>

      {isLoading ? (
        <p className="text-center text-sm text-text-lightgray py-6">
          요약 내역을 불러오는 중입니다.
        </p>
      ) : error ? (
        <p className="text-center text-sm text-text-lightgray py-6">
          요약 내역을 불러오지 못했습니다.
        </p>
      ) : data.length > 0 ? (
        <div className="flex flex-col gap-[10px]">
          {data.slice(0, 2).map((item) => (
            <SummaryCard key={item.counselId} {...item} />
          ))}
        </div>
      ) : (
        <EmptyState
          text="요약된 상담이 없습니다"
          buttonText="요약 시작하기"
          buttonLink="/chat"
        />
      )}
    </div>
  );
}

function SummaryCard({
  counselId,
  title,
  date,
  summaryPreview,
  status,
}: SummaryHome) {
  return (
    <Link href={`/summary/${counselId}`}>
      <div className="relative z-20 flex flex-col mx-auto w-[335px] min-h-[117px] rounded-[10px] shadow-card bg-white p-3 active:bg-gray-100 transition-all duration-200">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <p className="text-text-darkgray">{title ?? "-"}</p>
            <p className="text-sm text-text-lightgray">{date}</p>
          </div>
          <ChevronRight className="w-6 h-4 stroke-text-lightgray" />
        </div>
        {status === "FAILED" ? (
          <ErrorContent 
            variant="home"
            counselId={counselId} 
            title={title ?? ""} 
            date={date} 
          />
        ) : (
          <Summary summaryPreview={summaryPreview ?? ""} status={status} />
        )}
      </div>
    </Link>
  );
}

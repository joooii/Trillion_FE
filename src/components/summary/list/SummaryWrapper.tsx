"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CategorySection from "@/components/summary/list/CategorySection";
import YearSelector from "@/components/summary/list/YearSelector";
import MonthSection from "@/components/summary/list/MonthSection";
import SummaryCard from "@/components/summary/list/SummaryCard";
import { ChatCategory } from "@/types/summaryList";
import { useSummaryList } from "@/hooks/useSummaryList";
import { CATEGORY_LABEL_MAP } from "@/utils/categoryLabelUtil";
import { useCounselStatusSse } from "@/hooks/useCounselStatusSse";

export default function SummaryWrapper() {
  useCounselStatusSse(); // SSE 연결

  const { 
    data, 
    isLoading, 
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useSummaryList();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const [category, setCategory] = useState<ChatCategory>(ChatCategory.ALL);

  // 데이터 연도
  const getYear = (date?: string) => (date ? Number(date.split("-")[0]) : null);

  const initialYear = getYear(data[0]?.date) ?? new Date().getFullYear();
  const [year, setYear] = useState<number>(initialYear);

  // 데이터 월
  const getMonth = (date?: string) =>
    date ? Number(date.split("-")[1]) : null;

  let prevMonth: number | null = null;

  const selectedLabel = CATEGORY_LABEL_MAP[category];
  // 카테고리 별 데이터
  const filteredData =
    category === ChatCategory.ALL
      ? [...data]
      : data.filter((item) => item.category === selectedLabel);

  const sortedData = filteredData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const yearFilteredData = sortedData.filter(
    (item) => getYear(item.date) === year
  );

  if (isLoading) {
    return (
      <p className="text-center text-sm text-text-lightgray py-6">
        상담 내역을 불러오는 중입니다.
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-sm text-red-500 py-6">
        상담 내역을 불러오지 못했습니다.
      </p>
    );
  }

  return (
    <div className="flex flex-col w-[335px] h-[calc(100dvh-300px)] overflow-hidden">
      <div className="flex flex-col flex-none z-10"> 
        <CategorySection category={category} onChange={setCategory} />
        <YearSelector year={year} onChange={setYear} />
      </div>

    <div className="flex flex-col flex-1 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-y-3 pb-10">
        {yearFilteredData.length === 0 ? (
          <p className="text-center text-sm text-text-lightgray py-6">
            해당 연도의 상담 내역이 없습니다.
          </p>
        ) : (
          yearFilteredData.map((item) => {
            const month = getMonth(item.date);
            const showMonth = month !== prevMonth;

            if (showMonth) prevMonth = month;

            return (
              <div key={item.counselId}>
                {showMonth && month && <MonthSection month={month} />}
                <SummaryCard {...item} />
              </div>
            );
          })
        )}

        {/* 무한 스크롤 트리거 */}
        {hasNextPage && (
          <div ref={ref} className="h-10 flex justify-center items-center w-full">
              {isFetchingNextPage && <span className="text-xs text-gray-400">로딩 중...</span>}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
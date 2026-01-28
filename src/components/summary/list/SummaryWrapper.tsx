"use client";

import { useState } from "react";
import CategorySection from "@/components/summary/list/CategorySection";
import YearSelector from "@/components/summary/list/YearSelector";
import MonthSection from "@/components/summary/list/MonthSection";
import SummaryCard from "@/components/summary/list/SummaryCard";
import { ChatCategory } from "@/types/summaryList";
import { useSummaryList } from "@/hooks/useSummaryList";
import { CATEGORY_LABEL_MAP } from "@/utils/categoryLabelUtil";
import { SkeletonCard, SkeletonLine } from "@/components/common/SkeletonCard";

export default function SummaryWrapper() {
  const { data, isLoading, error } = useSummaryList();

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
      <div className="mb-8 w-[335px]">
        {/* 필터 섹션 */}
        <div className="flex flex-col">
          <CategorySection category={category} onChange={setCategory} />
          <YearSelector year={year} onChange={setYear} />
        </div>
        <div className="flex flex-col gap-y-3"></div>
        <div className="flex items-center gap-3 mb-3 mt-[30px] ">
          <SkeletonLine className="h-[30px] w-[40px] " />
          <div className="flex-1 h-px bg-secondary-800/40" />
        </div>
        <div className="flex flex-col gap-3">
          {[...Array(2)].map((_, index) => (
            <SkeletonCard
              key={index}
              className="relative z-20 flex flex-col mx-auto w-[335px] min-h-[141px]
        rounded-[10px] shadow-card p-3 transition-all duration-200 "
            >
              <SkeletonLine className="mb-4 h-[38px] " />
              <SkeletonLine className="p-[12px] h-[73px]" />
            </SkeletonCard>
          ))}
        </div>
      </div>
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
    <div className="mb-8 w-[335px]">
      <div className="flex flex-col">
        <CategorySection category={category} onChange={setCategory} />
        <YearSelector year={year} onChange={setYear} />
      </div>

      <div className="flex flex-col gap-y-3">
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
      </div>
    </div>
  );
}

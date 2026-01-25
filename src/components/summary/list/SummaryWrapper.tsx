"use client";

import { useState } from "react";
import CategorySection from "@/components/summary/list/CategorySection";
import YearSelector from "@/components/summary/list/YearSelector";
import MonthSection from "@/components/summary/list/MonthSection";
import SummaryCard from "@/components/summary/list/SummaryCard";
import { ChatCategory } from "@/types/summaryList";
import { useSummaryList } from "@/hooks/useSummaryList";

export default function SummaryWrapper() {
  const { data, isLoading, error } = useSummaryList();

  const [category, setCategory] = useState<ChatCategory>(ChatCategory.ALL);

  // 데이터 연도
  const getYear = (date?: string) => (date ? Number(date.split(".")[0]) : null);
  // FIXME: . -> - 로 데이터구조 바꾼 뒤 수정하기

  const initialYear = getYear(data[0]?.date) ?? new Date().getFullYear();
  const [year, setYear] = useState<number>(initialYear);

  // 데이터 월
  const getMonth = (date?: string) =>
    date ? Number(date.split(".")[1]) : null;
  // FIXME: . -> - 로 데이터구조 바꾼 뒤 수정하기

  let prevMonth: number | null = null;

  // 카테고리 별 데이터
  const filteredData =
    category === ChatCategory.ALL
      ? data
      : data.filter((item) => item.category === category);

  const yearFilteredData = filteredData.filter(
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

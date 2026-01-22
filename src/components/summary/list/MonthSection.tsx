"use client";

interface MonthSectionProps {
  month: number;
}

export default function MonthSection({ month }: MonthSectionProps) {
  return (
    <div className="flex items-center gap-3 mb-2 mt-[18px]">
      <p className="text-[20px] font-bold text-secondary-800">{month}월</p>
      <div className="flex-1 h-px bg-secondary-800/40" />
    </div>
  );
}

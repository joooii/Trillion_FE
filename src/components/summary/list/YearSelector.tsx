"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface YearSelectorProps {
  year: number;
  onChange: (year: number) => void;
}
export default function YearSelector({ year, onChange }: YearSelectorProps) {
  return (
    <div className="text-secondary-800 text-[26px] font-extrabold pt-[12px] pb-1 flex items-center justify-center gap-5 ">
      <button onClick={() => onChange(year - 1)}>
        <ChevronLeft className="w-[20px] h-[20px] stroke-[1.67px] stroke-secondary-700" />
      </button>
      <span className="w-[72px] text-center tabular-nums">{year}</span>
      <button onClick={() => onChange(year + 1)}>
        <ChevronRight className="w-[20px] h-[20px] stroke-[1.67px] stroke-secondary-700" />
      </button>
    </div>
  );
}

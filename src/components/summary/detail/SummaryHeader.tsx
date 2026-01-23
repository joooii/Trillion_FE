import { Calendar } from "lucide-react";
import HighlightedText from "./HighlightedText";

interface SummaryHeaderProps {
  title: string;
  date: string;
}

export default function SummaryHeader({ title, date }: SummaryHeaderProps) {
  return (
    <section className="w-[335px] min-h-[128px] bg-[#FCFAF8] p-[18px] rounded-2xl shadow-content-card mt-[20px]">
      <div className="text-text-darkgray font-bold text-lg">
        <HighlightedText text={title} />{" "}
      </div>
      <div className="flex flex-row gap-3 items-center mt-[28px]">
        <div className="bg-summary-date-gradient w-[32px] h-[32px] rounded-full flex justify-center items-center">
          <Calendar className="w-[16px] h-[16px] stroke-primary-500" />
        </div>
        <div>
          <p className="text-xs text-text-muted">상담 일시</p>
          <p className="text-text-darkgray text-sm font-bold">{date}</p>
        </div>
      </div>
    </section>
  );
}

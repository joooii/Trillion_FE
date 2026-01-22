import { Calendar } from "lucide-react";

interface SummaryContentProps {
  content: string;
}

export default function Summary({ content }: SummaryContentProps) {
  return (
    <div
      className="w-[311px] rounded-[10px] p-3 flex flex-col gap-y-2"
      style={{ background: 'var(--gradient-success-diagonal)' }}
    >
      <div className="flex items-center gap-[3px]">
        <Calendar className="w-3 h-3 stroke-primary-500" />
        <p className="text-xs font-bold text-primary-500">AI 요약</p>
      </div>
      <p className="text-sm text-white">{content}</p>
    </div>
  );
}
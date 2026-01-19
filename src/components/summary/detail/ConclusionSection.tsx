import { CircleCheck } from "lucide-react";

interface ConclusionSectionProps {
  conclusions: string[];
}

export default function ConclusionSection({
  conclusions,
}: ConclusionSectionProps) {
  return (
    <section className="max-w-[335px] p-[18px] border border-[#d7d7d7] bg-[#FCFAF8] rounded-2xl">
      <div className="flex items-center gap-3 mb-[12px]">
        <div className="w-[32px] h-[32px] rounded-[10px] bg-summary-secondary-gradient flex justify-center items-center">
          <CircleCheck className="w-[20px] h-[20px]" />
        </div>
        <p className="text-lg text-text-darkgray font-bold">결론</p>
      </div>

      <ul className="flex flex-col gap-[10px]">
        {conclusions.map((text, idx) => (
          <li
            key={idx}
            className="w-[299px] min-h-[42px] bg-[#F5F1EB] rounded-[14px] flex items-start p-[11px] gap-[10px]"
          >
            <CircleCheck className="w-[20px] h-[20px] stroke-[1.67px] stroke-primary-500 shrink-0" />
            <span className="text-sm text-text-darkgray">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

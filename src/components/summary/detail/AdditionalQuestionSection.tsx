import { AdditionalQuestion } from "@/types/summaryDetail";
import { CircleCheck, CirclePlus } from "lucide-react";
import MarkupTextRenderer from "@/components/summary/detail/MarkupTextRenderer";

interface AdditionalQuestionSectionProps {
  questions: AdditionalQuestion[];
}

export default function AdditionalQuestionSection({
  questions,
}: AdditionalQuestionSectionProps) {
  return (
    <>
      {questions.map((q, idx) => (
        <section
          key={idx}
          className="max-w-[335px] p-[18px] border border-[#d7d7d7] bg-[#FCFAF8] rounded-2xl"
        >
          <div className="flex items-start gap-3 mb-[12px]">
            <div className="w-[32px] h-[32px] rounded-[10px] bg-summary-secondary-gradient flex justify-center items-center shrink-0">
              <CirclePlus className="w-[20px] h-[20px]" />
            </div>
            <p className="text-lg text-text-darkgray font-bold pt-[2px]">
              {q.question}
            </p>
          </div>

          <ul className="flex flex-col gap-[10px]">
            {q.answer && (
              <li className="w-[299px] min-h-[42px] bg-[#F5F1EB] rounded-[14px] flex items-start p-[11px] gap-[10px]">
                <CircleCheck className="w-[20px] h-[20px] stroke-[1.67px] stroke-primary-500 shrink-0" />
                <span className="text-sm text-text-darkgray">
                  <MarkupTextRenderer content={q.answer} />
                </span>
              </li>
            )}
          </ul>
        </section>
      ))}
    </>
  );
}

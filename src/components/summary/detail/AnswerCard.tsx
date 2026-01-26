import { Answer } from "@/types/summaryDetail";
import HighlightedText from "@/components/summary/detail/HighlightedText";
import MarkupTextRenderer from "@/components/summary/detail/MarkupTextRenderer";

interface AnswerCardProps {
  answer: Answer;
}

export default function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <>
      <div className="flex items-start mb-[10px] ">
        <div className="bg-summary-secondary-gradient w-[20px] h-[20px] rounded-full flex justify-center items-center mr-[10px] flex-shrink-0">
          <p className="text-xs font-bold text-white">A</p>
        </div>
        <div className="text-text-darkgray text-sm font-bold">
          <HighlightedText text={answer.answer_summary} />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        {answer.contents.map((content, idx) => {
          if (content.type === "mark-up-text") {
            return (
              <div key={idx} className="text-xs text-text-darkgray ml-[20px]">
                <MarkupTextRenderer content={content.content} />
              </div>
            );
          }

          if (content.type === "step") {
            return (
              <ol key={idx} className="ml-[12px] flex flex-col gap-[10px]">
                {content.content.map((step) => (
                  <li
                    key={step.step}
                    className="flex items-start p-[10px] w-[247px] min-h-[33px] border border-[#eee7dd] bg-[#fffefc] rounded-[10px] gap-[10px]"
                  >
                    <span className="font-bold w-[15px] h-[15px] rounded-full border border-secondary-800 text-secondary-800 text-[8px] flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <span className="text-xs text-[#73757C]">
                      {<HighlightedText text={step.text} />}
                    </span>
                  </li>
                ))}
              </ol>
            );
          }

          if (content.type === "cards") {
            return (
              <div key={idx} className="ml-[20px] flex flex-col gap-[6px]">
                {content.content.map((card, cardIdx) => (
                  <a
                    key={cardIdx}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-xs text-secondary-600 underline underline-offset-2 transition-colors active:text-primary-500"
                  >
                    {card.card_title}
                  </a>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
}

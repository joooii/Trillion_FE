"use client";

import { Question } from "@/types/summaryDetail";
import { useState } from "react";
import AnswerCard from "@/components/summary/detail/AnswerCard";
import { ChevronDown } from "lucide-react";
import HighlightedText from "@/components/summary/detail/HighlightedText";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#f5f1eb] p-5 rounded-[14px]">
      <button
        type="button"
        className={`flex w-full items-start transition-all duration-200 ${
          isSummaryOpen ? "mb-[21px]" : "mb-0"
        }`}
        onClick={() => setIsSummaryOpen(!isSummaryOpen)}
      >
        <div className="bg-summary-primary-gradient w-[20px] h-[20px] rounded-full flex justify-center items-center mr-[10px] shrink-0">
          <p className="text-xs font-bold text-white">Q</p>
        </div>
        <div className="text-text-darkgray text-sm font-bold text-left">
          <HighlightedText text={question.question} />
        </div>
        <ChevronDown
          className={`ml-auto w-4 h-4 text-text-lightgray transition-transform duration-200 shrink-0 ${
            isSummaryOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-200 ease-out
          ${
            isSummaryOpen
              ? "max-h-[1000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-1"
          }
        `}
      >
        {question.answers.map((answer, idx) => (
          <AnswerCard key={idx} answer={answer} />
        ))}
      </div>
    </div>
  );
}

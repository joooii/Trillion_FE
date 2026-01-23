import { Topic } from "@/types/summaryDetail";
import QuestionCard from "@/components/summary/detail/QuestionCard";
import { Lightbulb } from "lucide-react";
import HighlightedText from "./HighlightedText";

interface TopicCardProps {
  topic: Topic;
  isLastTopicCard: boolean;
}

export default function TopicSection({
  topic,
  isLastTopicCard,
}: TopicCardProps) {
  return (
    <section className={isLastTopicCard ? "" : "mb-[20px]"}>
      <div className="flex items-center gap-3 mb-[10px]">
        <div className="w-[32px] h-[32px] rounded-[10px] bg-summary-primary-gradient flex justify-center items-center">
          <Lightbulb className="w-[20px] h-[20px] stroke-white stroke-[1.67px]" />
        </div>
        <div className="text-text-darkgray font-bold text-lg">
          <HighlightedText text={topic.topic_title} />
        </div>
      </div>

      {topic.questions.map((question, questionIdx) => (
        <QuestionCard key={questionIdx} question={question} />
      ))}
    </section>
  );
}

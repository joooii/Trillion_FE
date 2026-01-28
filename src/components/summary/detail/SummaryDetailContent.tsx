"use client";

import { useSummaryDetail } from "@/hooks/useSummaryDetail";
import FollowUpCard from "@/components/summary/detail/FollowUpCard";
import ConclusionSection from "@/components/summary/detail/ConclusionSection";
import SummaryHeader from "@/components/summary/detail/SummaryHeader";
import TopicSection from "@/components/summary/detail/TopicCard";
import AdditionalQuestionSection from "@/components/summary/detail/AdditionalQuestionSection";

interface SummaryDetailContentProps {
  counselId: number;
}

export default function SummaryDetailContent({
  counselId,
}: SummaryDetailContentProps) {
  const { data, isLoading, error } = useSummaryDetail(counselId);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-gray-500 text-sm">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-red-500 text-sm">
          요약을 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  if (!data || !data.summary) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-gray-500 text-sm">
        아직 요약이 생성되지 않았어요.
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col items-center gap-3 mb-8">
      <SummaryHeader
        title={data.summary.counsel_title}
        date={data.counsel_date}
      />

      <div className="w-[335px] min-h-[128px] bg-white p-[18px] rounded-2xl shadow-content-card">
        {data.summary.topics.map((topic, topicIdx) => (
          <TopicSection
            key={topicIdx}
            topic={topic}
            isLastTopicCard={topicIdx === data.summary.topics.length - 1}
          />
        ))}
      </div>

      <ConclusionSection conclusions={data.summary.conclusions} />

      {data.summary.additional_questions && (
        <AdditionalQuestionSection
          questions={data.summary.additional_questions}
        />
      )}

      <FollowUpCard counselId={counselId} />
    </div>
  );
}
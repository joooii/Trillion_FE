import FollowUpCard from "@/components/summary/detail/FollowUpCard";
import ConclusionSection from "@/components/summary/detail/ConclusionSection";
import SummaryHeader from "@/components/summary/detail/SummaryHeader";
import TopicSection from "@/components/summary/detail/TopicCard";
import { getSummaryDetailApi } from "@/lib/api/summaryDetail";
import AdditionalQuestionSection from "@/components/summary/detail/AdditionalQuestionSection";

export default async function SummaryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const counselId = Number(resolvedParams.id);

  if (Number.isNaN(counselId)) {
    throw new Error("Invalid counselId");
  }

  const data = await getSummaryDetailApi(counselId);

  if (!data || !data.summary) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-gray-500 text-sm">
        아직 요약이 생성되지 않았어요.
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col items-center gap-3 mb-8">
      {/* 제목, 일자 */}
      <SummaryHeader
        title={data.summary.counsel_title}
        date={data.counsel_date}
      />

      {/* topic 별 card section */}
      <div className="w-[335px] min-h-[128px] bg-white p-[18px] rounded-2xl shadow-content-card">
        {data.summary.topics.map((topic, topicIdx) => (
          <TopicSection
            key={topicIdx}
            topic={topic}
            isLastTopicCard={topicIdx === data.summary.topics.length - 1}
          />
        ))}
      </div>
      {/* 결론 */}
      <ConclusionSection conclusions={data.summary.conclusions} />

      {/* 추가 질문 */}
      {data.summary.additional_questions && (
        <AdditionalQuestionSection
          questions={data.summary.additional_questions}
        />
      )}

      {/* 추가 질문 */}
      <FollowUpCard counselId={counselId} />
    </div>
  );
}

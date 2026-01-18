import AiInfoCard from "@/components/summary/detail/AiInfoCard";
import ConclusionSectionProps from "@/components/summary/detail/ConclusionSection";
import SummaryHeader from "@/components/summary/detail/SummaryHeader";
import TopicSection from "@/components/summary/detail/TopicCard";
import { SummaryDetail } from "@/types/summaryDetail";

const mockData: SummaryDetail = {
  counsel_id: 1,
  counsel_date: "2026-01-10",
  summary: {
    counsel_title:
      "온라인 결제 시스템 도입 상담온라인 결제 시스템 도입 상담온라인 결제 시스템 도입 상담",
    topics: [
      {
        topic_title: "Topic 1",
        questions: [
          {
            question: "요금제 문의",
            answers: [
              {
                answer_summary: "요금제 변경 방법 안내",
                contents: [
                  {
                    type: "mark-up-text",
                    content:
                      "요금제 변경은 홈페이지에서 직접 진행하실 수 있습니다.",
                  },
                  {
                    type: "step",
                    content: [
                      {
                        order: 1,
                        text: "홈페이지를 들어가세요홈페이지를 들어가세요홈페이지를 들어가세요홈페이지를 들어가세요홈페이지를 들어가세요홈페이지를 들어가세요",
                      },
                      { order: 2, text: "마이페이지로 이동하세요" },
                      { order: 3, text: "요금제 변경 메뉴를 선택하세요" },
                    ],
                  },
                  {
                    type: "cards",
                    content: [
                      {
                        card_title: "요금제 변경 안내 페이지",
                        url: "https://example.com",
                      },
                      {
                        card_title: "요금제 변경 안내 페이지",
                        url: "https://example.com",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        topic_title: "Topic 2",
        questions: [
          {
            question: "요금제 문의",
            answers: [
              {
                answer_summary: "요금제 변경 절차 요약",
                contents: [
                  {
                    type: "mark-up-text",
                    content: "현재 사용 중인 요금제는 언제든 변경 가능합니다.",
                  },
                  {
                    type: "step",
                    content: [
                      { order: 1, text: "test1" },
                      { order: 2, text: "test2" },
                      { order: 3, text: "test3" },
                    ],
                  },
                  {
                    type: "mark-up-text",
                    content: "현재 사용 중인 요금제는 언제든 변경 가능합니다.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusions: [
      "요금제 변경은 온라인에서 간편하게 가능합니다.",
      "필요 시 고객센터를 통해 추가 상담을 받을 수 있습니다.",
      "필요 시 고객센터를 통해~",
    ],
  },
};

export default function SummaryDetailPage() {
  // 추후 api 값으로 변경
  const { counsel_date, summary } = mockData;

  return (
    <div className="flex justify-center flex-col items-center gap-3 mb-8">
      {/* 제목, 일자 */}
      <SummaryHeader title={summary.counsel_title} date={counsel_date} />

      {/* topic 별 card section */}
      <div className="w-[335px] min-h-[128px] bg-white p-[18px] rounded-2xl shadow-content-card">
        {summary.topics.map((topic, topicIdx) => (
          <TopicSection
            key={topicIdx}
            topic={topic}
            isLastTopicCard={topicIdx === summary.topics.length - 1}
          />
        ))}
      </div>
      {/* 결론 */}
      <ConclusionSectionProps conclusions={summary.conclusions} />

      {/* ai 요약 정보 */}
      <AiInfoCard />
    </div>
  );
}

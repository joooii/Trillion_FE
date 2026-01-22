import AiInfoCard from "@/components/summary/detail/AiInfoCard";
import ConclusionSection from "@/components/summary/detail/ConclusionSection";
import SummaryHeader from "@/components/summary/detail/SummaryHeader";
import { TermPopover } from "@/components/summary/detail/TermPopover";
import TopicSection from "@/components/summary/detail/TopicCard";
import { SummaryDetail } from "@/types/summaryDetail";

const mockData: SummaryDetail = {
  counsel_id: 1,
  counsel_date: "2026-01-10",
  summary: {
    counsel_title:
      "유럽 3개국 방문 예정 고객 대상 {{해외로밍::해외에서도 내 휴대폰 번호를 그대로 사용할 수 있는 서비스}} 가입 상담",
    topics: [
      {
        topic_title: "로밍 요금제 추천 및 가입",
        questions: [
          {
            question:
              "이탈리아, 스위스, 벨기에 10일 여행 시 적합한 데이터 중심 요금제를 알려주세요.",
            answers: [
              {
                answer_summary:
                  "장기 여행 고객의 데이터 사용 패턴에 맞춰 로밍패스 25GB 상품을 등록해 드렸습니다.",
                contents: [
                  {
                    type: "mark-up-text",
                    content:
                      "상담을 통해 고객님의 데이터 사용량이 많고 음성 통화 비중이 낮은 점을 고려하여, 공항 및 고객센터 가입 전용 상품인 '로밍패스 25GB'를 추천하고 예약을 도와드렸습니다.",
                  },
                  {
                    type: "cards",
                    content: [
                      {
                        card_title: "로밍패스 25GB",
                        url: "https://www.lguplus.com/plan/roaming/term/LRZ1001823",
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
        topic_title: "상세 혜택 및 이용 주의사항",
        questions: [
          {
            question: "데이터 소진 후 속도와 음성/문자 요금은 어떻게 되나요?",
            answers: [
              {
                answer_summary:
                  "기본 데이터 소진 시 속도가 제어되며, 음성 및 문자는 별도 과금됩니다.",
                contents: [
                  {
                    type: "mark-up-text",
                    content:
                      "기본 제공 데이터를 모두 사용한 후에는 {{QoS 적용::데이터 속도 제한 적용. 요금제 기본 제공 데이터를 다 써도 제한된 속도로 계속 데이터 사용 가능}}에 따라 400kbps 속도로 계속 이용하실 수 있습니다. 본 요금제는 데이터 중심 상품으로, 음성 발신/수신 및 문자 발송 시에는 로밍 요율에 따른 별도의 {{통신료::휴대폰, 인터넷, IPTV 등 통신 서비스 이용 요금}}가 발생하므로 주의가 필요합니다.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        topic_title: "기기 설정 안내",
        questions: [
          {
            question: "아이폰을 사용 중인데 현지에서 어떻게 설정해야 하나요?",
            answers: [
              {
                answer_summary:
                  "아이폰 내 셀룰러 메뉴에서 로밍 설정을 활성화해야 합니다.",
                contents: [
                  {
                    type: "step",
                    content: [
                      { order: 1, text: "아이폰의 [설정] 앱을 실행합니다." },
                      { order: 2, text: "[셀룰러] 메뉴를 선택합니다." },
                      {
                        order: 3,
                        text: "[셀룰러 데이터 옵션]에서 [데이터 로밍]을 'ON'으로 변경합니다.",
                      },
                      {
                        order: 4,
                        text: "네트워크 자동 선택 기능이 'ON' 상태인지 확인합니다.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    conclusions: [
      "로밍패스 25GB 요금제가 한국 시간 기준 출국 시각에 맞춰 예약 등록되었습니다.",
      "상세 설정 방법과 유의사항이 담긴 안내 문자가 고객님께 발송되었습니다.",
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
      <ConclusionSection conclusions={summary.conclusions} />

      {/* ai 요약 정보 */}
      <AiInfoCard />
    </div>
  );
}

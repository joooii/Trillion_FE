import ChatActionButtons from "@/components/chat/ChatActionButtons";
import mockChatData from "@/mock/mockChatData.json";

interface ChatDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChatDetailPage({ params }: ChatDetailPageProps) {
  const { id } = await params;

  const mockData = mockChatData.find((chat) => String(chat.id) === id);

  if (!mockData) {
    return <div className="mt-[32px]">존재하지 않는 채팅입니다.</div>;
  }

  const formattedChat = mockData.messages
    .map((msg) => `${msg.speaker}: ${msg.message}`)
    .join("\n");

  const safeDate = (dateString?: string) => {
    if (!dateString) return new Date().toISOString().split("T")[0];
    return new Date(dateString).toISOString().split("T")[0];
  };

  const requestData = {
    counselId: undefined,
    title: mockData.title || `상담 ID: ${id} 요약`,
    date: safeDate(mockData.createdAt),
    chat: formattedChat,
  };

  return (
    <div className="mt-[32px] h-[549px]">
      <div className="h-full overflow-y-auto flex flex-col gap-4 pr-2">
        {mockData.messages.map((msg, idx) => {
          const isAgent = msg.speaker === "상담사";
          const prevSpeaker = mockData.messages[idx - 1]?.speaker;
          const showAgentName = isAgent && prevSpeaker !== "상담사";

          return (
            <div
              key={idx}
              className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
            >
              {isAgent ? (
                <div className="flex flex-col">
                  {showAgentName && (
                    <p className="font-semibold text-sm text-[#0D082C] mb-[5px]">
                      상담사
                    </p>
                  )}
                  <div className="p-[10px] max-w-[285px] min-h-[34px] rounded-[14px] rounded-tl-none bg-secondary-100 text-[12px] text-text-darkgray">
                    {msg.message}
                  </div>
                </div>
              ) : (
                <div className="p-[10px] max-w-[285px] min-h-[34px] rounded-[14px] rounded-tr-none bg-primary-100 text-[12px] text-text-darkgray">
                  {msg.message}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 border border-text-muted/50 scale-y-50 origin-top"></div>

      <ChatActionButtons requestData={requestData} />
    </div>
  );
}

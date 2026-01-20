import type { Metadata } from "next";
import ChatInputContainer from "@/components/chat/ChatInputContainer";
import ChatActionButtons from "@/components/chat/ChatActionButtons";

export const metadata: Metadata = {
  title: "채팅",
};

export default function ChatPage() {
  return (
    <div className="pt-[96px] flex flex-col items-center">
      {/* 네모 박스 */}
      <ChatInputContainer />
      {/* 취소, 요약 시작 버튼 */}
      <ChatActionButtons />
    </div>
  );
}

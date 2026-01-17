import type { Metadata } from "next";
import ChatInputContainer from "@/components/chat/ChatInputContainer";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "채팅",
};

export default function ChatPage() {
  return (
    <div className="pt-[96px] flex flex-col items-center">
      {/* 네모 박스 */}
      <ChatInputContainer />
      {/* 버튼 */}
      <div className="mt-4 flex flex-row">
        <Button
          size="small"
          className="text-secondary-800 bg-white mr-[11px] active:bg-primary-50"
        >
          취소
        </Button>
        <Button size="small" className="">
          요약 시작
        </Button>
      </div>
    </div>
  );
}

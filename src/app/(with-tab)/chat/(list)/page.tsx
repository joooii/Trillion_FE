import ChatListWrapper from "@/components/home/ChatListWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 내역",
};

export default function ChatPage() {
  return (
    <div className="w-full flex justify-center">
      <ChatListWrapper />
    </div>
  );
}

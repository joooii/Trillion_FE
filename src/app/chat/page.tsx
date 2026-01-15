import type { Metadata } from "next";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "채팅",
};

export default function ChatPage() {
  return (
    <div className="p-6">
      <Header back text="상담 요약"/>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-text-lightgray">채팅 페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}
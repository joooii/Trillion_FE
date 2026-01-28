import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import mockData from "@/mock/mockChatData.json";

export const metadata: Metadata = {
  title: "상담 내역",
};

export default function ChatPage() {
  return (
    <div className="flex flex-col items-center gap-y-3">
      {mockData.map((chat) => (
        <Link key={chat.id} href={`/chat/${chat.id}`}>
          <div className="flex items-center justify-between w-[335px] min-h-[70px] bg-white rounded-[10px] shadow-card px-[16px] py-[17px]">
            <div>
              <p className="text-text-darkgray text-[16px] pb-[4px]">
                {chat.title}
              </p>
              <p className="text-[10px] text-text-lightgray">
                {chat.createdAt}
              </p>
            </div>
            <ChevronRight className="w-[24px] h-[24px] text-text-lightgray flex items-center" />
          </div>
        </Link>
      ))}
    </div>
  );
}

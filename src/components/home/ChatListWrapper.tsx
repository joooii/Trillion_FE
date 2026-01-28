"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useChatList } from "@/hooks/useChatList";

export default function ChatListWrapper() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useChatList();
  
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading && data.length === 0) {
    return <div className="py-10 text-gray-500 text-center">로딩 중...</div>;
  }

  if (!isLoading && data.length === 0) {
    return <div className="py-10 text-gray-500 text-center">상담 내역이 없습니다.</div>;
  }

  return (
    <div className="flex flex-col items-center gap-y-3 pb-10">
      {data.map((chat) => (
        <Link key={chat.id} href={`/chat/${chat.id}`}>
          <div className="flex items-center justify-between w-[335px] min-h-[70px] bg-white rounded-[10px] shadow-card px-[16px] py-[20px] active:bg-gray-50 transition-colors">
            <div>
              <p className="text-text-darkgray text-[16px]">{chat.title}</p>
              <p className="text-[10px] text-text-lightgray">
                {chat.createdAt}
              </p>
            </div>
            <ChevronRight className="w-[24px] h-[24px] text-text-lightgray flex items-center" />
          </div>
        </Link>
      ))}

      <div ref={ref} className="h-4 w-full flex justify-center items-center">
        {isFetchingNextPage && (
          <span className="text-xs text-text-lightgray">더 불러오는 중...</span>
        )}
      </div>
    </div>
  );
}
import { useInfiniteQuery } from "@tanstack/react-query";
import mockData from "@/mock/mockChatData.json";

export interface ChatData {
  id: number;
  title: string;
  createdAt: string;
}

const fetchMockChats = async ({ pageParam = 0 }: { pageParam: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const limit = 7;
  const slicedData = mockData.slice(pageParam, pageParam + limit);
  const hasNext = pageParam + limit < mockData.length;

  return {
    content: slicedData,
    nextCursor: hasNext ? pageParam + limit : undefined,
  };
};

export function useChatList() {
  const query = useInfiniteQuery({
    queryKey: ["chatList"],
    initialPageParam: 0,
    queryFn: ({ pageParam }) => fetchMockChats({ pageParam: pageParam as number }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return {
    data: query.data ? query.data.pages.flatMap((page) => page.content) : [],
    isLoading: query.isLoading,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
  };
}
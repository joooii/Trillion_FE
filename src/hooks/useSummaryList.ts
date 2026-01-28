import { summaryListApi } from "@/lib/api/summaryList";
import { queryKeys } from "@/lib/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useSummaryList() {
  const query = useInfiniteQuery({
    queryKey: queryKeys.summary.list(),
    queryFn: ({ pageParam }) => summaryListApi.getInfiniteList(pageParam, 3), 
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursorId : undefined;
    },
    staleTime: 60 * 1000, // 1분
    gcTime: 5 * 60 * 1000, // 5분
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    data: query.data?.pages.flatMap((page) => page.content) ?? [],
    isLoading: query.isLoading,
    isFetchingNextPage: query.isFetchingNextPage,
    hasNextPage: query.hasNextPage,
    fetchNextPage: query.fetchNextPage,
    error: query.error instanceof Error ? query.error.message : null,
    refetch: query.refetch,
  };
}

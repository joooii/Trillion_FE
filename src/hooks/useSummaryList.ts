import { summaryListApi } from "@/lib/api/summaryList";
import { queryKeys } from "@/lib/queryKeys";
import { SummaryCardData } from "@/types/summaryList";
import { useQuery } from "@tanstack/react-query";

export function useSummaryList() {
  const query = useQuery<SummaryCardData[]>({
    queryKey: queryKeys.summary.list(),
    queryFn: summaryListApi.getSummaryList,
    staleTime: 60 * 1000, // 1분
    gcTime: 5 * 60 * 1000, // 5분
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    data: query.data ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error instanceof Error ? query.error.message : null,
    refetch: query.refetch,
  };
}

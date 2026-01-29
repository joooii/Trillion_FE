"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { getSummaryDetailApi } from "@/lib/api/summaryDetail";

export function useSummaryDetail(counselId: number) {
  return useQuery({
    queryKey: queryKeys.summary.detail(counselId),
    queryFn: () => getSummaryDetailApi(counselId),
    enabled: !!counselId && !Number.isNaN(counselId),
  });
}

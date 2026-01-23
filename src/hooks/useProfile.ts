"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { userApi } from "@/lib/api/user";

export function useUserProfile() {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: queryKeys.user.profile(),
    queryFn: userApi.getProfile,
    staleTime: 60 * 5 * 1000, // 5분
    gcTime: 60 * 10 * 1000, // 10분
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    nickname: data?.nickname || "",
    isLoading,
    isFetching,
    error: error?.message || null,
    refetch,
  };
}
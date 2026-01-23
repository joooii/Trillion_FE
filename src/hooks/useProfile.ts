"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { userApi } from "@/lib/api/user";

export function useUserProfile() {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: queryKeys.user.profile(),
    queryFn: userApi.getProfile,
    staleTime: 1 * 1000, // 1초
    gcTime: 60 * 1000, // 60초
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    nickname: data?.nickname || "",
    email: data?.email,
    isLoading,
    isFetching,
    error: error?.message || null,
    refetch,
  };
}
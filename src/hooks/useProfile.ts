// hooks/useProfile.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { userApi } from "@/lib/api/user";

export function useUserProfile() {
  console.log("🟡🟡🟡 useUserProfile 호출");

  const result = useQuery({
    queryKey: queryKeys.user.profile(),
    queryFn: async () => {
      console.log("⚡⚡⚡ queryFn 실행!");
      return await userApi.getProfile();
    },
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    retry: false,
  });

  console.log("🟡 useQuery 결과:", {
    data: result.data?.nickname,
    isLoading: result.isLoading,
    status: result.status
  });

  return {
    nickname: result.data?.nickname || "",
    email: result.data?.email,
    isLoading: result.isLoading,
    isFetching: result.isFetching,
    error: result.error?.message || null,
    refetch: result.refetch,
  };
}

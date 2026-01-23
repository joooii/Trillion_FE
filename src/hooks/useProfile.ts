"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { userApi } from "@/lib/api/user";

export function useUserProfile() {
  const {
    data,
    isLoading,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: queryKeys.user.profile(),
    queryFn: userApi.getProfile,
    staleTime: 1 * 1000, // 1초 (max-age=1과 매칭)
    gcTime: 60 * 1000, // 60초 (1 + 59 = 60초)
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

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.updateProfile,
    onMutate: async (newProfile) => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.user.profile(),
      });

      const previousProfile = queryClient.getQueryData(queryKeys.user.profile());

      queryClient.setQueryData(queryKeys.user.profile(), newProfile);

      return { previousProfile };
    },
    onError: (err, newProfile, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(
          queryKeys.user.profile(),
          context.previousProfile
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.profile(),
      });
    },
  });
}
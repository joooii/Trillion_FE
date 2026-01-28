"use client";

import { postCounselSummary } from "@/lib/api/summary";
import { queryKeys } from "@/lib/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCreateSummary() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCounselSummary,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.summary.list() });
      router.push("/summary");
    },
  });
}

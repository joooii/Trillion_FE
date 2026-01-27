"use client";

import { postCounselSummary } from "@/lib/api/summary"; 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCreateSummary() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCounselSummary,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["summary-list"] });
      router.push("/summary"); 
      router.refresh();
    },
  });
}
import { postAdditionalQuestion } from "@/lib/api/additionalQuestion";
import { queryKeys } from "@/lib/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AdditionalQuestionParams {
  counselId: number;
}
export function useAdditionalQuestion({ counselId }: AdditionalQuestionParams) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (question: string) =>
      postAdditionalQuestion({ counselId, question }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.summary.detail(counselId),
      });
    },
  });
}

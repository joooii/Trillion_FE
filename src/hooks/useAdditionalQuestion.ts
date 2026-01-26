import { postAdditionalQuestion } from "@/lib/api/additionalQuestion";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface AdditionalQuestionParams {
  counselId: number;
}
export function useAdditionalQuestion({ counselId }: AdditionalQuestionParams) {
  const router = useRouter();
  return useMutation({
    mutationFn: (question: string) =>
      postAdditionalQuestion({ counselId, question }),
    onSuccess: () => {
      router.refresh();
    },
  });
}

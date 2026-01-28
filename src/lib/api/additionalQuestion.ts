import { ApiResponse } from "@/types/api";
import { AdditionalQuestion } from "@/types/summaryDetail";
import { fetchWithAuth } from "@/lib/api/fetchAuth";


interface PostAdditionalQuestionParams {
  counselId: number;
  question: string;
}

export const postAdditionalQuestion = async ({
  counselId,
  question,
}: PostAdditionalQuestionParams): Promise<AdditionalQuestion> => {
  const response = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/api/counsels/${counselId}/question`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    }
  );

  if (!response.ok) {
    throw new Error("추가 질문 전송에 실패했습니다.");
  }
  const result: ApiResponse<AdditionalQuestion> = await response.json();
  return result.data;
};

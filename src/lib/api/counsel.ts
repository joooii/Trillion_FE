import { CounselCreateRequest, CounselCreateResponse } from '../../types/counsel';
import { fetchWithAuth } from "@/lib/api/fetchAuth";

export const postCounselSummary = async (
  payload: CounselCreateRequest
): Promise<CounselCreateResponse> => {
  const response = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/api/counsels/summary`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error("상담 요약 생성에 실패했습니다.");
  }

  return response.json();
}; 
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

export const getCounselDetail = async (counselId: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/counsels/${counselId}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`상세 조회 실패: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};
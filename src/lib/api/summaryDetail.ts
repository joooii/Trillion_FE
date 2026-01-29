import { ApiResponse } from "@/types/api";
import { SummaryDetail, SummaryDetailApi } from "@/types/summaryDetail";
import { fetchWithAuth } from "@/lib/api/fetchAuth";

export async function getSummaryDetailApi(
  counselId: number
): Promise<SummaryDetail | null> {
  const response = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/api/counsels/${counselId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error(`상세 요약 조회 실패 (status: ${response.status})`);
  }

  const result: ApiResponse<SummaryDetailApi> = await response.json();
  const summaryJson = result.data.summaryJson;

  if (!summaryJson?.data?.summary) {
    console.error(`getSummaryDetailApi summary is null`, {
      counselId,
      summaryJson,
    });
    return null;
  }

  return {
    counsel_id: result.data.counselId,
    counsel_date: result.data.counselDate,
    summary: summaryJson?.data?.summary ?? null,
    chat: result.data.chat,
  };
}

import { ApiResponse } from "@/types/api";
import { SummaryDetail, SummaryDetailApi } from "@/types/summaryDetail";
import { cookies } from "next/headers";

export async function getSummaryDetailApi(
  counselId: number
): Promise<SummaryDetail | null> {
  // cookie 헤더에 담아서 api 요청
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/counsels/${counselId}`,
      {
        headers: {
          Cookie: cookieHeader,
        },
        next: {
          revalidate: 60,
          tags: [`summary-${counselId}`],
        },
      }
    );

    if (!response.ok) {
      console.error("API status:", response.status);
      throw new Error("상담 요약 상세 내용을 불러올 수 없습니다");
    }

    const result: ApiResponse<SummaryDetailApi> = await response.json();
    const summaryJson = result.data.summaryJson;

    if (!summaryJson?.data?.summary) {
      console.error(`getSummaryDetailApi summary is null`, {
        counselId,
        summaryJson,
      });
    }
    return {
      counsel_id: result.data.counselId,
      counsel_date: result.data.counselDate,
      summary: summaryJson?.data?.summary ?? null,
    };
  } catch (error) {
    console.error("getSummaryDetailApi 요청 에러", { counselId, error });
  }
  return null;
}

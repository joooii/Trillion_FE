import { ApiResponse } from "@/types/api";
import { SummaryCardData, CounselCursorResponse } from "@/types/summaryList";
import { fetchWithAuth } from "@/lib/api/fetchAuth";

export const summaryListApi = {
  getSummaryList: async (): Promise<SummaryCardData[]> => {
    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/api/counsels`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Cache-Control": "max-age=1, stale-while-revalidate=59",
        },
      }
    );

    if (!response.ok) {
      throw new Error("상담 요약 목록을 불러올 수 없습니다");
    }

    const result: ApiResponse<{
      content: SummaryCardData[];
    }> = await response.json();

    if (!result.data || !Array.isArray(result.data.content)) {
      throw new Error("요약 데이터 형식이 올바르지 않습니다");
    }

    return result.data.content;
  },

  getInfiniteList: async (
    cursorId?: number,
    size: number = 3
  ): Promise<CounselCursorResponse> => {
    const params = new URLSearchParams();
    params.append("size", size.toString());
    if (cursorId) {
      params.append("cursorId", cursorId.toString());
    }

    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/api/counsels?${params.toString()}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    if (!response.ok) {
      throw new Error("상담 요약 목록을 불러올 수 없습니다");
    }

    const result: ApiResponse<CounselCursorResponse> = await response.json();

    if (!result.data) {
      throw new Error("데이터가 없습니다.");
    }

    return result.data;
  },
};

import { ApiResponse } from "@/types/api";
import { SummaryCardData } from "@/types/summaryList";

export const summaryListApi = {
  getSummaryList: async (): Promise<SummaryCardData[]> => {
    const response = await fetch(
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

    const result: ApiResponse<SummaryCardData[]> = await response.json();

    if (!Array.isArray(result.data)) {
      throw new Error("요약 데이터 형식이 올바르지 않습니다");
    }
    return result.data;
  },
};

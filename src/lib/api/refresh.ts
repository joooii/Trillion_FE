import { RefreshResponse } from "@/types/api";

export const refreshApi = {
  refresh: async (): Promise<void> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("토큰 갱신 실패");
    }

    const result: RefreshResponse = await response.json();
    
    if (!result.success) {
      throw new Error(result.message);
    }
    },
};
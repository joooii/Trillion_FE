import { ApiResponse } from "@/types/api";

interface UserProfile {
  nickname: string;
}

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/profile`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Cache-Control": "max-age=1, stale-while-revalidate=59",
        },
      }
    );

    if (!response.ok) {
      throw new Error("프로필 정보를 불러올 수 없습니다");
    }

    const result: ApiResponse<UserProfile> = await response.json();

    if (!result.data?.nickname) {
      throw new Error("닉네임 정보가 없습니다");
    }

    return result.data;
  },
};

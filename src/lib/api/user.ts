import { fetchWithAuth } from "@/lib/api/fetchAuth";
import { ApiResponse } from "@/types/api";

interface UserProfile {
  nickname: string;
  email?: string;
}

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/profile`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`프로필 로드 실패: ${response.status}`);
    }

    const result: ApiResponse<UserProfile> = await response.json();

    if (!result.data?.nickname) {
      throw new Error("닉네임 정보가 없습니다");
    }

    return result.data;
  },
};

// lib/api/user.ts
import { fetchWithAuth } from "./fetchAuth";

interface UserProfile {
  nickname: string;
  email?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    console.log("🔵 userApi.getProfile 시작");

    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/profile`,
      {
        method: "GET",
      }
    );

    console.log("🔵 response.ok:", response.ok, "status:", response.status);

    if (!response.ok) {
      throw new Error(`프로필 로드 실패: ${response.status}`);
    }

    const result: ApiResponse<UserProfile> = await response.json();

    if (!result.data?.nickname) {
      throw new Error("닉네임 정보가 없습니다");
    }

    console.log("✅ 프로필 로드:", result.data.nickname);
    return result.data;
  },
};
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

  updateProfile: async (data: { nickname: string }): Promise<UserProfile> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/profile`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("프로필 업데이트에 실패했습니다");
    }

    const result: ApiResponse<UserProfile> = await response.json();
    return result.data;
  },
};
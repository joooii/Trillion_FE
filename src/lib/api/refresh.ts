interface RefreshResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export const refreshApi = {
  refresh: async (): Promise<void> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`토큰 갱신 실패: ${response.status} - ${errorText}`);
      }

      const result: RefreshResponse = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }
    } catch (error) {
      throw error;
    }
  },
};

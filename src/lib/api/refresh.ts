// lib/api/refresh.ts
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
    console.log("🔄🔄🔄 refreshApi.refresh 호출");
    
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      console.log("📡 Refresh 응답 상태:", response.status);
      console.log("📡 Refresh 응답 ok:", response.ok);

      // 응답 헤더 확인
      console.log("📋 Refresh 응답 헤더:");
      response.headers.forEach((value, key) => {
        console.log(`  ${key}: ${value}`);
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Refresh 실패 응답:", errorText);
        throw new Error(`토큰 갱신 실패: ${response.status} - ${errorText}`);
      }

      const result: RefreshResponse = await response.json();
      console.log("📦 Refresh 응답 데이터:", result);
      
      if (!result.success) {
        throw new Error(result.message);
      }

      console.log("✅ Refresh 성공:", result.message);
      console.log("✅ 새 accessToken:", result.data.accessToken.substring(0, 20) + "...");
      console.log("✅ 새 refreshToken:", result.data.refreshToken.substring(0, 20) + "...");
    } catch (error) {
      console.error("💥 Refresh 예외 발생:", error);
      throw error;
    }
  },
};
import { fetchWithAuth } from "@/lib/api/fetchAuth";

export async function postLogoutApi() {
  const response = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("로그아웃에 실패했습니다.");
  }
}

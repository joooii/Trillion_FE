import { fetchWithAuth } from "@/lib/api/fetchAuth";

export async function postWithdrawApi() {
  const response = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/withdraw`,
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("회원 탈퇴에 실패했습니다.");
  }
}

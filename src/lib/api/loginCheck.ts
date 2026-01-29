export async function postLoginCheckApi() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/auth/logincheck`,
    {
      method: "POST",
      credentials: "include", // 쿠키 자동 전송
    }
  );
  if (!response.ok) {
    throw new Error("회원가입에 실패했습니다.");
  }
}

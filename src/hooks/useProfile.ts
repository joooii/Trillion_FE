"use client";

import { useEffect, useState } from "react";

interface UserProfile {
  nickname: string;
  email?: string;
}

export function useUserProfile() {
  const [nickname, setNickname] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/member/profile`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          const result = await response.json();
          if (result.data?.nickname) {
            setNickname(result.data.nickname);
          }
        } else {
          setError("프로필 정보를 불러올 수 없습니다");
        }
      } catch (err) {
        setError("네트워크 오류가 발생했습니다");
        console.error("프로필 조회 실패:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { nickname, isLoading, error };
}
import { refreshApi } from "./refresh";

let isRefreshing = false;
let refreshSubscribers: ((error?: Error) => void)[] = [];

function onRefreshed(error?: Error) {
  refreshSubscribers.forEach((callback) => callback(error));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (error?: Error) => void) {
  refreshSubscribers.push(callback);
}

/**
 * 인증이 필요한 API 호출용 fetch wrapper
 * - 자동으로 쿠키 전송 (credentials: "include")
 * - 401 에러 시 자동 토큰 갱신 후 재시도
 * - 동시 요청 시 중복 갱신 방지
 */
export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // 1. credentials: "include" 강제 추가 (쿠키 자동 전송)
  const fetchOptions: RequestInit = {
    ...options,
    credentials: "include",
  };

  let response = await fetch(url, fetchOptions);

  if (response.status !== 401) {
    return response;
  }

  console.log("401 에러-토큰 갱신");

  // 4. 이미 다른 요청이 갱신 중이면 대기
  if (isRefreshing) {
    console.log("토큰 갱신 대기 중");
    return new Promise((resolve, reject) => {
      addRefreshSubscriber((error) => {
        if (error) {
          reject(error);
        } else {
          console.log("토큰 갱신-요청 재시도");
          fetch(url, fetchOptions).then(resolve).catch(reject);
        }
      });
    });
  }

  // 5. 토큰 갱신 시작
  isRefreshing = true;

  try {
    console.log("Refresh API");
    await refreshApi.refresh();
    console.log("토큰 갱신 성공");

    onRefreshed();

    console.log("원래 요청 재시도");
    response = await fetch(url, fetchOptions);

    return response;
  } catch (error) {
    console.error("토큰 갱신 실패 - 로그인 필요");

    onRefreshed(error as Error);

    if (typeof window !== "undefined") {
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      window.location.href = "/onboard";
    }
    
    throw error;
  } finally {
    isRefreshing = false;
  }
}
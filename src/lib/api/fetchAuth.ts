import { refreshApi } from "./refresh";

let isRefreshing = false;
let refreshSubscribers: Array<(error?: Error) => void> = [];

function onRefreshed(error?: Error) {
  refreshSubscribers.forEach((callback) => callback(error));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (error?: Error) => void) {
  refreshSubscribers.push(callback);
}

export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  console.log("fetchWithAuth 시작:", url);

  const config: RequestInit = {
    ...options,
    credentials: "include",
  };

  let response = await fetch(url, config);
  
  if (response.status !== 401) {
    console.log("정상 응답 반환");
    return response;
  }

  console.log("401 감지!");

  if (isRefreshing) {
    console.log("다른 요청이 갱신 중 - 대기");
    return new Promise((resolve, reject) => {
      addRefreshSubscriber((error) => {
        if (error) {
          reject(error);
        } else {
          console.log("갱신 완료 - 재시도");
          fetch(url, config).then(resolve).catch(reject);
        }
      });
    });
  }

  console.log("토큰 갱신 시작");
  isRefreshing = true;

  try {
    await refreshApi.refresh();

    onRefreshed();
    await new Promise(resolve => setTimeout(resolve, 100));


    response = await fetch(url, config);
    
    if (!response.ok) {
      console.error("재시도도 실패:", response.status);
    }

    return response;
  } catch (error) {

    onRefreshed(error as Error);

    if (typeof window !== "undefined") {
      console.error("세션이 만료되었습니다. 다시 로그인해주세요.");
      //window.location.href = "/onboard";
    }

    throw error;
  } finally {
    isRefreshing = false;
  }
}
import { refreshApi } from "@/lib/api/refresh";

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
  const config: RequestInit = {
    ...options,
    credentials: "include",
  };

  let response = await fetch(url, config);

  if (response.status !== 401) {
    return response;
  }

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      addRefreshSubscriber((error) => {
        if (error) {
          reject(error);
        } else {
          fetch(url, config).then(resolve).catch(reject);
        }
      });
    });
  }

  isRefreshing = true;

  try {
    await refreshApi.refresh();

    onRefreshed();
    await new Promise((resolve) => setTimeout(resolve, 100));

    response = await fetch(url, config);

    if (!response.ok) {
      throw new Error("Token 재발급에 실패했습니다.");
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

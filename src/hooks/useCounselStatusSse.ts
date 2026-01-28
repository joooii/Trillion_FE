"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";

export function useCounselStatusSse() {
  const queryClient = useQueryClient();

  useEffect(() => {
    let es: EventSource | null = null;

    try {
      es = new EventSource(
        `${process.env.NEXT_PUBLIC_API_URL}/api/counsels/sse/stream`,
        { withCredentials: true }
      );

      // status 변경 이벤트 처리
      es.addEventListener("COUNSEL_STATUS_CHANGED", (event) => {
        queryClient.invalidateQueries({
          queryKey: queryKeys.summary.list(),
        });
      });

      es.addEventListener("ERROR", () => {
        es?.close();
      });
    } catch (error) {
      console.error("EventSource 생성 실패:", error);
    }

    return () => {
      if (es) {
        es.close();
      }
    };
  }, [queryClient]);
}

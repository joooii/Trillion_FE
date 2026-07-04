import { renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { MockEventSource } from "@/__test__/mocks/MockEventSource";
import { useCounselStatusSse } from "@/hooks/useCounselStatusSse";
import { queryKeys } from "@/lib/queryKeys";

// 테스트를 위해 전역 EventSource -> mock으로 교체
vi.stubGlobal("EventSource", MockEventSource);

const createWrapper = () => {
  const queryClient = new QueryClient();
  const invalidateSpy = vi.spyOn(queryClient, "invalidateQueries");
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return { wrapper, invalidateSpy };
};

describe("useCounselStatusSse", () => {
  // 이전 테스트의 인스턴스 남아있지 않도록 격리
  beforeEach(() => MockEventSource.reset());

  it("마운트 시 SSE 스트림에 연결한다", () => {
    const { wrapper } = createWrapper();
    renderHook(() => useCounselStatusSse(), { wrapper });
    expect(MockEventSource.instances).toHaveLength(1); // 연결이 정확히 1개만 생성됐는지 확인
    expect(MockEventSource.instances[0].url).toContain(
      "/api/counsels/sse/stream"
    ); // sse 엔드포인트 테스트
  });

  it("COUNSEL_STATUS_CHANGED 수신 시 요약 리스트 쿼리를 정확히 1회 무효화한다", () => {
    const { wrapper, invalidateSpy } = createWrapper();
    renderHook(() => useCounselStatusSse(), { wrapper });

    // 서버가 상태 변경 이벤트를 발행한 상황 가정
    MockEventSource.instances[0].emit("COUNSEL_STATUS_CHANGED");

    // 이벤트 1회 수신 -> 캐시 무효화 정확히 1회인지 테스트
    expect(invalidateSpy).toHaveBeenCalledTimes(1);
    // 무효화 대상이 요약 리스트 쿼리 인지 확인
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: queryKeys.summary.list(),
    });
  });

  it("등록하지 않은 이벤트에는 반응하지 않는다", () => {
    const { wrapper, invalidateSpy } = createWrapper();
    renderHook(() => useCounselStatusSse(), { wrapper });

    MockEventSource.instances[0].emit("UNRELATED_EVENT");
    // 구독하지 않은 이벤트가 수신되어도 캐시 무효화가 일어나지 않는지 테스트
    expect(invalidateSpy).not.toHaveBeenCalled();
  });

  it("언마운트 시 연결을 정리한다", () => {
    const { wrapper } = createWrapper();
    const { unmount } = renderHook(() => useCounselStatusSse(), { wrapper });
    unmount();

    expect(MockEventSource.instances[0].close).toHaveBeenCalled();
  });

  it("ERROR 이벤트 수신 시 연결을 닫는다", () => {
    const { wrapper } = createWrapper();
    renderHook(() => useCounselStatusSse(), { wrapper });
    const es = MockEventSource.instances[0];
    es.emit("ERROR");
    // ERROR 이벤트 발행 시 연결 종료되는지 테스트
    expect(es.close).toHaveBeenCalledTimes(1);
  });

  it("이벤트가 여러 번 수신되면 수신 횟수만큼만 무효화한다", () => {
    const { wrapper, invalidateSpy } = createWrapper();
    renderHook(() => useCounselStatusSse(), { wrapper });
    const es = MockEventSource.instances[0];
    es.emit("COUNSEL_STATUS_CHANGED");
    es.emit("COUNSEL_STATUS_CHANGED");
    es.emit("COUNSEL_STATUS_CHANGED");
    // 리스너가 중복 등록되면 수신 1회당 무효화가 2회 이상 발생하므로, 1:1 관계를 보장하는 회귀 방지 테스트
    expect(invalidateSpy).toHaveBeenCalledTimes(3);
  });
});

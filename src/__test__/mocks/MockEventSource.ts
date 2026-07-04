import { vi } from "vitest";

export class MockEventSource {
  static instances: MockEventSource[] = [];
  listeners: Record<string, ((e: MessageEvent) => void)[]> = {};
  close = vi.fn();

  constructor(
    public url: string,
    public options?: EventSourceInit
  ) {
    MockEventSource.instances.push(this);
  }
  addEventListener(type: string, cb: (e: MessageEvent) => void) {
    (this.listeners[type] ??= []).push(cb);
  }
  removeEventListener(type: string, cb: (e: MessageEvent) => void) {
    this.listeners[type] = (this.listeners[type] ?? []).filter((l) => l !== cb);
  }
  // 테스트에서 서버 이벤트를 시뮬레이션하는 헬퍼
  emit(type: string, data: unknown = {}) {
    this.listeners[type]?.forEach((cb) =>
      cb(new MessageEvent(type, { data: JSON.stringify(data) }))
    );
  }
  static reset() {
    MockEventSource.instances = [];
  }
}

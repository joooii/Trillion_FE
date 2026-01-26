// 요약 list 관련 type

export type SummaryStatus = "PENDING" | "COMPLETED" | "FAILED";

export enum ChatCategory {
  ALL = "ALL",
  PLAN = "PLAN",
  ROAMING = "ROAMING",
  BILLING = "BILLING",
  SERVICE = "SERVICE",
}

// 연도에 따른 월
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface SummaryHome {
  counselId: number;
  title?: string;
  date: string;
  summaryPreview?: string;
  status: SummaryStatus;
}

export interface SummaryCardData extends SummaryHome {
  category: ChatCategory;
}

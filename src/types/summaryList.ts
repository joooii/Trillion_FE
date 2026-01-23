// 요약 list 관련 type

export type SummaryStatus = "pending" | "success" | "error";

export enum ChatCategory {
  ALL = "ALL",
  PLAN = "PLAN",
  ROAMING = "ROAMING",
}

// 연도에 따른 월
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface SummaryHome { 
  id: number;
  title?: string;
  date: string;
  content?: string;
}

export interface SummaryCardData extends SummaryHome { 
  status: SummaryStatus;
  category: ChatCategory;
}
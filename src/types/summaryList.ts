// 요약 list 관련 type

export type SummaryStatus = "pending" | "success" | "error";

export enum ChatCategory {
  ALL = "ALL",
  PLAN = "PLAN",
  ROAMING = "ROAMING",
}

// 연도에 따른 월
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface SummaryCardData {
  id: number;
  title?: string; // 제목
  status: SummaryStatus; // 요약중, 성공, 실패
  date: string; // 상담 날짜
  content?: string; // 요약된 내용
  category: ChatCategory;
}

export interface SummaryHome { 
  id: number;
  title?: string;
  date: string;
  content?: string;
}
// 요약 list 관련 type

export type SummaryStatus = "pending" | "success" | "error";

export interface SummaryCardData {
  id: number;
  title?: string; // 제목
  status: SummaryStatus; // 요약중, 성공, 실패
  date: string; // 상담 날짜
  content?: string; // 요약된 내용
}

export interface SummaryHome { 
  id: number;
  title?: string;
  date: string;
  content?: string;
}
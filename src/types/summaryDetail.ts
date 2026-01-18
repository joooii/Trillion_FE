// 요약 결과 관련 type

export interface MarkupContent {
  type: "mark-up-text";
  content: string;
}

export interface StepContent {
  type: "step";
  content: {
    order: number;
    text: string;
  }[];
}

export interface CardContent {
  type: "cards";
  content: {
    card_title: string;
    url?: string;
  }[];
}

export type Content = MarkupContent | StepContent | CardContent;

export interface Topic {
  topic_title: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer_summary: string;
  contents: Content[];
}

export interface SummaryDetail {
  counsel_id: number;
  counsel_date: string;
  summary: {
    counsel_title: string;
    topics: Topic[];
    conclusions: string[];
  };
}

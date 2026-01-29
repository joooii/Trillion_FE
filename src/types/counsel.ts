import { ApiResponse } from "@/types/api";

export interface Message {
  speaker: "상담사" | "고객";
  message: string;
}

export interface CounselCreateRequest {
  counselId?: number;
  title: string;
  date: string;
  chat: string;
}

export type CounselCreateResponse = ApiResponse<null>;

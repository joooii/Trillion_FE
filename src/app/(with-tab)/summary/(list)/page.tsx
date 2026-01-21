import type { Metadata } from "next";
import SummaryWrapper from "@/components/summary/list/SummaryWrapper";
import { ChatCategory, SummaryCardData } from "@/types/summaryList";

export const metadata: Metadata = {
  title: "상담 요약",
};

const mockData: SummaryCardData[] = [
  {
    id: 1,
    title: "온라인 결제 시스템 도입",
    date: "2025.05.30",
    status: "pending",
    content: "QR 코드 기반 결제 시스템 도입 희망...",
    category: ChatCategory.ROAMING,
  },
  {
    id: 2,
    title: "온라인 결제 시스템 도입",
    date: "2025.05.30",
    status: "success",
    content: "QR 코드 기반 결제 시스템 도입",
    category: ChatCategory.PLAN,
  },
  {
    id: 3,
    date: "2026.08.30",
    status: "error",
    category: ChatCategory.ROAMING,
  },
];

export default function ChatPage() {
  return <SummaryWrapper data={mockData} />;
}

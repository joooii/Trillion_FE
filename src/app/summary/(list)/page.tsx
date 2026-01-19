import type { Metadata } from "next";
import SummaryCard from "@/components/summary/list/SummaryCard";
import { SummaryCardData } from "@/types/summaryList";
// import AlertModal from "@/components/common/AlertModal";

export const metadata: Metadata = {
  title: "상담 요약",
};

const mockData: SummaryCardData[] = [
  {
    id: 1,
    title: "온라인 결제 시스템 도입",
    date: "2025.07.30",
    status: "pending",
    content: "QR 코드 기반 결제 시스템 도입 희망...",
  },
  {
    id: 2,
    title: "온라인 결제 시스템 도입",
    date: "2025.07.30",
    status: "success",
    content: "QR 코드 기반 결제 시스템 도입",
  },
  {
    id: 3,
    date: "2025.07.30",
    status: "error",
  },
];

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-y-3 mb-8">
      {mockData.map((item) => (
        <SummaryCard key={item.id} {...item} />
      ))}
    </div>
  );
}

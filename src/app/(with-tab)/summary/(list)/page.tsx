import type { Metadata } from "next";
import SummaryWrapper from "@/components/summary/list/SummaryWrapper";

export const metadata: Metadata = {
  title: "상담 요약",
};

export default function SummaryPage() {
  return <SummaryWrapper />;
}

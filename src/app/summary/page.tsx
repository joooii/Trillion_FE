import type { Metadata } from "next";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "요약",
};

export default function SummaryPage() {
  return (
    <div className="p-6">
      <Header back text="요약"/>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-text-lightgray">요약 페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}
import Header from "@/components/common/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "온보드",
};

export default function HomePage() {
  return (
    <div className="p-6">
      <Header back text="온보딩"/>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-text-lightgray">홈 페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}
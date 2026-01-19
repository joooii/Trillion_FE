import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "설정",
};

export default function SettingsPage() {
  return (
    <div className="p-6">
      <Header back text="설정"/>
      <div className="space-y-4">
        {/* <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-text-lightgray">설정 페이지입니다.</p>
        </div> */}
        <button className="px-4 py-2 bg-primary-500 text-white rounded">
          온보딩 페이지 보기
        </button>
      </div>
    </div>
  );
}
import type { Metadata } from "next";
import Header from "@/components/common/Header";

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
      </div>
    </div>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "혜택",
};

export default function BenefitsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-suite-semibold text-text-darkgray mb-4">
        혜택
      </h1>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-text-lightgray">혜택 페이지입니다.</p>
        </div>
      </div>
    </div>
  );
} 
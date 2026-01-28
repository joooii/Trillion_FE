"use client";

import { use } from "react";
import SummaryDetailContent from "@/components/summary/detail/SummaryDetailContent";

export default function SummaryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const counselId = Number(id);

  if (Number.isNaN(counselId)) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-red-500 text-sm">잘못된 ID입니다.</div>
      </div>
    );
  }

  return <SummaryDetailContent counselId={counselId} />;
}
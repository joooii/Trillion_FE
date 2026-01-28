"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Header from "@/components/common/Header";

const HEADER_TEXT_MAP: Record<string, string> = {
  terms: "서비스 이용약관",
  privacy: "개인정보처리방침",
  contact: "문의하기",
};

export default function PolicyHeader() {
  const segment = useSelectedLayoutSegment();
  const text = segment === null ? "" : (HEADER_TEXT_MAP[segment] ?? "");

  return <Header back text={text} />;
}

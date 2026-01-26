// app/settings/layout.tsx
"use client";

console.log("🔴🔴🔴 SettingsLayout 실행!");

import HeaderHome from "@/components/common/HeaderHome";
import { useEffect } from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("🔴 SettingsLayout 렌더링");
  
  useEffect(() => {
    console.log("🔴 SettingsLayout 마운트됨");
  }, []);

  return (
    <div className="flex flex-col items-center">
      <HeaderHome
        title="설정"
        description="서비스 이용을 위한 설정을 관리하세요"
        isScrollable={true}
      />
      {children}
    </div>
  );
}
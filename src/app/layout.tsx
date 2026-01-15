import type { Metadata } from "next";
import "@/app/globals.css";
import TabBar from "@/components/common/TabBar";

export const metadata: Metadata = {
  title: {
    default: "SO:U+",
    template: "%s | SO:U+",
  },
  description: "스마트한 금융 상담 서비스",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#E30084",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {/* 메인 콘텐츠 - 탭바 높이만큼 padding */}
        <main className="min-h-screen pb-20">
          {children}
        </main>
        
        {/* 하단 탭바 */}
        <TabBar />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "@/app/globals.css";
import TabBar from "@/components/common/TabBar";

export const metadata: Metadata = {
  title: {
    default: "SO:U+",
    template: "%s | SO:U+",
  },
  description: "쉽게 이해하는 고객 상담 요약 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-text-inverse">
        <main className="min-h-screen pb-20">{children}</main>
        <TabBar />
      </body>
    </html>
  );
}

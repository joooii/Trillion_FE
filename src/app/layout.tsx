import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: {
    default: "SO:U+",
    template: "%s | SO:U+",
  },
  description: "쉽게 이해하는 고객 상담 요약 서비스",
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-text-inverse">
        <Providers>
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

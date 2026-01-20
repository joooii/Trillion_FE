import Header from "@/components/common/Header";

export default function SummaryDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[96px]">
      <Header back text="상담 요약" />
      {children}
    </div>
  );
}

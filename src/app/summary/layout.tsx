import HeaderHome from "@/components/common/HeaderHome";

export default function SummaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[155px]">
      <HeaderHome
        title="상담 요약"
        description="AI가 요약한 상담 내역을 확인하세요"
      />
      {children}
    </div>
  );
}

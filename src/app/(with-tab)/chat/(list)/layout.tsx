import HeaderHome from "@/components/common/HeaderHome";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <HeaderHome
        title="상담 내역"
        description="상담 내역을 확인하세요"
        isScrollable={true}
      />
      {children}
    </div>
  );
}

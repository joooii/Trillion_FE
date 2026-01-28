import HeaderHome from "@/components/common/HeaderHome";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-[90dvh] overflow-hidden">
      <div className="flex-none z-10">
        <HeaderHome
          title="상담 내역"
          description="상담 내역을 확인하세요"
          isScrollable={true}
        />
      </div>
      <div className="flex-1 w-full overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
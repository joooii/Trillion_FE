import HeaderHome from "@/components/common/HeaderHome";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <HeaderHome 
        title="혜택" 
        description="다양한 혜택을 확인하세요"
        isScrollable={true}
      />
      {children}
    </div>
  );
}
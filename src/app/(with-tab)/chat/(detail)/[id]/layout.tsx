import Header from "@/components/common/Header";

export default function ChatDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto pt-[96px] px-[29px] w-[393px]">
      <Header back text="상담 내역" />
      {children}
    </div>
  );
}

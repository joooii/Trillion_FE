import Header from "@/components/common/Header";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header back={true} text="상담 내용 등록" />
      {children}
    </div>
  );
}

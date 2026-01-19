import HeaderHome from "@/components/common/HeaderHome";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[155px]">
      <HeaderHome
        title="설정"
        description="서비스 이용을 위한 설정을 관리하세요"
      />
      {children}
    </div>
  );
}

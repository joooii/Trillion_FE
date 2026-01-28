import PolicyHeader from "@/components/policy/PolicyHeader";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto pt-[96px] px-[29px] w-[393px] mb-[32px]">
      <PolicyHeader />
      {children}
    </div>
  );
}

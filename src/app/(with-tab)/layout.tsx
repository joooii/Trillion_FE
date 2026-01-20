import "@/app/globals.css";
import TabBar from "@/components/common/TabBar";

export default function WithTabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen pb-20">{children}</main>
      <TabBar />
    </>
  );
}

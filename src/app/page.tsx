import type { Metadata } from "next";
import HeaderHome from "@/components/common/HeaderHome";
import ContentSection from "@/components/home/ContentSection";
import HelperSection from "@/components/home/HelperSection";
import SummaryStartCard from "@/components/home/SummaryStartCard";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className="pt-[139px] w-[393px] mx-auto">
      <HeaderHome title="SO:U+" description="안녕하세요, 김소유님" isHome />
      <SummaryStartCard />
      <ContentSection />
      <HelperSection />
    </div>
  );
}

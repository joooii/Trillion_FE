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
    <div className="flex flex-col items-center">
      <HeaderHome 
        title="SO:U+" 
        description="안녕하세요, 김소유님" 
        isHome 
        isScrollable={true}
      />
      <div className="w-[393px] mt-9">
        <SummaryStartCard />
        {/* <ContentSection /> */}
        {/* TODO: SummaryCard 컴포넌트 생성후 집어넣기*/}
        <HelperSection />
      </div>
    </div>
  );
}
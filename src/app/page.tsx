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
      <HeaderHome />
      <SummaryStartCard />
      <ContentSection />
      <HelperSection />
    </div>
  );
}

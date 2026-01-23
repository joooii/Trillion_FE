"use client";

import HeaderHome from "@/components/common/HeaderHome";
import ContentSection from "@/components/home/ContentSection";
import HelperSection from "@/components/home/HelperSection";
import SummaryStartCard from "@/components/home/SummaryStartCard";
import SummaryList from "@/components/home/SummaryList";
import { useUserProfile } from "@/hooks/useProfile";

export default function HomeContent() {
  const { nickname, isLoading } = useUserProfile();

  return (
    <div className="flex flex-col items-center mb-8">
      <HeaderHome 
        title="SO:U+" 
        description={isLoading ? "안녕하세요" : `안녕하세요, ${nickname}님`}
        isHome 
        isScrollable={true}
      />
      <div className="w-[393px] mt-9">
        <SummaryStartCard />
        <SummaryList nickname={nickname} />
        <HelperSection />
      </div>
    </div>
  );
}
import HelperCard from "@/components/home/HelperCard";
import FAQ from "@/assets/images/faq.png";
import SelfGuide from "@/assets/images/self_guide.png";

export default function HelperSection() {
  return (
    <div className="mt-[33px]">
      <p className="ml-[29px] mb-4 text-lg font-semibold text-text-darkgray">
        도움이 필요하신가요?
      </p>

      <div className="mx-[29px] grid grid-cols-2 gap-3">
        <HelperCard
          image={FAQ}
          title="자주하는 질문"
          description={`궁금한 질문을\n바로 해결하세요`}
          href="https://www.lguplus.com/support/online/faq"
        />

        <HelperCard
          image={SelfGuide}
          title="스스로 해결가이드"
          description={`일상에 도움이 되는\n유용한 사용 TIP을 소개합니다`}
          href="https://www.lguplus.com/support/self-troubleshoot/guide"
        />
      </div>
    </div>
  );
}

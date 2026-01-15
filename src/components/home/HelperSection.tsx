"server-only";

import HelpCard from "@/components/home/HelpCard";
import FAQ from "@/assets/images/faq.png";
import SelfGuide from "@/assets/images/self_guide.png";

export default function ContentSection() {
  return (
    <div className="mt-[35px]">
      <p className="ml-[29px] mb-[11px] text-lg font-semibold text-text-darkgray">
        도움이 필요하신가요?
      </p>

      <div className="mx-5 grid grid-cols-2 gap-3">
        <HelpCard
          image={FAQ}
          title="자주하는 질문"
          description={`궁금한 질문을\n바로 해결하세요`}
          href="#"
        />

        <HelpCard
          image={SelfGuide}
          title="스스로 해결가이드"
          description={`일상에 도움이 되는\n유용한 사용 TIP을 소개합니다`}
          href="#"
        />
      </div>
    </div>
  );
}

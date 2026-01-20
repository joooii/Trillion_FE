import BenefitCategory from "@/components/events/BenefitCategory";
import {
  BILLING_BENEFIT_ITEMS,
  EVENTS_ITEMS,
  MEMBERSHIP_ITEMS,
  PURCHASE_BENEFIT_ITEMS,
  SPECIAL_BENEFIT_ITEMS,
} from "@/utils/categoryType";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "혜택",
};

export default function BenefitsPage() {
  return (
    <div className="relative z-20 pb-8 flex justify-center">
      <div className="w-[335px] min-h-[584px] rounded-[10px] shadow-card py-[12px] bg-white">
        <BenefitCategory categoryItem="멤버십">
          <div className="ml-[29px] mr-[18px] grid grid-cols-2 gap-y-2 gap-x-6">
            {MEMBERSHIP_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="text-sm text-text-lightgray"
              >
                - {item.label}
              </a>
            ))}
          </div>
        </BenefitCategory>
        <BenefitCategory categoryItem="이벤트">
          <div className="ml-[29px] mr-[18px] grid grid-cols-2 gap-y-2 gap-x-6">
            {EVENTS_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="text-sm text-text-lightgray"
              >
                - {item.label}
              </a>
            ))}
          </div>
        </BenefitCategory>
        <BenefitCategory categoryItem="구매 혜택">
          {/* 텍스트 길어서 grid 간격 일부 조정 */}
          <div className="ml-[29px] mr-[30px] grid grid-cols-[1.2fr_1fr] gap-y-2 gap-x-4">
            {PURCHASE_BENEFIT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="text-sm text-text-lightgray"
              >
                - {item.label}
              </a>
            ))}
          </div>
        </BenefitCategory>
        <BenefitCategory categoryItem="요금 혜택">
          <div className="ml-[29px] mr-[18px] grid grid-cols-2 gap-y-2 gap-x-6">
            {BILLING_BENEFIT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="text-sm text-text-lightgray"
              >
                - {item.label}
              </a>
            ))}
          </div>
        </BenefitCategory>
        <BenefitCategory categoryItem="스페셜 혜택">
          <div className="ml-[29px] mr-[18px] grid grid-cols-2 gap-y-2 gap-x-6">
            {SPECIAL_BENEFIT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                className="text-sm text-text-lightgray"
              >
                - {item.label}
              </a>
            ))}
          </div>
        </BenefitCategory>
      </div>
    </div>
  );
}

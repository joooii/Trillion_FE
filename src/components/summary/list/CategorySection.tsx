"use client";

import CategoryItem from "@/components/summary/list/CategoryItem";
import { ChatCategory } from "@/types/summaryList";

interface CategorySectionProps {
  category: ChatCategory;
  onChange: (category: ChatCategory) => void;
}

export default function CategorySection({
  category,
  onChange,
}: CategorySectionProps) {
  return (
    <div className="w-[335px] overflow-x-auto no-scrollbar">
      <div className="flex gap-2 w-max pr-2">
        <CategoryItem
          label="전체"
          active={category === ChatCategory.ALL}
          onClick={() => onChange(ChatCategory.ALL)}
        />
        <CategoryItem
          label="요금제"
          active={category === ChatCategory.PLAN}
          onClick={() => onChange(ChatCategory.PLAN)}
        />
        <CategoryItem
          label="로밍"
          active={category === ChatCategory.ROAMING}
          onClick={() => onChange(ChatCategory.ROAMING)}
        />
        <CategoryItem
          label="요금 및 납부"
          active={category === ChatCategory.BILLING}
          onClick={() => onChange(ChatCategory.BILLING)}
        />
        <CategoryItem
          label="서비스"
          active={category === ChatCategory.SERVICE}
          onClick={() => onChange(ChatCategory.SERVICE)}
        />
      </div>
    </div>
  );
}

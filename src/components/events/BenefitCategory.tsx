"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface BenefitCategoryProps {
  categoryItem: string;
  children?: React.ReactNode;
}

export default function BenefitCategory({
  categoryItem,
  children,
}: BenefitCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="mx-[21px] h-[48px] w-[293px] flex items-center justify-between"
      >
        <p className="text-lg font-bold">{categoryItem}</p>

        <ChevronDown
          className={`stroke-text-darkgray transition-transform duration-200
          ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {isOpen && (
        <div className="mx-5 border-b border-text-muted origin-bottom scale-y-75"></div>
      )}
      {isOpen && (
        <div className="mt-2 mb-3 transition-all duration-200 ease-out">
          {children}
        </div>
      )}
    </>
  );
}

"use client";

interface CategoryItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function CategoryItem({
  label,
  active = false,
  onClick,
}: CategoryItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[30px] w-fit shrink-0 px-[12px] py-[7px] text-sm rounded-md flex items-center justify-center whitespace-nowrap border-[0.5px] border-secondary-800
        ${active ? "bg-secondary-800 text-white font-semibold " : "text-secondary-800"}`}
    >
      {label}
    </button>
  );
}

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import check from "@/assets/images/checkbox.svg";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  required?: boolean;
  href?: string;
  className?: string;
  labelClassName?: string;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  required = false,
  href,
  className = "",
  labelClassName = "text-text-darkgray",
}: CheckboxProps) {
  return (
    <div
      className={`flex items-center justify-between py-4 last:border-b-0 ${className}`}
    >
      <div className="flex items-center gap-2 flex-1">
        <button
          type="button"
          onClick={() => onChange(!checked)}
          className="flex-shrink-0"
        >
          {checked ? (
            <Image src={check} alt="checked" width={18} height={18} />
          ) : (
            <div className="w-[18px] h-[18px] bg-white border border-gray-400 rounded" />
          )}
        </button>

        <label
          onClick={() => onChange(!checked)}
          className={`text-base cursor-pointer select-none ${labelClassName}`}
        >
          {required && <span className="text-primary-500">[필수] </span>}
          {label}
        </label>
      </div>

      {href && (
        <Link
          href={href}
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronRight size={16} />
        </Link>
      )}
    </div>
  );
}

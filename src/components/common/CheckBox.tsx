// src/components/common/CheckBox.tsx
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import check from '@/assets/images/checkbox.svg';


interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  required?: boolean;
  hasLink?: boolean;
  onLinkClick?: () => void;
  className?: string;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  required = false,
  hasLink = false,
  onLinkClick,
  className = '',
}: CheckboxProps) {
  return (
    <div className={`flex items-center justify-between py-4 last:border-b-0 ${className}`}>
      <div className="flex items-center gap-2 flex-1">
        <button
          onClick={() => onChange(!checked)}
          className="flex-shrink-0"
        >
          {checked ? (
            <Image
              src={check}
              alt="checked"
              width={18}
              height={18}
            />
          ) : (
            <div className="w-[18px] h-[18px] bg-white border border-gray-400 rounded" />
          )}
        </button>

        <label
          onClick={() => onChange(!checked)}
          className="text-text-lightgray cursor-pointer select-none"
        >
          {required && <span className="text-primary-500">[필수] </span>}
          {label}
        </label>
      </div>

      {hasLink && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLinkClick?.();
          }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
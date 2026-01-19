import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

interface CallCenterItemProps {
  icon: StaticImageData;
  label: string;
}

// 실제 고객센터 번호: 휴대폰에서 114(무료), 1544-0010(유료), 080-019-7000(무료)
const CALL_NUMBER = "1588-0000";

export default function CallCenterItem({ icon, label }: CallCenterItemProps) {
  return (
    <a
      href={`tel:${CALL_NUMBER.replace(/-/g, "")}`}
      className="h-[48px] flex items-center w-full"
      target="_blank"
    >
      <Image
        src={icon}
        alt={label}
        width={24}
        height={24}
        className="mr-[7px]"
      />
      <p className="font-suite-medium">{label}</p>
      <ChevronRight className="ml-auto w-[24px] h-[24px] text-text-darkgray" />
    </a>
  );
}

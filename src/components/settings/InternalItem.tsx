import { ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

export default function InternalItem({
  icon,
  label,
  href,
}: {
  icon: StaticImageData;
  label: string;
  href: string;
}) {
  return (
    <Link href={href} className="h-[48px] flex items-center">
      <Image
        src={icon}
        alt={label}
        width={24}
        height={24}
        className="mr-[7px]"
      />
      <p className="font-suite-medium">{label}</p>
      <ChevronRight className="ml-auto w-[24px] h-[24px] text-text-darkgray" />
    </Link>
  );
}

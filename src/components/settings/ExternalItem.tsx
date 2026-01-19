import { ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";

export default function ExternalItem({
  icon,
  label,
  href,
}: {
  icon: StaticImageData;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[48px] flex items-center"
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

"server-only";

import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

interface HelpCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  href?: string;
}

export default function HelpCard({
  image,
  title,
  description,
  href,
}: HelpCardProps) {
  return (
    <a
      href={href}
      className="w-[170px] h-[186px] rounded-[10px] bg-white shadow-card flex flex-col items-center justify-center text-center text-text-darkgray"
    >
      <Image
        src={image}
        alt={title}
        width={79}
        height={84}
        className="object-contain"
      />

      <div className="mt-3">
        <div className="flex items-center justify-center gap-1">
          <p className="text-[16px] font-semibold text-text-darkgray">
            {title}
          </p>
          <ChevronRight className="w-4 h-4 stroke-text-darkgray" />
        </div>

        <p className="mt-2 text-xs text-text-lightgray whitespace-pre-line">
          {description}
        </p>
      </div>
    </a>
  );
}

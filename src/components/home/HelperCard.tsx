import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

interface HelperCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  href?: string;
}

export default function HelperCard({
  image,
  title,
  description,
  href,
}: HelperCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-[165px] h-[186px] rounded-[10px] bg-white shadow-card flex flex-col items-center justify-center text-center text-text-darkgray"
    >
      <Image
        src={image}
        alt={title}
        width={78}
        height={82}
        className="object-contain"
      />

      <div className="mt-[13px]">
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

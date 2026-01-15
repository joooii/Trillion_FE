"server-only";

import Image from "next/image";
import YouTubeIcon from "@/assets/images/youtube.svg";
import { StaticImageData } from "next/image";

interface YoutubePlayerProps {
  href: string;
  thumbnail?: StaticImageData | string;
  ariaLabel?: string;
}

export default function YoutubePlayer({
  href,
  thumbnail,
  ariaLabel = "유튜브 영상으로 이동",
}: YoutubePlayerProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="block w-[170px] h-[95px]"
    >
      <div className="relative w-full h-full rounded-[10px] overflow-hidden shadow-card bg-gray-500">
        {/* 썸네일 있으면 */}
        {thumbnail && (
          <Image src={thumbnail} alt="" fill className="object-cover" />
        )}

        {/* 플레이 아이콘 오버레이 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={YouTubeIcon}
            alt=""
            width={29.57}
            height={20}
            className="object-contain"
          />
        </div>
      </div>
    </a>
  );
}

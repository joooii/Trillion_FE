"server-only";

import YoutubePlayer from "@/components/home/YoutubePlayer";

export default function ContentSection() {
  return (
    <div className="mt-[35px]">
      <p className="text-lg font-semibold ml-[29px] mb-2.5 text-text-darkgray">
        콘텐츠 바로가기
      </p>
      {/* 유튜브 썸네일 자리 */}
      <div className="mx-5 grid grid-cols-2 gap-3">
        <YoutubePlayer href="#" />
        <YoutubePlayer href="#" />
      </div>
    </div>
  );
}

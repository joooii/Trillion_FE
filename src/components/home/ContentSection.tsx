"use client";

import YoutubePlayer from "@/components/home/YoutubePlayer";
import { useQuery } from "@tanstack/react-query";

export default function ContentSection() {
  const { data: videos } = useQuery({
    queryKey: ["youtube-latest"],
    queryFn: async () => {
      const res = await fetch("/api/youtube");
      return res.json();
    },
  });

  return (
    <div className="mt-[35px]">
      <p className="text-lg font-semibold ml-[29px] mb-[10px] text-text-darkgray">
        콘텐츠 바로가기
      </p>

      <div className="mx-5 grid grid-cols-2 gap-3">
        {videos?.map((v: any, i: number) => (
          <YoutubePlayer key={i} href={v.youtubeUrl} thumbnail={v.thumbnail} />
        ))}
      </div>
    </div>
  );
}

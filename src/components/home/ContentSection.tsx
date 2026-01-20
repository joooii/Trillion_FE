"use client";

import YoutubePlayer from "@/components/home/YoutubePlayer";
import { Youtube } from "@/types/youtube";
import { useQuery } from "@tanstack/react-query";

export default function ContentSection() {
  const {
    data: videos,
    isLoading,
    isError,
  } = useQuery<Youtube[]>({
    queryKey: ["youtube"],
    queryFn: async () => {
      const res = await fetch("/api/youtube");
      if (!res.ok) {
        throw new Error("Youtube 영상을 불러오는 데 실패하셨습니다.");
      }
      return res.json();
    },
  });
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>영상을 불러오지 못했습니다.</div>;

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

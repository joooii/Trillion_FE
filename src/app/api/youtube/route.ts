"use server";

import { NextResponse } from "next/server";

// 재생목록 링크: https://www.youtube.com/playlist?list=PLrpBDj0lFe8jcONSPSfPnfiKdiGK_3Rzb

export async function GET() {
  const params = new URLSearchParams({
    part: "snippet",
    playlistId: "PLrpBDj0lFe8jcONSPSfPnfiKdiGK_3Rzb",
    maxResults: "2",
    key: process.env.YOUTUBE_API_KEY as string,
  });

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?${params.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok || !data?.items) {
      return NextResponse.json(
        {
          error: "YouTube API 호출 실패",
          status: res.status,
          response: text,
        },
        { status: 500 }
      );
    }

    const items = data.items.map((item: any) => ({
      thumbnail: item.snippet.thumbnails.high.url,
      youtubeUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));

    return NextResponse.json(items);
  } catch (error) {
    throw error;
  }
}

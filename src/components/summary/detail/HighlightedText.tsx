"use client";

import { useEffect, useRef, useState } from "react";
import { TermPopover } from "@/components/summary/detail/TermPopover";

interface HighlightedTextProps {
  text: string;
}

interface TextParts {
  word: string;
  meaning?: string;
}
export default function HighlightedText({ text }: HighlightedTextProps) {
  const result: TextParts[] = parseHighlightedText(text);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [activeTerm, setActiveTerm] = useState<{
    word: string;
    meaning: string;
    targetElement: HTMLElement;
  } | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!activeTerm) return;

    const updatePosition = () => {
      // 실시간으로 요소의 현재 위치 가져오기
      const rect = activeTerm.targetElement.getBoundingClientRect();

      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom,
      });
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        !activeTerm.targetElement.contains(target)
      ) {
        setActiveTerm(null);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    // scroll, resize 이벤트 시 위치 업데이트
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeTerm]);

  const handleTermClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    word: string,
    meaning: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setActiveTerm({
      word,
      meaning,
      // 글자 바로 아래에 띄우기 (스크롤 값 합산)
      targetElement: e.currentTarget,
    });
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom,
    });
  };

  return (
    <span>
      {result.map((part, index) => {
        if (part.meaning) {
          return (
            <span
              className="inline-block bg-primary-200/50 cursor-pointer"
              onClick={(e) => {
                // todo 뜻 popup 보여주기
                handleTermClick(e, part.word, part.meaning!);
              }}
              key={index}
            >
              {part.word}
            </span>
          );
        }
        return <span key={index}>{part.word}</span>;
      })}
      {activeTerm && (
        <TermPopover
          ref={popoverRef}
          term={activeTerm.word}
          meaning={activeTerm.meaning}
          x={position.x}
          y={position.y}
          onClose={() => setActiveTerm(null)}
        />
      )}
    </span>
  );
}

function parseHighlightedText(text: string) {
  // {{단어 :: 뜻}} 으로 들어온 텍스트 파싱
  const textParts: TextParts[] = text.split(/{{|}}/g).map((part, index) => {
    if (part.includes("::")) {
      const [word, meaning] = part.split("::").map((str) => str.trim());
      return { word, meaning };
    } else {
      return { word: part };
    }
  });
  return textParts;
}

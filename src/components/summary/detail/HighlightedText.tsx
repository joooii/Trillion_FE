"use client";

import { useEffect, useRef, useState } from "react";
import { TermPopover } from "@/components/summary/detail/TermPopover";

interface HighlightedTextProps {
  text: string;
}

interface TextParts {
  word: string;
  meaning?: string;
  bold?: boolean;
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
        const content = part.meaning ? (
          <span
            className="inline-block bg-primary-200/50 cursor-pointer"
            onClick={(e) => {
              // todo 뜻 popup 보여주기
              handleTermClick(e, part.word, part.meaning!);
            }}
          >
            {part.word}
          </span>
        ) : (
          <span>{part.word}</span>
        );

        // bold 처리
        if (part.bold) {
          return (
            <strong key={index} className="font-semibold">
              {content}
            </strong>
          );
        }

        return <span key={index}>{content}</span>;
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

function parseHighlightedText(text: string): TextParts[] {
  const textParts: TextParts[] = [];

  // **로 감싸진 부분과 완전한 {{...::...}} 패턴만 매칭
  const regex = /(\*\*.*?\*\*|{{[^}]+::[^}]+}})/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // 매칭 전 일반 텍스트
    if (match.index > lastIndex) {
      textParts.push({ word: text.slice(lastIndex, match.index) });
    }

    const matched = match[0];

    // ** bold 처리
    if (matched.startsWith("**") && matched.endsWith("**")) {
      const innerText = matched.slice(2, -2);

      // bold 안에 완전한 {{...::...}} 있는지 확인
      const termMatch = innerText.match(/^{{([^}]+)::([^}]+)}}$/);
      if (termMatch) {
        const [, word, meaning] = termMatch;
        textParts.push({
          word: word.trim(),
          meaning: meaning.trim(),
          bold: true,
        });
      } else {
        textParts.push({ word: innerText, bold: true });
      }
    }
    // 완전한 {{...::...}} 처리
    else if (matched.startsWith("{{") && matched.endsWith("}}")) {
      const innerText = matched.slice(2, -2);
      if (innerText.includes("::")) {
        const [word, meaning] = innerText.split("::").map((s) => s.trim());
        textParts.push({ word, meaning });
      } else {
        // :: 없으면 일반 텍스트로 처리
        textParts.push({ word: matched });
      }
    }

    lastIndex = regex.lastIndex;
  }

  // 남은 텍스트
  if (lastIndex < text.length) {
    textParts.push({ word: text.slice(lastIndex) });
  }

  return textParts;
}

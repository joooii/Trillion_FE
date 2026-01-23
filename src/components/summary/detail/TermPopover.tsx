"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface TermPopoverProps {
  term: string;
  meaning: string;
  x: number;
  y: number;
  onClose?: () => void;
}

export function TermPopover({
  term,
  meaning,
  x,
  y,
  onClose,
}: TermPopoverProps) {
  // x는 반드시 startDiff + padding보다 크다고 가정.
  var leftX: number; // body의 left x 좌표
  const margin = 29;
  const minPadding = 10;
  const innerScreenWidth = 393;
  const screenWidth = window.innerWidth;
  const popupWidth = 224;

  leftX = x - popupWidth / 2;
  // 화면 왼쪽 넘치는지 체크
  if (leftX < (screenWidth - innerScreenWidth) / 2 + margin + minPadding) {
    leftX = (screenWidth - innerScreenWidth) / 2 + margin + minPadding;
  }
  // 화면 오른쪽 넘치는지 체크
  if (
    leftX + popupWidth >
    (screenWidth + innerScreenWidth) / 2 - margin - minPadding
  ) {
    leftX =
      (screenWidth + innerScreenWidth) / 2 - margin - popupWidth - minPadding;
  }

  // TODO : 화면 아래 넘치는지 확인
  const popoverContent = (
    <div
      className={`fixed z-[2] w-[224px] h-[103px]`}
      style={{
        top: `${y + 2}px`,
        left: `${leftX}px`,
        filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.15))",
      }}
    >
      {/* 화살표 */}
      <div className="relative w-[224px] h-[10px] overflow-visible">
        <div
          className="w-[24px] h-[24px] bg-white rounded-[4px] rotate-45 absolute top-[3.5px]"
          style={{
            transformOrigin: "center",
            left: `${x - leftX - 12}px`,
          }}
        />
      </div>
      {/* body */}
      <div className="relative w-[224px] bg-white rounded-[10px] ">
        <X
          className={
            "absolute right-[6px] top-[7px] text-[var(--color-text-muted)] cursor-pointer"
          }
          size={10}
          onClick={() => onClose?.()}
        />
        <div className="column pr-[16.5px] pl-[13px] pt-[12px] pb-[13.5px]">
          <p
            className={
              " max-w-[190px] text-pink-600 text-xs font-bold leading-4"
            }
          >
            {term}
          </p>
          <p className="pl-[3.5px] pt-[2.5px] justify-start text-zinc-800 text-[10px] font-normal leading-4">
            {meaning}
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(popoverContent, document.body);
}

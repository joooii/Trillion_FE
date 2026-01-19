"use client";

import { CircleAlert } from "lucide-react";
import Button from "@/components/common/Button";

interface AlertModalProps {
  title?: string;
  text?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export default function AlertModal({
  title,
  text,
  cancelButtonText,
  confirmButtonText,
  onCancel,
  onConfirm,
}: AlertModalProps) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/40 z-60"
      onClick={onCancel}
    >
      <div
        className="w-[336px] bg-white shadow-card rounded-[10px] py-4 flex flex-col items-center justify-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <CircleAlert className="w-[40px] h-[40px] stroke-primary-500 shrink-0" />
        <p
          className={`text-lg font-semibold text-text-darkgray text-center ${
            text ? "" : "mb-[4px]"
          }`}
        >
          {title}
        </p>

        {text && (
          <p className="text-text-lightgray text-sm text-center whitespace-pre-line mb-[1px]">
            {text}
          </p>
        )}

        <div className="flex flex-row gap-4">
          <Button
            size="xs"
            onClick={onCancel}
            className="bg-white border scale-[0.98] border-secondary-800 active:bg-gray-100 text-secondary-800"
          >
            {cancelButtonText}
          </Button>

          <Button size="xs" onClick={onConfirm}>
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

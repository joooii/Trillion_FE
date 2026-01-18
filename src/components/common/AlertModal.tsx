import { CircleAlert } from "lucide-react";
import Button from "@/components/common/Button";

interface AlertModalProps {
  title?: string;
  text?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

export default function AlertModal({
  title,
  text,
  cancelButtonText,
  confirmButtonText,
}: AlertModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-[336px] h-[161px] bg-white shadow-card rounded-[10px] py-4 flex flex-col items-center justify-center gap-3">
        <CircleAlert className="w-[40px] h-[40px] stroke-primary-500  shrink-0 " />
        <p className="text-lg font-semibold text-text-darkgray text-center mb-[4px]">
          {title}
        </p>
        {/* 탈퇴 모달에 맞춰 수정할 예정 */}
        {/* <p className="text-text-lightgray text-sm">{text}</p> */}
        <div className="flex flex-row gap-4">
          <Button
            size="xs"
            className="bg-white border border-[0.3px] border-secondary-800 active:bg-primary-50 text-secondary-800"
          >
            {cancelButtonText}
          </Button>
          <Button size="xs">{confirmButtonText}</Button>
        </div>
      </div>
    </div>
  );
}

import { CircleAlert, RotateCcw } from "lucide-react";

interface ErrorContentProps {
  variant?: "home" | "summary";
}

export default function ErrorContent({
  variant = "summary",
}: ErrorContentProps) {
  const heightClass = variant === "home" ? "h-[68px]" : "h-[73px]";

  return (
    <div
      className={`w-[311px] ${heightClass} bg-[#FFECEC] rounded-[10px] p-3 border-[0.5px] border-[#FFB4B4] flex items-center`}
    >
      <div className="w-8 h-8 bg-error-500 rounded-[10px] flex items-center justify-center">
        <CircleAlert className="w-[15px] h-[15px] stroke-white" />
      </div>

      <div className="ml-[10px] flex-1">
        <p className="text-error-600 font-semibold">생성 중 오류 발생</p>
        <p className="text-xs text-error-200">
          자세한 내용을 확인하려면 탭하세요
        </p>
      </div>

      <RotateCcw className="w-[22px] h-[22px] stroke-error-500" />
    </div>
  );
}

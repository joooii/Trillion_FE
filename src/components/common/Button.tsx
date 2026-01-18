"use client";
import { cn } from "@/utils/cn";

type ButtonSize = "xs" | "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const sizeVariants: Record<ButtonSize, string> = {
  xs: "w-[110px] h-[36px] font-semibold text-sm",
  small: "w-[160px] h-[40px] font-suite-semibold text-base",
  medium: "w-[303px] h-[48px] font-suite-medium text-base",
  large: "w-[335px] h-[55px] font-suite-semibold text-lg",
};

export default function Button({
  size = "medium",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "py-[14px]",
        "rounded-[10px]",
        "text-white",
        "transition-all duration-200",
        "flex items-center justify-center gap-2",
        "shadow-btn",

        "bg-primary-500",
        "active:bg-primary-700",

        "disabled:bg-primary-700 disabled:cursor-not-allowed",

        sizeVariants[size],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

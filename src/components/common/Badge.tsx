import { SummaryStatus } from "@/types/summaryList";

const BADGE_CONFIG: Record<
  SummaryStatus,
  { label: string; className: string }
> = {
  COMPLETED: {
    label: "성공",
    className: "w-[34px] bg-success-gradient",
  },
  PENDING: {
    label: "요약 중",
    className: "w-[44px] bg-pending-gradient",
  },
  FAILED: {
    label: "실패",
    className: "w-[34px] bg-error-gradient",
  },
};

interface BadgeProps {
  status: SummaryStatus;
}

export default function Badge({ status }: BadgeProps) {
  const { label, className } = BADGE_CONFIG[status];

  return (
    <span
      className={`inline-flex h-[15px] items-center justify-center rounded-[20px] px-2 ${className}`}
    >
      <span className="text-[10px] whitespace-nowrap">{label}</span>
    </span>
  );
}

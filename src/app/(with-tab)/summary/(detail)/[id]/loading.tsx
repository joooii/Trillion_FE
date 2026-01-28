import { SkeletonCard, SkeletonLine } from "@/components/common/SkeletonCard";
import SummaryHeader from "@/components/summary/detail/SummaryHeader";

const QuestionBlock = () => (
  <div className="w-full h-10 bg-gray-100 rounded-lg border border-gray-100" />
);

// Summary 스켈레톤 UI
export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[335px] justify-center flex-col items-center gap-3 mb-8 animate-pulse">
        {/* 제목, 일자 */}
        <SkeletonCard className="min-h-[128px] p-[18px] rounded-2xl shadow-content-card mt-[20px] flex flex-col gap-3">
          <SkeletonLine className="w-4/5 mb-4 " />
          <SkeletonLine className="w-2/3 mb-4" />
        </SkeletonCard>
        {/* topic 별 card section */}
        <SkeletonCard className="min-h-[300px] flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 bg-gray-100 rounded-lg shrink-0" />
              <SkeletonLine className="h-5 w-20" />
            </div>
            <QuestionBlock />
            <QuestionBlock />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 bg-gray-100 rounded-lg shrink-0" />
              <SkeletonLine className="h-5 w-24" />
            </div>
            <QuestionBlock />
          </div>
        </SkeletonCard>
        {/* 결론 */}
        <SkeletonCard className="p-[18px] h-[300px]  rounded-2xl">
          <SkeletonLine className="w-1/3 mb-4" />
        </SkeletonCard>
      </div>
    </div>
  );
}

// 글자 부분
const SkeletonLine = ({ className = "" }: { className?: string }) => (
  <div className={`h-8 bg-gray-100 rounded ${className}`} />
);

// 카드 부분
const SkeletonCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`w-full bg-white p-[18px] rounded-2xl shadow-content-card ${className}`}
  >
    {children}
  </div>
);

export { SkeletonLine, SkeletonCard };

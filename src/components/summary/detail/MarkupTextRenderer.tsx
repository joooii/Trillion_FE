"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HighlightedText from "@/components/summary/detail/HighlightedText";

interface MarkupTextRendererProps {
  content: string;
}

export default function MarkupTextRenderer({
  content,
}: MarkupTextRendererProps) {
  // ※ 앞에 줄바꿈 (맨 앞 ※는 제외)
  const processedContent = content.replace(/(?<!^)\s*※/g, "\n\n※");

  return (
    <div className="text-xs text-text-darkgray">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="leading-relaxed mb-1">
              <HighlightMarkdown>{children}</HighlightMarkdown>
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold">
              <HighlightMarkdown>{children}</HighlightMarkdown>
            </strong>
          ),
          table: ({ children }) => (
            <table className="w-full my-2 border border-[#E8E1D8] rounded-xl border-separate border-spacing-0 overflow-hidden bg-[#FFFEFC]">
              {children}
            </table>
          ),
          th: ({ children }) => (
            <th className="px-1 py-2 text-center font-semibold text-[11px] bg-table-header border-[#DED6C9] text-text-black">
              <HighlightMarkdown>{children}</HighlightMarkdown>
            </th>
          ),
          td: ({ children }) => (
            <td className="px-1 py-2 text-center text-[10px] text-text-darkgray border-t border-table-border">
              <HighlightMarkdown>{children}</HighlightMarkdown>
            </td>
          ),
          tr: ({ children }) => <tr>{children}</tr>,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}

function HighlightMarkdown({ children }: { children: React.ReactNode }) {
  if (typeof children === "string") {
    return <HighlightedText text={children} />;
  }

  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child, idx) => (
          <HighlightMarkdown key={idx}>{child}</HighlightMarkdown>
        ))}
      </>
    );
  }

  return <>{children}</>;
}

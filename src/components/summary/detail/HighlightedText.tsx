"use client";

interface HighlightedTextProps {
  text: string;
}

interface TextParts {
  word: string;
  meaning?: string;
}
export default function HighlightedText({ text }: HighlightedTextProps) {
  const result: TextParts[] = parseHighlightedText(text);
  return (
    <>
      {result.map((part, index) => {
        if (part.meaning) {
          return (
            <span
              className="inline-block bg-(--color-primary-200)/50"
              onClick={() => {
                // todo 뜻 popup 보여주기
                alert(part.meaning);
              }}
              key={index}
            >
              {part.word}
            </span>
          );
        }
        return <span key={index}>{part.word}</span>;
      })}
    </>
  );
}

function parseHighlightedText(text: string) {
  // {{단어 :: 뜻}} 으로 들어온 텍스트 파싱
  const textParts: TextParts[] = text.split(/{{|}}/g).map((part, index) => {
    if (part.includes("::")) {
      const [word, meaning] = part.split("::").map((str) => str.trim());
      return { word, meaning };
    } else {
      return { word: part };
    }
  });
  return textParts;
}

// app/page.tsx
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <Button size="small">저장</Button>
      <Button size="medium">상담 시작</Button>
      <Button size="large">SO:U+ 시작하기</Button>
      <Button size="large" disabled>비활성화</Button>
    </div>
  );
}
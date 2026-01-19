import LoginCheckContent from "@/components/auth/logincheck/LoginCheckContent";
import { Suspense } from "react";

export default function LoginCheckPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-text-inverse flex items-center justify-center">
          <div className="text-text-darkgray">Loading...</div>
        </div>
      }
    >
      <LoginCheckContent />
    </Suspense>
  );
}

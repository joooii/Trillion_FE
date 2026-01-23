import { Plus } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  text: string;
  buttonText: string;
  buttonLink: string;
}

export default function EmptyState({ 
  text, 
  buttonText, 
  buttonLink 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[335px] mx-auto min-h-[169px] rounded-[10px] shadow-card bg-white p-8">
      <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center mb-3">
        <Plus className="w-6 h-6 stroke-primary-500" />
      </div>

      <p className="font-bold text-text-darkgray mb-3">
        {text}
      </p>

      <Link href={buttonLink}>
        <button className="px-[18px] py-2 bg-primary-500 text-white rounded-[10px] font-medium hover:bg-primary-600 transition-colors">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
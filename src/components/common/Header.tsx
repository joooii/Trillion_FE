"use client";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
    back? : boolean;
    text? : string;
}

export default function Header({back = false, text}: HeaderProps){
    const handleBack = () => {
        window.history.back();
    };

    return (
        <header className = "fixed top-0 left-1/2 -translate-x-1/2 w-[393px] pt-[53px] bg-text-inverse z-40">
          <div className = "h-[37px] flex items-center justify-between px-4">
            <div className="w-10">
              {back && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center justify-center w-10 h-10 -ml-2 active:opacity-60 transition-opacity"
                  aria-label="뒤로가기"
                >
                  <ChevronLeft className="w-6 h-6 text-text-darkgray"/>
                </button>
              )}
            </div>    
            <div className="flex-1 text-center">
              <span className="text-xl font-extrabold text-text-darkgray">
                {text}
              </span>
            </div>    
            <div className="w-10" />
          </div>
        </header>
      );
}

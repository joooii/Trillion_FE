"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, BotMessageSquare, FileText } from "lucide-react";

export default function TabBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "홈", icon: House },
    { href: "/chat", label: "", icon: BotMessageSquare, isCenter: true },
    { href: "/summary", label: "요약", icon: FileText },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[393px] bg-white border-t border-gray-200 z-50">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-end justify-between h-[63px] px-[77px] relative">
          {navItems.map(({ href, label, icon: Icon, isCenter }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            if (isCenter) {
              return (
                <Link
                  key={href}
                  href={href}
                  className="absolute left-1/2 -translate-x-1/2 -top-6 flex flex-col items-center justify-center"
                  aria-label="채팅"
                >
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-[#FF1493] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-[#E30084] before:to-[#FF1493] before:blur-lg before:opacity-50 transition-all duration-200 hover:scale-105">
                    <Icon
                      className="w-7 h-7 text-white z-20"
                      strokeWidth={isActive ? 2 : 1.7}
                    />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center justify-center h-full pb-1 transition-all duration-200"
                aria-label={label}
              >
                <Icon
                  className={`w-6 h-6 mb-1 transition-colors ${isActive ? "text-primary-500" : "text-gray-400"}`}
                  strokeWidth={isActive ? 2.3 : 2}
                />
                <span
                  className={`text-xs  transition-colors ${isActive ? "text-primary-500 font-bold" : "text-gray-400 font-medium"}`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

import Image from "next/image";
import LogoMini from "@/assets/images/logo_mini.svg";

interface HeaderHomeProps {
  title: string;
  description: string;
  isHome?: boolean;
}

export default function HeaderHome({
  title,
  description,
  isHome = false,
}: HeaderHomeProps) {
  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-[393px] pt-[65px] z-10 ${isHome ? "bg-primary-500" : "bg-text-inverse"}`}
    >
      <div
        className={`h-[90px] flex flex-col px-4 pl-6 ${isHome ? "text-white" : "text-text-darkgray"}`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center ${isHome ? "bg-white/20" : "bg-primary-200"}`}
          >
            <Image
              src={LogoMini}
              alt="SO:U+ logo"
              width={26}
              height={26}
              className="object-contain"
            />
          </div>

          <p className="text-[25px] font-extrabold leading-none">{title}</p>
        </div>

        <p className={`mt-2 font-medium ${!isHome && "text-text-lightgray"}`}>
          {description}
        </p>
      </div>
    </header>
  );
}

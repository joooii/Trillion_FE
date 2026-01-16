import Image from "next/image";
import LogoMini from "@/assets/images/logo_mini.svg";

export default function HeaderHome() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[393px] pt-[65px] bg-primary-500">
      <div className="h-[90px] flex flex-col px-4 pl-6 text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
            <Image
              src={LogoMini}
              alt="SO:U+ logo"
              width={26}
              height={26}
              className="object-contain"
            />
          </div>

          <p className="text-[25px] font-extrabold leading-none">SO:U+</p>
        </div>

        <p className="mt-2 font-medium">안녕하세요, 김소유님</p>
      </div>
    </header>
  );
}

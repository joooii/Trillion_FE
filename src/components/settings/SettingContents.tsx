"use client";

import Call from "@/assets/images/call.svg";
import ExternalItem from "@/components/settings/ExternalItem";
import CallCenterItem from "@/components/settings/CallCenterItem";
import Inquiry from "@/assets/images/inquiry.svg";
import Policy from "@/assets/images/policy.svg";
import Privacy from "@/assets/images/privacy.svg";
import { User } from "lucide-react";
import AccountActions from "@/components/settings/AccountActions";
import { useUserProfile } from "@/hooks/useProfile";

export default function SettingsContent() {
  const { nickname, isLoading } = useUserProfile();
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80px] h-[80px] rounded-2xl bg-secondary-800 flex items-center justify-center mb-[9px]">
        <User className="w-[50px] h-[50px] stroke-white" />
      </div>

      <p className="text-2xl font-bold text-text-darkgray">
        {isLoading ? "로딩중..." : nickname || "게스트"}
      </p>

      <div className="w-[375px] mt-[26px] px-[20px] py-[12px] mb-[123px]">
        <p className="h-[48px] flex items-center text-xl font-bold text-text-darkgray">
          서비스
        </p>
        <ExternalItem
          icon={Inquiry}
          label="문의하기"
          href="https://www.notion.so/2e8b3190d60080f59185f0c67f1a6989?source=copy_link"
        />
        <ExternalItem
          icon={Policy}
          label="서비스 이용약관"
          href="https://www.notion.so/2e8b3190d600806bbc49c659069629d3?source=copy_link"
        />
        <ExternalItem
          icon={Privacy}
          label="개인정보 처리방침"
          href="https://www.notion.so/2e8b3190d6008048a7bdfbd17011d460?source=copy_link"
        />

        <CallCenterItem icon={Call} label="고객센터 연결" />
      </div>

      <AccountActions />
    </div>
  );
}
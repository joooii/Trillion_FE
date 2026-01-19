"use client";

import { useState } from "react";
import AlertModal from "@/components/common/AlertModal";

export default function AccountActions() {
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] =
    useState<boolean>(false);

  const handleLogout = async () => {
    try {
      // TODO: 회원 탈퇴 API
      console.log("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  const handleWithdraw = async () => {
    try {
      // TODO: 회원 탈퇴 API
      console.log("회원 탈퇴 처리 예정");
      // /auth/onboard로 리다이렉트 처리
    } catch (error) {
      console.error("회원 탈퇴 실패", error);
    } finally {
      setIsOpenWithdrawModal(false);
    }
  };

  return (
    <>
      <div className="w-[375px] grid grid-cols-[184px_auto_184px] items-center text-text-lightgray">
        <button
          className="py-[12px] text-sm text-center"
          onClick={handleLogout}
        >
          로그아웃
        </button>
        <p className="text-center">|</p>
        <button
          className="py-[12px] text-sm text-center"
          onClick={() => setIsOpenWithdrawModal(true)}
        >
          서비스 탈퇴
        </button>
      </div>
      {isOpenWithdrawModal && (
        <AlertModal
          title="정말 탈퇴하시겠어요?"
          text={"탈퇴 버튼 선택 시,계정은 삭제되며\n 복구되지 않습니다."}
          cancelButtonText="취소"
          confirmButtonText="탈퇴하기"
          onCancel={() => setIsOpenWithdrawModal(false)}
          onConfirm={handleWithdraw}
        />
      )}
    </>
  );
}

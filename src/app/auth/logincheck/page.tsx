'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Checkbox from '@/components/common/CheckBox';
import logo from '@/assets/images/logo.svg';
import Button from '@/components/common/Button';

export default function LoginCheckPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const kakaoId = searchParams.get('kakaoId');
  const nickname = searchParams.get('nickname');

  const [allAgreed, setAllAgreed] = useState(false);
  const [ageAgreed, setAgeAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  useEffect(() => {
    if (!kakaoId) {
      alert('카카오 로그인이 필요합니다!');
      router.push('/onboard');
    }
  }, [kakaoId, router]);

  const handleAllAgree = (checked: boolean) => {
    setAllAgreed(checked);
    setAgeAgreed(checked);
    setTermsAgreed(checked);
    setPrivacyAgreed(checked);
  };

  const handleIndividualChange = (
    setter: (value: boolean) => void,
    value: boolean
  ) => {
    setter(value);
    
    setTimeout(() => {
      const newAgeAgreed = setter === setAgeAgreed ? value : ageAgreed;
      const newTermsAgreed = setter === setTermsAgreed ? value : termsAgreed;
      const newPrivacyAgreed = setter === setPrivacyAgreed ? value : privacyAgreed;
      
      setAllAgreed(newAgeAgreed && newTermsAgreed && newPrivacyAgreed);
    }, 0);
  };

  const handleStart = async () => { 
    if (!ageAgreed || !termsAgreed || !privacyAgreed) { 
      alert('필수 약관에 모두 동의하셔야 서비스 이용 가능합니다!');
      return;
    }
    
    try { 
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          kakaoId,
          nickname,
        }),
      });
      
      if (response.ok) {
        router.push('/');
      } else { 
        alert('회원가입 실패했습니다');
      }
    } catch (error) { 
      console.error('회원가입 에러', error);
      alert('오류가 발생했습니다!');
    }
  };

  const openTermsLink = () => {
    window.open('https://www.notion.so/2e8b3190d600806bbc49c659069629d3', '_blank');
  };

  const openPrivacyLink = () => {
    window.open('https://www.notion.so/2e8b3190d6008048a7bdfbd17011d460', '_blank');
  };

  return (
    <div className="min-h-screen bg-text-inverse flex flex-col items-center px-[29px] pt-[57px] pb-[73px]">
      <div className="w-full max-w-[335px] flex flex-col gap-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10">
            <Image
              src={logo}
              alt="SO:U+ 로고"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <h1 className="text-[28px] font-suite-extrabold text-text-darkgray">
            SO:U+
          </h1>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-text-darkgray">
            서비스 사용을 위해 약관에 동의해주세요.
          </h2>
          <p className="text-lg font-semibold text-text-darkgray">
            서비스 이용에 필수적인 약관들이에요.
          </p>
        </div>

        <div className="flex flex-col">
          <Checkbox 
            checked={allAgreed}
            onChange={handleAllAgree}
            label="서비스 이용 약관 전체 동의"
            className="border-b border-gray-300"
            labelClassName='text-text-darkgray font-semibold'
          />

          <Checkbox
            checked={ageAgreed}
            onChange={(checked) => handleIndividualChange(setAgeAgreed, checked)}
            label="만 14세 이상입니다"
            required
            labelClassName='text-text-lightgray'
          />

          <Checkbox
            checked={termsAgreed}
            onChange={(checked) => handleIndividualChange(setTermsAgreed, checked)}
            label="서비스 이용 약관 동의"
            required
            hasLink
            onLinkClick={openTermsLink}
            labelClassName='text-text-lightgray'
          />

          <Checkbox
            checked={privacyAgreed}
            onChange={(checked) => handleIndividualChange(setPrivacyAgreed, checked)}
            label="개인정보 처리방침 동의"
            required
            hasLink
            onLinkClick={openPrivacyLink}
            labelClassName='text-text-lightgray'
          />
        </div>
      </div>

      <div className="flex-1" />

      <div className="w-full max-w-[335px]">
        <Button
          onClick={handleStart}
          disabled={!ageAgreed || !termsAgreed || !privacyAgreed}
          className="!w-full py-4 rounded-xl shadow-btn"
        >
          SO:U+ 시작하기
        </Button>
      </div>
    </div>
  );
}
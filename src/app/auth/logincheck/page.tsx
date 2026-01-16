'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Checkbox from '@/components/common/CheckBox';
import logo from '@/assets/images/logo.svg';

export default function LoginCheckPage() {
  const router = useRouter();
  const [allAgreed, setAllAgreed] = useState(false);
  const [ageAgreed, setAgeAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

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

  const handleStart = () => {
    if (ageAgreed && termsAgreed && privacyAgreed) {
      router.push('/');
    } else {
      alert('필수 약관에 모두 동의해주세요.');
    }
  };

  const openTermsLink = () => {
    window.open('https://www.notion.so/YOUR_TERMS_URL', '_blank');
  };

  const openPrivacyLink = () => {
    window.open('https://www.notion.so/2e8b3190d6008048a7bdfbd17011d460', '_blank');
  };

  return (
    <div className="min-h-screen bg-text-inverse flex flex-col">
      <div className="flex-1 px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-[61px]">
          <div className="w-10 h-10">
            <Image
              src={logo}
              alt="SO:U+ 로고"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-suite-extrabold text-text-darkgray">
            SO:U+
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-text-darkgray">
            서비스 사용을 위해 약관에 동의해주세요.
          </h2>
          <p className="text-lg font-semibold text-text-darkgray">
            서비스 이용에 필수적인 약관들이에요.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <Checkbox
            checked={allAgreed}
            onChange={handleAllAgree}
            label="서비스 이용 약관 전체 동의"
          />

          <Checkbox
            checked={ageAgreed}
            onChange={(checked) => handleIndividualChange(setAgeAgreed, checked)}
            label="만 14세 이상입니다"
            required
          />

          <Checkbox
            checked={termsAgreed}
            onChange={(checked) => handleIndividualChange(setTermsAgreed, checked)}
            label="서비스 이용 약관 동의"
            required
            hasLink
            onLinkClick={openTermsLink}
          />

          <Checkbox
            checked={privacyAgreed}
            onChange={(checked) => handleIndividualChange(setPrivacyAgreed, checked)}
            label="개인정보 처리방침 동의"
            required
            hasLink
            onLinkClick={openPrivacyLink}
          />
        </div>
      </div>

      <div className="px-6 pb-8">
        <button
          onClick={handleStart}
          disabled={!ageAgreed || !termsAgreed || !privacyAgreed}
          className="w-full py-4 rounded-xl font-suite-semibold text-white text-base transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            backgroundColor: (ageAgreed && termsAgreed && privacyAgreed) ? '#E30084' : '#E30084',
          }}
        >
          SO:U+ 시작하기
        </button>
      </div>
    </div>
  );
}
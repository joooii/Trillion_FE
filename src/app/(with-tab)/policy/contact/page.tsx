export default function ContactPage() {
  return (
    <article className="text-[13px] leading-[1.7] text-text-darkgray space-y-6">
      <section className="space-y-1 mt-4">
        <p>
          피드백이 있으시거나 도움이 필요하신 경우, 아래 채널을 통해 언제든
          문의해주세요.
        </p>

        <p>
          서비스를 이용하시면서 느끼신 불편 사항, 개선 아이디어, 혹은 단순한
          응원 메시지까지 모두 남기실 수 있어요.
        </p>

        <p>
          남겨주신 소중한 의견은 빠른 시일 내에 확인하여, 서비스 개선에 적극
          반영하도록 하겠습니다.
        </p>

        <ul className="pl-5">
          <li className="font-semibold list-disc">
            e-mail: vpffp368@naver.com
          </li>
        </ul>
      </section>

      <aside className="bg-table-header rounded-md p-4 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[16px]">💡</span>
          <h2 className="text-[14px] font-semibold">이메일 문의 양식</h2>
        </div>

        <ul className="pl-10 space-y-1 list-disc">
          <li>
            <span className="font-medium">서비스 내 사용 중인 이름</span>
            <p className="text-text-lightgray">
              - SO:U+ [설정]에서 확인하실 수 있어요.
            </p>
          </li>

          <li>
            <span className="font-medium">이메일 주소</span>
            <p className="text-text-lightgray">
              - 답변을 원하실 경우 이메일 주소를 꼭 남겨주세요.
            </p>
          </li>

          <li>
            <span className="font-medium">사용 중인 기기 / OS</span>
            <p className="text-text-lightgray">
              - ex. iPhone 15, Galaxy S24 Ultra, iOS 17.0
            </p>
          </li>

          <li>
            <span className="font-medium">문의 내용</span>
            <p className="text-text-lightgray">
              - 자세히 작성해주시면 더욱 빠르게 서비스 개선이 이뤄질 수 있어요.
            </p>
          </li>

          <li>
            <span className="font-medium">
              스크린샷 / 화면 녹화 (선택 사항)
            </span>
            <p className="text-text-lightgray">
              - 문제 상황을 이해하는 데 큰 도움이 되어요.
            </p>
          </li>
        </ul>
      </aside>
    </article>
  );
}

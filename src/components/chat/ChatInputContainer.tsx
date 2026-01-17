export default function ChatInputContainer() {
  return (
    <div className="p-5 flex flex-col w-[335px] min-h-[555px] mt-[26px] rounded-[20px] shadow-card bg-white">
      {/* 상담 일자 */}
      <div className="flex flex-row items-center">
        <label className="text-sm text-text-lightgray pr-[68px]">
          상담 일자
        </label>
        <input
          type="date"
          className="p-2 w-[176px] h-[30px] border rounded-lg border-text-inverse text-text-darkgray text-xs"
        />
      </div>

      {/* 내용 */}
      <div className="flex flex-col mt-5">
        <label className="text-sm text-text-lightgray pb-2">내용</label>
        <textarea
          className="p-2 w-[295px] min-h-[458px] border rounded-lg border-text-inverse text-text-darkgray text-xs resize-none placeholder:text-text-muted"
          placeholder="상담 내용을 입력하세요"
        />
      </div>
    </div>
  );
}

import { ChatCategory } from "@/types/summaryList";

export const CATEGORY_LABEL_MAP: Record<ChatCategory, string | null> = {
  [ChatCategory.ALL]: null,
  [ChatCategory.PLAN]: "요금제",
  [ChatCategory.ROAMING]: "로밍",
  [ChatCategory.BILLING]: "요금 및 납부",
  [ChatCategory.SERVICE]: "서비스",
};

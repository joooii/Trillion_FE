// src/types/css.d.ts (새 파일 생성!)
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
  }
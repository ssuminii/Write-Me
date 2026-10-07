// AI가 지시를 놓쳐도 결과가 깨지지 않게 생성 후 정리

// "1️⃣ 1️⃣ 접속해요", "1️⃣ 1. 접속해요" → "1️⃣ 접속해요"
const DUPLICATED_STEP = /(\d️?⃣)\s*(?:\d️?⃣|\d+\.)\s*/g

export const cleanReadme = (markdown: string) => markdown.replace(DUPLICATED_STEP, '$1 ')

// 작은 모델이 한글 대신 섞는 글자 (시스템 아ﺕﻜ처, 사용者). 원래 README에 있던 글자는 제외
const FOREIGN = /[Ѐ-ӿ֐-׿؀-ۿ฀-๿぀-ヿ一-鿿ﭐ-﷿ﹰ-﻿]/g

export const hasBrokenText = (markdown: string, source: string) =>
  (markdown.match(FOREIGN) ?? []).some((char) => !source.includes(char))

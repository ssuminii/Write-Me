// AI가 지시를 놓쳐도 결과가 깨지지 않게 생성 후 정리

// "1️⃣ 1️⃣ 접속해요", "1️⃣ 1. 접속해요" → "1️⃣ 접속해요"
const DUPLICATED_STEP = /(\d️?⃣)\s*(?:\d️?⃣|\d+\.)\s*/g

export const cleanReadme = (markdown: string) => markdown.replace(DUPLICATED_STEP, '$1 ')

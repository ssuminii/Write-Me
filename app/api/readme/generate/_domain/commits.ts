// 역할 추론에 쓸모없는 커밋 (GitHub가 자동으로 만든 merge, 파일 이름 변경)
const NOISE = /^(Merge (pull request|branch|remote-tracking branch)|Rename )/

// 커밋 메시지 첫 줄만 남기고, 잡음을 뺀 뒤 끝의 PR·이슈 번호 "(#123)"를 지움
export const cleanCommitMessages = (messages: string[], max: number) =>
  messages
    .map((message) => message.split('\n')[0].trim())
    .filter((line) => line && !NOISE.test(line))
    .map((line) => line.replace(/\s*\(#\d+\)$/, ''))
    .slice(0, max)

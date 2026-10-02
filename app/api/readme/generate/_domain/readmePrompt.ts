import type { ReadmeVersion } from '@/types'
import type { RepoContext } from '../_api/github'
import { findLogoCandidates, summarizeTree } from './fileTree'
import { summarizePackageJson } from './packageJson'
import { findProjectName } from './projectName'
import { absolutizeImages } from './readmeImages'

const INTRO_SECTIONS = [
  '제목: 이모지 + 저장소 정보의 프로젝트 이름 그대로. 대표 이미지는 기존 README에 있는 메인 이미지(배지 제외)를 먼저 쓰고, 없으면 대표 이미지 후보 중 프로젝트 자신의 로고를, 둘 다 없으면 생략. 넣을 때는 제목 아래 빈 줄 뒤에 가운데 정렬로 (<p align="center"><img src="이미지 주소" width="600"></p>). 그 아래 빈 줄, 한 줄 소개를 인용문(>)으로. 배포 링크가 있으면 다시 빈 줄 뒤에 가운데 정렬로, 링크 글자는 "프로젝트 이름 + 서비스" (예: <p align="center">🔗 <a href="배포주소">Catch-Letter 서비스</a></p>)',
  '서비스 소개: 무엇인지 한 문장 → 어떤 사람이 어떤 상황에서 쓰면 좋은지 → 핵심 특징 3~4개 목록. 기술 이야기는 넣지 말고 사용자 입장에서만. 본문과 목록에는 이모지를 넣지 마',
  '사용 방법: 사용자 입장에서 단계마다 숫자 이모지(1️⃣ 2️⃣ 3️⃣)를 한 번만 붙이고, 단계마다 빈 줄. 라이브러리라면 설치와 짧은 코드 예시로',
  '기술 스택: 배지 없이 분류마다 ### 소제목에 이모지를 붙이고(예: ### 🛠️ Tech Stack, ### 📈 Monitoring, ### ⚙️ Dev Tools) 짧은 목록. 관련 있는 것끼리 한 줄에 묶기(예: React, TypeScript, Vite). 패키지 이름(@tanstack/react-query)이 아니라 대표 이름(TanStack Query)으로. 확인된 분류만',
]

const TEAM_SECTION = [
  '팀원: 팀원마다 열 하나인 표로. 머리글에는 "역할"이라는 글자 대신 각자의 실제 역할(FE, BE, Contributor 등)을 써. 표는 하나로, 팀원이 5명 이상이면 사진 크기를 height=100 width=100으로. 팀원 정보가 없으면 생략',
  '   | FE | BE |',
  '   | :---: | :---: |',
  '   | **이름** | **이름** |',
  '   | <img src="아바타주소" height=150 width=150><br>[@아이디](https://github.com/아이디) | (같은 형식) |',
].join('\n')

const START_SECTION =
  '시작하기: package.json의 패키지 매니저에 맞춰 설치 명령어(예: npm install)와 실행 명령어(예: npm run dev)를 반드시 둘 다 하나의 코드 블록에. git clone, cd 명령어는 넣지 마'

const SECTIONS: Record<ReadmeVersion, string[]> = {
  simple: [...INTRO_SECTIONS, TEAM_SECTION, START_SECTION],
  detailed: [
    ...INTRO_SECTIONS,
    '주요 기능 상세: 기능마다 ### 소제목과 2~4줄 목록. 각 줄은 문장이 아니라 명사형으로 짧게 (예: "사용자가 입력한 텍스트 음성으로 변환", "생성된 음성 파일 다운로드"). 페이지 폴더, 컴포넌트 이름, 기존 README를 근거로',
    '시스템 아키텍처: 사용자, 프론트엔드, 서버·API, DB, 외부 서비스, 배포를 ```mermaid flowchart LR``` 그림으로. 의존성과 설정 파일에서 확인된 것만',
    '개발 기간: 저장소 생성일 ~ 마지막 업데이트',
    '폴더 구조: 파일 목록을 2단계 깊이까지 트리로, 주요 폴더 옆에 짧은 설명 주석',
    'ERD: DB 스키마 파일이 있을 때만 ```mermaid erDiagram```으로. 없으면 생략',
    'API 명세: 서버·API 라우트 파일(예: app/api/**/route.ts, pages/api, routes, controllers)이 있을 때만 메서드, 경로, 설명을 표로. 파일 경로와 이름으로 판단하고, 없으면 생략',
    TEAM_SECTION,
    '역할 분담: 팀원마다 ### 이름 소제목과 커밋 메시지를 근거로 한 담당 업무 2~3줄 목록. 각 줄은 문장이 아니라 명사형으로 끝내 (예: "스케줄러 테스트 코드 정리 및 README 문서 업데이트")',
    START_SECTION,
  ],
}

export const README_SYSTEM = [
  '너는 GitHub 저장소 정보를 보고 한국어 README.md를 작성하는 도우미야.',
  '카드를 채운 문서가 아니라, 처음 온 사람에게 서비스를 소개하는 자연스러운 글처럼 써.',
  '말투는 친근한 해요체로, 과장하거나 광고처럼 쓰지 마. 섹션 제목(##) 앞에는 어울리는 이모지를 붙여.',
  '주요 기능 상세와 역할 분담을 뺀 모든 문장(소개, 목록 포함)은 "~해요", "~예요"로 끝내. 기존 README가 영어거나 "~한다", "~이다", "~함"으로 쓰여 있어도 해요체로 바꿔 써.',
  '제목, 인용문, 목록, 표, 코드 블록 같은 블록 사이에는 항상 빈 줄을 넣어.',
  '섹션(##)과 섹션 사이에는 여백을 위해 빈 줄, <br>, 빈 줄 순서로 넣어.',
  '기술 이름, 라이브러리 이름, 커밋 메시지에 나온 영역 이름과 기술 용어(예: Fiber, Flight, DOM nesting)는 한글로 옮기지 말고 영어 원문 그대로 써.',
  '팀원 이름은 주어진 그대로 쓰고, 한글로 바꾸거나 지어내지 마.',
  '기술 스택은 package.json과 설정 파일(예: .github/workflows → GitHub Actions, vercel.json → Vercel)에서 확인된 것만 핵심 위주로 써.',
  '팀원 역할은 package.json으로 저장소 성격(React·Next.js·Vite 등은 FE, Express·NestJS 등은 BE)을 기본으로 정하고, 각자 커밋 메시지로 다르게 보이면 조정해. 애매하면 Contributor로 써.',
  '저장소 정보에서 알 수 없는 내용(연락처, 성과 수치 등)은 지어내지 말고 섹션째 생략해.',
  '마크다운 본문만 출력하고, 앞뒤에 설명이나 ``` 코드 블록 감싸기를 붙이지 마.',
].join('\n')

// 토큰 측정을 위해 항목별로 나눠서 만들고, 보낼 때는 합쳐서 보냄
export function buildPromptParts(context: RepoContext, version: ReadmeVersion) {
  const period = `${context.createdAt.slice(0, 10)} ~ ${context.pushedAt.slice(0, 10)}`
  const rawBase = `https://raw.githubusercontent.com/${context.owner}/${context.repo}/${context.branch}`
  const team = context.contributors.map(({ login, name, avatarUrl, commits }) =>
    [`- ${name} (@${login}), 아바타: ${avatarUrl}`, ...commits.map((c) => `  - ${c}`)].join('\n'),
  )

  return {
    '섹션 지시': [
      '다음 순서와 내용으로 README를 작성해줘.',
      ...SECTIONS[version].map((section, i) => `${i + 1}. ${section}`),
    ].join('\n'),
    '저장소 정보': [
      `## 저장소: ${context.owner}/${context.repo}`,
      `프로젝트 이름: ${findProjectName(context.readme, context.htmlTitle, context.repo)}`,
      `설명: ${context.description ?? '없음'}`,
      `배포 링크: ${context.homepage ?? '없음'}`,
      `주 언어: ${context.language ?? '없음'}`,
      `기간: ${period}`,
    ].join('\n'),
    'package.json': [
      '## package.json (라이브러리는 이름만)',
      summarizePackageJson(context.packageJson, context.tree),
    ].join('\n'),
    '기존 README': [
      '## 기존 README',
      context.readme ? absolutizeImages(context.readme, rawBase) : '없음',
    ].join('\n'),
    'DB 스키마': ['## DB 스키마 파일', context.schema ?? '없음'].join('\n'),
    '팀원·커밋': [
      '## 팀원 (커밋 수 순, 각자 최근 커밋 메시지)',
      team.length ? team.join('\n') : '없음',
    ].join('\n'),
    '대표 이미지 후보': [
      `## 대표 이미지 후보 (이미지 주소: ${rawBase}/경로)`,
      findLogoCandidates(context.tree).join('\n') || '없음',
    ].join('\n'),
    '파일 목록': [
      '## 파일 목록 (README에 쓰이지 않는 파일은 빼고, 폴더별 파일 수로 요약)',
      summarizeTree(context.tree).join('\n'),
    ].join('\n'),
  }
}

export const buildReadmePrompt = (context: RepoContext, version: ReadmeVersion) =>
  Object.values(buildPromptParts(context, version)).join('\n\n')

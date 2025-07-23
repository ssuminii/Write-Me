import type { ReadmeCardProps, ReadmeData } from '@/types'

export const mockReadmeCards: ReadmeCardProps[] = [
  { id: 1, title: '깔끔한 사이드 프로젝트 소개', author: 'ssuminii', thumbnailUrl: '/image.png', likes: 23, liked: true },
  { id: 2, title: '기술 스택 중심 README', author: 'devkim', thumbnailUrl: '/image.png', likes: 10, liked: false },
  { id: 3, title: '팀 프로젝트 템플릿', author: 'hyejin', thumbnailUrl: '/image.png', likes: 45, liked: true },
  { id: 4, title: '초보자용 README 시작 가이드', author: 'rookieFE', thumbnailUrl: '/image.png', likes: 5, liked: false },
  { id: 5, title: '감성 회고형 리드미', author: 'sunny', thumbnailUrl: '/image.png', likes: 14, liked: true },
  { id: 6, title: '애니메이션 포트폴리오 README', author: 'motiondev', thumbnailUrl: '/image.png', likes: 33, liked: false },
  { id: 7, title: 'Next.js 기반 소개 템플릿', author: 'nextbee', thumbnailUrl: '/image.png', likes: 21, liked: true },
  { id: 8, title: '나만의 블로그 리드미', author: 'notedev', thumbnailUrl: '/image.png', likes: 7, liked: false },
  { id: 9, title: '스타일이 예쁜 README', author: 'designfe', thumbnailUrl: '/image.png', likes: 18, liked: true },
  { id: 10, title: '오픈소스 참여용 템플릿', author: 'osslover', thumbnailUrl: '/image.png', likes: 12, liked: false },
  { id: 11, title: '개발자 소개용 README', author: 'prodev', thumbnailUrl: '/image.png', likes: 48, liked: true },
  { id: 12, title: '기술 블로그 포함 템플릿', author: 'techbloger', thumbnailUrl: '/image.png', likes: 9, liked: false },
  { id: 13, title: '심플 다크모드 README', author: 'darklight', thumbnailUrl: '/image.png', likes: 17, liked: false },
  { id: 14, title: '인스타 느낌 README', author: 'instadev', thumbnailUrl: '/image.png', likes: 30, liked: true },
  { id: 15, title: '이력서 스타일 README', author: 'jobready', thumbnailUrl: '/image.png', likes: 22, liked: false },
  { id: 16, title: 'UX 포트폴리오형 템플릿', author: 'uxfe', thumbnailUrl: '/image.png', likes: 26, liked: true },
  { id: 17, title: '협업 중심 README', author: 'teamworker', thumbnailUrl: '/image.png', likes: 13, liked: false },
  { id: 18, title: '하루만에 만드는 README', author: 'quickdev', thumbnailUrl: '/image.png', likes: 6, liked: false },
  { id: 19, title: '스터디 기록용 README', author: 'studycat', thumbnailUrl: '/image.png', likes: 29, liked: true },
  { id: 20, title: '미니멀한 템플릿', author: 'minimalist', thumbnailUrl: '/image.png', likes: 11, liked: false },
]

export const mockReadme: ReadmeData = {
  id: 1, 
  title: 'Simple Profile README', 
  author: 'ssuminii', 
  source: `
# Hello, I'm ssuminii 🚀

> 프론트엔드 개발자입니다.  
> 주로 Next.js와 TypeScript를 활용하여 개발하고 있습니다.

## Skills
- JavaScript / TypeScript
- React / Next.js
- Tailwind CSS
- Zustand
- Supabase

## Projects
- Catch-Letter (사용자 중심 경험을 강조한 편지 서비스)
- Write Me (개발자를 위한 README 생성 도구)

`, 
  hashtags: ['Project', 'Simple', 'Next.js'], 
  likes: 32, 
  liked: true, 
  comments: [
    {
      id: 1,
      user_id: 'juniorDev',
      content: '정말 도움이 많이 되었습니다!',
      created_at: '2025-06-20',
    },
    {
      id: 2,
      user_id: 'codeMaster',
      content: 'Markdown 활용이 좋네요!',
      created_at: '2025-06-21',
    },
  ],
}

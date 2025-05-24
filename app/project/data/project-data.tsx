import { Title, ImageUpload } from '../_components'
import type { CardItem } from '@/components/dnd/card-list'

export const projectCards = (
  markdown: string,
  setMarkdown: (value: string) => void
): CardItem[] => [
  {
    id: 'card-1',
    title: '프로젝트 제목',
    content: <Title value={markdown} onChange={setMarkdown} />,
  },
  { id: 'card-2', title: '프로젝트 메인 이미지 업로드', content: <ImageUpload /> },
  { id: 'card-3', title: '프로젝트 개요 및 간단 소개', content: '' },
  { id: 'card-4', title: '프로젝트 링크', content: '' },
  { id: 'card-5', title: '프로젝트 팀원', content: '' },
  { id: 'card-6', title: '프로젝트 기간', content: '' },
  { id: 'card-7', title: '기술 스택', content: '' },
  { id: 'card-8', title: '폴더 구조', content: '' },
  { id: 'card-9', title: '주요 기능', content: '' },
  { id: 'card-10', title: '담당 기능', content: '' },
  { id: 'card-11', title: 'Contact', content: '' },
]

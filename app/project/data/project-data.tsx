import { Title, ImageUpload, Overview, Site } from '../_components'
import type { CardItem } from '@/components/dnd/card-list'

export const projectCards = (
  title: string,
  onTitleChange: (value: string) => void,
  onImageUpload: (markdownImageHtml: string) => void,
  overview: string,
  onOverviewChange: (value: string) => void
): CardItem[] => [
  {
    id: 'card-1',
    title: '프로젝트 제목',
    content: <Title value={title} onChange={onTitleChange} />,
    markdown: `# ${title}`,
  },
  {
    id: 'card-2',
    title: '프로젝트 메인 이미지 업로드',
    content: <ImageUpload onImageUpload={onImageUpload} />,
  },
  {
    id: 'card-3',
    title: '프로젝트 개요 및 간단 소개',
    content: <Overview value={overview} onChange={onOverviewChange} />,
    markdown: `## 프로젝트 소개 \n ${overview}`,
  },
  { id: 'card-4', title: '프로젝트 링크', content: <Site /> },
  { id: 'card-5', title: '프로젝트 팀원', content: '' },
  { id: 'card-6', title: '프로젝트 기간', content: '' },
  { id: 'card-7', title: '기술 스택', content: '' },
  { id: 'card-8', title: '폴더 구조', content: '' },
  { id: 'card-9', title: '주요 기능', content: '' },
  { id: 'card-10', title: '담당 기능', content: '' },
  { id: 'card-11', title: 'Contact', content: '' },
]

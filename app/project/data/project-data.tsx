import { Title, ImageUpload, Overview, Site } from '../_components'
import type { CardItem } from '@/components/dnd/card-list'
import type { ProjectState, ProjectHandlers } from '../_models/project'

export const projectCards = (state: ProjectState, handlers: ProjectHandlers): CardItem[] => [
  {
    id: 'card-1',
    title: '프로젝트 이름',
    content: <Title value={state.title} onChange={handlers.onTitleChange} />,
    markdown: `# ${state.title}`,
  },
  {
    id: 'card-2',
    title: '프로젝트 메인 이미지 업로드',
    content: <ImageUpload onImageUpload={handlers.onImageUpload} />,
  },
  {
    id: 'card-3',
    title: '프로젝트 개요 및 간단 소개',
    content: <Overview value={state.overview} onChange={handlers.onOverviewChange} />,
    markdown: `**${state.overview}**`,
  },
  {
    id: 'card-4',
    title: '프로젝트 링크',
    content: (
      <Site name={state.site.name} link={state.site.link} onChange={handlers.onSiteChange} />
    ),
    markdown: `🔗 [${state.site.name}](${state.site.link})`,
  },
  { id: 'card-5', title: '프로젝트 팀원', content: '' },
  { id: 'card-6', title: '프로젝트 기간', content: '' },
  { id: 'card-7', title: '기술 스택', content: '' },
  { id: 'card-8', title: '폴더 구조', content: '' },
  { id: 'card-9', title: '주요 기능', content: '' },
  { id: 'card-10', title: '담당 기능', content: '' },
  { id: 'card-11', title: 'Contact', content: '' },
]

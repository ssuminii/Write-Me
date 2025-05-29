import {
  Title,
  ImageUpload,
  Overview,
  Site,
  FolderStructure,
  TeamMembers,
  Timeframe,
  Stack,
  Roles,
  FeatureSection,
} from '../_components'
import type { CardItem } from '@/components/dnd/card-list'
import type { ProjectState, ProjectHandlers } from '../_models/project'
import { generateStackMDTable, generateTeamMDTable } from '@/utils/markdown'

export const projectCards = (
  state: ProjectState,
  handlers: ProjectHandlers,
  collapsedMap: Record<string, boolean>
): CardItem[] => [
  {
    id: 'card-1',
    title: '프로젝트 이름',
    content: <Title value={state.title} onChange={handlers.onTitleChange} />,
    markdown: `# ${state.title}`,
    collapsed: collapsedMap['card-1'] ?? false,
  },

  {
    id: 'card-2',
    title: '프로젝트 메인 이미지 업로드',
    content: <ImageUpload onImageUpload={handlers.onImageUpload} />,
    collapsed: collapsedMap['card-2'] ?? false,
  },

  {
    id: 'card-3',
    title: '프로젝트 개요 및 간단 소개',
    content: <Overview value={state.overview} onChange={handlers.onOverviewChange} />,
    markdown: `**${state.overview}**`,
    collapsed: collapsedMap['card-3'] ?? false,
  },

  {
    id: 'card-4',
    title: '프로젝트 링크',
    content: (
      <Site name={state.site.name} link={state.site.link} onChange={handlers.onSiteChange} />
    ),
    markdown: `🔗 [${state.site.name}](${state.site.link})`,
    collapsed: collapsedMap['card-4'] ?? false,
  },

  {
    id: 'card-5',
    title: '프로젝트 팀원',
    content: <TeamMembers members={state.members} onMembersChange={handlers.onMembersChange} />,
    markdown: ['## 👥 팀원 소개', generateTeamMDTable(state.members)].join('\n\n'),
    collapsed: collapsedMap['card-5'] ?? false,
  },

  {
    id: 'card-6',
    title: '프로젝트 기간',
    content: (
      <Timeframe
        start={state.duration.start}
        end={state.duration.end}
        onChange={handlers.onDurationChange}
        phases={state.phases}
        onPhasesChange={handlers.onPhasesChange}
      />
    ),
    markdown: [
      '## 🗓️ 개발 기간',
      `#### 전체 기간: ${state.duration.start} ~ ${state.duration.end}`,
      ...(state.phases.length > 0
        ? state.phases.map((p) => `- ${p.name}: ${p.start} ~ ${p.end}`)
        : []),
    ].join('\n'),
    collapsed: collapsedMap['card-6'] ?? false,
  },

  {
    id: 'card-7',
    title: '기술 스택',
    content: <Stack stacks={state.stacks} onStacksChange={handlers.onStacksChange} />,
    markdown: ['## 🛠️ 기술 스택', generateStackMDTable(state.stacks)].join('\n\n'),
    collapsed: collapsedMap['card-7'] ?? false,
  },

  {
    id: 'card-8',
    title: '폴더 구조',
    content: (
      <FolderStructure value={state.folderStructure} onChange={handlers.onFolderStructureChange} />
    ),
    markdown: ['## 📁 폴더구조', '```', state.folderStructure, '```'].join('\n'),
    collapsed: collapsedMap['card-8'] ?? false,
  },

  {
    id: 'card-9',
    title: '주요 기능',
    content: <FeatureSection />,
    collapsed: collapsedMap['card-9'] ?? false,
  },

  {
    id: 'card-10',
    title: '역할분담',
    content: <Roles roles={state.roles} onRolesChange={handlers.onRolesChange} />,
    markdown: [
      '## 👩🏻‍💻 역할분담',
      '',
      ...state.roles.flatMap(({ name, role }) => [`### ▪ ${name}`, '', role.trim(), '']),
    ].join('\n'),
    collapsed: collapsedMap['card-10'] ?? false,
  },
]

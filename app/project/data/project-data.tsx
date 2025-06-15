import {
  Title,
  Overview,
  Site,
  FolderStructure,
  Timeframe,
  Stack,
  Roles,
  FeatureSection,
  TeamMembers,
} from '../_components'
import type { CardItem } from '@/types'
import type { ProjectState, ProjectHandlers } from '../_models/project'
import { generateStackMDTable, generateTeamMDTable } from '@/utils/markdown'
import ImageUpload from '@/components/image-upload'

export const ProjectCards = (
  state: ProjectState,
  handlers: ProjectHandlers,
  collapse: Record<string, boolean>,
  onToggleCollapse: (id: string) => void
): CardItem[] => [
  {
    id: 'project-title',
    title: '프로젝트 이름',
    content: <Title value={state.title} onChange={handlers.onTitleChange} />,
    markdown: `# ${state.title}`,
    collapsed: collapse['project-title'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-title'),
  },

  {
    id: 'project-main-image',
    title: '프로젝트 메인 이미지 업로드',
    content: (
      <ImageUpload
        image={state.mainImageUpload}
        onImageUploadChange={handlers.onMainImageUploadChange}
      />
    ),
    markdown: `<img width="${state.mainImageUpload.size.width}" height="${state.mainImageUpload.size.height}" alt="Main-Image" src="${state.mainImageUpload.imageUrl}" />`,
    collapsed: collapse['project-main-image'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-main-image'),
  },

  {
    id: 'project-overview',
    title: '프로젝트 개요 및 간단 소개',
    content: <Overview value={state.overview} onChange={handlers.onOverviewChange} />,
    markdown: `**${state.overview}**`,
    collapsed: collapse['project-overview'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-overview'),
  },

  {
    id: 'project-link',
    title: '프로젝트 링크',
    content: (
      <Site name={state.site.name} link={state.site.link} onChange={handlers.onSiteChange} />
    ),
    markdown: `🔗 [${state.site.name}](${state.site.link})`,
    collapsed: collapse['project-link'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-link'),
  },

  {
    id: 'project-members',
    title: '프로젝트 팀원',
    content: <TeamMembers members={state.members} onMembersChange={handlers.onMembersChange} />,
    markdown: ['## 👥 팀원 소개', generateTeamMDTable(state.members)].join('\n\n'),
    collapsed: collapse['project-members'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-members'),
  },

  {
    id: 'project-period',
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
    collapsed: collapse['project-period'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-period'),
  },

  {
    id: 'project-stack',
    title: '기술 스택',
    content: <Stack stacks={state.stacks} onStacksChange={handlers.onStacksChange} />,
    markdown: ['## 🛠️ 기술 스택', generateStackMDTable(state.stacks)].join('\n\n'),
    collapsed: collapse['project-stack'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-stack'),
  },

  {
    id: 'project-folder',
    title: '폴더 구조',
    content: (
      <FolderStructure value={state.folderStructure} onChange={handlers.onFolderStructureChange} />
    ),
    markdown: ['## 📁 폴더구조', '```', state.folderStructure, '```'].join('\n'),
    collapsed: collapse['project-folder'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-folder'),
  },

  {
    id: 'project-features',
    title: '주요 기능',
    content: (
      <FeatureSection features={state.features} onFeaturesChange={handlers.onFeaturesChange} />
    ),
    markdown: [
      '## 🚀 주요 기능',
      ...state.features.map(({ feature, description, imageUpload }) =>
        [
          `### ${feature}`,
          description,
          `<img width="${imageUpload.size.width}" height="${imageUpload.size.height}" src="${imageUpload.imageUrl}" alt="${feature}-image" />`,
        ].join('\n\n')
      ),
    ].join('\n\n'),
    collapsed: collapse['project-features'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-features'),
  },

  {
    id: 'project-roles',
    title: '역할분담',
    content: <Roles roles={state.roles} onRolesChange={handlers.onRolesChange} />,
    markdown: [
      '## 👩🏻‍💻 역할분담',
      ...state.roles.flatMap(({ name, role }) => [`### ▪ ${name}`, role.trim()]),
    ].join('\n\n'),
    collapsed: collapse['project-roles'] ?? false,
    onToggleCollapse: () => onToggleCollapse('project-roles'),
  },
]

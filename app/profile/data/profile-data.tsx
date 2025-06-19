import { generateBadgeUrl, generateCapsuleRender } from '@/utils/markdown'
import {
  Achievements,
  Introduce,
  Project,
  TopLangs,
  Stats,
  Streak,
  TechStack,
  CapsuleRender,
} from '../_components'
import type { ProfileHandlers, ProfileState } from '../_modles/profile'
import type { CardItem } from '@/types'
import ImageUpload from '@/components/image-upload'

export const ProfileCards = (
  state: ProfileState,
  handlers: ProfileHandlers,
  collapse: Record<string, boolean>,
  onToggleCollapse: (id: string) => void
): CardItem[] => [
  {
    id: 'capsule-render',
    title: 'Capsule Render',
    content: (
      <CapsuleRender
        capsuleRender={state.capsuleRender}
        onCapsuleRenderChange={handlers.onCapsuleRenderChange}
      />
    ),
    markdown: generateCapsuleRender(state.capsuleRender),
    collapsed: collapse['capsule-render'] ?? false,
    onToggleCollapse: () => onToggleCollapse('capsule-render'),
  },
  {
    id: 'profile-image',
    title: '프로필 메인 이미지 업로드',
    content: (
      <ImageUpload
        image={state.profileImageUpload}
        onImageUploadChange={handlers.onProfileImageUpload}
      />
    ),
    markdown: `<img width="${state.profileImageUpload.size.width}" height="${state.profileImageUpload.size.height}" alt="Main-Image" src="${state.profileImageUpload.imageUrl}" />`,
    collapsed: collapse['profile-image'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-image'),
  },
  {
    id: 'profile-introduce',
    title: '간단 자기소개',
    content: <Introduce value={state.introduce} onChange={handlers.onIntroduceChange} />,
    markdown: `${state.introduce}`,
    collapsed: collapse['profile-introduce'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-introduce'),
  },
  {
    id: 'profile-project',
    title: '프로젝트',
    content: <Project projects={state.projects} onProjectsChange={handlers.onProjectsChange} />,
    markdown: [
      '## Project',
      ...state.projects.map(({ title, desc, link }) =>
        [`#### ${title}`, desc, `🔗 [${link}](${link})`].join('\n\n')
      ),
    ].join('\n'),
    collapsed: collapse['profile-project'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-project'),
  },
  {
    id: 'profile-achievements',
    title: '외부 활동 및 수상 내역',
    content: (
      <Achievements
        achievements={state.achievements}
        onAchievementsChange={handlers.onAchievementsChange}
      />
    ),
    markdown: [
      '## 외부 활동 및 수상 내역',
      ...state.achievements.map(({ title, desc, start, end }) =>
        [`#### ${title}`, `활동 기간: ${start} ~ ${end}`, desc].join('\n\n')
      ),
    ].join('\n'),
    collapsed: collapse['profile-achievements'] ?? false,
    onToggleCollapse: () => onToggleCollapse('profile-achievements'),
  },
  {
    id: 'github-stats',
    title: 'GitHub Stats',
    content: <Stats value={state.stats} onChange={handlers.onStatsChange} />,
    markdown: `![${state.stats}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${state.stats}&show_icons=true&count_private=true)`,
    collapsed: collapse['github-stats'] ?? false,
    onToggleCollapse: () => onToggleCollapse('github-stats'),
  },
  {
    id: 'streak-stats',
    title: 'GitHub Streak',
    content: <Streak value={state.streak} onChange={handlers.onStreakChange} />,
    markdown: `[![GitHub Streak](https://streak-stats.demolab.com/?user=${state.streak})](https://git.io/streak-stats)`,
    collapsed: collapse['streak-stats'] ?? false,
    onToggleCollapse: () => onToggleCollapse('streak-stats'),
  },
  {
    id: 'top-langs',
    title: 'Most Used Languages',
    content: <TopLangs value={state.topLangs} onChange={handlers.onTopLangsChange} />,
    markdown: `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${state.topLangs}&layout=compact)`,
    collapsed: collapse['top-langs'] ?? false,
    onToggleCollapse: () => onToggleCollapse('top-langs'),
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    content: (
      <TechStack techStacks={state.techStacks} onTechStacksChange={handlers.onTechStacksChange} />
    ),
    markdown: [
      '## Tech Stack',
      ...state.techStacks.map(({ name, style, bgColor, logoColor }) =>
        generateBadgeUrl(name, style, bgColor, logoColor)
      ),
    ].join('\n'),
    collapsed: collapse['tech-stack'] ?? false,
    onToggleCollapse: () => onToggleCollapse('tech-stack'),
  },
]

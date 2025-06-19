'use client'

import { useState } from 'react'
import type { ProfileState, ProfileHandlers } from '../_modles/profile'

export function useProfileForm() {
  const [state, setState] = useState<ProfileState>({
    introduce: '',
    projects: [{ id: Date.now(), title: '', desc: '', link: '' }],
    achievements: [{ id: Date.now(), title: '', start: '', end: '', desc: '' }],
    topLangs: { id: '', layout: '' },
    stats: { id: '', theme: '' },
    streak: { id: '', theme: '' },
    techStacks: [{ id: Date.now(), style: '', name: '', bgColor: '', logoColor: '' }],
    capsuleRender: {
      type: '',
      height: '',
      background: '',
      text: '',
      textColor: '',
      textAnimation: '',
      theme: '',
    },
    profileImageUpload: { imageUrl: '', size: { width: 0, height: 0 } },
  })

  const handlers: ProfileHandlers = {
    onIntroduceChange: (v) => setState((prev) => ({ ...prev, introduce: v })),
    onProjectsChange: (v) => setState((prev) => ({ ...prev, projects: v })),
    onAchievementsChange: (v) => setState((prev) => ({ ...prev, achievements: v })),
    onTopLangsChange: (v) => setState((prev) => ({ ...prev, topLangs: v })),
    onStatsChange: (v) => setState((prev) => ({ ...prev, stats: v })),
    onStreakChange: (v) => setState((prev) => ({ ...prev, streak: v })),
    onTechStacksChange: (v) => setState((prev) => ({ ...prev, techStacks: v })),
    onCapsuleRenderChange: (v) => setState((prev) => ({ ...prev, capsuleRender: v })),
    onProfileImageUpload: (v) => setState((prev) => ({ ...prev, profileImageUpload: v })),
  }

  return { state, handlers }
}

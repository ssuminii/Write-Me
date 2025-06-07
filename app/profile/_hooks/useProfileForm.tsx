'use client'

import { useState } from 'react'
import type { ProfileState, ProfileHandlers } from '../_modles/profile'

export function useProfileForm() {
  const [state, setState] = useState<ProfileState>({
    introduce: '',
    projects: [{ id: Date.now(), title: '', desc: '', link: '' }],
    achievements: [{ id: Date.now(), title: '', start: '', end: '', desc: '' }],
    mostUsedLanguages: '',
    stats: '',
  })

  const handlers: ProfileHandlers = {
    onIntroduceChange: (v) => setState((prev) => ({ ...prev, introduce: v })),
    onProjectsChange: (v) => setState((prev) => ({ ...prev, projects: v })),
    onAchievementsChange: (v) => setState((prev) => ({ ...prev, achievements: v })),
    onMostUsedLanguagesChange: (v) => setState((prev) => ({ ...prev, mostUsedLanguages: v })),
    onStatsChange: (v) => setState((prev) => ({ ...prev, stats: v })),
  }

  return { state, handlers }
}

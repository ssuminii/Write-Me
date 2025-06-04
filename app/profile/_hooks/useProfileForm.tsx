'use client'

import { useState } from 'react'
import type { ProfileState, ProfileHandlers } from '../_modles/profile'

export function useProfileForm() {
  const [state, setState] = useState<ProfileState>({
    introduce: '',
    projects: [{ id: Date.now(), title: '', desc: '', link: '' }],
  })

  const handlers: ProfileHandlers = {
    onIntroduceChange: (v) => setState((prev) => ({ ...prev, introduce: v })),
    onProjectsChange: (v) => setState((prev) => ({ ...prev, projects: v })),
  }

  return { state, handlers }
}

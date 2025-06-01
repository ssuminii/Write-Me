'use client'

import { useState } from 'react'
import type { ProfileState, ProfileHandlers } from '../_modles/profile'

export function useProfileForm() {
  const [state, setState] = useState<ProfileState>({
    introduce: '',
  })

  const handlers: ProfileHandlers = {
    onIntroduceChange: (v) => setState((prev) => ({ ...prev, introduce: v })),
  }

  return { state, handlers }
}

'use client'

import { useState } from 'react'
import type { ProjectState, ProjectHandlers } from '../_models/project'

export function useProjectForm() {
  const [state, setState] = useState<ProjectState>({
    title: '',
    overview: '',
    site: { name: '', link: '' },
  })

  const handlers: ProjectHandlers = {
    onTitleChange: (v) => setState((prev) => ({ ...prev, title: v })),
    onOverviewChange: (v) => setState((prev) => ({ ...prev, overview: v })),
    onSiteChange: (v) => setState((prev) => ({ ...prev, site: v })),
    onImageUpload: (html) => console.log('이미지 업로드:', html),
  }

  return { state, handlers }
}

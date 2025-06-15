'use client'

import { useState } from 'react'
import type { ProjectState, ProjectHandlers } from '../_models/project'

export function useProjectForm() {
  const [state, setState] = useState<ProjectState>({
    title: '',
    overview: '',
    site: { name: '', link: '' },
    folderStructure: '',
    duration: { start: '', end: '' },
    phases: [{ id: Date.now(), name: '', start: '', end: '' }],
    members: [{ id: Date.now(), role: '', name: '', github: '' }],
    stacks: [{ id: Date.now(), stack: '', reason: '' }],
    roles: [{ id: Date.now(), name: '', role: '' }],
    features: [
      {
        id: Date.now(),
        feature: '',
        description: '',
        imageUpload: { imageUrl: '', size: { width: 0, height: 0 } },
      },
    ],
    mainImageUpload: { imageUrl: '', size: { width: 0, height: 0 } },
  })

  const handlers: ProjectHandlers = {
    onTitleChange: (v) => setState((prev) => ({ ...prev, title: v })),
    onOverviewChange: (v) => setState((prev) => ({ ...prev, overview: v })),
    onSiteChange: (v) => setState((prev) => ({ ...prev, site: v })),
    onFolderStructureChange: (v) => setState((prev) => ({ ...prev, folderStructure: v })),
    onDurationChange: (v) => setState((prev) => ({ ...prev, duration: v })),
    onPhasesChange: (v) => setState((prev) => ({ ...prev, phases: v })),
    onMembersChange: (v) => setState((prev) => ({ ...prev, members: v })),
    onStacksChange: (v) => setState((prev) => ({ ...prev, stacks: v })),
    onRolesChange: (v) => setState((prev) => ({ ...prev, roles: v })),
    onFeaturesChange: (v) => setState((prev) => ({ ...prev, features: v })),
    onMainImageUploadChange: (v) => setState((prev) => ({ ...prev, mainImageUpload: v })),
  }

  return { state, handlers }
}

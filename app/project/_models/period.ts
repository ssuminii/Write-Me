export interface TotalDurationInfo {
  start: string
  end: string
}

export interface Phase {
  id: number 
  name: string 
  start: string 
  end: string
}

export interface TimeframeProps extends TotalDurationInfo {
  onChange: (v: TotalDurationInfo) => void
  phases: Phase[] 
  onPhasesChange: (phases: Phase[]) => void 
}


export interface PhaseDurationsProps {
  phases: Phase[]
  onChange: (phases: Phase[]) => void
}
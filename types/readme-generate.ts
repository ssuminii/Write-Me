export type ReadmeVersion = 'simple' | 'detailed'

export interface GenerateReadmeRequest {
  repoUrl: string
  version: ReadmeVersion
}

export interface GenerateReadmeResponse {
  markdown: string
  usage: { inputTokens: number; outputTokens: number }
}

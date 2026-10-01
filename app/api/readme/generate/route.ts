import { AiError, generateText } from './_api/ai'
import { fetchRepoContext, GithubError, parseRepoUrl } from './_api/github'
import type { ReadmeVersion } from '@/types'
import { buildReadmePrompt, README_SYSTEM } from './_domain/readmePrompt'

export async function POST(request: Request) {
  try {
    const { repoUrl, version } = await request.json()
    const readmeVersion: ReadmeVersion = version === 'detailed' ? 'detailed' : 'simple'
    const { owner, repo } = parseRepoUrl(String(repoUrl ?? ''))
    const context = await fetchRepoContext(owner, repo)

    const { text, inputTokens, outputTokens } = await generateText(
      README_SYSTEM,
      buildReadmePrompt(context, readmeVersion),
    )

    return Response.json({ markdown: text, usage: { inputTokens, outputTokens } })
  } catch (error) {
    if (error instanceof GithubError || error instanceof AiError) {
      return Response.json({ message: error.message }, { status: error.status })
    }
    console.error(error)
    return Response.json(
      { message: 'README를 만들지 못했어요. 다시 시도해주세요.' },
      { status: 500 },
    )
  }
}

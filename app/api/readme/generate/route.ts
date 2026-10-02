import { AiError, countTokens, generateText } from './_api/ai'
import { fetchRepoContext, GithubError, parseRepoUrl } from './_api/github'
import type { ReadmeVersion } from '@/types'
import { cleanReadme } from './_domain/cleanReadme'
import { buildPromptParts, buildReadmePrompt, README_SYSTEM } from './_domain/readmePrompt'
import type { RepoContext } from './_api/github'

// 개발 환경 전용: README를 만들지 않고 항목별 입력 토큰만 셈
async function measureTokens(context: RepoContext, version: ReadmeVersion) {
  const parts = { '시스템 규칙': README_SYSTEM, ...buildPromptParts(context, version) }
  const counts = await Promise.all(Object.values(parts).map(countTokens))
  const total = await countTokens(`${README_SYSTEM}\n\n${buildReadmePrompt(context, version)}`)
  return {
    total,
    parts: Object.fromEntries(Object.keys(parts).map((name, i) => [name, counts[i]])),
    files: context.tree.length,
  }
}

export async function POST(request: Request) {
  try {
    const { repoUrl, version, measure } = await request.json()
    const readmeVersion: ReadmeVersion = version === 'detailed' ? 'detailed' : 'simple'
    const { owner, repo } = parseRepoUrl(String(repoUrl ?? ''))
    const context = await fetchRepoContext(owner, repo)

    if (measure && process.env.NODE_ENV !== 'production') {
      return Response.json(await measureTokens(context, readmeVersion))
    }

    const { text, inputTokens, outputTokens } = await generateText(
      README_SYSTEM,
      buildReadmePrompt(context, readmeVersion),
    )

    return Response.json({ markdown: cleanReadme(text), usage: { inputTokens, outputTokens } })
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

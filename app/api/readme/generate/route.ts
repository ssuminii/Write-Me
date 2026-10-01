import { fetchRepoContext, GithubError, parseRepoUrl } from './_api/github'

export async function POST(request: Request) {
  try {
    const { repoUrl } = await request.json()
    const { owner, repo } = parseRepoUrl(String(repoUrl ?? ''))
    const context = await fetchRepoContext(owner, repo)

    return Response.json({ context })
  } catch (error) {
    if (error instanceof GithubError) {
      return Response.json({ message: error.message }, { status: error.status })
    }
    console.error(error)
    return Response.json(
      { message: 'README를 만들지 못했어요. 다시 시도해주세요.' },
      { status: 500 },
    )
  }
}

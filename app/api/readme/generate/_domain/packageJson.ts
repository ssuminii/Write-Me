const KEPT_SCRIPTS = ['dev', 'start', 'build', 'preview', 'test', 'lint', 'storybook']

const LOCK_FILES: [string, string][] = [
  ['pnpm-lock.yaml', 'pnpm'],
  ['yarn.lock', 'yarn'],
  ['bun.lockb', 'bun'],
  ['package-lock.json', 'npm'],
]

const findPackageManager = (pkg: Record<string, unknown>, tree: string[]) =>
  (typeof pkg.packageManager === 'string' && pkg.packageManager.split('@')[0]) ||
  LOCK_FILES.find(([file]) => tree.includes(file))?.[1] ||
  'npm'

// 라이브러리는 이름만 (버전·@types 제외), 설정 항목(eslintConfig, jest 등)은 제외
const names = (deps: unknown) =>
  Object.keys((deps as Record<string, string>) ?? {})
    .filter((name) => !name.startsWith('@types/'))
    .join(', ') || '없음'

export function summarizePackageJson(raw: string | null, tree: string[]): string {
  if (!raw) return '없음'
  let pkg: Record<string, unknown>
  try {
    pkg = JSON.parse(raw)
  } catch {
    return raw
  }

  const scripts = Object.entries((pkg.scripts as Record<string, string>) ?? {})
    .filter(([name]) => KEPT_SCRIPTS.includes(name))
    .map(([name, command]) => `${name}: ${command}`)

  return [
    `이름: ${pkg.name ?? '없음'}`,
    pkg.description && `설명: ${pkg.description}`,
    `패키지 매니저: ${findPackageManager(pkg, tree)}`,
    pkg.workspaces && `모노레포: ${JSON.stringify(pkg.workspaces)}`,
    `scripts: ${scripts.join(' / ') || '없음'}`,
    `dependencies: ${names(pkg.dependencies)}`,
    `devDependencies: ${names(pkg.devDependencies)}`,
  ]
    .filter(Boolean)
    .join('\n')
}

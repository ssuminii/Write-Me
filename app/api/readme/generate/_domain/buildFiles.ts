// package.json이 없는 백엔드(Java)의 기술 스택 근거
// application.yml은 비밀번호가 들어 있을 수 있어서 읽지 않음
export const BUILD_FILES = ['build.gradle', 'build.gradle.kts', 'pom.xml', 'docker-compose.yml', 'docker-compose.yaml', 'compose.yml']

// implementation 'org.springframework.boot:spring-boot-starter-data-redis' → spring-boot-starter-data-redis (테스트 의존성 제외)
const GRADLE_DEP = /^\s*(?:implementation|api|runtimeOnly|compileOnly|developmentOnly|annotationProcessor)\s*\(?\s*['"][\w.-]+:([\w.-]+)/gm
const GRADLE_PLUGIN = /^\s*id\s*\(?\s*['"]([\w.-]+)['"]/gm
// <dependency>…<artifactId>spring-boot-starter-web</artifactId> (테스트 의존성 제외)
const POM_DEP = /<dependency>((?:(?!<\/dependency>)[\s\S])*)<\/dependency>/g
// image: mysql:8.0 → mysql
const COMPOSE_IMAGE = /^\s*image:\s*["']?([^\s"':]+)/gm

const unique = (names: string[]) => [...new Set(names)].join(', ')

function namesOf(file: string, source: string): string | null {
  if (file.startsWith('build.gradle')) {
    const plugins = [...source.matchAll(GRADLE_PLUGIN)].map((m) => m[1])
    const deps = [...source.matchAll(GRADLE_DEP)].map((m) => m[1])
    return `빌드 도구 Gradle\n플러그인: ${unique(plugins)}\n라이브러리: ${unique(deps)}`
  }
  if (file === 'pom.xml') {
    const deps = [...source.matchAll(POM_DEP)]
      .map((m) => m[1])
      .filter((dep) => !/<scope>test<\/scope>/.test(dep))
      .map((dep) => dep.match(/<artifactId>([^<]+)<\/artifactId>/)?.[1] ?? '')
      .filter(Boolean)
    // 의존성 없는 빈 pom.xml은 Gradle 프로젝트에 남은 파일인 경우가 많아 건너뜀
    return deps.length ? `빌드 도구 Maven\n라이브러리: ${unique(deps)}` : null
  }
  const images = [...source.matchAll(COMPOSE_IMAGE)].map((m) => m[1])
  return images.length ? `docker-compose 서비스 이미지: ${unique(images)}` : null
}

// { 'build.gradle': 원문, ... } → 이름만 남긴 요약
export function summarizeBuildFiles(files: Record<string, string>): string | null {
  const lines = Object.entries(files)
    .map(([file, source]) => namesOf(file, source))
    .filter(Boolean)
  return lines.length ? lines.join('\n') : null
}

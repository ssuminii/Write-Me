# 🐻 zustand

<p align="center"><img src="https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg" width="600"></p>

<br>

> 🐻 Bear necessities for state management in React

<br>

<p align="center">🔗 <a href="https://zustand-demo.pmnd.rs/">zustand 서비스</a></p>

<br>

## 💡 서비스 소개

React 애플리케이션에서 복잡한 설정 없이 간편하게 상태를 관리할 수 있는 라이브러리예요.

프로젝트의 규모와 상관없이 전역 상태를 가볍고 빠르게 관리하고 싶을 때 쓰면 좋아요.

- 불필요한 코드 없이 훅을 기반으로 직관적인 상태 관리를 할 수 있어요
- 컴포넌트를 감싸는 프로바이더를 따로 만들지 않아도 돼서 코드가 깔끔해져요
- 상태가 바뀔 때 실제로 변경된 부분과 연결된 컴포넌트만 효율적으로 다시 그려져요
- 미들웨어를 활용해 데이터 유지나 상태 변화 기록 같은 기능을 쉽게 붙일 수 있어요

<br>

## 📦 사용 방법

1️⃣ 프로젝트에 라이브러리를 설치해요.

```bash
pnpm add zustand
```

2️⃣ 필요한 상태와 상태를 변경하는 함수를 담은 스토어를 만들어요.

```jsx
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

3️⃣ 컴포넌트에서 훅을 불러와 필요한 상태를 자유롭게 사용해요.

```jsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}
```

<br>

## 🛠️ 기술 스택

### ⚙️ Dev Tools
- ESLint, Prettier
- TypeScript, Rollup, Vite

<br>

## 👥 팀원

| FE | FE | FE | FE | FE |
| :---: | :---: | :---: | :---: | :---: |
| **Daishi Kato** | **drcmda** | **Danilo Britto** | **Wonsuk Choi** | **Devansh Jethmalani** |
| <img src="https://avatars.githubusercontent.com/dai-shi?v=4" height=100 width=100><br>[@dai-shi](https://github.com/dai-shi) | <img src="https://avatars.githubusercontent.com/drcmda?v=4" height=100 width=100><br>[@drcmda](https://github.com/drcmda) | <img src="https://avatars.githubusercontent.com/dbritto-dev?v=4" height=100 width=100><br>[@dbritto-dev](https://github.com/dbritto-dev) | <img src="https://avatars.githubusercontent.com/sukvvon?v=4" height=100 width=100><br>[@sukvvon](https://github.com/sukvvon) | <img src="https://avatars.githubusercontent.com/devanshj?v=4" height=100 width=100><br>[@devanshj](https://github.com/devanshj) |

<br>

## 🚀 시작하기

```bash
pnpm install
pnpm run build
```
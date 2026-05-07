# NextKit — Next.js Starter Kit

Next.js 16 App Router 기반의 production-ready starter kit입니다.

## 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| [Next.js](https://nextjs.org) | 16.2.4 | App Router, Turbopack |
| [React](https://react.dev) | 19.2.4 | React Server Components |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Strict mode |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Config 파일 없는 CSS-first 방식 |
| [shadcn/ui](https://ui.shadcn.com) | 4.7.0 | new-york 스타일, oklch 색상 토큰 |
| [lucide-react](https://lucide.dev) | ^1 | 아이콘 |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4 | 다크 모드 |

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css              # Tailwind v4 + shadcn 테마 변수
│   ├── layout.tsx               # 루트 레이아웃 (ThemeProvider, Header, Footer)
│   └── page.tsx                 # 랜딩 페이지
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # 상단 네비게이션 + 테마 토글
│   │   ├── Footer.tsx           # 하단 푸터
│   │   ├── ThemeProvider.tsx    # next-themes 래퍼
│   │   └── ThemeToggle.tsx      # 라이트/다크 전환 버튼
│   ├── sections/
│   │   ├── Hero.tsx             # 히어로 섹션
│   │   ├── Features.tsx         # 기능 소개 그리드
│   │   └── CTA.tsx              # Call to Action 섹션
│   └── ui/                      # shadcn/ui 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── separator.tsx
├── lib/
│   ├── utils.ts                 # cn() 유틸리티
│   └── constants.ts             # 사이트 데이터 (nav, features 등)
└── types/
    └── index.ts                 # 공통 TypeScript 인터페이스
```

## 시작하기

### 설치

```bash
git clone https://github.com/hun9272/claude-nextjs-starterkit.git
cd claude-nextjs-starterkit
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 빌드

```bash
npm run build
npm run start
```

### 타입 검사

```bash
./node_modules/.bin/tsc --noEmit
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

예시:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
```

## 다크 모드

`next-themes`를 사용하며 시스템 설정을 기본값으로 따릅니다. 헤더의 토글 버튼으로 라이트/다크 전환이 가능합니다.

Tailwind v4에서 클래스 기반 다크 모드를 사용하려면 `globals.css`의 아래 선언이 필수입니다.

```css
@custom-variant dark (&:is(.dark *));
```

## 주요 설정 파일

| 파일 | 설명 |
|------|------|
| `components.json` | shadcn/ui 설정 (style, alias, Tailwind v4 모드) |
| `src/app/globals.css` | Tailwind v4 테마, oklch 색상 변수, 다크 모드 |
| `src/lib/constants.ts` | 네비게이션 링크, 기능 소개 데이터 |
| `postcss.config.mjs` | `@tailwindcss/postcss` 플러그인 |

## Next.js 16 주요 변경 사항

이 프로젝트는 Next.js 16을 기준으로 합니다. 주요 breaking change:

- `params`, `searchParams`는 반드시 `await` 필요
- `middleware.ts` → `proxy.ts` 로 이름 변경
- `next build` 시 linter 자동 실행 제거 (`eslint` 직접 실행)
- Turbopack이 기본 번들러

## 라이선스

MIT

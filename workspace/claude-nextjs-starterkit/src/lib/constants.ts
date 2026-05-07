import {
  Zap,
  Shield,
  Palette,
  Code2,
  Layers,
  Moon,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const SITE_NAME = "NextKit"

export const SITE_DESCRIPTION =
  "Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui 로 빠르게 시작하는 production-ready starter kit"

export const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/docs", label: "문서" },
  { href: "/components", label: "컴포넌트" },
  { href: "/blog", label: "블로그" },
] as const

export const FOOTER_LINKS = [
  { href: "/privacy", label: "개인정보처리방침", external: false },
  { href: "/terms", label: "이용약관", external: false },
  { href: "https://nextjs.org", label: "Next.js", external: true },
] as const

export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

export const FEATURES: FeatureItem[] = [
  {
    title: "Next.js 16 App Router",
    description:
      "최신 App Router와 React Server Components, async params/searchParams, Turbopack 기반으로 빠른 개발 환경을 제공합니다.",
    icon: Zap,
  },
  {
    title: "shadcn/ui 컴포넌트",
    description:
      "Radix UI 프리미티브 기반의 접근성이 보장된 컴포넌트를 프로젝트에 직접 소유하여 자유롭게 커스터마이징할 수 있습니다.",
    icon: Layers,
  },
  {
    title: "다크 모드",
    description:
      "next-themes를 활용한 시스템 연동 다크 모드. suppressHydrationWarning 전략으로 플리커 없는 테마 전환을 지원합니다.",
    icon: Moon,
  },
  {
    title: "TypeScript Strict",
    description:
      "엄격한 TypeScript 설정으로 모든 컴포넌트와 유틸리티가 완전히 타입 안전합니다.",
    icon: Code2,
  },
  {
    title: "Tailwind CSS v4",
    description:
      "설정 파일 없는 CSS-first 방식. @import와 @theme inline으로 oklch 색상 토큰을 활용한 최신 설정입니다.",
    icon: Palette,
  },
  {
    title: "Production Ready",
    description:
      "최적화된 메타데이터, 접근성을 고려한 마크업, 시맨틱 HTML과 확장 가능한 폴더 구조를 제공합니다.",
    icon: Shield,
  },
]

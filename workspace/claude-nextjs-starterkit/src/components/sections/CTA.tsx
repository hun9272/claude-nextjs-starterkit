import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="border-t border-border/40">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-28">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(1_0_0_/_0.08)_0%,_transparent_60%)]"
          />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            클론하고, 커스터마이징하고, 배포하세요. 기반은 준비되어 있습니다.
            당신의 아이디어만 더하면 됩니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/docs">
                문서 읽기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub에 스타 주기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

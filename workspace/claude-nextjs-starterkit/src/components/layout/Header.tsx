import Link from "next/link"
import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Code2 className="h-5 w-5 text-primary" />
          <span>{SITE_NAME}</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center gap-1 ml-4">
          {NAV_LINKS.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Separator orientation="vertical" className="h-6" />
          <Button size="sm" asChild>
            <Link href="/docs">시작하기</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

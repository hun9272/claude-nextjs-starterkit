import Link from "next/link"
import { GitFork, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FOOTER_LINKS, SITE_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. Built with Next.js 16.
          </p>
          <div className="flex items-center gap-2">
            {FOOTER_LINKS.map((link) => (
              <Button key={link.href} variant="ghost" size="sm" asChild>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            <Separator orientation="vertical" className="h-4" />
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitFork className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label="X (Twitter)" asChild>
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                <X className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

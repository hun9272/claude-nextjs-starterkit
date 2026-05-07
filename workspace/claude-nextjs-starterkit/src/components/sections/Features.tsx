import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FEATURES } from "@/lib/constants"

export function Features() {
  return (
    <section className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            필요한 모든 것
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            빠르게 이동하면서도 실수하지 않도록 신중하게 선택된 기술 스택입니다.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/60 transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              ✨ Convert screenshots to engaging video tutorials
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
              Turn Screenshots into
              <span className="block text-primary">Professional Tutorials</span>
            </h1>
            <p className="mx-auto text-lg md:text-xl text-foreground/70 max-w-2xl text-balance">
              Create step-by-step video tutorials in seconds. Upload screenshots, add voiceovers, and share beautiful interactive guides with your team or audience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-3xl rounded-lg border border-border bg-muted/50 overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-foreground/60">Demo video placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

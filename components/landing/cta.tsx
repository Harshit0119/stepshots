import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 via-secondary/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          Ready to Create Better Tutorials?
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
          Join thousands of teams creating professional video tutorials with StepShots.
          Get started for free today, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Get Started Free</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:support@stepshots.com">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

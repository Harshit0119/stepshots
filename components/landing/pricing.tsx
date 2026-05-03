import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying it out",
      features: [
        "Up to 3 projects",
        "5 minutes video per project",
        "Basic annotations",
        "Community support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For individuals and small teams",
      features: [
        "Unlimited projects",
        "60 minutes video per month",
        "Advanced annotations",
        "Audio recording & upload",
        "Custom branding",
        "Priority email support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "For growing teams",
      features: [
        "Everything in Pro",
        "200 minutes video per month",
        "Team collaboration",
        "Advanced sharing options",
        "API access",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Choose the plan that&apos;s right for you. Always flexible to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border transition-all duration-200 ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-lg md:scale-105"
                  : "border-border bg-card hover:border-border/80"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    {plan.description}
                  </p>
                  <div>
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-foreground/60 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mb-8"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-foreground/80 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Footer */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}

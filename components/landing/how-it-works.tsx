export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Screenshots",
      description: "Capture or upload screenshots of your process, app, or workflow.",
      icon: "📸",
    },
    {
      number: "02",
      title: "Add Annotations",
      description: "Highlight key areas, add text, arrows, and visual callouts to guide viewers.",
      icon: "✏️",
    },
    {
      number: "03",
      title: "Record Audio",
      description: "Add voiceover or upload audio to explain each step clearly.",
      icon: "🎙️",
    },
    {
      number: "04",
      title: "Publish & Share",
      description: "Generate your video tutorial and share with your team or public audience.",
      icon: "🚀",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, Four-Step Process
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Create professional video tutorials in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-background border border-border rounded-lg p-6 h-full hover:border-primary/50 transition-colors">
                {/* Step Number */}
                <div className="text-4xl font-bold text-primary/30 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on mobile) */}
              {step.number !== "04" && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const features = [
    {
      title: "Easy Screenshot Upload",
      description: "Drag and drop or upload screenshots in bulk. Supports JPG, PNG, and more.",
      icon: "⬆️",
    },
    {
      title: "Smart Annotations",
      description: "Add highlights, arrows, text boxes, and shapes to emphasize important details.",
      icon: "✨",
    },
    {
      title: "Built-in Audio Editor",
      description: "Record voiceover directly or upload audio files. Sync audio with each step.",
      icon: "🔊",
    },
    {
      title: "Video Export",
      description: "Generate MP4 videos with automatic transitions and professional timing.",
      icon: "📹",
    },
    {
      title: "Team Collaboration",
      description: "Invite teammates to review, comment, and contribute to tutorials.",
      icon: "👥",
    },
    {
      title: "Share Anywhere",
      description: "Get direct links, embed videos, or export to popular platforms.",
      icon: "🌐",
    },
  ]

  return (
    <section id="features" className="relative py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Everything you need to create engaging video tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

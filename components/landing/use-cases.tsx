export function UseCases() {
  const useCases = [
    {
      title: "Software Onboarding",
      description: "Help new team members learn your tools faster with step-by-step visual guides.",
    },
    {
      title: "Product Demos",
      description: "Showcase features to prospects and customers with polished video walkthroughs.",
    },
    {
      title: "Internal Training",
      description: "Create consistent training materials for processes, compliance, and best practices.",
    },
    {
      title: "Documentation",
      description: "Complement written docs with visual tutorials that improve understanding.",
    },
    {
      title: "Customer Support",
      description: "Provide support videos to help customers resolve issues independently.",
    },
    {
      title: "Educational Content",
      description: "Create engaging course content and learning materials for students.",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Perfect For
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Used by teams across industries to improve communication and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-background hover:border-primary/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-lg font-bold text-primary">→</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

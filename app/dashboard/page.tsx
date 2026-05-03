import { Button } from "@/components/ui/button"
import { ProjectsList } from "@/components/dashboard/projects-list"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-foreground/60">
            Create and manage your video tutorials
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/project/new">
            <span className="mr-2">+</span>
            New Project
          </Link>
        </Button>
      </div>

      {/* Projects List */}
      <ProjectsList />
    </div>
  )
}

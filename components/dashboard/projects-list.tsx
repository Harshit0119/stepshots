'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MoreVertical, Trash2 } from "lucide-react"

// Mock data - TODO: Replace with real data from database
const mockProjects = [
  {
    id: "1",
    title: "Onboarding Tutorial",
    description: "Step-by-step guide for new team members",
    steps: 8,
    duration: 5,
    createdAt: "2 days ago",
    status: "published",
  },
  {
    id: "2",
    title: "Feature Demo",
    description: "Showcase of the new analytics dashboard",
    steps: 6,
    duration: 3,
    createdAt: "1 week ago",
    status: "draft",
  },
  {
    id: "3",
    title: "API Integration Guide",
    description: "How to integrate our API into your app",
    steps: 12,
    duration: 8,
    createdAt: "2 weeks ago",
    status: "published",
  },
]

export function ProjectsList() {
  if (mockProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">📽️</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No projects yet</h3>
        <p className="text-foreground/60 mb-6">
          Create your first video tutorial to get started
        </p>
        <Button asChild>
          <Link href="/dashboard/project/new">Create Project</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockProjects.map((project) => (
        <Link
          key={project.id}
          href={`/dashboard/project/${project.id}`}
          className="group"
        >
          <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden">
            {/* Project Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:via-secondary/30 group-hover:to-accent/30 transition-colors">
              <div className="text-4xl">🎬</div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('[v0] Delete project:', project.id)
                  }}
                  className="flex-shrink-0 p-1 rounded hover:bg-muted opacity-0 group-hover:opacity-100 transition-all"
                >
                  <Trash2 className="w-4 h-4 text-foreground/60" />
                </button>
              </div>

              <p className="text-sm text-foreground/60 line-clamp-2 mb-4">
                {project.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-foreground/50 mb-4 pb-4 border-b border-border">
                <span>{project.steps} steps</span>
                <span>{project.duration}m video</span>
                <span>{project.createdAt}</span>
              </div>

              {/* Status & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === "published"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-foreground/60"
                    }`}
                  >
                    {project.status === "published" ? "Published" : "Draft"}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => e.preventDefault()}
                >
                  Open
                </Button>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

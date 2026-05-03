'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function NewProjectPage() {
  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!projectName) newErrors.projectName = "Project name is required"
    if (!projectDescription) newErrors.projectDescription = "Description is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("[v0] Create project:", { projectName, projectDescription })
      // TODO: Create project and redirect to builder
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Project</CardTitle>
          <CardDescription>
            Start creating your first video tutorial
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Project Name */}
            <div className="space-y-2">
              <label htmlFor="projectName" className="text-sm font-medium text-foreground">
                Project Name
              </label>
              <Input
                id="projectName"
                placeholder="e.g., User Onboarding Tutorial"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                aria-invalid={!!errors.projectName}
              />
              {errors.projectName && (
                <p className="text-xs text-destructive">{errors.projectName}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="projectDescription" className="text-sm font-medium text-foreground">
                Description
              </label>
              <textarea
                id="projectDescription"
                placeholder="What will this tutorial cover?"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                aria-invalid={!!errors.projectDescription}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary h-24"
              />
              {errors.projectDescription && (
                <p className="text-xs text-destructive">{errors.projectDescription}</p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" asChild className="flex-1">
                <Link href="/dashboard">Cancel</Link>
              </Button>
              <Button type="submit" className="flex-1">
                Create Project
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

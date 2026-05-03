'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Save, Trash2, Settings } from "lucide-react"

// Mock data for a project
const mockProject = {
  id: "1",
  title: "Onboarding Tutorial",
  steps: [
    { id: "1", title: "Welcome", description: "Welcome to our app", image: null },
    { id: "2", title: "Getting Started", description: "Create your first project", image: null },
    { id: "3", title: "Dashboard Tour", description: "Explore the dashboard", image: null },
  ],
}

export default function ProjectBuilderPage({
  params,
}: {
  params: { projectId: string }
}) {
  const [activeStep, setActiveStep] = useState("1")
  const [stepInstructions, setStepInstructions] = useState("")

  const currentStep = mockProject.steps.find((s) => s.id === activeStep)

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">
            {mockProject.title}
          </h1>
          <p className="text-sm text-foreground/60">
            {mockProject.steps.length} steps
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-12 gap-0 overflow-hidden">
        {/* Left Panel: Step List */}
        <div className="col-span-3 border-r border-border overflow-y-auto bg-muted/30">
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Steps</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => console.log("[v0] Add new step")}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {mockProject.steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  activeStep === step.id
                    ? "bg-primary/10 border-primary text-primary"
                    : "border-transparent hover:bg-muted"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center bg-muted font-semibold text-xs">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{step.title}</p>
                    <p className="text-xs text-foreground/50 truncate">
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center Panel: Preview */}
        <div className="col-span-6 flex flex-col border-r border-border bg-background">
          {currentStep && (
            <>
              {/* Preview Area */}
              <div className="flex-1 flex items-center justify-center bg-muted/20 p-6">
                <div className="w-full max-w-2xl aspect-video rounded-lg border border-border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-foreground/60 text-sm mb-2">
                      {currentStep.image ? "Image uploaded" : "No image uploaded"}
                    </p>
                    <p className="text-xs text-foreground/40">{currentStep.title}</p>
                  </div>
                </div>
              </div>

              {/* Step Info Footer */}
              <div className="border-t border-border bg-card p-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground">
                    Title
                  </label>
                  <Input
                    value={currentStep.title}
                    placeholder="Step title"
                    className="text-sm"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Panel: Editor */}
        <div className="col-span-3 overflow-y-auto bg-card">
          <div className="p-6 space-y-6">
            {currentStep && (
              <>
                {/* Description */}
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase block mb-2">
                    Description
                  </label>
                  <textarea
                    value={currentStep.description}
                    placeholder="Describe this step..."
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary h-20"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase block mb-2">
                    Screenshot
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                    <div className="text-2xl mb-2">📤</div>
                    <p className="text-xs text-foreground/60">
                      Click to upload or drag and drop
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Voice Recording */}
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase block mb-2">
                    Audio
                  </label>
                  <Tabs defaultValue="record" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="record">Record</TabsTrigger>
                      <TabsTrigger value="upload">Upload</TabsTrigger>
                    </TabsList>
                    <TabsContent value="record" className="space-y-3 mt-3">
                      <div className="border border-border rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">🎙️</div>
                        <p className="text-xs text-foreground/60 mb-3">
                          Record audio for this step
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            console.log("[v0] Start recording")
                          }
                        >
                          Start Recording
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="upload" className="space-y-3 mt-3">
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                        <p className="text-xs text-foreground/60">
                          Upload audio file
                        </p>
                        <input
                          type="file"
                          accept="audio/*"
                          className="hidden"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Advanced Options */}
                <div className="pt-4 border-t border-border space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm"
                    onClick={() =>
                      console.log("[v0] Open annotations")
                    }
                  >
                    ✏️ Add Annotations
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm"
                    onClick={() => console.log("[v0] Delete step")}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Step
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

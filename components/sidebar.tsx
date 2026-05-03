'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r border-border bg-sidebar text-sidebar-foreground flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg text-sidebar-primary">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center text-sidebar-primary-foreground text-sm font-bold">
            S
          </div>
          StepShots
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div>
          <p className="px-4 py-2 text-xs font-semibold text-sidebar-foreground/60 uppercase">Menu</p>
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive("/dashboard")
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <span>📊</span>
              <span>Projects</span>
            </Link>
            <Link
              href="/dashboard/templates"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive("/dashboard/templates")
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <span>📋</span>
              <span>Templates</span>
            </Link>
            <Link
              href="/dashboard/team"
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive("/dashboard/team")
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <span>👥</span>
              <span>Team</span>
            </Link>
          </div>
        </div>

        <div className="pt-4">
          <p className="px-4 py-2 text-xs font-semibold text-sidebar-foreground/60 uppercase">Resources</p>
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors"
            >
              <span>📚</span>
              <span>Documentation</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent/50 transition-colors"
            >
              <span>💬</span>
              <span>Support</span>
            </a>
          </div>
        </div>
      </nav>

      {/* User Profile - TODO: Connect to user data */}
      <div className="border-t border-sidebar-border p-4 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-sidebar-primary/20 flex items-center justify-center text-sidebar-primary font-semibold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">John Doe</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">john@example.com</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href="#">Sign Out</a>
        </Button>
      </div>
    </aside>
  )
}

import React from "react"
import { SidebarNav } from "@ui/sidebarnav"
import { Topbar } from "@ui/topbar"
import { cn } from "@utils/cn"

export default function CursorDashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 text-black dark:bg-black dark:text-white">
      <SidebarNav items={[
        { title: "Dashboard", href: "/(dashboard)/dashboard" },
        { title: "Documents", href: "/(dashboard)/documents" },
        { title: "Tools", href: "/(dashboard)/tools" },
        { title: "Reputation", href: "/(dashboard)/reputation" },
        { title: "Profile", href: "/(dashboard)/profile" },
        { title: "Settings", href: "/(dashboard)/settings" },
      ]} />
      <main className="flex-1 overflow-y-auto p-6">
        <Topbar title="FED Dispatcher Dashboard" />
        {children}
      </main>
    </div>
  )
}

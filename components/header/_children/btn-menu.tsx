"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebarStore } from "@/store/sidebar"

export default function BtnMenu() {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setSidebarOpen(!sidebarOpen)}
      aria-label="Open Menu"
    >
      <Menu />
    </Button>
  )
}

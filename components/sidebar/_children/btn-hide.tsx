"use client"

import { Button } from "@/components/ui/button"
import { useSidebarStore } from "@/store/sidebar"
import { ChevronLeftCircle } from "lucide-react"

export default function BtnHide() {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore()

  return (
    <Button
      className="block lg:hidden"
      variant="ghost"
      size="icon"
      onClick={() => setSidebarOpen(!sidebarOpen)}
      aria-label="Hide Menu"
    >
      <ChevronLeftCircle />
    </Button>
  )
}

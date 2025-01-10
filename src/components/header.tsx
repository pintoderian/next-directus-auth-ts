import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

interface NavbarProps {
  title: string
}

export function Header({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex items-center space-x-2">
        <SidebarTrigger className="-ml-1 size-5" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="font-bold">{title}</h1>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <ModeToggle />
      </div>
    </header>
  )
}

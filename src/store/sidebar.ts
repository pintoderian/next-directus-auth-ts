import { create } from "zustand"

interface SidebarState {
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (value: boolean) => set(() => ({ sidebarOpen: value })),
}))

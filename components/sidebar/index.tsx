"use client"

import { useSidebarStore } from "@/store/sidebar"
import Link from "next/link"
import BtnHide from "./_children/btn-hide"

export default function Sidebar() {
  const { sidebarOpen } = useSidebarStore()

  return (
    <aside
      className={`absolute left-0 top-0 z-50 flex h-screen w-64 -translate-x-full flex-col overflow-y-hidden shadow-md duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-sidebar`}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-5 lg:py-6">
        <div className="font-bold uppercase">Logo</div>
        <BtnHide />
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9">
          <div className="mb-4 text-sm font-medium text-gray-400">MENU</div>
          <ul className="menu mb-6 flex flex-col gap-1.5">
            <li className="active">
              <Link
                className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out"
                href="/dashboard"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out"
                href="#"
              >
                Link
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

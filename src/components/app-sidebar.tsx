"use client"

import * as React from "react"
import {
  BookmarkIcon,
  EditIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  TagIcon,
  UsersIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSettings } from "@/components/nav-settings"
import { NavUser } from "@/components/nav-user"
import { BrandingLogo } from "@/components/branding-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Posts",
      url: "#",
      icon: EditIcon,
      items: [
        {
          title: "All posts",
          url: "/dashboard/posts",
        },
        {
          title: "New post",
          url: "/dashboard/posts/new",
        },
      ],
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: BookmarkIcon,
    },
    {
      title: "Tags",
      url: "/dashboard/tags",
      icon: TagIcon,
    },
  ],
  settings: [
    {
      name: "Users",
      url: "/dashboard/users",
      icon: UsersIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandingLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSettings settings={data.settings} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

import AdminProvider from "@/components/admin-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { options } from "@/lib/auth/options"
import { getServerSession } from "next-auth"
import { AppSidebar } from "@/components/app-sidebar"
import { Footer } from "@/components/footer"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)

  return (
    <AdminProvider session={session}>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </SidebarProvider>
    </AdminProvider>
  )
}

import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"
import AdminProvider from "@/components/admin-provider"
import { options } from "@/lib/auth/options"
import { getServerSession } from "next-auth"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)

  return (
    <AdminProvider session={session}>
      <AdminPanelLayout>{children}</AdminPanelLayout>
    </AdminProvider>
  )
}

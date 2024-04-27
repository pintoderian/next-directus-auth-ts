import AdminProvider from "@/components/admin-provider"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import { options } from "@/lib/auth/options"
import { UserAuthenticated } from "@/types/next-auth"
import { getServerSession } from "next-auth"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)

  return (
    <AdminProvider session={session}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header user={session?.user as UserAuthenticated} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AdminProvider>
  )
}

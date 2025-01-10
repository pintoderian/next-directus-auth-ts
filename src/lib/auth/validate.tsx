"use client"

import { signOut, useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Validate({ children }: { children: React.ReactNode }) {
  const { data: session, update } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session?.tokenIsRefreshed) {
      void update({
        access_token: session.access_token,
        expires_at: session.expires_at,
        refresh_token: session.refresh_token,
        tokenIsRefreshed: false,
      })
    }
    if (session?.error && session.error === "RefreshAccessTokenError") {
      signOut().then(() => {
        router.push("/")
      })
    }
    // TODO: Move this feature to middleware
    if (!session) {
      router.push("/")
    }
  }, [session, update, router])

  return children
}

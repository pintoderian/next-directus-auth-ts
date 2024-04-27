"use client"

import { signOut, useSession } from "next-auth/react"
import { useEffect } from "react"

export default function Validate({ children }: { children: React.ReactNode }) {
  const { data: session, update } = useSession()
  useEffect(() => {
    if (session?.tokenIsRefreshed) {
      update({
        access_token: session.access_token,
        expires_at: session.expires_at,
        refresh_token: session.refresh_token,
        tokenIsRefreshed: false,
      })
    }
    if (session?.error && session.error === "RefreshAccessTokenError") {
      signOut()
    }
  }, [session, update])

  return children
}

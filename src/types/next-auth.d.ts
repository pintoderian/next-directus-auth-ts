import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    first_name: string
    last_name: string
    access_token: string
    expires: number
    refresh_token: string
  }

  interface Session {
    user: DefaultSession["user"] & {
      id?: string
    }
    access_token?: string
    expires_at?: number
    refresh_token?: string
    tokenIsRefreshed: boolean | null
    error?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string
    expires_at?: number
    refresh_token?: string
    error?: string | null
    tokenIsRefreshed?: boolean | null
  }
}

export type AuthRefresh = {
  access_token?: string | null
  expires?: number | null
  refresh_token?: string | null
}

export type UserSession = {
  id: string
  first_name: string
  last_name: string
  email: string
  access_token?: string
  expires?: number
  refresh_token?: string
}

export type UserParams = {
  id?: string
  name?: string
  first_name?: string
  last_name?: string
  email?: string
}

export type UserAuthenticated = {
  id?: string
  name?: string
  email?: string
}

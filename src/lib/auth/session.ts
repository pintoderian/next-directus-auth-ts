import { getServerSession } from "next-auth/next"

import { options } from "./options"

export async function getUser() {
  const session = await getServerSession(options)
  return session?.user
}

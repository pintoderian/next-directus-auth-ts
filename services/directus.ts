import {
  authentication,
  createDirectus,
  rest,
  staticToken,
} from "@directus/sdk"

export const directus = (token: string = "") => {
  if (token) {
    return createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_API ?? "")
      .with(staticToken(token))
      .with(rest())
  }
  return createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_API ?? "")
    .with(authentication())
    .with(rest())
}

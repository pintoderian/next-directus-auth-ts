import { Header } from "./header"

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Header title={title} />
      <div className="container px-4 py-8 sm:px-8">{children}</div>
    </div>
  )
}

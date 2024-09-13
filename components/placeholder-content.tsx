import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export default function PlaceholderContent() {
  return (
    <Card className="mt-6 rounded-lg border-none">
      <CardContent className="p-6">
        <div className="flex min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)] items-center justify-center">
          <div className="relative flex flex-col">
            <Image
              src="/placeholder.png"
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
            <div className="absolute -bottom-8 right-0">
              <Link
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground"
              >
                Designed by Freepik
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

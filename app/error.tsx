"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Something went wrong</h2>
      <p className="text-muted-foreground">We hit a snag loading this page. Please try again.</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}

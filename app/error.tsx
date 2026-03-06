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
    <main className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">
        We couldn’t load this page right now. Please try again.
      </p>
      <Button className="mt-6" onClick={reset}>
        Try again
      </Button>
    </main>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}

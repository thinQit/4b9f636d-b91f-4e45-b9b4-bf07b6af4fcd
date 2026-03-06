import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
      <p className="text-muted-foreground">The page you’re looking for doesn’t exist or has moved.</p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  )
}

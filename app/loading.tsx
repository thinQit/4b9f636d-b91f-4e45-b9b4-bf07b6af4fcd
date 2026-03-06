import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 md:py-28 space-y-6">
      <Skeleton className="h-10 w-56" />
      <Skeleton className="h-6 w-full max-w-2xl" />
      <Skeleton className="h-64 w-full rounded-2xl" />
    </main>
  )
}

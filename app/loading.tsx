import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-16 md:px-8">
      <Skeleton className="h-10 w-48" />
      <Skeleton className="h-8 w-full max-w-3xl" />
      <Skeleton className="h-6 w-full max-w-2xl" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  )
}

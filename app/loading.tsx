import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6">
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-6 w-1/2" />
        <div className="grid gap-6 md:grid-cols-3">
          <Skeleton className="h-56 w-full rounded-2xl" />
          <Skeleton className="h-56 w-full rounded-2xl" />
          <Skeleton className="h-56 w-full rounded-2xl" />
        </div>
      </div>
    </main>
  );
}

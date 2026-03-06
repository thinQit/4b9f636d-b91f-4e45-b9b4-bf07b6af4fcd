import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you’re looking for doesn’t exist.
        </p>
        <Button asChild className="mt-6">
          <Link href="/store">Go to Store</Link>
        </Button>
      </div>
    </main>
  );
}

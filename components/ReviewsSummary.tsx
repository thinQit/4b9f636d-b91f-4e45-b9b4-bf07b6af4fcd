"use client";

interface ReviewsSummaryProps {
  average?: number
  total?: number
  distribution?: number[]
}

export default function ReviewsSummary({
  average = 4.6,
  total = 1248,
  distribution = [72, 18, 6, 3, 1],
}: Partial<ReviewsSummaryProps>) {
  return (
    <div className="rounded-2xl border p-5">
      <p className="text-3xl font-bold">{average.toFixed(1)}</p>
      <p className="text-sm text-muted-foreground">{total} reviews</p>
      <div className="mt-4 space-y-2">
        {distribution.map((value, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-10 text-xs">{5 - i}★</span>
            <div className="h-2 flex-1 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[#E63946]" style={{ width: value + '%' }} />
            </div>
            <span className="w-10 text-right text-xs">{value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

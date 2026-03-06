"use client";

import { MapPin, Clock } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface MapEmbedProps {
  address?: string
  hours?: string[]
  mapSrc?: string
  className?: string
}

export default function MapEmbed({
  address = '128 Market Street, San Francisco, CA 94103',
  hours = ['Mon–Fri: 10:00 AM – 7:00 PM', 'Saturday: 10:00 AM – 6:00 PM', 'Sunday: 11:00 AM – 5:00 PM'],
  mapSrc = 'https://www.google.com/maps?q=San+Francisco+CA&output=embed',
  className = '',
}: Partial<MapEmbedProps>) {
  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border">
          <iframe src={mapSrc} className="h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-[#1A1A2E]">Visit Our Store</h3>
          <div className="mt-4 flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-[#E63946]" />
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
          <Separator className="my-5" />
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-[#E63946]" />
            <div className="space-y-1 text-sm text-muted-foreground">
              {hours.map((line, idx) => (
                <p key={line + idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

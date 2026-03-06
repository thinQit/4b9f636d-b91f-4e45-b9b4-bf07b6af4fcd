"use client";

import { MapPin } from 'lucide-react'

interface MapSectionProps {
  title: string
  description: string
  embedUrl: string
}

export default function MapSection({
  title = 'Based in Bengaluru, available worldwide',
  description = 'Collaborating remotely with founders and teams across time zones.',
  embedUrl = 'https://www.google.com/maps?q=Bengaluru&output=embed',
}: Partial<MapSectionProps>) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-[#10b981]" />
        <h3 className="font-semibold text-[#1A1A2E]">{title}</h3>
      </div>
      <p className="mb-4 text-sm text-slate-600">{description}</p>
      <iframe title="location-map" src={embedUrl} className="h-72 w-full rounded-lg border border-slate-200" loading="lazy" />
    </div>
  )
}

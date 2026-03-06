"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

interface MapEmbedProps {
  address?: string
  mapTitle?: string
  embedUrl?: string
  directionsUrl?: string
}

export default function MapEmbed({
  address = '210 Market Street, Austin, TX 78701',
  mapTitle = 'Store location map',
  embedUrl = 'https://www.google.com/maps?q=Austin%20TX&output=embed',
  directionsUrl = 'https://www.google.com/maps/search/?api=1&query=210+Market+Street+Austin+TX',
}: Partial<MapEmbedProps>) {
  return (
    <div className="rounded-2xl border bg-white p-4 md:p-6">
      <h3 className="text-lg font-semibold text-[#1A1A2E]">Visit Our Store</h3>
      <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        {address}
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border">
        <iframe
          title={mapTitle}
          src={embedUrl}
          className="h-72 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Button asChild className="mt-4 rounded-xl bg-[#1A1A2E] text-white">
        <a href={directionsUrl} target="_blank" rel="noreferrer">
          Get Directions
        </a>
      </Button>
    </div>
  )
}

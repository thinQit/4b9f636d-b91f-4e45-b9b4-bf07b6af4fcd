"use client";

interface MapEmbedProps {
  title?: string
  address?: string
  hours?: string[]
  mapSrc?: string
}

export default function MapEmbed({
  title = 'Visit Our Store',
  address = '245 Market Street, San Francisco, CA 94105',
  hours = ['Mon-Fri: 10:00 AM - 7:00 PM', 'Sat: 10:00 AM - 6:00 PM', 'Sun: 11:00 AM - 5:00 PM'],
  mapSrc = 'https://www.google.com/maps?q=San%20Francisco&output=embed',
}: Partial<MapEmbedProps>) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <iframe title="Store location map" src={mapSrc} className="h-72 w-full rounded-2xl border" loading="lazy" />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{address}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {hours.map((line) => <li key={line}>{line}</li>)}
        </ul>
      </div>
    </section>
  )
}

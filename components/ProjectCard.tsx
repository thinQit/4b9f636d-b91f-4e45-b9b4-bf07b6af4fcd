"use client";

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

interface ProjectCardProps {
  title: string
  summary: string
  imageSrc: string
  tags: string[]
  stack: string[]
  outcome: string
}

export default function ProjectCard({
  title = 'E-commerce Conversion Redesign',
  summary = 'Redesigned landing and checkout flow for stronger trust and conversions.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  tags = ['UX', 'Conversion', 'E-commerce'],
  stack = ['Next.js', 'TypeScript', 'Tailwind CSS'],
  outcome = '+34% checkout completion rate',
}: Partial<ProjectCardProps>) {
  return (
    <Card className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <Image src={imageSrc} alt={title} width={800} height={500} unoptimized className="h-48 w-full rounded-lg object-cover" />
      <h3 className="mt-4 text-lg font-semibold text-[#1A1A2E]">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Stack:</span> {stack.join(', ')}</p>
      <p className="mt-1 text-sm font-medium text-[#10b981]">{outcome}</p>
    </Card>
  )
}

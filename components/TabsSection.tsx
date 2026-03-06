'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface TabsSectionProps {
  details?: string
  specs?: string
  care?: string
}

export default function TabsSection({
  details = 'Premium cotton blend designed for daily comfort.',
  specs = 'Fit: Regular. Material: 92% Cotton, 8% Elastane.',
  care = 'Machine wash cold. Tumble dry low. Do not bleach.',
}: Partial<TabsSectionProps>) {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="specs">Specs</TabsTrigger>
        <TabsTrigger value="care">Care</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="mt-4 text-sm">{details}</TabsContent>
      <TabsContent value="specs" className="mt-4 text-sm">{specs}</TabsContent>
      <TabsContent value="care" className="mt-4 text-sm">{care}</TabsContent>
    </Tabs>
  )
}

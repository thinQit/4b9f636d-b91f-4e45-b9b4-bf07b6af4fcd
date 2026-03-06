'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface AccordionSectionProps {
  items?: { title: string; content: string }[]
}

export default function AccordionSection({
  items = [
    { title: 'Shipping', content: 'Orders ship within 1-2 business days.' },
    { title: 'Returns', content: 'Return unworn items within 30 days for full refund.' },
    { title: 'Warranty', content: 'We stand behind quality with a 1-year warranty.' },
  ],
}: Partial<AccordionSectionProps>) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.title} value={'item-' + i}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

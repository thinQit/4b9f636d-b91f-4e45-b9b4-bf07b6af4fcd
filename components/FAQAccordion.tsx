'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  headline = 'Frequently Asked Questions',
  subheadline = 'Everything you need to know before placing your order.',
  items = [
    { question: 'How long does shipping take?', answer: 'Most orders ship within 24 hours and arrive in 3–5 business days.' },
    { question: 'Can I return a product?', answer: 'Yes. We offer easy 30-day returns on eligible items in original condition.' },
    { question: 'Do you offer secure checkout?', answer: 'Absolutely. All transactions are encrypted and processed through trusted payment providers.' },
  ],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" id="faq">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 space-y-4">
          {items.map(function (item, i) {
            var isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-lg border bg-background">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={function () {
                    setOpenIndex(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                  <span className={'text-muted-foreground transition-transform ' + (isOpen ? 'rotate-180' : '')}>&#9660;</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

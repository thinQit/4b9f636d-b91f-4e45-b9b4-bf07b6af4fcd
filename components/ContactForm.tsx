'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AceternityInput } from '@/components/ui/aceternity-input';
import { AceternityLabel } from '@/components/ui/aceternity-label';
import { Textarea } from '@/components/ui/textarea';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export default function ContactForm({
  headline = 'Contact Our Support Team',
  subheadline = 'Questions about orders, shipping, or returns? We’re here to help.',
  contactInfo = [],
}: Partial<ContactFormProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="name">Name</AceternityLabel>
                    <AceternityInput id="name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="email">Email</AceternityLabel>
                    <AceternityInput id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="subject">Subject</AceternityLabel>
                  <AceternityInput id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="message">Message</AceternityLabel>
                  <Textarea id="message" placeholder="Share your question or concern..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

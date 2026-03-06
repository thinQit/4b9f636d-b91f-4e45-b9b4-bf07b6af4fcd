'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterSignupProps {
  headline: string;
  subheadline?: string;
  buttonLabel?: string;
}

export default function NewsletterSignup({
  headline = 'Get Exclusive Offers First',
  subheadline = 'Join our newsletter for limited drops, early access, and subscriber-only deals.',
  buttonLabel = 'Subscribe',
}: Partial<NewsletterSignupProps>) {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{headline}</h2>
        {subheadline && <p className="mt-3 text-muted-foreground">{subheadline}</p>}
        <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button type="submit" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
            {buttonLabel}
          </Button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"

export default function ContactPage() {
  return (
    <div>
      <HeroGradient
        headline="Contact NeonCart support"
        subheadline="Questions about shipping, returns, or product compatibility? We reply within 1 business day."
        primaryCta={{ label: "Email support", href: "mailto:support@neoncart.co" }}
        secondaryCta={{ label: "View store details", href: "/store-details" }}
      />
      <ContactForm
        headline="Send a message"
        subheadline="Include your order number (if you have one) so we can help faster."
        contactInfo={[
          { icon: "Mail", label: "Support email", value: "support@neoncart.co" },
          { icon: "Phone", label: "Support phone", value: "+1 (512) 555-0199" },
          { icon: "Clock", label: "Hours", value: "Mon–Fri 9:00am–5:00pm CT" },
        ]}
      />
      <MapEmbed />
    </div>
  )
}

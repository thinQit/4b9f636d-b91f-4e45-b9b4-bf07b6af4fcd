export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CheckoutForm from "@/components/CheckoutForm"
import SeoHead from "@/components/SeoHead"

export default function CheckoutPage() {
  return (
    <main>
      <SeoHead />
      <HeroAurora
        badge="Secure checkout"
        title="Checkout"
        subtitle="A fast, secure checkout experience designed to reduce friction and build trust."
        primaryCta={{ label: "Place Order", href: "#payment" }}
        secondaryCta={{ label: "Return to Cart", href: "/cart" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <CheckoutForm />
        </div>
      </section>
    </main>
  )
}

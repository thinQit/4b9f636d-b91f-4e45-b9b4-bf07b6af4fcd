export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import CartItemsList from "@/components/CartItemsList"
import SeoHead from "@/components/SeoHead"

export default function CartPage() {
  return (
    <main>
      <SeoHead />
      <HeroAurora
        badge="Free shipping over $60"
        title="Your cart"
        subtitle="Review items, update quantities, and head to checkout when you’re ready."
        primaryCta={{ label: "Checkout", href: "/checkout" }}
        secondaryCta={{ label: "Continue Shopping", href: "/store" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <CartItemsList />
        </div>
      </section>
    </main>
  )
}

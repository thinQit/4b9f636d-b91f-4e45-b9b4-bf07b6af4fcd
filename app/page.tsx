export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryCards from "@/components/CategoryCards";
import GalleryMasonry from "@/components/GalleryMasonry";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TrustBadges from "@/components/TrustBadges";
import NewsletterSignup from "@/components/NewsletterSignup";
import AnnouncementBar from "@/components/AnnouncementBar";
import SEOHead from "@/components/SEOHead";

export default function HomePage() {
  return (
    <main>
      <SEOHead />
      <AnnouncementBar />
      <Hero />
      <ProductGrid />
      <CategoryCards />
      <GalleryMasonry
        headline="Real setups from real customers."
        subheadline="See how Indigo Sky products fit into everyday work, travel, and home routines."
        images={[
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Laptop desk setup with charger and braided cable", caption: "AeroCharge + Cobalt Cable on a minimalist desk" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg", alt: "Travel pouch packed with accessories", caption: "Everyday Tech Pouch for weekend trips" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Phone on MagSafe stand during video call", caption: "Orbit Stand for calls and content" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Charging station on a nightstand", caption: "Clean charging without cable clutter" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Backpack flat lay with tech accessories", caption: "Travel-ready kit for commuters" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg", alt: "Desk organizer with cables and adapters", caption: "Keep essentials within reach" },
        ]}
      />
      <TestimonialsCarousel />
      <TrustBadges />
      <NewsletterSignup
        headline="Get early access to new drops and seasonal deals."
        subheadline="One email every couple of weeks. No spam—unsubscribe anytime."
        ctaLabel="Join the List"
      />
    </main>
  );
}

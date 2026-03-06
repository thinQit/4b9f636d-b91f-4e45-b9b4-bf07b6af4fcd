export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & metadata | NeonCart Commerce",
  description:
    "Manage page titles, descriptions, and social previews for NeonCart. See route-by-route metadata recommendations for optimal SEO and social sharing.",
  openGraph: {
    title: "SEO & metadata | NeonCart Commerce",
    description:
      "Manage page titles, descriptions, and social previews for NeonCart. See route-by-route metadata recommendations.",
    url: "https://neoncart.co/seo",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1600,
        height: 900,
        alt: "NeonCart Commerce | Modern Essentials, Fast Shipping",
      },
    ],
    siteName: "NeonCart Commerce",
    type: "website",
  },
  alternates: { canonical: "https://neoncart.co/seo" },
  twitter: {
    card: "summary_large_image",
    title: "SEO & metadata | NeonCart Commerce",
    description:
      "Manage page titles, descriptions, and social previews for NeonCart. See route-by-route metadata recommendations.",
    images: ["/images/og/home.jpg"],
  },
};

export default function SEOPage() {
  return (
    <div>
      <HeroGradient
        headline="SEO & metadata"
        subheadline="A single place to manage titles, descriptions, and social previews for key pages."
        primaryCta={{ label: "View store", href: "/store" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />
      {/* Additional page content or tables for recommended metadata can be added here as needed */}
      <CTABanner
        headline="Ready to optimize and convert?"
        description="Use clean metadata and consistent page structure to improve discoverability."
        ctaLabel="Shop best sellers"
        ctaHref="/store?sort=best-sellers"
        secondaryCtaLabel="Store details"
        secondaryCtaHref="/store-details"
      />
    </div>
  );
}

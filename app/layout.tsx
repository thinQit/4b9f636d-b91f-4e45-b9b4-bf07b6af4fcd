import "./globals.css"
import { DM_Sans, Inter } from "next/font/google"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} bg-background text-foreground`}>
        <NavbarSticky
          logo="NovaCart"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Store", href: "/store" },
            { label: "Store Details", href: "/store-details" },
            { label: "About", href: "/about" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Contact", href: "/contact" },
            { label: "SEO", href: "/seo" },
          ]}
          ctaLabel="Shop Now"
          ctaHref="/store"
        />
        {children}
        <FooterMultiColumn
          brand="NovaCart"
          description="A clean, conversion-first storefront for modern essentials."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "Store", href: "/store" },
                { label: "Best Sellers", href: "/store?sort=best" },
                { label: "New Arrivals", href: "/store?collection=new" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Store Details", href: "/store-details" },
                { label: "Shipping & Returns", href: "/store-details#shipping-returns" },
                { label: "SEO", href: "/seo" },
              ],
            },
          ]}
          copyright="© 2026 NovaCart. All rights reserved."
        />
      </body>
    </html>
  )
}

import "./globals.css"
import { Inter, DM_Sans } from "next/font/google"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} bg-background text-foreground antialiased`}>
        <NavbarSticky
          logo="NeonCart"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/store" },
            { label: "Store Details", href: "/store-details" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Shop now"
          ctaHref="/store"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="NeonCart"
          description="Curated essentials for modern life."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "All products", href: "/store" },
                { label: "Best sellers", href: "/store?sort=best-sellers" },
                { label: "New arrivals", href: "/store?sort=new" },
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
              title: "Help",
              links: [
                { label: "Shipping & returns", href: "/store-details#shipping" },
                { label: "FAQ", href: "/store-details#faq" },
                { label: "Privacy", href: "/store-details#privacy" },
              ],
            },
          ]}
          copyright="© 2026 NeonCart Commerce. All rights reserved."
        />
      </body>
    </html>
  )
}

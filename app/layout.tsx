import "./globals.css"
import { Inter } from "next/font/google"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Parv — Portfolio + Storefront",
  description:
    "Modern portfolio and digital product storefront. Explore projects, skills, testimonials, and download-ready templates built for Tailwind + shadcn.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarSticky
          logo="Parv"
          navItems={[
            { label: "Home", href: "/" },
            { label: "About Me", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Skills", href: "/skills" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "Store", href: "/store" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Browse Store"
          ctaHref="/store"
        />
        {children}
        <FooterMultiColumn
          brand="Parv — Portfolio + Storefront"
          description="A modern portfolio with a conversion-focused storefront for digital products."
          columns={[
            {
              title: "Pages",
              links: [
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Skills", href: "/skills" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Store",
              links: [
                { label: "All products", href: "/store" },
                { label: "Store details", href: "/store/details" },
              ],
            },
            {
              title: "Social",
              links: [
                { label: "GitHub", href: "https://github.com/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/" },
              ],
            },
          ]}
          copyright="© 2026 Parv. All rights reserved."
        />
      </body>
    </html>
  )
}

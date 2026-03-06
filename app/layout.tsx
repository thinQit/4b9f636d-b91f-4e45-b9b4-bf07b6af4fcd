import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} antialiased bg-[#F8F9FA] text-[#1A1A2E]`}>
        <NavbarSticky
          logo="Indigo Sky Shop"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Store", href: "/store" },
            { label: "Store Details", href: "/store/details" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "SEO", href: "/seo" },
          ]}
          ctaLabel="Shop Best Sellers"
          ctaHref="/store?sort=best"
        />
        {children}
        <FooterMultiColumn
          brand="Indigo Sky Shop"
          description="Modern essentials, fast shipping, and a checkout you can trust."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "Store", href: "/store" },
                { label: "Best Sellers", href: "/store?sort=best" },
                { label: "Charging", href: "/store?category=charging" },
                { label: "Travel", href: "/store?category=travel" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
                { label: "SEO", href: "/seo" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Store Details", href: "/store/details" },
                { label: "Shipping & Returns", href: "/store/details#shipping" },
                { label: "FAQ", href: "/store/details#faq" },
                { label: "Email Support", href: "mailto:support@indigoskyshop.com" },
              ],
            },
          ]}
          copyright="© 2026 Indigo Sky Shop. All rights reserved."
        />
      </body>
    </html>
  );
}

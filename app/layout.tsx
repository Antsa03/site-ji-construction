import type { Metadata } from "next"
import { Sora, DM_Sans } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { JsonLd } from "@/components/layout/JsonLd"

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "JI Construction — Expert BTP & Bungalows à Madagascar",
  description:
    "JI Construction, votre partenaire de confiance pour la construction, la rénovation et la conception de bungalows sur mesure à Madagascar. Plus de 15 ans d'expérience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-[family-name:var(--font-sans)]">
        <JsonLd />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

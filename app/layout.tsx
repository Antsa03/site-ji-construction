import type { Metadata } from "next"
import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { JsonLd } from "@/components/layout/JsonLd"

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const mono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground selection:bg-primary/25 selection:text-foreground">
        <JsonLd />

        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <a href="#main-content" className="skip-link">
              Aller au contenu principal
            </a>

            <Navbar />

            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

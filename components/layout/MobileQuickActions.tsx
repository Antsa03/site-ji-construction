import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

import { siteConfig } from "@/lib/site-config"

function MobileQuickActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/[0.94] px-3 py-2 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1fr_1.25fr] gap-2">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-bold text-foreground"
        >
          <Phone className="size-4 text-primary-text" aria-hidden="true" />
          Appeler
        </a>
        <Link
          href="/devis"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20"
        >
          Devis gratuit
        </Link>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-muted px-4 text-sm font-semibold text-foreground"
        >
          <MessageCircle className="size-4 text-primary-text" aria-hidden="true" />
          Envoyer photos ou plans sur WhatsApp
        </a>
      </div>
    </div>
  )
}

export { MobileQuickActions }

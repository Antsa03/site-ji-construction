"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import Facebook from "../../public/images/icons/facebook.svg"
import Instagram from "../../public/images/icons/instagram.svg"
import Linkedin from "../../public/images/icons/linkedin.svg"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

/* ─── Data ────────────────────────────────────────────── */

const navigation = {
  services: [
    { name: "Construction neuve", href: "/services/construction" },
    { name: "Rénovation", href: "/services/renovation" },
    { name: "Aménagement intérieur", href: "/services/amenagement" },
    { name: "Gros œuvre", href: "/services/gros-oeuvre" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Nos projets", href: "/projets" },
    { name: "L'équipe", href: "/equipe" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Devis gratuit", href: "/devis" },
    { name: "Mentions légales", href: "/mentions-legales" },
  ],
}

const socials = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

const contactInfo = [
  {
    label: "Adresse",
    value: "Lot IB 123, Antananarivo 101, Madagascar",
    href: "https://maps.google.com", // Optionnel : lien vers Google Maps
    icon: MapPin,
  },
  {
    label: "Téléphone",
    value: "+261 34 00 000 00",
    href: "tel:+261340000000",
    icon: Phone,
  },
  {
    label: "Email",
    value: "contact@jiconstruction.mg",
    href: "mailto:contact@jiconstruction.mg",
    icon: Mail,
  },
  {
    label: "Horaires",
    value: "Lun – Ven : 8h – 17h\nSam : 8h – 12h",
    icon: Clock,
  },
]

/* ─── Component ───────────────────────────────────────── */

function Footer() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion ? {} : staggerContainer(0.05, 0.1)
  const itemVariants = prefersReducedMotion ? {} : slideUp
  const itemTransition = prefersReducedMotion ? { duration: 0 } : transitionSmooth

  return (
    <footer className="relative overflow-hidden bg-background text-foreground" role="contentinfo">
      {/* ── Main Footer ─────────────────────────────── */}
      <div className="relative border-t border-border/40 bg-muted/30 dark:bg-neutral-950/40">
        {/* Subtle grid accent */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-32 pb-8 sm:pt-36">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-16"
          >
            {/* Grid: Brand + Nav */}
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
              {/* Brand column */}
              <motion.div variants={itemVariants} transition={itemTransition} className="space-y-6">
                <div className="flex flex-col items-start gap-0 space-x-0 space-y-0">
                  <div className="flex items-center">
                    <Image
                      src="/ji-logo.png"
                      alt="JI Construction Logo"
                      width={160}
                      height={160}
                      className="object-contain"
                      priority
                    />
                    <div className="flex flex-col -ml-12">
                      <span className="font-heading text-lg font-bold leading-tight tracking-tight">
                        JI Construction
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
                        BTP & Bungalows
                      </span>
                    </div>
                  </div>

                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground -mt-8">
                    On construit des espaces qui durent. Avec méthode, exigence, et le goût du
                    travail bien fait.
                  </p>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={social.name}
                        className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Image src={Icon} alt={social.name} width={16} height={16} />
                      </a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Navigation columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {(
                  [
                    ["Services", navigation.services],
                    ["Société", navigation.company],
                    ["Ressources", navigation.resources],
                  ] as const
                ).map(([title, items]) => (
                  <motion.nav
                    key={title}
                    variants={itemVariants}
                    transition={itemTransition}
                    aria-label={title}
                    className="space-y-4"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/90">
                      {title}
                    </h3>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary/60 after:transition-all after:duration-300 hover:after:w-full"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.nav>
                ))}
              </div>
            </div>

            {/* Contact Info Strip */}
            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {contactInfo.map((info) => {
                const Icon = info.icon
                const ContentWrapper = info.href ? "a" : "div"

                return (
                  <div
                    key={info.label}
                    className="flex gap-4 rounded-xl border border-border/40 bg-background/40 p-4 shadow-xs backdrop-blur-xs transition-colors hover:border-border"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary/80">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                        {info.label}
                      </p>
                      <ContentWrapper
                        {...(info.href
                          ? {
                              href: info.href,
                              className: "hover:text-primary transition-colors block text-sm",
                            }
                          : { className: "text-sm text-foreground/80" })}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {info.value}
                      </ContentWrapper>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row text-xs text-muted-foreground"
            >
              <p>© {new Date().getFullYear()} JI Construction · Tous droits réservés</p>

              <div className="flex items-center gap-4">
                <Link href="/mentions-legales" className="transition-colors hover:text-foreground">
                  Mentions légales
                </Link>
                <span className="size-1 rounded-full bg-border" />
                <Link
                  href="/politique-confidentialite"
                  className="transition-colors hover:text-foreground"
                >
                  Confidentialité
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

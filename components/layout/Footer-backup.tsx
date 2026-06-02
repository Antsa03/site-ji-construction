import { motion, useReducedMotion } from "framer-motion"

import Link from "next/link"

import Image from "next/image"

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
  {
    name: "Facebook",

    href: "#",

    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-[18px]">
        <path
          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    name: "Instagram",

    href: "#",

    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />

        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />

        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },

  {
    name: "LinkedIn",

    href: "#",

    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-[18px]">
        <path
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    name: "WhatsApp",

    href: "#",

    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-[18px]">
        <path
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const contactInfo = [
  {
    label: "Adresse",

    value: (
      <>
        Lot IB 123, Antananarivo 101
        <br />
        Madagascar
      </>
    ),

    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4">
        <path
          d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },

  {
    label: "Téléphone",

    value: (
      <a href="tel:+261340000000" className="transition-colors duration-200 hover:text-primary">
        +261 34 00 000 00
      </a>
    ),

    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4">
        <path
          d="M14.5 11.3v1.8a1.2 1.2 0 01-1.3 1.2 11.9 11.9 0 01-5.2-1.8 11.7 11.7 0 01-3.6-3.6A11.9 11.9 0 012.7 3.6 1.2 1.2 0 013.9 2.3h1.8a1.2 1.2 0 011.2 1c.1.7.3 1.4.6 2a1.2 1.2 0 01-.3 1.3l-.8.8a9.6 9.6 0 003.6 3.6l.8-.8a1.2 1.2 0 011.3-.3c.6.3 1.3.5 2 .6a1.2 1.2 0 011 1.2z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    label: "Email",

    value: (
      <a
        href="mailto:contact@jiconstruction.mg"
        className="transition-colors duration-200 hover:text-primary"
      >
        contact@jiconstruction.mg
      </a>
    ),

    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4">
        <rect
          x="1.5"
          y="3"
          width="13"
          height="10"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <path d="M1.5 4.5L8 9l6.5-4.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },

  {
    label: "Horaires",

    value: (
      <>
        Lun – Ven : 8h – 17h
        <br />
        Sam : 8h – 12h
      </>
    ),

    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />

        <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

/* ─── Component ───────────────────────────────────────── */

function Footer() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion ? {} : staggerContainer(0.05, 0.1)

  const itemVariants = prefersReducedMotion ? {} : slideUp

  const itemTransition = prefersReducedMotion ? { duration: 0 } : transitionSmooth

  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* ── CTA Banner ──────────────────────────────── */}

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            transition={itemTransition}
            className="relative -mb-16 overflow-hidden rounded-2xl border border-primary/20 bg-primary px-6 py-10 sm:px-12 sm:py-14"
          >
            {/* Background pattern */}

            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,

                backgroundSize: "24px 24px",
              }}
            />

            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary-foreground sm:text-2xl font-[family-name:var(--font-heading)]">
                  Un projet en tête ?
                </h3>

                <p className="mt-2 max-w-lg text-sm text-primary-foreground/75 sm:text-base">
                  Parlons-en ensemble. Devis gratuit sous 48h, sans engagement.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all duration-200 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  Demander un devis
                  <svg viewBox="0 0 16 16" fill="none" className="size-4">
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <a
                  href="tel:+261340000000"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-white/10 hover:border-white/40"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="size-4">
                    <path
                      d="M14.5 11.3v1.8a1.2 1.2 0 01-1.3 1.2 11.9 11.9 0 01-5.2-1.8 11.7 11.7 0 01-3.6-3.6A11.9 11.9 0 012.7 3.6 1.2 1.2 0 013.9 2.3h1.8a1.2 1.2 0 011.2 1c.1.7.3 1.4.6 2a1.2 1.2 0 01-.3 1.3l-.8.8a9.6 9.6 0 003.6 3.6l.8-.8a1.2 1.2 0 011.3-.3c.6.3 1.3.5 2 .6a1.2 1.2 0 011 1.2z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Nous appeler
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer ─────────────────────────────── */}

      <div className="relative border-t border-border/20">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/70 to-muted/90 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950" />

        {/* Subtle grid pattern */}

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `

              linear-gradient(to right, currentColor 1px, transparent 1px),

              linear-gradient(to bottom, currentColor 1px, transparent 1px)

            `,

            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-28 pb-8 sm:pt-32">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* ── Grid: Brand + Nav ───────────────── */}

            <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-20">
              {/* Brand column */}

              <motion.div variants={itemVariants} transition={itemTransition}>
                <div className="flex items-center gap-0">
                  <Image
                    src="/ji-logo.png"
                    alt="JI Construction Logo"
                    width={100}
                    height={100}
                    className="shrink-0"
                    priority
                  />

                  <div className="flex flex-col -ml-1">
                    <span className="text-lg font-bold leading-tight tracking-tight text-foreground font-[family-name:var(--font-heading)]">
                      Construction
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                      BTP & Bungalows
                    </span>
                  </div>
                </div>

                <p className="mt-6 max-w-[280px] text-[13px] leading-relaxed text-muted-foreground/70">
                  On construit des espaces qui durent. Avec méthode, exigence, et le goût du travail
                  bien fait.
                </p>

                {/* Socials */}

                <div className="mt-8 flex items-center gap-1.5">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="group relative flex size-10 items-center justify-center rounded-xl text-muted-foreground/60 transition-all duration-200 hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Navigation columns */}

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
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
                  >
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                      {title}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="group inline-flex items-center text-[13px] text-muted-foreground/65 transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                          >
                            <span className="mr-0 w-0 overflow-hidden text-primary/60 transition-all duration-300 group-hover:mr-2 group-hover:w-4 group-focus-visible:mr-2 group-focus-visible:w-4">
                              →
                            </span>

                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.nav>
                ))}
              </div>
            </div>

            {/* ── Contact Info Strip ──────────────── */}

            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/20 bg-border/20 sm:grid-cols-2 lg:grid-cols-4"
            >
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3.5 bg-background/50 p-5 backdrop-blur-sm dark:bg-background/30 sm:p-6"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] text-primary/60 dark:bg-primary/[0.12]">
                    {info.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/45">
                      {info.label}
                    </p>

                    <div className="mt-1.5 text-[13px] leading-relaxed text-foreground/75">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ── Bottom Bar ─────────────────────── */}

            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/15 pt-8 sm:flex-row"
            >
              <p className="text-xs text-muted-foreground/45">
                © {new Date().getFullYear()} JI Construction · Tous droits réservés
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground/40">
                <Link
                  href="/mentions-legales"
                  className="transition-colors duration-200 hover:text-foreground/70"
                >
                  Mentions légales
                </Link>

                <span className="size-0.5 rounded-full bg-muted-foreground/20" />

                <Link
                  href="/politique-confidentialite"
                  className="transition-colors duration-200 hover:text-foreground/70"
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

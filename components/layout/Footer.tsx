"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail, MapPin, Phone, Clock3 } from "lucide-react"

import Facebook from "../../public/images/icons/facebook.svg"
import Instagram from "../../public/images/icons/instagram.svg"
import Linkedin from "../../public/images/icons/linkedin.svg"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

/* ─── Data ────────────────────────────────────────────── */

const navigation = {
  principal: [
    { name: "Accueil", href: "/" },
    { name: "Prestations", href: "/prestations" },
    { name: "Bungalows", href: "/bungalows" },
    { name: "Devis", href: "/devis" },
    { name: "Contact", href: "/contact" },
  ],
  prestations: [
    { name: "Construction neuve", href: "/prestations" },
    { name: "Rénovation", href: "/prestations" },
    { name: "Bungalows sur mesure", href: "/bungalows" },
    { name: "Études et plans", href: "/prestations" },
  ],
  informations: [
    { name: "Modèles de bungalows", href: "/bungalows" },
    { name: "Demander un devis", href: "/devis" },
    { name: "Nous contacter", href: "/contact" },
  ],
}

const socials = [
  { name: "Facebook", href: "https://facebook.com/jiconstruction", icon: Facebook },
  { name: "Instagram", href: "https://instagram.com/jiconstruction", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/jiconstruction", icon: Linkedin },
]

const contactInfo = [
  {
    label: "Adresse",
    value: "Lot II A 45 Analakely",
    helper: "Antananarivo, Madagascar",
    href: "https://maps.google.com",
    icon: MapPin,
  },
  {
    label: "Téléphone",
    value: "+261 34 12 345 67",
    helper: "Lun — Ven : 8h — 17h",
    href: "tel:+261341234567",
    icon: Phone,
  },
  {
    label: "Email",
    value: "contact@jiconstruction.mg",
    helper: "Réponse sous 24h",
    href: "mailto:contact@jiconstruction.mg",
    icon: Mail,
  },
]

/* ─── Component ───────────────────────────────────────── */

function Footer() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion ? {} : staggerContainer(0.04, 0.08)
  const itemVariants = prefersReducedMotion ? {} : slideUp
  const itemTransition = prefersReducedMotion ? { duration: 0 } : transitionSmooth

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden border-t border-black bg-white text-[#111827] dark:border-white/15 dark:bg-neutral-950 dark:text-neutral-200"
    >
      {/* Background motif conservé, mais très discret */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.42] dark:opacity-[0.18] dark:invert"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 82%, transparent)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(212,160,23,.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,160,23,.28) 1px, transparent 1px)",
            backgroundSize: "224px 224px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 76%, transparent)",
          }}
        />

        <div className="absolute left-6 top-6 h-16 w-16 border-l border-t border-[#d4a017]/50 sm:left-10 sm:top-10" />
        <div className="absolute bottom-6 right-6 h-16 w-16 border-b border-r border-[#d4a017]/50 sm:bottom-10 sm:right-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
        >
          {/* Top row */}
          <div className="grid gap-8 border-b border-black pb-8 dark:border-white/15 lg:grid-cols-[1.1fr_1.9fr] lg:gap-12">
            {/* Brand */}
            <motion.div variants={itemVariants} transition={itemTransition}>
              <Link
                href="/"
                aria-label="Retour à l’accueil"
                className="inline-flex items-center gap-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-950"
              >
                <Image
                  src="/ji-logo.png"
                  alt="JI Construction"
                  width={88}
                  height={88}
                  className="size-20 object-contain sm:size-22 lg:size-24"
                  priority
                />

                <div>
                  <p className="text-xl font-extrabold leading-none tracking-[-0.03em] text-black dark:text-white">
                    JI Construction
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.28em] text-[#d4a017]">
                    BTP & Bungalows
                  </p>
                </div>
              </Link>

              <p className="mt-8 max-w-sm text-sm leading-6 text-[#111827] dark:text-neutral-300">
                Entreprise BTP à Madagascar, spécialisée en construction neuve,
                rénovation, études techniques et conception de bungalows sur mesure.
              </p>
            </motion.div>

            {/* Statement + CTA */}
            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#d4a017]">
                  Expert BTP & Bungalows
                </p>

                <h2 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.04em] text-black dark:text-white sm:text-3xl">
                  Des fondations aux finitions, construisons un projet fiable et adapté à votre terrain.
                </h2>
              </div>

              <Link
                href="/devis"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d4a017] px-6 py-4 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:text-black dark:hover:bg-white dark:focus-visible:ring-offset-neutral-950"
              >
                Devis gratuit
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Contact strip */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="grid border-b border-black dark:border-white/15 lg:grid-cols-3"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group grid min-h-[168px] grid-cols-[auto_1fr] gap-4 border-b border-black px-0 py-6 transition-colors duration-200 hover:border-[#d4a017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:border-white/15 dark:hover:border-[#d4a017] dark:focus-visible:ring-offset-neutral-950 lg:border-b-0 lg:border-r lg:px-6 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
                >
                  <div className="flex size-10 items-center justify-center rounded-full border border-black text-black transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:border-[#d4a017] group-hover:text-[#d4a017] dark:border-white/20 dark:text-white dark:group-hover:border-[#d4a017] dark:group-hover:text-[#d4a017]">
                    <Icon className="size-4" />
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#d4a017]">
                          0{index + 1} / {item.label}
                        </p>

                        <p className="mt-4 text-base font-extrabold leading-snug tracking-[-0.02em] text-black dark:text-white">
                          {item.value}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[#111827] dark:text-neutral-300">
                          {item.helper}
                        </p>
                      </div>

                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-[#d4a017] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </motion.div>

          {/* Navigation */}
          <div className="grid gap-8 border-b border-black py-8 dark:border-white/15 lg:grid-cols-[1.1fr_1.9fr] lg:gap-12">
            <motion.div variants={itemVariants} transition={itemTransition}>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#d4a017]">
                Réseaux
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-black bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#d4a017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:border-white/20 dark:bg-white/10 dark:hover:border-[#d4a017] dark:focus-visible:ring-offset-neutral-950"
                    >
                      <Image
                        src={Icon}
                        alt=""
                        width={16}
                        height={16}
                        className="dark:brightness-0 dark:invert"
                      />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {(
                [
                  ["Navigation", navigation.principal],
                  ["Prestations", navigation.prestations],
                  ["Informations", navigation.informations],
                ] as const
              ).map(([title, items]) => (
                <motion.nav
                  key={title}
                  variants={itemVariants}
                  transition={itemTransition}
                  aria-label={title}
                  className="space-y-4"
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-black dark:text-white">
                    {title}
                  </h3>

                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="inline-flex rounded-full text-sm font-medium text-[#111827] transition-colors duration-200 hover:text-[#d4a017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:text-neutral-300 dark:hover:text-[#d4a017] dark:focus-visible:ring-offset-neutral-950"
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

          {/* Bottom bar */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex flex-col justify-between gap-6 pt-8 text-sm text-[#111827] dark:text-neutral-300 lg:flex-row lg:items-center"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div className="inline-flex items-center gap-2">
                <Clock3 className="size-4 text-[#d4a017]" />
                <span>
                  Lun — Ven : <strong className="font-bold text-black dark:text-white">8h — 17h</strong>
                </span>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-[#d4a017] sm:block" />

              <span>
                Samedi : <strong className="font-bold text-black dark:text-white">8h — 12h</strong>
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="font-bold text-black dark:text-white">JI Construction</span>
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full transition-colors hover:text-[#d4a017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-950"
                >
                  Contact
                </Link>

                <Link
                  href="/devis"
                  className="rounded-full transition-colors hover:text-[#d4a017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a017] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-neutral-950"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export { Footer }
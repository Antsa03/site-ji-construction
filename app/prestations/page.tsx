"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Hammer, Paintbrush, Home, Ruler, ArrowUpRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const services = [
  {
    icon: Hammer,
    title: "Construction neuve",
    description:
      "Maisons, immeubles, locaux commerciaux. On gère tout, des fondations à la toiture. Matériaux de qualité, savoir-faire reconnu.",
    features: ["Maisons individuelles", "Immeubles", "Locaux commerciaux", "Entrepôts"],
    number: "01",
    pattern: "M0 20 L20 0 M10 20 L30 0 M20 20 L40 0",
  },
  {
    icon: Paintbrush,
    title: "Rénovation",
    description:
      "On transforme l'ancien en moderne. Intérieur, extérieur, mise aux normes. On respecte le caractère de votre habitat.",
    features: ["Rénovation intérieure", "Façades et toitures", "Mise aux normes", "Extension"],
    number: "02",
    pattern: "M0 0 L20 20 M10 0 L30 20 M20 0 L40 20",
  },
  {
    icon: Home,
    title: "Bungalows sur mesure",
    description:
      "Du traditionnel malgache au contemporain épuré. Chaque bungalow est unique, adapté à votre terrain et à vos envies.",
    features: ["Design personnalisé", "Matériaux locaux", "Éco-responsable", "Clé en main"],
    number: "03",
    pattern: "M0 10 Q20 0 40 10 M0 20 Q20 10 40 20",
  },
  {
    icon: Ruler,
    title: "Études et plans",
    description:
      "Plans architecturaux, études de sol, métré. L'expertise technique qui évite les mauvaises surprises.",
    features: ["Plans architecturaux", "Études de sol", "Métré et devis", "Suivi de chantier"],
    number: "04",
    pattern: "M0 0 L40 0 M0 10 L40 10 M0 20 L40 20",
  },
]

const entranceVariants = [slideUp, slideUp, slideUp, slideUp]

export default function PrestationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card pt-20 pb-14 sm:pt-28 sm:pb-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
          >
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Nos services
              </span>
            </motion.div>
            <motion.h1
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] max-w-lg"
            >
              Ce qu&apos;on fait.
            </motion.h1>
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-4 text-base text-muted-foreground max-w-md"
            >
              Construction, rénovation, bungalows, études. Des solutions complètes pour chaque projet.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer(0.1, 0.15)}
            className="grid gap-5 sm:grid-cols-2 lg:gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={entranceVariants[index]}
                transition={transitionSmooth}
              >
                <div className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden h-full">
                  {/* SVG pattern background */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern id={`pat-${service.number}`} x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                        <path d={service.pattern} stroke="currentColor" strokeWidth="0.5" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pat-${service.number})`} />
                  </svg>

                  {/* Gradient glow on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/0 group-hover:bg-primary/[0.04] rounded-full blur-3xl transition-all duration-700" />

                  {/* Top section */}
                  <div className="relative p-6 sm:p-8 pb-0">
                    {/* Number + icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-bold font-mono text-muted-foreground/10 leading-none select-none">
                        {service.number}
                      </span>
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          y: [0, -2, 2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      >
                        <service.icon className="size-7 sm:size-8" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground font-[family-name:var(--font-heading)] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="relative p-6 sm:p-8 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        En savoir plus
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-foreground/0 group-hover:text-foreground transition-all duration-300">
                        <span>Découvrir</span>
                        <ArrowUpRight className="size-3 translate-x-[-4px] group-hover:translate-x-0 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Animated bottom line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/30 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#252525] to-[#202020]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, white 20px, white 21px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer(0.12)}
            className="max-w-2xl"
          >
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-white/30 uppercase tracking-[0.2em]">
                On en parle ?
              </span>
            </motion.div>
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-4"
            >
              Un projet en tête ?
            </motion.h2>
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="text-sm text-white/40 mb-8 max-w-md"
            >
              Appelez-nous ou passez au bureau. On discute, on écoute, on propose. Devis gratuit, sans engagement.
            </motion.p>
            <motion.div variants={slideUp} transition={transitionSmooth}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="rounded-full px-7 text-sm font-semibold" asChild>
                  <Link href="/devis" className="inline-flex items-center gap-2">
                    Demander un devis
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

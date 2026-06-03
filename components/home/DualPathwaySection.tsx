"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Hammer, Ruler, Paintbrush, Home, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const btpServices = [
  { icon: Hammer, label: "Construction neuve" },
  { icon: Paintbrush, label: "Rénovation" },
  { icon: Ruler, label: "Études & plans" },
]

const bungalowServices = [
  { icon: Home, label: "Bungalows hôteliers" },
  { icon: Home, label: "Habitats modulaires" },
  { icon: Home, label: "Espaces professionnels" },
]

function DualPathwaySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop: side by side. Mobile: stacked */}
      <div className="grid min-h-[600px] lg:min-h-[700px] lg:grid-cols-2">
        {/* ═══════════════════════════════════════════════════════
            LEFT ZONE — BTP CONSTRUCTION
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="relative flex flex-col justify-center overflow-hidden px-8 py-20 sm:px-12 lg:px-16 lg:py-28"
          style={{ backgroundColor: "var(--btp-zone)" }}
        >
          {/* Background image — slightly more visible */}
          <div className="absolute inset-0 opacity-[0.12]">
            <Image
              src="/images/projects/villa-andoharanofotsy.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* Noise texture — more visible */}
          <div
            className="pointer-events-none absolute inset-0 opacity-90 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.85'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Fine grid — more visible */}
          <div
            className="pointer-events-none absolute inset-0 opacity-95"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-md">
            {/* Badge */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                Division BTP
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="mb-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Construction
              <br />
              <span className="text-foreground/40">& BTP</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mb-8 text-sm leading-relaxed text-foreground/40 sm:text-base"
            >
              Maisons, immeubles, locaux commerciaux, entrepôts. Du sol à la toiture, on gère
              l&apos;intégralité de votre projet de construction.
            </motion.p>

            {/* Services list */}
            <motion.ul variants={staggerContainer(0.08, 0.3)} className="mb-10 space-y-3">
              {btpServices.map((service) => (
                <motion.li
                  key={service.label}
                  variants={slideUp}
                  transition={transitionSmooth}
                  className="flex items-center gap-3 text-foreground/60"
                >
                  <service.icon className="size-4 text-primary/70" />
                  <span className="text-sm">{service.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA — benefit-oriented */}
            <motion.div variants={slideUp} transition={transitionSmooth}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link href="/devis" className="inline-flex items-center gap-2">
                    Demander une étude de chantier
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            SEPARATOR — Diamond line (desktop only)
            ═══════════════════════════════════════════════════════ */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden -translate-x-1/2 items-center lg:flex">
          <div className="flex flex-col items-center gap-0">
            <div className="h-32 w-px bg-gradient-to-b from-transparent to-foreground/10" />
            <div className="h-2.5 w-2.5 rotate-45 border border-foreground/20 bg-foreground/5" />
            <div className="h-32 w-px bg-gradient-to-b from-foreground/10 to-transparent" />
          </div>
        </div>

        {/* Horizontal separator (mobile only) */}
        <div className="relative z-20 flex items-center justify-center py-0 lg:hidden">
          <div className="flex items-center gap-3 px-8">
            <div className="h-px flex-1 bg-foreground/10" />
            <div className="h-2 w-2 rotate-45 border border-foreground/15" />
            <div className="h-px flex-1 bg-foreground/10" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            RIGHT ZONE — BUNGALOWS
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="relative flex flex-col justify-center overflow-hidden px-8 py-20 sm:px-12 lg:px-16 lg:py-28"
          style={{ backgroundColor: "var(--bungalow-zone)" }}
        >
          {/* Background image — slightly more visible */}
          <div className="absolute inset-0 opacity-[0.14]">
            <Image
              src="/images/projects/bungalow-nosy-be.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* Noise texture — more visible */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.85'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Warm organic texture — more visible */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.28) 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-md">
            {/* Badge */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/50">
                Division Bungalows
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="mb-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Bungalows
              <br />
              <span className="text-foreground/40">sur mesure</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mb-8 text-sm leading-relaxed text-foreground/40 sm:text-base"
            >
              Conception et fabrication de bungalows modulaires. Du traditionnel malgache au
              contemporain épuré. Pour l&apos;hospitalité, l&apos;habitat ou le professionnel.
            </motion.p>

            {/* Services list */}
            <motion.ul variants={staggerContainer(0.08, 0.3)} className="mb-10 space-y-3">
              {bungalowServices.map((service) => (
                <motion.li
                  key={service.label}
                  variants={slideUp}
                  transition={transitionSmooth}
                  className="flex items-center gap-3 text-foreground/60"
                >
                  <service.icon className="size-4 text-foreground/40" />
                  <span className="text-sm">{service.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA — benefit-oriented */}
            <motion.div variants={slideUp} transition={transitionSmooth}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-foreground/20 px-7 text-sm font-semibold text-foreground hover:border-foreground/30 hover:bg-foreground/10"
                  asChild
                >
                  <Link href="/bungalows" className="inline-flex items-center gap-2">
                    Configurer mon bungalow
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { DualPathwaySection }

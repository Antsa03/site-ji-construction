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
      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* ═══════════════════════════════════════════════════════
            LEFT ZONE — BTP CONSTRUCTION
            ═══════════════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-20 lg:py-28 overflow-hidden"
          style={{ backgroundColor: "var(--btp-zone)" }}
        >
          {/* Background image — very subtle */}
          <div className="absolute inset-0 opacity-[0.08]">
            <Image
              src="/images/projects/villa-andoharanofotsy.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-md">
            {/* Badge */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] text-foreground/50 uppercase tracking-[0.2em] font-medium">
                Division BTP
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] leading-[1.05] mb-5"
            >
              Construction
              <br />
              <span className="text-foreground/40">& BTP</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="text-sm sm:text-base text-foreground/40 leading-relaxed mb-8"
            >
              Maisons, immeubles, locaux commerciaux, entrepôts. Du sol à la toiture, on gère
              l&apos;intégralité de votre projet de construction.
            </motion.p>

            {/* Services list */}
            <motion.ul variants={staggerContainer(0.08, 0.3)} className="space-y-3 mb-10">
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
        <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 items-center pointer-events-none">
          <div className="flex flex-col items-center gap-0">
            <div className="w-px h-32 bg-gradient-to-b from-transparent to-foreground/10" />
            <div className="w-2.5 h-2.5 rotate-45 border border-foreground/20 bg-foreground/5" />
            <div className="w-px h-32 bg-gradient-to-b from-foreground/10 to-transparent" />
          </div>
        </div>

        {/* Horizontal separator (mobile only) */}
        <div className="lg:hidden flex items-center justify-center py-0 relative z-20">
          <div className="flex items-center gap-3 px-8">
            <div className="h-px flex-1 bg-foreground/10" />
            <div className="w-2 h-2 rotate-45 border border-foreground/15" />
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
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-20 lg:py-28 overflow-hidden"
          style={{ backgroundColor: "var(--bungalow-zone)" }}
        >
          {/* Background image — very subtle */}
          <div className="absolute inset-0 opacity-[0.1]">
            <Image
              src="/images/projects/bungalow-nosy-be.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Warm organic texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-md">
            {/* Badge */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
              <span className="text-[11px] text-foreground/50 uppercase tracking-[0.2em] font-medium">
                Division Bungalows
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] leading-[1.05] mb-5"
            >
              Bungalows
              <br />
              <span className="text-foreground/40">sur mesure</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="text-sm sm:text-base text-foreground/40 leading-relaxed mb-8"
            >
              Conception et fabrication de bungalows modulaires. Du traditionnel malgache au
              contemporain épuré. Pour l&apos;hospitalité, l&apos;habitat ou le professionnel.
            </motion.p>

            {/* Services list */}
            <motion.ul variants={staggerContainer(0.08, 0.3)} className="space-y-3 mb-10">
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
                  className="rounded-full px-7 text-sm font-semibold border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/30"
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

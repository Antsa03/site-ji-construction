"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"
import { siteConfig } from "@/lib/site-config"

/* ═══════════════════════════════════════════════════════
   ANIMATED BLUEPRINT SVG
   ═══════════════════════════════════════════════════════ */

function AnimatedBlueprint() {
  return (
    <motion.svg
      className="absolute right-4 top-1/2 -translate-y-1/2 w-88 h-88 hidden lg:block pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, rotate: -5 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="ctaBlueprintGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.14 85)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="oklch(0.55 0.015 50)" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Outer frame */}
      <motion.rect
        x="10"
        y="10"
        width="180"
        height="180"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.15"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.3 }}
      />

      {/* Second outer frame — new layer */}
      <motion.rect
        x="18"
        y="18"
        width="164"
        height="164"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="0.4"
        strokeDasharray="4 6"
        opacity="0.1"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Inner frame */}
      <motion.rect
        x="35"
        y="35"
        width="130"
        height="130"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="0.6"
        opacity="0.2"
        fill="url(#ctaBlueprintGrad)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      {/* Cross lines — main axes */}
      <motion.line
        x1="10"
        y1="100"
        x2="190"
        y2="100"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.12"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.line
        x1="100"
        y1="10"
        x2="100"
        y2="190"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.12"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Diagonal guidelines — new */}
      <motion.line
        x1="10"
        y1="10"
        x2="190"
        y2="190"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeDasharray="3 5"
        opacity="0.07"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.1 }}
      />
      <motion.line
        x1="190"
        y1="10"
        x2="10"
        y2="190"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeDasharray="3 5"
        opacity="0.07"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.2 }}
      />

      {/* Corner brackets — top left */}
      <motion.path
        d="M10 35 L10 10 L35 10"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="1"
        opacity="0.25"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      {/* Corner brackets — top right */}
      <motion.path
        d="M165 10 L190 10 L190 35"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="1"
        opacity="0.25"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.3 }}
      />
      {/* Corner brackets — bottom right */}
      <motion.path
        d="M190 165 L190 190 L165 190"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="1"
        opacity="0.25"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.4 }}
      />
      {/* Corner brackets — bottom left */}
      <motion.path
        d="M35 190 L10 190 L10 165"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="1"
        opacity="0.25"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />

      {/* Center circle — outer */}
      <motion.circle
        cx="100"
        cy="100"
        r="40"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="0.6"
        opacity="0.15"
        fill="none"
        initial={{ pathLength: 0, scale: 0 }}
        whileInView={{ pathLength: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Center circle — inner */}
      <motion.circle
        cx="100"
        cy="100"
        r="25"
        stroke="oklch(0.72 0.14 85)"
        strokeWidth="0.4"
        strokeDasharray="5 4"
        opacity="0.12"
        fill="none"
        initial={{ pathLength: 0, scale: 0 }}
        whileInView={{ pathLength: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.2 }}
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Center dot */}
      <motion.circle
        cx="100"
        cy="100"
        r="2.5"
        fill="oklch(0.72 0.14 85)"
        opacity="0.2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.6 }}
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Measurement ticks along top edge */}
      {[40, 60, 80, 120, 140, 160].map((x, i) => (
        <motion.line
          key={`top-${x}`}
          x1={x}
          y1="10"
          x2={x}
          y2="17"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.6 + i * 0.05 }}
        />
      ))}

      {/* Measurement ticks along left edge */}
      {[40, 60, 80, 120, 140, 160].map((y, i) => (
        <motion.line
          key={`left-${y}`}
          x1="10"
          y1={y}
          x2="17"
          y2={y}
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.8 + i * 0.05 }}
        />
      ))}

      {/* Corner crosshairs — bigger, bolder */}
      {[
        { x: 10, y: 10 },
        { x: 190, y: 10 },
        { x: 10, y: 190 },
        { x: 190, y: 190 },
      ].map((pos, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 2 + i * 0.08 }}
          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
        >
          <line
            x1={pos.x - 8}
            y1={pos.y}
            x2={pos.x + 8}
            y2={pos.y}
            stroke="oklch(0.72 0.14 85)"
            strokeWidth="0.7"
          />
          <line
            x1={pos.x}
            y1={pos.y - 8}
            x2={pos.x}
            y2={pos.y + 8}
            stroke="oklch(0.72 0.14 85)"
            strokeWidth="0.7"
          />
          <circle
            cx={pos.x}
            cy={pos.y}
            r="3"
            stroke="oklch(0.72 0.14 85)"
            strokeWidth="0.4"
            fill="none"
          />
        </motion.g>
      ))}

      {/* Dimension annotation — top */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        <line x1="35" y1="6" x2="165" y2="6" stroke="oklch(0.72 0.14 85)" strokeWidth="0.4" />
        <line x1="35" y1="3" x2="35" y2="9" stroke="oklch(0.72 0.14 85)" strokeWidth="0.4" />
        <line x1="165" y1="3" x2="165" y2="9" stroke="oklch(0.72 0.14 85)" strokeWidth="0.4" />
      </motion.g>

      {/* Dimension annotation — left */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2.3 }}
      >
        <line x1="6" y1="35" x2="6" y2="165" stroke="oklch(0.72 0.14 85)" strokeWidth="0.4" />
        <line x1="3" y1="35" x2="9" y2="35" stroke="oklch(0.72 0.14 85)" strokeWidth="0.4" />
        <line x1="3" y1="165" x2="9" y2="165" stroke="oklch(0.72 0.14 85)" strokeWidth="0.4" />
      </motion.g>
    </motion.svg>
  )
}

/* ═══════════════════════════════════════════════════════
   MAIN CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-muted/60 dark:bg-background/80" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Crosshatch architectural pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(-45deg, transparent, transparent 14px, currentColor 14px, currentColor 15px),
            repeating-linear-gradient(45deg, transparent, transparent 14px, currentColor 14px, currentColor 15px)
          `,
        }}
      />

      {/* Copper mesh gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 50% 50% at 20% 50%, oklch(0.72 0.14 85 / 0.04), transparent 60%)",
            "radial-gradient(ellipse 50% 50% at 30% 60%, oklch(0.72 0.14 85 / 0.06), transparent 60%)",
            "radial-gradient(ellipse 50% 50% at 20% 50%, oklch(0.72 0.14 85 / 0.04), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated blueprint decoration */}
      <AnimatedBlueprint />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.12)}
          className="max-w-2xl text-foreground"
        >
          <motion.span
            variants={slideUp}
            transition={transitionSmooth}
            className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-mono block mb-4"
          >
            08 — On en parle ?
          </motion.span>

          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-primary/40" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary-text">
              Parlons de votre projet
            </span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading leading-tight mb-6"
          >
            On ne fait pas de promesses.
            <br />
            <span className="text-primary-text">On bâtit des preuves.</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            transition={transitionSmooth}
            className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md"
          >
            Appelez-nous, envoyez un mail, ou passez au bureau. On discute, on écoute, on propose.
            Devis gratuit, sans engagement.
          </motion.p>

          {/* Double CTA */}
          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <div className="relative w-full sm:w-auto">
              <motion.div
                className="absolute -inset-1 bg-primary/10 rounded-full blur-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative"
              >
                <Button
                  size="lg"
                  className="w-full rounded-full px-7 py-3 text-sm font-semibold shadow-lg shadow-primary/20 sm:w-auto"
                  asChild
                >
                  <Link href="/devis" className="inline-flex items-center gap-2">
                    Demander un devis gratuit
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-border/80 bg-background/50 px-7 py-3 text-sm font-semibold text-foreground shadow-lg shadow-black/5 backdrop-blur-sm hover:border-border hover:bg-muted/80 sm:w-auto dark:border-white/25 dark:bg-white/8 dark:text-white dark:hover:border-white/35 dark:hover:bg-white/[0.14]"
                asChild
              >
                <Link href="/bungalows" className="inline-flex items-center gap-2">
                  Créer votre bungalow
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="mt-8 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-linear-to-r from-border/60 to-transparent max-w-24" />
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary-text"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { CtaSection }

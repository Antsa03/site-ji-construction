"use client"

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "ans d'expérience",
    detail: "Sur le terrain, jour après jour",
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.5" />
        <circle
          cx="60"
          cy="60"
          r="38"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="6 4"
        />
        <path
          d="M60 18 L60 60 L84 84"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.3" />
        {/* Tick marks */}
        <line x1="60" y1="10" x2="60" y2="16" stroke="currentColor" strokeWidth="0.4" />
        <line x1="60" y1="104" x2="60" y2="110" stroke="currentColor" strokeWidth="0.4" />
        <line x1="10" y1="60" x2="16" y2="60" stroke="currentColor" strokeWidth="0.4" />
        <line x1="104" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="0.4" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: "+",
    label: "projets livrés",
    detail: "Partout à Madagascar",
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Building */}
        <rect
          x="20"
          y="40"
          width="80"
          height="68"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path d="M60 10 L105 40 L15 40 Z" stroke="currentColor" strokeWidth="0.5" />
        {/* Windows */}
        <rect
          x="32"
          y="52"
          width="10"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <rect
          x="55"
          y="52"
          width="10"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <rect
          x="78"
          y="52"
          width="10"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <rect
          x="32"
          y="74"
          width="10"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <rect
          x="55"
          y="74"
          width="10"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <rect
          x="78"
          y="74"
          width="10"
          height="12"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        {/* Door */}
        <rect x="50" y="90" width="20" height="18" rx="1" stroke="currentColor" strokeWidth="0.4" />
        {/* Foundation lines */}
        <line x1="15" y1="108" x2="105" y2="108" stroke="currentColor" strokeWidth="0.3" />
        <line x1="12" y1="112" x2="108" y2="112" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    ),
  },
  {
    value: 30,
    suffix: "+",
    label: "artisans qualifiés",
    detail: "Une équipe qui connaît son métier",
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        {/* Center person */}
        <circle cx="60" cy="32" r="12" stroke="currentColor" strokeWidth="0.5" />
        <path
          d="M36 88 C36 68 46 56 60 56 C74 56 84 68 84 88"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        {/* Left person */}
        <circle cx="28" cy="44" r="8" stroke="currentColor" strokeWidth="0.3" />
        <path
          d="M12 92 C12 78 18 70 28 70 C36 70 42 76 44 84"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        {/* Right person */}
        <circle cx="92" cy="44" r="8" stroke="currentColor" strokeWidth="0.3" />
        <path
          d="M108 92 C108 78 102 70 92 70 C84 70 78 76 76 84"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        {/* Connection arcs */}
        <path
          d="M40 38 Q48 28 52 32"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="3 3"
        />
        <path
          d="M80 38 Q72 28 68 32"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: "%",
    label: "délais respectés",
    detail: "Parce que votre temps compte",
    bgIcon: (
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.5" />
        <circle
          cx="60"
          cy="60"
          r="42"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="4 6"
        />
        <path
          d="M38 60 L52 74 L82 44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Radiating lines */}
        <line x1="60" y1="4" x2="60" y2="12" stroke="currentColor" strokeWidth="0.3" />
        <line x1="60" y1="108" x2="60" y2="116" stroke="currentColor" strokeWidth="0.3" />
        <line x1="4" y1="60" x2="12" y2="60" stroke="currentColor" strokeWidth="0.3" />
        <line x1="108" y1="60" x2="116" y2="60" stroke="currentColor" strokeWidth="0.3" />
        {/* Diagonal ticks */}
        <line x1="18" y1="18" x2="23" y2="23" stroke="currentColor" strokeWidth="0.2" />
        <line x1="97" y1="18" x2="102" y2="23" stroke="currentColor" strokeWidth="0.2" />
        <line x1="18" y1="102" x2="23" y2="97" stroke="currentColor" strokeWidth="0.2" />
        <line x1="97" y1="102" x2="102" y2="97" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    ),
  },
]

const trustPoints = ["Matériaux durables", "Suivi rigoureux", "Finitions soignées"]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()

  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplay(latest))
    return () => unsubscribe()
  }, [rounded])

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplay(value)
      return
    }
    if (!isInView) return
    const controls = animate(motionValue, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    })
    return () => controls.stop()
  }, [isInView, value, motionValue, shouldReduceMotion])

  return (
    <span ref={ref} className="inline-block">
      {display.toLocaleString("fr-FR")}
      <span className="text-primary/50">{suffix}</span>
    </span>
  )
}

function WhyUsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-muted/20" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Copper glow */}
      <motion.div
        className="absolute -top-32 right-[-6rem] h-[36rem] w-[36rem] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.12 65 / 0.12), transparent 60%)",
        }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blueprint circle */}
      <motion.svg
        className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.025]"
        viewBox="0 0 600 600"
        fill="none"
        initial={false}
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="0.5" />
        <circle
          cx="300"
          cy="300"
          r="200"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="12 8"
        />
        <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="0.4" />
        <line x1="300" y1="50" x2="300" y2="550" stroke="currentColor" strokeWidth="0.2" />
        <line x1="50" y1="300" x2="550" y2="300" stroke="currentColor" strokeWidth="0.2" />
      </motion.svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Left — narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer(0.12)}
            className="max-w-lg lg:sticky lg:top-32"
          >
            <motion.span
              variants={slideUp}
              transition={transitionSmooth}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground backdrop-blur-sm"
            >
              <span className="h-1 w-1 rounded-full bg-primary/60" />
              Pourquoi nous
            </motion.span>

            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] font-heading"
            >
              On ne promet pas.
              <br />
              <span className="text-muted-foreground/70">On construit.</span>
            </motion.h2>

            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-6 text-base leading-[1.7] text-muted-foreground sm:text-[17px]"
            >
              Chaque mur qu&apos;on monte, chaque dalle qu&apos;on coule — c&apos;est du concret.
              Pas de discours. Juste du travail bien fait, avec des gens qui aiment leur métier et
              des matériaux qu&apos;on connaît par cœur.
            </motion.p>

            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {trustPoints.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-4 py-2 text-xs font-medium text-foreground/80 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:text-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-primary/50" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-12 flex items-center gap-3 text-xs text-muted-foreground/60"
            >
              <div className="h-px w-8 bg-primary/30" />
              <span className="font-mono tracking-wider">Depuis 2009 — Antananarivo</span>
            </motion.div>
          </motion.div>

          {/* Right — stat cards with background icons */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer(0.08, 0.1)}
            className="grid gap-4 sm:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <motion.li
                key={stat.label}
                variants={slideUp}
                transition={transitionSmooth}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        rotate: index % 2 === 0 ? -0.5 : 0.5,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      }
                }
                className="group relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-background/90 to-muted/30 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_24px_64px_-20px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_24px_64px_-20px_rgba(0,0,0,0.4)]"
              >
                {/* ——— Background icon ——— */}
                <div className="absolute -right-4 -bottom-4 h-36 w-36 text-foreground/[0.03] transition-all duration-700 group-hover:text-primary/[0.07] group-hover:scale-110 sm:h-40 sm:w-40">
                  {stat.bgIcon}
                </div>

                {/* Warm corner glow on hover */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/[0.05] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative p-7 sm:p-8">
                  {/* Index */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/30 transition-colors duration-500 group-hover:text-muted-foreground/50">
                      0{index + 1}
                    </span>
                    {/* Small decorative dot */}
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/20 transition-colors duration-500 group-hover:bg-primary/40" />
                  </div>

                  {/* Number */}
                  <p className="mt-6 text-[3.25rem] font-bold leading-none tracking-tighter text-foreground font-heading tabular-nums sm:text-[3.5rem]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>

                  {/* Divider */}
                  <div className="relative my-5 h-px w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-border/60 via-primary/25 to-transparent" />
                    <div className="absolute left-0 top-0 h-full w-8 bg-primary/40 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-12" />
                  </div>

                  {/* Label + detail */}
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-foreground/85">
                    {stat.label}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground/70">
                    {stat.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export { WhyUsSection }

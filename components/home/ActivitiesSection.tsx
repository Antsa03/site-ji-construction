"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Hammer, Paintbrush, Home, Ruler, ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const activities = [
  {
    icon: Hammer,
    title: "Construction neuve",
    description: "Maisons, immeubles, locaux commerciaux. Du sol à la toiture, on gère tout.",
    number: "01",
    pattern: "M0 20 L20 0 M10 20 L30 0 M20 20 L40 0",
  },
  {
    icon: Paintbrush,
    title: "Rénovation",
    description: "On transforme l'ancien en moderne. Intérieur, extérieur, mise aux normes.",
    number: "02",
    pattern: "M0 0 L20 20 M10 0 L30 20 M20 0 L40 20",
  },
  {
    icon: Home,
    title: "Bungalows",
    description: "Conception sur mesure. Du traditionnel malgache au contemporain épuré.",
    number: "03",
    pattern: "M0 10 Q20 0 40 10 M0 20 Q20 10 40 20",
  },
  {
    icon: Ruler,
    title: "Études & plans",
    description: "Plans architecturaux, études de sol, métré. L'expertise technique avant tout.",
    number: "04",
    pattern: "M0 0 L40 0 M0 10 L40 10 M0 20 L40 20",
  },
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 })

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

function ActivitiesSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer(0.1)}
          className="mb-14"
        >
          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
              Ce qu&apos;on fait
            </span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] max-w-md"
          >
            On construit, on rénove, on crée.
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer(0.1, 0.15)}
          className="grid gap-4 sm:grid-cols-2 lg:gap-5"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={slideUp}
              transition={transitionSmooth}
            >
              <TiltCard>
                <Link
                  href="/prestations"
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card overflow-hidden min-h-[220px] sm:min-h-[260px]"
                >
                  {/* SVG pattern background - unique per card */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern id={`pat-${activity.number}`} x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                        <path d={activity.pattern} stroke="currentColor" strokeWidth="0.5" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pat-${activity.number})`} />
                  </svg>

                  {/* Gradient glow on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/0 group-hover:bg-primary/[0.04] rounded-full blur-3xl transition-all duration-700" />

                  {/* Top section */}
                  <div className="relative p-6 sm:p-8 pb-0">
                    {/* Number + icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-bold font-mono text-muted-foreground/10 leading-none select-none">
                        {activity.number}
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
                        }}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                      >
                        <activity.icon className="size-7 sm:size-8" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground font-[family-name:var(--font-heading)] mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {activity.description}
                    </p>
                  </div>

                  {/* Bottom bar */}
                  <div className="relative p-6 sm:p-8 pt-4">
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
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { ActivitiesSection }

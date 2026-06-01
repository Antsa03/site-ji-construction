"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const stats = [
  { value: 15, suffix: "+", label: "ans d'expérience", detail: "Sur le terrain, jour après jour" },
  { value: 100, suffix: "+", label: "projets livrés", detail: "Partout à Madagascar" },
  { value: 30, suffix: "+", label: "artisans qualifiés", detail: "Une équipe qui connaît son métier" },
  { value: 98, suffix: "%", label: "délais respectés", detail: "Parce que votre temps compte" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v))
    return unsubscribe
  }, [rounded])

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionVal, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    })
    return controls.stop
  }, [isInView, value, motionVal])

  return (
    <span ref={ref} className="inline-block">
      {display}
      {suffix}
    </span>
  )
}

function WhyUsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width accent band */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#252525] to-[#202020]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left - text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer(0.1)}
          >
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-white/40 uppercase tracking-[0.2em]">
                Pourquoi nous
              </span>
            </motion.div>
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight"
            >
              Des chiffres qui parlent.
              <br />
              <span className="text-white/40">Un savoir-faire qui se voit.</span>
            </motion.h2>
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-6 text-white/50 leading-relaxed max-w-md"
            >
              Chaque projet est une promesse tenue. On ne vend pas du rêve — on bâtit du concret,
              avec les mains, les bons matériaux, et une équipe qui aime ce qu'elle fait.
            </motion.p>
          </motion.div>

          {/* Right - stats, not in a grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer(0.12, 0.2)}
            className="space-y-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={slideUp}
                transition={transitionSmooth}
                className="group flex items-baseline gap-4 sm:gap-6 border-b border-white/10 pb-6 last:border-0"
              >
                <div className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-heading)] tabular-nums min-w-[100px]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-xs text-white/35 mt-1">{stat.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { WhyUsSection }

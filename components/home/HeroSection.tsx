"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { staggerContainer, wordReveal, transitionSmooth } from "@/lib/animations"

const titleWords = ["Construisons", "votre", "avenir", "ensemble"]

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -100])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 sm:items-center sm:pb-0 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/construction.jpg')",
          y: bgY,
          scale: bgScale,
        }}
      />

      {/* Overlays - less uniform, more organic */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content - left-aligned on mobile, centered on desktop */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.5)}
            className="flex flex-col gap-6"
          >
            {/* Small label - not centered, left aligned */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs sm:text-sm text-white/60 uppercase tracking-[0.2em] font-medium">
                BTP & Bungalows — Madagascar
              </span>
            </motion.div>

            {/* Title - not centered, breaks the grid */}
            <h1 className="text-[2.8rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white font-[family-name:var(--font-heading)]">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  transition={{ ...transitionSmooth, delay: 0.6 + i * 0.1 }}
                  className="inline-block mr-[0.2em]"
                >
                  {i === titleWords.length - 1 ? (
                    <span className="relative inline-block">
                      <span className="text-gradient-amber">{word}</span>
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-base sm:text-lg text-white/40 max-w-xl leading-relaxed"
            >
              Plus de 15 ans à bâtir des projets qui comptent. Du premier coup de crayon à la remise des clés.
            </motion.p>

            {/* Buttons - not centered */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/20" asChild>
                  <Link href="/prestations" className="inline-flex items-center gap-2">
                    Nos Prestations
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-7 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/bungalows">
                    Voir nos bungalows
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats - inline, not centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex items-center gap-6 pt-6 border-t border-white/10 mt-2"
            >
              {[
                { value: "15+", label: "ans" },
                { value: "100+", label: "projets" },
                { value: "98%", label: "délais tenus" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/40">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - bottom right, not centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden sm:flex items-center gap-3"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/20 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary"
        style={{ width: progressWidth }}
      />
    </section>
  )
}

export { HeroSection }

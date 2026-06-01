"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#252525] to-[#202020]" />

      {/* Subtle diagonal lines */}
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] leading-tight mb-6"
          >
            Votre projet commence
            <br />
            par un café.
          </motion.h2>

          <motion.p
            variants={slideUp}
            transition={transitionSmooth}
            className="text-base text-white/40 leading-relaxed mb-8 max-w-md"
          >
            Pas de formulaire compliqué. Appelez-nous, envoyez un mail, ou passez au bureau.
            On discute, on écoute, on propose. Devis gratuit, sans engagement.
          </motion.p>

          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="rounded-full px-7 text-sm font-semibold" asChild>
                <Link href="/devis" className="inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
            <span className="text-xs text-white/25">ou appelez le +261 34 12 345 67</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { CtaSection }

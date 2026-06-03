"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

interface PremiumCTAProps {
  eyebrow: string
  title: string
  description: string
  href?: string
  buttonLabel?: string
}

function PremiumCTA({
  eyebrow,
  title,
  description,
  href = "/devis",
  buttonLabel = "Demander un devis gratuit",
}: PremiumCTAProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.primary/0.12),transparent_34%),linear-gradient(to_bottom_right,theme(colors.background),theme(colors.card),theme(colors.muted))] dark:bg-[radial-gradient(circle_at_top_left,theme(colors.primary/0.14),transparent_36%),linear-gradient(to_bottom_right,theme(colors.background),theme(colors.card),theme(colors.secondary))]" />

      <div
        className="absolute inset-0 text-foreground opacity-[0.035] dark:opacity-[0.055]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, currentColor, currentColor 1px, transparent 1px, transparent 22px)",
        }}
      />

      <div className="absolute -right-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-3xl dark:bg-primary/[0.10]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
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
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-foreground sm:text-4xl"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={slideUp}
            transition={transitionSmooth}
            className="mb-8 max-w-md text-sm leading-7 text-muted-foreground"
          >
            {description}
          </motion.p>

          <motion.div variants={slideUp} transition={transitionSmooth}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="rounded-full px-7 text-sm font-semibold shadow-sm transition-shadow hover:shadow-md"
                asChild
              >
                <Link href={href} className="inline-flex items-center gap-2">
                  {buttonLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { PremiumCTA }

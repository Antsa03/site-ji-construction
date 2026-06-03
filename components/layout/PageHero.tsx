"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background pt-24 pb-14 sm:pt-28 sm:pb-18",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.primary/0.10),transparent_34%),linear-gradient(to_bottom,theme(colors.background),theme(colors.card))] dark:bg-[radial-gradient(circle_at_top_left,theme(colors.primary/0.12),transparent_36%),linear-gradient(to_bottom,theme(colors.background),theme(colors.card))]" />

      <div
        className="absolute inset-0 text-foreground opacity-[0.025] dark:opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1)}>
          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="mb-4 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="section-kicker">{eyebrow}</span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            transition={transitionSmooth}
            className={cn(
              "max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl",
              titleClassName
            )}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={slideUp}
            transition={transitionSmooth}
            className={cn(
              "mt-4 max-w-2xl text-base leading-7 text-muted-foreground",
              descriptionClassName
            )}
          >
            {description}
          </motion.p>

          {children ? (
            <motion.div variants={slideUp} transition={transitionSmooth} className="mt-6">
              {children}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}

export { PageHero }

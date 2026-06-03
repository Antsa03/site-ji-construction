"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const guarantees = [
  {
    code: "DEVIS",
    title: "Devis lisible",
    text: "Chaque estimation distingue les postes essentiels, les options et les points à valider.",
    detail: "Postes / options / réserves",
  },
  {
    code: "DÉLAIS",
    title: "Planning réaliste",
    text: "Les étapes sont posées avant le chantier afin de limiter les promesses floues.",
    detail: "Jalons / approvisionnement / équipe",
  },
  {
    code: "SUIVI",
    title: "Suivi visuel",
    text: "Photos, points réguliers et validations rendent le chantier plus transparent.",
    detail: "Photos / contrôle / compte-rendu",
  },
  {
    code: "RÉCEPTION",
    title: "Contrôle finition",
    text: "Les finitions, raccords et détails visibles sont vérifiés avant la réception.",
    detail: "Finitions / reprise / validation",
  },
]

function ProofStamp({ code, index }: { code: string; index: number }) {
  return (
    <div className="relative mb-5 overflow-hidden rounded-2xl border border-primary/25 bg-background/70 px-4 py-3 text-primary-text">
      <div className="absolute inset-y-0 left-0 w-1 bg-primary/70" />
      <div className="absolute right-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border border-primary/20" />
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-primary-text/70">
            Engagement
          </p>
          <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">{code}</p>
        </div>
        <span className="font-mono text-3xl font-black leading-none tracking-[-0.08em] text-primary/45">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}

function GuaranteesSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerVariants = shouldReduceMotion ? {} : staggerContainer(0.08, 0.08)
  const itemVariants = shouldReduceMotion ? {} : slideUp

  return (
    <section className="relative overflow-hidden py-16 sm:py-28 lg:py-36">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--background) 0%, color-mix(in oklch, var(--background) 82%, transparent) 42%, color-mix(in oklch, var(--background) 46%, transparent) 100%), url('/images/hero/construction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/74 dark:bg-background/[0.8]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <motion.div variants={itemVariants} transition={transitionSmooth} className="surface-contrast rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-primary-text">
                Contrôle chantier
              </span>
            </div>
            <p className="premium-surtitre">Engagements</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[0.96] tracking-[-0.055em] text-foreground sm:text-5xl">
              Des preuves concrètes, pas seulement des promesses.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Cette section abandonne les icônes décoratives au profit d’un langage plus professionnel : codes,
              jalons, détails de contrôle et preuves opérationnelles.
            </p>
            <Button asChild className="mt-7 min-h-12 rounded-full px-7 font-bold">
              <Link href="/devis" className="inline-flex items-center gap-2">
                Demander une estimation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {guarantees.map((item, index) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                transition={transitionSmooth}
                className="surface-contrast rounded-3xl p-5 sm:p-6"
              >
                <ProofStamp code={item.code} index={index} />
                <h3 className="text-xl font-extrabold tracking-[-0.035em] text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary-text/75">
                    {item.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { GuaranteesSection }

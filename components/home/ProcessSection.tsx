"use client"

import { motion, useReducedMotion } from "framer-motion"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const steps = [
  {
    code: "ÉCHANGE",
    title: "Premier échange",
    description: "Nous cadrons le besoin, le terrain, le budget et les délais avant toute estimation.",
  },
  {
    code: "ÉTUDE",
    title: "Étude & devis",
    description: "Les postes importants, les options et les contraintes techniques sont posés clairement.",
  },
  {
    code: "CADRAGE",
    title: "Préparation",
    description: "Planning, matériaux, accès chantier et équipe sont validés pour limiter les imprévus.",
  },
  {
    code: "CHANTIER",
    title: "Réalisation",
    description: "Le chantier avance avec des points de contrôle et une communication régulière.",
  },
  {
    code: "LIVRAISON",
    title: "Réception",
    description: "Les finitions sont vérifiées avec vous avant la clôture et la remise du projet.",
  },
]

function StepBlueprintMark({ index, code }: { index: number; code: string }) {
  return (
    <div className="relative min-h-24 overflow-hidden rounded-2xl border border-primary/25 bg-primary/[0.055] p-4 text-primary-text">
      <div className="absolute inset-0 opacity-35">
        <svg viewBox="0 0 160 96" fill="none" className="h-full w-full">
          <path d="M12 18H148M12 48H148M12 78H148" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
          <path d="M28 8V88M80 8V88M132 8V88" stroke="currentColor" strokeWidth="0.6" opacity="0.28" />
          <path d="M28 72L80 24L132 72" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
          <path d="M48 72V46H112V72" stroke="currentColor" strokeWidth="1" opacity="0.42" />
          <path d="M56 58H72M88 58H104" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        </svg>
      </div>
      <div className="relative flex items-end justify-between gap-4">
        <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-primary-text/80">
          {code}
        </span>
        <span className="font-mono text-4xl font-black leading-none tracking-[-0.08em] text-primary/45">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}

function ProcessSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerVariants = shouldReduceMotion ? {} : staggerContainer(0.08, 0.08)
  const itemVariants = shouldReduceMotion ? {} : slideUp

  return (
    <section className="relative overflow-hidden py-16 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/35 to-background" />
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 45%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        >
          <motion.div variants={itemVariants} transition={transitionSmooth} className="space-y-5">
            <p className="premium-surtitre">Méthode chantier</p>
            <h2 className="premium-section-title max-w-xl">Un parcours clair, du premier échange à la livraison.</h2>
            <p className="premium-lead">
              Une bonne expérience BTP ne repose pas sur des pictogrammes génériques, mais sur une méthode lisible : étapes,
              décisions, validations et réception.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={itemVariants}
                transition={transitionSmooth}
                className="surface-contrast group relative overflow-hidden rounded-3xl p-5 sm:p-6"
              >
                <div className="relative flex min-h-full flex-col gap-5">
                  <StepBlueprintMark index={index} code={step.code} />
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold tracking-[-0.035em] text-foreground">{step.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { ProcessSection }

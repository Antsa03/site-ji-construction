"use client"

import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    code: "DEVIS",
    question: "Pouvez-vous établir un devis sans plan complet ?",
    answer:
      "Oui. Nous pouvons commencer avec une description du projet, quelques photos, une surface approximative et le lieu du chantier. Si nécessaire, nous vous indiquons ensuite les éléments à préciser pour obtenir une estimation plus fiable.",
  },
  {
    code: "DÉLAIS",
    question: "Combien de temps faut-il prévoir pour un chantier ?",
    answer:
      "Le délai dépend du type de projet, de la surface, de l’accès au terrain, des matériaux et du niveau de finition. Avant le démarrage, nous posons un planning réaliste avec les grandes étapes du chantier.",
  },
  {
    code: "CHANTIER",
    question: "Intervenez-vous uniquement à Antananarivo ?",
    answer:
      "Nous intervenons principalement à Antananarivo et ses alentours, mais certains projets peuvent être étudiés dans d’autres zones de Madagascar selon la nature du chantier, l’accès et l’organisation nécessaire.",
  },
  {
    code: "BUNGALOW",
    question: "Réalisez-vous des bungalows clé en main ?",
    answer:
      "Oui. Nous pouvons accompagner la conception, l’adaptation au terrain, la structure, la toiture, les sanitaires, les finitions et les options selon votre budget. Chaque bungalow est étudié selon l’usage prévu : habitation, tourisme ou location.",
  },
  {
    code: "SUIVI",
    question: "Comment se passe le suivi du chantier ?",
    answer:
      "Nous privilégions un suivi clair avec des points réguliers, des validations aux étapes importantes et, selon le projet, des photos d’avancement. L’objectif est de limiter les mauvaises surprises et de garder une vision précise du chantier.",
  },
  {
    code: "BUDGET",
    question: "Comment éviter les dépassements de budget ?",
    answer:
      "Un budget se maîtrise dès le départ avec un devis lisible, des options séparées, des réserves clairement identifiées et des choix de matériaux validés. Nous indiquons les points qui peuvent influencer le prix avant de lancer les travaux.",
  },
]

function FAQSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerVariants = shouldReduceMotion ? {} : staggerContainer(0.08, 0.08)

  return (
    <section className="relative overflow-hidden py-16 sm:py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 20% 20%, oklch(0.47 0.115 76 / 0.07), transparent 68%), radial-gradient(ellipse 55% 45% at 85% 70%, oklch(0.55 0.08 50 / 0.06), transparent 62%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.04] blueprint-overlay" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={containerVariants}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <motion.p variants={slideUp} transition={transitionSmooth} className="premium-surtitre">
              Questions fréquentes
            </motion.p>

            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-5 max-w-xl text-4xl font-extrabold leading-[0.96] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl"
            >
              Les réponses avant de lancer votre chantier.
            </motion.h2>

            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-5 max-w-xl text-base leading-8 text-muted-foreground"
            >
              Devis, délais, suivi, bungalows ou budget : voici les points que les clients nous
              demandent le plus souvent avant de commencer un projet.
            </motion.p>

            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-8 rounded-3xl border border-border/80 bg-card/90 p-5 shadow-sm"
            >
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary-text">
                Besoin d’une réponse précise ?
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Envoyez-nous le lieu du chantier, le type de travaux et votre budget approximatif.
                Nous vous orientons rapidement.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={containerVariants}
          >
            <Accordion type="single" collapsible defaultValue="faq-0" className="grid gap-4">
              {faqs.map((item, index) => (
                <motion.div key={item.question} variants={slideUp} transition={transitionSmooth}>
                  <AccordionItem
                    value={`faq-${index}`}
                    className={cn(
                      "overflow-hidden rounded-3xl border border-border/80 bg-card/95 px-0 shadow-sm transition-colors duration-300",
                      "data-[state=open]:border-primary/35"
                    )}
                  >
                    <AccordionTrigger
                      hideIcon
                      className="group px-5 py-5 text-left hover:no-underline sm:px-6 sm:py-6"
                    >
                      <div className="flex w-full items-start justify-between gap-5">
                        <div className="flex min-w-0 gap-4">
                          <div className="hidden sm:block">
                            <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background font-mono text-[0.7rem] font-black tracking-[-0.06em] text-primary-text">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <p className="mb-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary-text">
                              {item.code}
                            </p>

                            <h3 className="font-[family-name:var(--font-heading)] text-lg font-extrabold leading-snug tracking-[-0.035em] text-foreground sm:text-xl">
                              {item.question}
                            </h3>
                          </div>
                        </div>

                        <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:border-primary/35 group-data-[state=open]:text-primary-text">
                          <svg
                            viewBox="0 0 24 24"
                            className="size-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                      <div className="border-t border-border/80 pt-4">
                        <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { FAQSection }

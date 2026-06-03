"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Hammer,
  Paintbrush,
  Home,
  Ruler,
  ArrowUpRight,
  ArrowRight,
  BrickWall,
  HardHat,
  Zap,
  Droplets,
  Triangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"
import { PageHero } from "@/components/layout/PageHero"
import { PremiumSection } from "@/components/layout/PremiumSection"
import { PremiumCTA } from "@/components/layout/PremiumCTA"

type ServiceMarkType =
  | "structure"
  | "brick"
  | "renovation"
  | "roof"
  | "water"
  | "electric"
  | "finish"
  | "bungalow"
  | "plans"

const services = [
  {
    icon: HardHat,
    title: "Gros œuvre et structure",
    description:
      "Fondations, poteaux, dalles, élévation et travaux structurels réalisés avec une approche chantier rigoureuse.",
    features: ["Fondations", "Béton armé", "Dalles", "Suivi technique"],
    number: "01",
    mark: "structure" as ServiceMarkType,
    pattern: "M0 20 L20 0 M10 20 L30 0 M20 20 L40 0",
  },
  {
    icon: BrickWall,
    title: "Maçonnerie",
    description:
      "Murs porteurs, cloisons, clôtures, extensions et reprises de maçonnerie pour bâtiments résidentiels ou professionnels.",
    features: ["Murs", "Clôtures", "Extensions", "Réparations"],
    number: "02",
    mark: "brick" as ServiceMarkType,
    pattern: "M0 0 L40 0 M0 10 L40 10 M0 20 L40 20",
  },
  {
    icon: Paintbrush,
    title: "Rénovation",
    description:
      "Remise à neuf intérieure et extérieure, modernisation, correction des défauts et mise aux normes.",
    features: ["Intérieur", "Façades", "Mise aux normes", "Extensions"],
    number: "03",
    mark: "renovation" as ServiceMarkType,
    pattern: "M0 0 L20 20 M10 0 L30 20 M20 0 L40 20",
  },
  {
    icon: Triangle,
    title: "Toiture et charpente",
    description:
      "Charpente, couverture, étanchéité et réparation de toiture pour protéger durablement votre bâtiment.",
    features: ["Charpente", "Couverture", "Étanchéité", "Réparation"],
    number: "04",
    mark: "roof" as ServiceMarkType,
    pattern: "M0 20 L20 0 L40 20 M8 20 L20 8 L32 20",
  },
  {
    icon: Droplets,
    title: "Plomberie",
    description:
      "Réseaux d’eau, évacuations, sanitaires et raccordements intégrés proprement au projet global.",
    features: ["Réseaux d’eau", "Sanitaires", "Évacuation", "Raccordements"],
    number: "05",
    mark: "water" as ServiceMarkType,
    pattern: "M0 10 Q20 0 40 10 M0 20 Q20 10 40 20",
  },
  {
    icon: Zap,
    title: "Électricité",
    description:
      "Installation électrique, points lumineux, tableaux, prises et préparation des équipements techniques.",
    features: ["Tableaux", "Prises", "Éclairage", "Mise en sécurité"],
    number: "06",
    mark: "electric" as ServiceMarkType,
    pattern: "M20 0 L8 18 H20 L14 30 L32 10 H20 Z",
  },
  {
    icon: Hammer,
    title: "Finitions",
    description:
      "Carrelage, peinture, menuiserie, enduits et détails finaux pour un rendu propre et professionnel.",
    features: ["Carrelage", "Peinture", "Menuiserie", "Enduits"],
    number: "07",
    mark: "finish" as ServiceMarkType,
    pattern: "M0 5 L40 5 M0 15 L40 15 M0 25 L40 25",
  },
  {
    icon: Home,
    title: "Bungalows sur mesure",
    description:
      "Bungalows compacts ou familiaux, adaptés au terrain, au climat local et à votre budget indicatif.",
    features: ["Plans adaptés", "Matériaux locaux", "Clé en main", "Budget maîtrisé"],
    number: "08",
    mark: "bungalow" as ServiceMarkType,
    pattern: "M4 20 V10 L20 2 L36 10 V20 M14 20 V14 H26 V20",
  },
  {
    icon: Ruler,
    title: "Études et plans",
    description:
      "Plans, métrés, estimation, phasage et accompagnement technique avant le lancement du chantier.",
    features: ["Plans", "Métré", "Devis", "Planning"],
    number: "09",
    mark: "plans" as ServiceMarkType,
    pattern: "M0 0 L40 0 M0 10 L40 10 M0 20 L40 20",
  },
]

const entranceVariants = services.map(() => slideUp)

function ServiceMark({
  type,
  number,
  Icon,
}: {
  type: ServiceMarkType
  number: string
  Icon: React.ElementType
}) {
  return (
    <div className="relative flex size-16 items-center justify-center rounded-[1.15rem] border border-border/70 bg-background/85 shadow-sm transition-all duration-500 group-hover:border-primary/35 group-hover:bg-primary/[0.07] group-hover:shadow-md">
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-0 size-full text-primary/45 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        fill="none"
        aria-hidden="true"
      >
        {type === "structure" && (
          <>
            <path d="M14 48 L32 14 L50 48" stroke="currentColor" strokeWidth="1.4" />
            <path d="M22 48 L32 29 L42 48" stroke="currentColor" strokeWidth="1" />
            <path d="M18 48 H46" stroke="currentColor" strokeWidth="1" />
          </>
        )}

        {type === "brick" && (
          <>
            <path d="M12 20 H52 M12 32 H52 M12 44 H52" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M24 20 V32 M40 20 V32 M18 32 V44 M34 32 V44 M50 32 V44"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </>
        )}

        {type === "renovation" && (
          <>
            <path d="M18 46 L46 18" stroke="currentColor" strokeWidth="1.4" />
            <path d="M39 15 L49 25" stroke="currentColor" strokeWidth="1.4" />
            <path d="M16 48 L26 45 L19 38 Z" stroke="currentColor" strokeWidth="1.2" />
          </>
        )}

        {type === "roof" && (
          <>
            <path d="M12 36 L32 18 L52 36" stroke="currentColor" strokeWidth="1.4" />
            <path d="M18 36 H46 V48 H18 Z" stroke="currentColor" strokeWidth="1.1" />
            <path d="M32 18 V48" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
          </>
        )}

        {type === "water" && (
          <>
            <path
              d="M22 18 C22 18 14 30 14 38 C14 47 21 52 32 52 C43 52 50 47 50 38 C50 30 42 18 42 18"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path d="M22 36 Q32 28 42 36" stroke="currentColor" strokeWidth="1.1" />
            <path d="M22 42 Q32 34 42 42" stroke="currentColor" strokeWidth="1.1" />
          </>
        )}

        {type === "electric" && (
          <>
            <path
              d="M36 10 L20 34 H33 L27 54 L46 27 H33 Z"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path d="M16 18 H24 M40 46 H48" stroke="currentColor" strokeWidth="1" opacity="0.65" />
          </>
        )}

        {type === "finish" && (
          <>
            <path d="M16 20 H48 M16 32 H48 M16 44 H48" stroke="currentColor" strokeWidth="1.1" />
            <path
              d="M20 18 L18 22 M32 30 L30 34 M44 42 L42 46"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </>
        )}

        {type === "bungalow" && (
          <>
            <path d="M12 34 L32 18 L52 34" stroke="currentColor" strokeWidth="1.4" />
            <path d="M18 34 V49 H46 V34" stroke="currentColor" strokeWidth="1.1" />
            <path d="M26 49 V38 H38 V49" stroke="currentColor" strokeWidth="1" />
            <path d="M16 54 H48" stroke="currentColor" strokeWidth="1" opacity="0.65" />
          </>
        )}

        {type === "plans" && (
          <>
            <path d="M16 16 H48 V48 H16 Z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M24 16 V48 M16 28 H48 M36 28 V48" stroke="currentColor" strokeWidth="0.9" />
            <path d="M20 52 H44" stroke="currentColor" strokeWidth="1" opacity="0.65" />
          </>
        )}
      </svg>

      <div className="relative z-10 flex size-9 items-center justify-center rounded-xl bg-card/90 text-foreground shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-[18px]" strokeWidth={1.8} />
      </div>

      <span className="absolute -bottom-2 -right-2 rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[10px] font-bold text-muted-foreground shadow-sm transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
        {number}
      </span>
    </div>
  )
}

export default function PrestationsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Nos services"
        title="Des prestations complètes pour construire juste."
        description="Gros œuvre, maçonnerie, toiture, plomberie, électricité, finitions et bungalows : une équipe coordonne les métiers essentiels pour livrer un chantier clair et maîtrisé."
      />

      {/* Services */}
      <PremiumSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer(0.1, 0.15)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={entranceVariants[index]}
              transition={transitionSmooth}
              className="h-full"
            >
              <Link
                href="/devis"
                className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/95 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_28px_80px_rgba(0,0,0,0.09)] sm:p-8"
              >
                {/* Pattern métier subtil */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full text-foreground opacity-[0.022] transition-opacity duration-500 group-hover:opacity-[0.05]"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id={`pat-${service.number}`}
                      x="0"
                      y="0"
                      width="40"
                      height="30"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d={service.pattern}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pat-${service.number})`} />
                </svg>

                {/* Glow premium */}
                <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-primary/[0.07] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Accent top line */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-[0.22em] text-primary/70">
                      Service {service.number}
                    </span>

                    <span className="mt-2 block h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-16" />
                  </div>

                  <ServiceMark type={service.mark} number={service.number} Icon={service.icon} />
                </div>

                <div className="relative z-10 mt-12">
                  <h3 className="font-[family-name:var(--font-heading)] text-[1.45rem] font-semibold leading-tight tracking-[-0.035em] text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-border/60 bg-muted/70 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.07] group-hover:text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <div className="mb-5 h-px w-full bg-border/60" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                      En savoir plus
                    </span>

                    <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </PremiumSection>

      {/* CTA */}
      <PremiumCTA
        eyebrow="On en parle ?"
        title="Besoin d’un devis fiable ?"
        description="Décrivez votre projet, vos délais et votre localisation. Nous vous rappelons sous 24h ouvrées pour préparer un devis gratuit, clair et sans engagement."
      />
    </>
  )
}

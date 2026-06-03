"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

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
    title: "Gros œuvre et structure",
    description:
      "Fondations, poteaux, dalles, élévation et travaux structurels réalisés avec une approche chantier rigoureuse.",
    features: ["Fondations", "Béton armé", "Dalles", "Suivi technique"],
    benefit: "Pour poser une base solide, durable et bien dimensionnée.",
    number: "01",
    code: "LOT STRUCTURE",
    mark: "structure" as ServiceMarkType,
  },
  {
    title: "Maçonnerie",
    description:
      "Murs porteurs, cloisons, clôtures, extensions et reprises de maçonnerie pour bâtiments résidentiels ou professionnels.",
    features: ["Murs", "Clôtures", "Extensions", "Réparations"],
    benefit: "Pour construire, reprendre ou agrandir proprement.",
    number: "02",
    code: "LOT MAÇONNERIE",
    mark: "brick" as ServiceMarkType,
  },
  {
    title: "Rénovation",
    description:
      "Remise à neuf intérieure et extérieure, modernisation, correction des défauts et mise aux normes.",
    features: ["Intérieur", "Façades", "Mise aux normes", "Extensions"],
    benefit: "Pour transformer l’existant sans perdre la maîtrise du chantier.",
    number: "03",
    code: "LOT RÉNOVATION",
    mark: "renovation" as ServiceMarkType,
  },
  {
    title: "Toiture et charpente",
    description:
      "Charpente, couverture, étanchéité et réparation de toiture pour protéger durablement votre bâtiment.",
    features: ["Charpente", "Couverture", "Étanchéité", "Réparation"],
    benefit: "Pour protéger la structure face au climat et à l’usure.",
    number: "04",
    code: "LOT TOITURE",
    mark: "roof" as ServiceMarkType,
  },
  {
    title: "Plomberie",
    description:
      "Réseaux d’eau, évacuations, sanitaires et raccordements intégrés proprement au projet global.",
    features: ["Réseaux d’eau", "Sanitaires", "Évacuation", "Raccordements"],
    benefit: "Pour intégrer les réseaux sans improvisation en fin de chantier.",
    number: "05",
    code: "LOT PLOMBERIE",
    mark: "water" as ServiceMarkType,
  },
  {
    title: "Électricité",
    description:
      "Installation électrique, points lumineux, tableaux, prises et préparation des équipements techniques.",
    features: ["Tableaux", "Prises", "Éclairage", "Mise en sécurité"],
    benefit: "Pour sécuriser les usages et anticiper les besoins techniques.",
    number: "06",
    code: "LOT ÉLECTRICITÉ",
    mark: "electric" as ServiceMarkType,
  },
  {
    title: "Finitions",
    description:
      "Carrelage, peinture, menuiserie, enduits et détails finaux pour un rendu propre et professionnel.",
    features: ["Carrelage", "Peinture", "Menuiserie", "Enduits"],
    benefit: "Pour livrer un espace net, cohérent et prêt à l’usage.",
    number: "07",
    code: "LOT FINITIONS",
    mark: "finish" as ServiceMarkType,
  },
  {
    title: "Bungalows sur mesure",
    description:
      "Bungalows compacts ou familiaux, adaptés au terrain, au climat local et à votre budget indicatif.",
    features: ["Plans adaptés", "Matériaux locaux", "Clé en main", "Budget maîtrisé"],
    benefit: "Pour créer un espace habitable, locatif ou touristique bien pensé.",
    number: "08",
    code: "LOT BUNGALOW",
    mark: "bungalow" as ServiceMarkType,
  },
  {
    title: "Études et plans",
    description:
      "Plans, métrés, estimation, phasage et accompagnement technique avant le lancement du chantier.",
    features: ["Plans", "Métré", "Devis", "Planning"],
    benefit: "Pour transformer une idée en projet techniquement lisible.",
    number: "09",
    code: "LOT ÉTUDE",
    mark: "plans" as ServiceMarkType,
  },
]

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    const updateMatch = () => {
      setMatches(media.matches)
    }

    updateMatch()
    media.addEventListener("change", updateMatch)

    return () => {
      media.removeEventListener("change", updateMatch)
    }
  }, [query])

  return matches
}

function ServiceBlueprint({ type }: { type: ServiceMarkType }) {
  return (
    <svg viewBox="0 0 220 150" className="h-full w-full" fill="none" aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="218"
        height="148"
        rx="18"
        className="stroke-primary/20"
        strokeWidth="1"
      />

      <path d="M28 122 H192" className="stroke-primary/20" strokeWidth="1" strokeDasharray="5 7" />

      {type === "structure" && (
        <>
          <path
            d="M54 122 L110 32 L166 122"
            className="stroke-primary/55"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M75 122 L110 66 L145 122" className="stroke-primary/35" strokeWidth="1.5" />
          <path d="M62 100 H158 M76 78 H144" className="stroke-primary/25" strokeWidth="1.2" />
        </>
      )}

      {type === "brick" && (
        <>
          <rect
            x="50"
            y="42"
            width="120"
            height="72"
            rx="4"
            className="stroke-primary/45"
            strokeWidth="2"
          />
          <path
            d="M50 66 H170 M50 90 H170 M80 42 V66 M128 42 V66 M68 66 V90 M116 66 V90 M152 66 V90 M80 90 V114 M128 90 V114"
            className="stroke-primary/30"
            strokeWidth="1.5"
          />
        </>
      )}

      {type === "renovation" && (
        <>
          <path
            d="M58 112 L158 40"
            className="stroke-primary/45"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M145 31 L172 58"
            className="stroke-primary/35"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M50 120 L76 111 L61 96 Z"
            className="stroke-primary/40"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M72 52 H132 M72 72 H112" className="stroke-primary/20" strokeWidth="1.5" />
        </>
      )}

      {type === "roof" && (
        <>
          <path
            d="M46 84 L110 34 L174 84"
            className="stroke-primary/50"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M66 84 V122 H154 V84" className="stroke-primary/35" strokeWidth="2" />
          <path
            d="M110 34 V122 M82 84 L110 58 L138 84"
            className="stroke-primary/22"
            strokeWidth="1.5"
          />
        </>
      )}

      {type === "water" && (
        <>
          <path
            d="M74 46 C74 46 52 78 52 96 C52 116 70 128 110 128 C150 128 168 116 168 96 C168 78 146 46 146 46"
            className="stroke-primary/45"
            strokeWidth="2.5"
          />
          <path
            d="M72 90 Q110 72 148 90 M72 106 Q110 88 148 106"
            className="stroke-primary/28"
            strokeWidth="1.8"
          />
          <path d="M88 46 H132" className="stroke-primary/20" strokeWidth="1.5" />
        </>
      )}

      {type === "electric" && (
        <>
          <path
            d="M118 26 L74 84 H108 L94 128 L150 68 H114 Z"
            className="stroke-primary/50"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M58 52 H86 M134 106 H166"
            className="stroke-primary/25"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "finish" && (
        <>
          <path
            d="M58 52 H162 M58 76 H162 M58 100 H162"
            className="stroke-primary/40"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M75 46 L69 58 M114 70 L108 82 M154 94 L148 106"
            className="stroke-primary/28"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="46"
            y="36"
            width="128"
            height="82"
            rx="10"
            className="stroke-primary/18"
            strokeWidth="1.2"
          />
        </>
      )}

      {type === "bungalow" && (
        <>
          <path
            d="M50 82 L110 36 L170 82"
            className="stroke-primary/50"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M66 82 V122 H154 V82" className="stroke-primary/35" strokeWidth="2" />
          <path d="M96 122 V94 H124 V122" className="stroke-primary/30" strokeWidth="1.8" />
          <path
            d="M76 100 H90 M130 100 H144"
            className="stroke-primary/25"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "plans" && (
        <>
          <rect
            x="58"
            y="34"
            width="104"
            height="88"
            rx="4"
            className="stroke-primary/45"
            strokeWidth="2"
          />
          <path
            d="M92 34 V122 M58 72 H162 M124 72 V122"
            className="stroke-primary/28"
            strokeWidth="1.5"
          />
          <path d="M44 130 H176" className="stroke-primary/18" strokeWidth="1.2" />
        </>
      )}
    </svg>
  )
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const isMobile = useMediaQuery("(max-width: 767px)")

  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 12 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: isMobile ? 0.01 : 0.18,
        margin: isMobile ? "0px 0px 80px 0px" : "0px 0px -80px 0px",
      }}
      transition={{
        duration: isMobile ? 0.28 : 0.55,
        delay: isMobile ? 0 : Math.min(index * 0.06, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <Link
        href="/devis"
        className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[1.65rem] border border-border/70 bg-card/95 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_90px_rgba(0,0,0,0.1)] sm:min-h-[430px] sm:p-6 lg:p-7"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -right-28 -top-28 size-72 rounded-full bg-primary/[0.09] blur-3xl" />
          <div className="absolute -bottom-32 left-10 size-60 rounded-full bg-primary/[0.045] blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70" />

        <div className="relative z-10 flex items-start justify-between gap-5">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {service.code}
            </span>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-10 bg-primary/40 transition-all duration-500 group-hover:w-16" />
              <span className="font-mono text-[11px] text-muted-foreground">
                JI-{service.number}
              </span>
            </div>
          </div>

          <span className="font-mono text-4xl font-semibold leading-none text-primary/25 transition-colors duration-500 group-hover:text-primary/35 sm:text-5xl">
            {service.number}
          </span>
        </div>

        <div className="relative z-10 mt-7 overflow-hidden rounded-[1.25rem] border border-border/70 bg-background/70 p-2.5 shadow-inner transition-colors duration-500 group-hover:border-primary/25 group-hover:bg-primary/[0.035]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
          <div className="relative h-28 text-primary sm:h-32">
            <ServiceBlueprint type={service.mark} />
          </div>
        </div>

        <div className="relative z-10 mt-7">
          <h3 className="font-[family-name:var(--font-heading)] text-[1.35rem] font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-[1.5rem]">
            {service.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{service.description}</p>

          <p className="mt-4 border-l border-primary/30 pl-4 text-sm leading-6 text-foreground/80">
            {service.benefit}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="rounded-xl border border-border/70 bg-muted/45 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.065] group-hover:text-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-auto pt-7">
          <div className="mb-5 h-px w-full bg-border/70" />

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-foreground">Demander une estimation</span>

            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function PrestationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Des prestations complètes pour construire juste."
        description="Gros œuvre, maçonnerie, toiture, plomberie, électricité, finitions et bungalows : une équipe coordonne les métiers essentiels pour livrer un chantier clair et maîtrisé."
      />

      <PremiumSection>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </PremiumSection>

      <PremiumCTA
        eyebrow="On en parle ?"
        title="Besoin d’un devis fiable ?"
        description="Décrivez votre projet, vos délais et votre localisation. Nous vous rappelons sous 24h ouvrées pour préparer un devis gratuit, clair et sans engagement."
      />
    </>
  )
}

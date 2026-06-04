"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, Clock, Layers, ArrowUpRight } from "lucide-react"

import {
  slideUp,
  slideLeft,
  slideRight,
  staggerContainer,
  transitionSmooth,
} from "@/lib/animations"
import { PageHero } from "@/components/layout/PageHero"
import { PremiumSection } from "@/components/layout/PremiumSection"
import { PremiumCTA } from "@/components/layout/PremiumCTA"

const btpProjects = [
  {
    name: "Construction résidentielle",
    sector: "Résidentiel",
    duration: "4 — 10 mois",
    phase: "Tous corps d'état",
    image: "/images/projects/btp-residentiel.jpg",
    features: ["Fondations béton armé", "Structure R+1 / R+2", "Toiture zinc ou tuile"],
  },
  {
    name: "Bâtiment commercial",
    sector: "Commercial",
    duration: "3 — 8 mois",
    phase: "Structure & finitions",
    image: "/images/projects/btp-commercial.jpg",
    features: ["Local professionnel", "Façade et agencement", "Mise aux normes"],
  },
  {
    name: "Rénovation & extension",
    sector: "Réhabilitation",
    duration: "1 — 6 mois",
    phase: "Second œuvre",
    image: "/images/projects/btp-renovation.jpg",
    features: ["Diagnostic préalable", "Reprise structurelle", "Finitions complètes"],
  },
  {
    name: "Gros œuvre",
    sector: "Multi-secteur",
    duration: "2 — 5 mois",
    phase: "Structure",
    image: "/images/projects/btp-gros-oeuvre.jpg",
    features: ["Terrassement et fouilles", "Béton armé", "Charpente bois / métal"],
  },
  {
    name: "Infrastructure industrielle",
    sector: "Industriel",
    duration: "4 — 12 mois",
    phase: "Gros œuvre & équipement",
    image: "/images/projects/btp-industriel.jpg",
    features: ["Hangar et entrepôt", "Dalle industrielle", "Portail et clôture"],
  },
  {
    name: "Voirie & assainissement",
    sector: "Travaux publics",
    duration: "1 — 4 mois",
    phase: "VRD",
    image: "/images/projects/btp-voirie.jpg",
    features: ["Terrassement routier", "Canalisations", "Drainage pluvial"],
  },
]

const entranceVariants = [slideLeft, slideUp, slideRight]

export default function BtpPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos projets BTP"
        title="Construire avec méthode, du gros œuvre aux finitions."
        description="Construction neuve, rénovation, bâtiment commercial ou infrastructure : chaque projet est cadré avec un devis détaillé, un planning réaliste et un suivi de chantier rigoureux."
      >
        <div className="max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.06] p-4 text-sm leading-7 text-muted-foreground">
          <strong className="text-foreground">Délais indicatifs.</strong> Les durées ci-dessous
          varient selon la complexité du projet, l&apos;accès au terrain, les matériaux choisis et
          la disponibilité des équipes. Un planning précis est posé avant chaque démarrage de
          chantier.
        </div>
      </PageHero>

      {/* BTP grid */}
      <PremiumSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.08, 0.1)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {btpProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={entranceVariants[index % 3]}
              transition={transitionSmooth}
              className="group h-full"
            >
              <Link
                href="/devis"
                aria-label={`Demander un devis pour ${project.name}`}
                className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`Illustration du type de projet : ${project.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {project.sector}
                  </div>

                  <div className="absolute inset-x-4 bottom-4">
                    <h3 className="font-heading text-2xl font-semibold leading-none tracking-[-0.04em] text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border border-border/60 bg-muted/60 p-3">
                      <Building2
                        className="mb-2 size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                      <span className="block text-[11px] text-muted-foreground">Secteur</span>
                      <span className="block text-sm font-semibold text-foreground leading-tight break-words">
                        {project.sector}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-muted/60 p-3">
                      <Clock
                        className="mb-2 size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                      <span className="block text-[11px] text-muted-foreground">Durée est.</span>
                      <span className="block text-sm font-semibold text-foreground leading-tight break-words">
                        {project.duration}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-muted/60 p-3">
                      <Layers
                        className="mb-2 size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                      <span className="block text-[11px] text-muted-foreground">Phase</span>
                      <span className="block text-sm font-semibold text-foreground leading-tight break-words">
                        {project.phase}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-border/60 bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.06] group-hover:text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="mb-4 h-px w-full bg-border/60" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                        Demander un devis
                      </span>
                      <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </PremiumSection>

      <PremiumSection variant="soft" withGrid={false} className="py-14 sm:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "1. Définir le projet",
              text: "Surface, destination, terrain, contraintes d'accès et budget : on pose les bases avant toute estimation pour éviter les ajustements en cours de chantier.",
            },
            {
              title: "2. Chiffrer précisément",
              text: "Le devis est décomposé poste par poste — gros œuvre, second œuvre, finitions — pour que chaque ligne soit lisible et validée.",
            },
            {
              title: "3. Suivre le chantier",
              text: "Un planning réaliste est posé avant démarrage, avec des points réguliers, des photos d'avancement et des validations aux étapes clés.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
            >
              <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </PremiumSection>

      <PremiumCTA
        eyebrow="Votre projet BTP"
        title="Prêt à démarrer votre chantier ?"
        description="Construction neuve, rénovation ou infrastructure : décrivez votre projet et obtenez une estimation gratuite avec un devis lisible et un planning adapté à votre terrain."
      />
    </>
  )
}

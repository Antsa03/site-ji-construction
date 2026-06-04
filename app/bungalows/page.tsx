"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Maximize, BedDouble, Bath, ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
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

const bungalows = [
  {
    name: "Ravinala",
    surface: "65 m²",
    bedrooms: 2,
    bathrooms: 1,
    price: "À partir de 150M Ar",
    image: "/images/projects/bungalow-ravinala.jpg",
    features: ["Terrasse panoramique", "Toit végétalisé", "Matériaux locaux"],
  },
  {
    name: "Baobab",
    surface: "85 m²",
    bedrooms: 3,
    bathrooms: 2,
    price: "À partir de 220M Ar",
    image: "/images/projects/bungalow-baobab.jpg",
    features: ["Piscine privée", "Cuisine ouverte", "Jardin tropical"],
  },
  {
    name: "Orchidée",
    surface: "50 m²",
    bedrooms: 1,
    bathrooms: 1,
    price: "À partir de 115M Ar",
    image: "/images/projects/bungalow-orchidee.jpg",
    features: ["Compact et fonctionnel", "Idéal couple", "Faible empreinte"],
  },
  {
    name: "Palissandre",
    surface: "120 m²",
    bedrooms: 4,
    bathrooms: 3,
    price: "À partir de 320M Ar",
    image: "/images/projects/bungalow-palissandre.jpg",
    features: ["Grande terrasse", "Suite parentale", "Garage intégré"],
  },
  {
    name: "Vacoa",
    surface: "75 m²",
    bedrooms: 2,
    bathrooms: 2,
    price: "À partir de 185M Ar",
    image: "/images/projects/bungalow-vacoa.jpg",
    features: ["Design contemporain", "Baies vitrées", "Terrasse sur pilotis"],
  },
  {
    name: "Noyer",
    surface: "95 m²",
    bedrooms: 3,
    bathrooms: 2,
    price: "À partir de 255M Ar",
    image: "/images/projects/bungalow-noyer.jpg",
    features: ["Double salon", "Buanderie", "Espace bureau"],
  },
]

const entranceVariants = [slideLeft, slideUp, slideRight]

export default function BungalowsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Nos modèles"
        title="Bungalows sur mesure à budget maîtrisé."
        description="Des modèles de départ pour comparer les surfaces, les pièces et les options. Les prix sont indicatifs : le terrain, les matériaux, l’accès au chantier et les finitions ajustent le devis final."
      >
        <div className="max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.06] p-4 text-sm leading-7 text-muted-foreground">
          <strong className="text-foreground">Prix indicatifs.</strong> Les montants ci-dessous
          servent de repère pour le marché local. Un devis précis nécessite la localisation, l’état
          du terrain, les choix de matériaux et le niveau de finition.
        </div>
      </PageHero>

      {/* Bungalows grid */}
      <PremiumSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.08, 0.1)}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {bungalows.map((bungalow, index) => (
            <motion.div
              key={bungalow.name}
              variants={entranceVariants[index % 3]}
              transition={transitionSmooth}
              className="group h-full"
            >
              <Link
                href="/devis"
                aria-label={`Demander un devis pour le bungalow ${bungalow.name}`}
                className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={bungalow.image}
                    alt={`Vue extérieure indicative du bungalow ${bungalow.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />

                  {/* Overlay lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                  {/* Badge catégorie */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Bungalow
                  </div>

                  {/* Price badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-neutral-950 shadow-sm backdrop-blur-md dark:bg-background/90 dark:text-foreground">
                    {bungalow.price}
                    <span className="sr-only">, prix indicatif</span>
                  </div>

                  {/* Titre sur image */}
                  <div className="absolute inset-x-4 bottom-4">
                    <h3 className="font-heading text-2xl font-semibold leading-none tracking-[-0.04em] text-white">
                      {bungalow.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Specs principales */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border border-border/60 bg-muted/60 p-3">
                      <Maximize
                        className="mb-2 size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                      <span className="block text-[11px] text-muted-foreground">Surface</span>
                      <span className="block text-sm font-semibold text-foreground">
                        {bungalow.surface}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-muted/60 p-3">
                      <BedDouble
                        className="mb-2 size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                      <span className="block text-[11px] text-muted-foreground">Chambres</span>
                      <span className="block text-sm font-semibold text-foreground">
                        {bungalow.bedrooms} ch.
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-muted/60 p-3">
                      <Bath
                        className="mb-2 size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        aria-hidden="true"
                      />
                      <span className="block text-[11px] text-muted-foreground">Salle d’eau</span>
                      <span className="block text-sm font-semibold text-foreground">
                        {bungalow.bathrooms} SdB
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {bungalow.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-border/60 bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.06] group-hover:text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-auto pt-6">
                    <div className="mb-4 h-px w-full bg-border/60" />

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                        Voir l’estimation
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
              title: "1. Choisir une base",
              text: "Sélectionnez le modèle le plus proche de votre besoin : compact, familial ou premium.",
            },
            {
              title: "2. Adapter au terrain",
              text: "Nous ajustons orientation, fondations, accès, terrasse et matériaux selon le site.",
            },
            {
              title: "3. Chiffrer précisément",
              text: "Le prix final est détaillé poste par poste avant validation du chantier.",
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

      {/* CTA */}
      <PremiumCTA
        eyebrow="Sur mesure"
        title="Envie d’un bungalow sur mesure ?"
        description="Chaque projet dépend du terrain, de l’accès, des matériaux et des finitions. Demandez une estimation gratuite pour comparer les options adaptées à votre budget."
      />
    </>
  )
}

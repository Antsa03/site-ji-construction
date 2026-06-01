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

const bungalows = [
  {
    name: "Ravinala",
    surface: "65 m²",
    bedrooms: 2,
    bathrooms: 1,
    price: "45 000 €",
    image: "/images/projects/bungalow-ravinala.jpg",
    features: ["Terrasse panoramique", "Toit végétalisé", "Matériaux locaux"],
  },
  {
    name: "Baobab",
    surface: "85 m²",
    bedrooms: 3,
    bathrooms: 2,
    price: "65 000 €",
    image: "/images/projects/bungalow-baobab.jpg",
    features: ["Piscine privée", "Cuisine ouverte", "Jardin tropical"],
  },
  {
    name: "Orchidée",
    surface: "50 m²",
    bedrooms: 1,
    bathrooms: 1,
    price: "35 000 €",
    image: "/images/projects/bungalow-orchidee.jpg",
    features: ["Compact et fonctionnel", "Idéal couple", "Faible empreinte"],
  },
  {
    name: "Palissandre",
    surface: "120 m²",
    bedrooms: 4,
    bathrooms: 3,
    price: "95 000 €",
    image: "/images/projects/bungalow-palissandre.jpg",
    features: ["Grande terrasse", "Suite parentale", "Garage intégré"],
  },
  {
    name: "Vacoa",
    surface: "75 m²",
    bedrooms: 2,
    bathrooms: 2,
    price: "55 000 €",
    image: "/images/projects/bungalow-vacoa.jpg",
    features: ["Design contemporain", "Baies vitrées", "Terrasse sur pilotis"],
  },
  {
    name: "Noyer",
    surface: "95 m²",
    bedrooms: 3,
    bathrooms: 2,
    price: "75 000 €",
    image: "/images/projects/bungalow-noyer.jpg",
    features: ["Double salon", "Buanderie", "Espace bureau"],
  },
]

const entranceVariants = [slideLeft, slideUp, slideRight]

export default function BungalowsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card pt-20 pb-14 sm:pt-28 sm:pb-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1)}>
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Nos modèles
              </span>
            </motion.div>
            <motion.h1
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] max-w-lg"
            >
              Nos bungalows.
            </motion.h1>
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-4 text-base text-muted-foreground max-w-md"
            >
              Conçus pour s&apos;intégrer dans le paysage malgache. Du compact au spacieux, chacun a
              son charme.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bungalows grid */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/[0.02] to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer(0.08, 0.1)}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {bungalows.map((bungalow, index) => (
              <motion.div
                key={bungalow.name}
                variants={entranceVariants[index % 3]}
                transition={transitionSmooth}
                className="group"
              >
                <div className="rounded-xl overflow-hidden border border-border/60 bg-card hover:border-primary/20 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={bungalow.image}
                      alt={bungalow.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Price badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-bold text-foreground">
                      {bungalow.price}
                    </div>

                    {/* Arrow on hover */}
                    <div className="absolute bottom-3 right-3 size-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight className="size-3.5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-foreground font-[family-name:var(--font-heading)] mb-2">
                      Bungalow {bungalow.name}
                    </h3>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Maximize className="size-3.5" />
                        {bungalow.surface}
                      </span>
                      <span className="flex items-center gap-1">
                        <BedDouble className="size-3.5" />
                        {bungalow.bedrooms} ch.
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="size-3.5" />
                        {bungalow.bathrooms} SdB
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {bungalow.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#252525] to-[#202020]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, white 20px, white 21px)",
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
              <span className="text-xs text-white/30 uppercase tracking-[0.2em]">Sur mesure</span>
            </motion.div>
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-4"
            >
              Envie d&apos;un bungalow sur mesure ?
            </motion.h2>
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="text-sm text-white/40 mb-8 max-w-md"
            >
              Chaque bungalow est unique. Discutons ensemble de votre projet pour créer
              l&apos;espace de vos rêves.
            </motion.p>
            <motion.div variants={slideUp} transition={transitionSmooth}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="rounded-full px-7 text-sm font-semibold" asChild>
                  <Link href="/devis" className="inline-flex items-center gap-2">
                    Demander un devis
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

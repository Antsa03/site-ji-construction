"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const projects = [
  {
    title: "Villa Andoharanofotsy",
    category: "Résidentiel",
    division: "btp" as const,
    image: "/images/projects/villa-andoharanofotsy.jpg",
    year: "2024",
    href: "/prestations",
  },
  {
    title: "Bungalow Nosy Be",
    category: "Bungalow",
    division: "bungalow" as const,
    image: "/images/projects/bungalow-nosy-be.jpg",
    year: "2023",
    href: "/bungalows",
  },
  {
    title: "Centre commercial Analakely",
    category: "Commercial",
    division: "btp" as const,
    image: "/images/projects/centre-commercial-analakely.jpg",
    year: "2024",
    href: "/prestations",
  },
  {
    title: "Résidence Ivandry",
    category: "Résidentiel",
    division: "btp" as const,
    image: "/images/projects/residence-ivandry.jpg",
    year: "2023",
    href: "/prestations",
  },
  {
    title: "Bungalow Mahajanga",
    category: "Bungalow",
    division: "bungalow" as const,
    image: "/images/projects/bungalow-majunga.jpg",
    year: "2024",
    href: "/bungalows",
  },
  {
    title: "Entrepôt Tamatave",
    category: "Industriel",
    division: "btp" as const,
    image: "/images/projects/entrepot-tamatave.jpg",
    year: "2023",
    href: "/prestations",
  },
]

type Project = (typeof projects)[number]

function ProjectCard({
  project,
  sizes,
  imageClassName,
}: {
  project: Project
  sizes: string
  imageClassName: string
}) {
  return (
    <Link href={project.href} className="block h-full">
      <motion.div
        variants={slideUp}
        transition={transitionSmooth}
        className="group relative overflow-hidden rounded-xl h-full"
      >
        <div className={`relative w-full ${imageClassName}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

          <div
            className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M0 0 L20 0 L20 4 L4 4 L4 20 L0 20 Z" fill="oklch(0.72 0.14 85 / 0.3)" />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[10px] text-white/95 uppercase tracking-wider mb-1">
                  <span className="font-medium">
                    {project.division === "btp" ? "BTP" : "Bungalow"}
                  </span>{" "}
                  &middot; {project.category} — {project.year}
                </p>
                <h3 className="text-base sm:text-lg font-semibold text-white font-heading leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="size-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight className="size-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, oklch(0.72 0.14 85 / 0.02), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* En-tête */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.1)}
          className="mb-16 sm:mb-20"
        >
          <motion.span
            variants={slideUp}
            transition={transitionSmooth}
            className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-mono block mb-3"
          >
            03 — Réalisations
          </motion.span>
          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-primary/40" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary-text">
              Notre portfolio
            </span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading leading-[1.05]"
          >
            Projets récents.
          </motion.h2>
        </motion.div>

        {/*
         * Zone 1 — héro à gauche + grille 2×2 à droite
         *
         * On utilise flexbox (et non CSS Grid row-span) pour que la carte
         * héro corresponde exactement à la hauteur de la grille adjacente,
         * sans ambiguïté dans la chaîne h-full.
         *
         * mobile  : colonne unique, héro en aspect-[3/4]
         * sm+     : flex-row, héro 2/5 de large, h-full → suit la grille droite
         * lg+     : héro 1/3 de large
         */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.07, 0.1)}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Carte héro */}
          <div className="sm:w-2/5 lg:w-1/3 shrink-0">
            <ProjectCard
              project={projects[0]}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 33vw"
              imageClassName="aspect-[4/3] sm:aspect-auto sm:absolute sm:inset-0"
            />
          </div>

          {/* Grille 2×2 */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {projects.slice(1, 5).map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 22vw"
                imageClassName="aspect-[4/3]"
              />
            ))}
          </div>
        </motion.div>

        {/*
         * Zone 2 — carte panoramique pleine largeur
         */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer(0.1)}
          className="mt-4"
        >
          <ProjectCard
            project={projects[5]}
            sizes="100vw"
            imageClassName="aspect-[3/2] sm:aspect-[16/7]"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={transitionSmooth}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/btp"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <span className="relative">
              Voir tous les projets
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-foreground/30 transition-all duration-300" />
            </span>
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { ProjectsSection }

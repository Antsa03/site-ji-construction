"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import {
  slideUp,
  slideLeft,
  slideRight,
  staggerContainer,
  transitionSmooth,
} from "@/lib/animations"

const projects = [
  {
    title: "Villa Andoharanofotsy",
    category: "Résidentiel",
    division: "btp" as const,
    image: "/images/projects/villa-andoharanofotsy.jpg",
    year: "2024",
  },
  {
    title: "Bungalow Nosy Be",
    category: "Bungalow",
    division: "bungalow" as const,
    image: "/images/projects/bungalow-nosy-be.jpg",
    year: "2023",
  },
  {
    title: "Centre commercial Analakely",
    category: "Commercial",
    division: "btp" as const,
    image: "/images/projects/centre-commercial-analakely.jpg",
    year: "2024",
  },
  {
    title: "Résidence Ivandry",
    category: "Résidentiel",
    division: "btp" as const,
    image: "/images/projects/residence-ivandry.jpg",
    year: "2023",
  },
  {
    title: "Bungalow Mahajanga",
    category: "Bungalow",
    division: "bungalow" as const,
    image: "/images/projects/bungalow-majunga.jpg",
    year: "2024",
  },
  {
    title: "Entrepôt Tamatave",
    category: "Industriel",
    division: "btp" as const,
    image: "/images/projects/entrepot-tamatave.jpg",
    year: "2023",
  },
]

function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, oklch(0.72 0.14 85 / 0.02), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer(0.1)}
          className="mb-16 sm:mb-20"
        >
          <motion.span
            variants={slideUp}
            transition={transitionSmooth}
            className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-mono block mb-3"
          >
            04 — Portfolio
          </motion.span>
          <div className="flex items-end justify-between gap-8">
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] leading-[1.05]"
            >
              Nos réalisations.
            </motion.h2>
            <motion.span
              variants={slideUp}
              transition={transitionSmooth}
              className="text-sm text-muted-foreground hidden sm:block"
            >
              Sélection de projets récents
            </motion.span>
          </div>
        </motion.div>

        {/* Masonry-ish layout - varied sizes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer(0.08, 0.1)}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => {
            // Make first and fourth project taller
            const isFeatured = index === 0 || index === 3

            return (
              <motion.div
                key={project.title}
                variants={index % 2 === 0 ? slideLeft : slideRight}
                transition={transitionSmooth}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  isFeatured ? "sm:row-span-2" : ""
                }`}
              >
                <div className={`relative w-full ${isFeatured ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay that eases on hover */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Top-left corner decoration */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M0 0 L20 0 L20 4 L4 4 L4 20 L0 20 Z"
                        fill="oklch(0.72 0.14 85 / 0.3)"
                      />
                    </svg>
                  </div>

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="text-[10px] text-white/95 uppercase tracking-wider mb-1">
                          <span className="font-medium">
                            {project.division === "btp" ? "BTP" : "Bungalow"}
                          </span>{" "}
                          &middot; {project.category} — {project.year}
                        </p>
                        <h3 className="text-base sm:text-lg font-semibold text-white font-[family-name:var(--font-heading)] leading-tight">
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
            )
          })}
        </motion.div>

        {/* See all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={transitionSmooth}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/prestations"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <span className="relative">
              Voir tous les projets
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-foreground/30 transition-all duration-300" />
            </span>
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { ProjectsSection }

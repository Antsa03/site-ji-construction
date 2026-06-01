"use client"

import Image from "next/image"
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
    image: "/images/projects/villa-andoharanofotsy.jpg",
    year: "2024",
  },
  {
    title: "Bungalow Nosy Be",
    category: "Bungalow",
    image: "/images/projects/bungalow-nosy-be.jpg",
    year: "2023",
  },
  {
    title: "Centre commercial Analakely",
    category: "Commercial",
    image: "/images/projects/centre-commercial-analakely.jpg",
    year: "2024",
  },
  {
    title: "Résidence Ivandry",
    category: "Résidentiel",
    image: "/images/projects/residence-ivandry.jpg",
    year: "2023",
  },
  {
    title: "Bungalow Mahajanga",
    category: "Bungalow",
    image: "/images/projects/bungalow-majunga.jpg",
    year: "2024",
  },
  {
    title: "Entrepôt Tamatave",
    category: "Industriel",
    image: "/images/projects/entrepot-tamatave.jpg",
    year: "2023",
  },
]

function ProjectsSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header - left aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer(0.1)}
          className="mb-14"
        >
          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
              Portfolio
            </span>
          </motion.div>
          <div className="flex items-end justify-between gap-8">
            <motion.h2
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)]"
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

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                          {project.category} — {project.year}
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
      </div>
    </section>
  )
}

export { ProjectsSection }

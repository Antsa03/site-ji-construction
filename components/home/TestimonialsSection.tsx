"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  slideUp,
  slideLeft,
  slideRight,
  staggerContainer,
  transitionSmooth,
} from "@/lib/animations"

const testimonials = [
  {
    name: "Rakoto Jean",
    role: "Propriétaire, Villa Ivandry",
    content:
      "JI Construction a transformé notre vision en réalité. La qualité des finitions et le respect des délais ont été remarquables.",
    initials: "RJ",
    avatar: "/images/avatars/rakoto-jean.jpg",
  },
  {
    name: "Marie Andrianarivelo",
    role: "Directrice, Hôtel Nosy Be",
    content:
      "Notre bungalow a été livré dans les temps et avec une qualité exceptionnelle. Un vrai partenaire de confiance.",
    initials: "MA",
    avatar: "/images/avatars/marie-andrianarivelo.jpg",
  },
  {
    name: "Hery Razafindrabe",
    role: "Gérant, Centre commercial",
    content:
      "Du premier contact à la remise des clés, tout s'est parfaitement déroulé. Le rapport qualité-prix est excellent.",
    initials: "HR",
    avatar: "/images/avatars/hery-razafindrabe.jpg",
  },
]

function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/30 to-transparent" />

      {/* Architectural grid pattern */}
      <div className="absolute inset-0 arch-grid-pattern opacity-30" />

      {/* Copper glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-150 h-150 pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.14 85 / 0.04), transparent 60%)",
        }}
      />

      {/* Decorative giant quote mark — background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-16 right-8 sm:right-16 pointer-events-none select-none"
      >
        <span
          className="text-[7rem] sm:text-[18rem] leading-none font-heading text-foreground/[0.04]"
          aria-hidden="true"
        >
          &ldquo;
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.1)}
          className="mb-16 sm:mb-20 max-w-2xl"
        >
          <motion.span
            variants={slideUp}
            transition={transitionSmooth}
            className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-mono block mb-3"
          >
            05 — Témoignages
          </motion.span>

          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-primary/40" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary-text">
              Ce qu&apos;on dit de nous
            </span>
          </motion.div>

          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading leading-[1.05]"
          >
            Ils nous ont fait
            <br />
            <span className="text-primary-text">confiance.</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials — editorial layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.15, 0.1)}
          className="space-y-12 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => {
            const directionVariant = index % 2 === 0 ? slideLeft : slideRight
            return (
              <motion.div
                key={testimonial.name}
                variants={directionVariant}
                transition={transitionSmooth}
                className={`relative group ${index === 1 ? "sm:mt-10" : ""}`}
              >
                {/* Card with subtle border */}
                <div className="relative p-6 sm:p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/15">
                  {/* Corner accent — top left */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/20 rounded-tl-lg transition-colors duration-500 group-hover:border-primary/40" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Star className="size-3 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote — editorial serif */}
                  <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-6 font-heading font-light">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                    <Avatar className="size-10 ring-2 ring-primary/10">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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

export { TestimonialsSection }

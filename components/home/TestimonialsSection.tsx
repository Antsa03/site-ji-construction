"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const testimonials = [
  {
    name: "Rakoto Jean",
    role: "Propriétaire, Villa Ivandry",
    content: "JI Construction a transformé notre vision en réalité. La qualité des finitions et le respect des délais ont été remarquables.",
    initials: "RJ",
    avatar: "/images/avatars/rakoto-jean.jpg",
  },
  {
    name: "Marie Andrianarivelo",
    role: "Directrice, Hôtel Nosy Be",
    content: "Notre bungalow a été livré dans les temps et avec une qualité exceptionnelle. Un vrai partenaire de confiance.",
    initials: "MA",
    avatar: "/images/avatars/marie-andrianarivelo.jpg",
  },
  {
    name: "Hery Razafindrabe",
    role: "Gérant, Centre commercial",
    content: "Du premier contact à la remise des clés, tout s'est parfaitement déroulé. Le rapport qualité-prix est excellent.",
    initials: "HR",
    avatar: "/images/avatars/hery-razafindrabe.jpg",
  },
]

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
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
              Témoignages
            </span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)]"
          >
            Ils nous ont fait confiance.
          </motion.h2>
        </motion.div>

        {/* Testimonials - not cards, more editorial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={staggerContainer(0.15, 0.1)}
          className="space-y-10 sm:space-y-0 sm:grid sm:gap-8 sm:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={slideUp}
              transition={transitionSmooth}
              className={`relative ${index === 1 ? "sm:mt-8" : ""}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote - large, editorial */}
              <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-6 font-light">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-foreground/5 text-foreground/60 font-semibold text-xs">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { TestimonialsSection }

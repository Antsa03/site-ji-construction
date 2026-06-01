"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { slideUp, slideLeft, staggerContainer, transitionSmooth } from "@/lib/animations"

const steps = [
  "Vous décrivez votre projet",
  "On vous rappelle sous 24h",
  "On visite le terrain ensemble",
  "On vous envoie un devis détaillé",
]

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card pt-20 pb-14 sm:pt-28 sm:pb-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
          >
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Devis gratuit
              </span>
            </motion.div>
            <motion.h1
              variants={slideUp}
              transition={transitionSmooth}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] max-w-xl leading-tight"
            >
              Votre projet mérite
              <br />
              <span className="text-muted-foreground/40">une vraie réponse.</span>
            </motion.h1>
            <motion.p
              variants={slideUp}
              transition={transitionSmooth}
              className="mt-4 text-base text-muted-foreground max-w-md"
            >
              Pas un formulaire automatique. On lit chaque demande, on appelle, on écoute. Ensuite seulement on chiffre.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            {/* Left — form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={staggerContainer(0.06, 0.1)}
            >
              <motion.div
                variants={slideUp}
                transition={transitionSmooth}
                className="mb-8"
              >
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                  Remplissez le formulaire
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Les champs marqués d&apos;un <span className="text-primary font-medium">*</span> sont obligatoires.
                </p>
              </motion.div>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={slideUp} transition={transitionSmooth} className="flex flex-col gap-2">
                    <Label htmlFor="nom" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Nom complet <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="nom"
                      placeholder="Rakoto Jean"
                      required
                      className="h-12 rounded-xl border-border/60 bg-background px-4 text-sm focus:border-primary focus:ring-primary/20 transition-all duration-200"
                    />
                  </motion.div>
                  <motion.div variants={slideUp} transition={transitionSmooth} className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="rakoto@email.com"
                      required
                      className="h-12 rounded-xl border-border/60 bg-background px-4 text-sm focus:border-primary focus:ring-primary/20 transition-all duration-200"
                    />
                  </motion.div>
                </div>

                {/* Row 2: Phone + Project type */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={slideUp} transition={transitionSmooth} className="flex flex-col gap-2">
                    <Label htmlFor="telephone" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Téléphone <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      placeholder="+261 34 ..."
                      required
                      className="h-12 rounded-xl border-border/60 bg-background px-4 text-sm focus:border-primary focus:ring-primary/20 transition-all duration-200"
                    />
                  </motion.div>
                  <motion.div variants={slideUp} transition={transitionSmooth} className="flex flex-col gap-2">
                    <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Type de projet <span className="text-primary">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-12 rounded-xl border-border/60 bg-background px-4 text-sm focus:border-primary focus:ring-primary/20">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="construction" className="rounded-lg">Construction neuve</SelectItem>
                        <SelectItem value="renovation" className="rounded-lg">Rénovation</SelectItem>
                        <SelectItem value="bungalow" className="rounded-lg">Bungalow sur mesure</SelectItem>
                        <SelectItem value="etudes" className="rounded-lg">Études et plans</SelectItem>
                        <SelectItem value="autre" className="rounded-lg">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Row 3: Message */}
                <motion.div variants={slideUp} transition={transitionSmooth} className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Décrivez votre projet <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Qu'avez-vous en tête ? Surface souhaitée, localisation, budget approximatif, délais..."
                    rows={6}
                    required
                    className="rounded-xl border-border/60 bg-background px-4 py-3 text-sm resize-none focus:border-primary focus:ring-primary/20 transition-all duration-200"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={slideUp} transition={transitionSmooth}>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" size="lg" className="rounded-full px-8 text-sm font-semibold h-12">
                      Envoyer la demande
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>

            {/* Right — how it works + contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={staggerContainer(0.08, 0.15)}
              className="space-y-10"
            >
              {/* How it works */}
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
                  Comment ça marche
                </h3>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="h-px bg-border/40" />

              {/* Contact shortcuts */}
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
                  Contact direct
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+261341234567"
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-foreground/[0.03] group-hover:bg-primary/10 transition-colors duration-200">
                      <Phone className="size-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200" />
                    </div>
                    +261 34 12 345 67
                  </a>
                  <a
                    href="mailto:contact@jiconstruction.mg"
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-foreground/[0.03] group-hover:bg-primary/10 transition-colors duration-200">
                      <Mail className="size-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200" />
                    </div>
                    contact@jiconstruction.mg
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-foreground/[0.03] group-hover:bg-primary/10 transition-colors duration-200">
                      <MapPin className="size-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200" />
                    </div>
                    Lot II A 45 Analakely, Antananarivo
                  </a>
                </div>
              </motion.div>

              <div className="h-px bg-border/40" />

              {/* Trust */}
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <div className="space-y-2.5">
                  {[
                    "Réponse garantie sous 24h",
                    "Devis détaillé et transparent",
                    "100% gratuit, sans engagement",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

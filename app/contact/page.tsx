"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/form/FormInput"
import { FormTextarea } from "@/components/form/FormTextarea"
import { slideUp, slideLeft, staggerContainer, transitionSmooth } from "@/lib/animations"

const contactMethods = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 34 12 345 67",
    href: "tel:+261341234567",
    description: "Lun - Ven, 8h - 17h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@jiconstruction.mg",
    href: "mailto:contact@jiconstruction.mg",
    description: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    label: "Bureau",
    value: "Lot II A 45 Analakely",
    href: "https://maps.google.com",
    description: "Antananarivo, Madagascar",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ nom: "", email: "", sujet: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-card pt-20 pb-14 sm:pt-28 sm:pb-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1)}>
            <motion.div variants={slideUp} transition={transitionSmooth} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Contact</span>
            </motion.div>
            <motion.h1 variants={slideUp} transition={transitionSmooth} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] max-w-xl leading-tight">
              On préfère parler<br /><span className="text-muted-foreground/75">que remplir des formulaires.</span>
            </motion.h1>
            <motion.p variants={slideUp} transition={transitionSmooth} className="mt-4 text-base text-muted-foreground max-w-md">
              Appelez, écrivez, ou passez directement au bureau. Le café est offert.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            {/* Left — form */}
            <div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#7A9B7E]/10"
                    >
                      <CheckCircle2 className="size-8 text-[#7A9B7E]" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-3">
                      Message envoyé !
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      Merci {formData.nom.split(" ")[0] || ""}. On vous répond vite, promis ✍️
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    variants={staggerContainer(0.06, 0.1)}
                  >
                    <motion.div variants={slideUp} transition={transitionSmooth} className="mb-8">
                      <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                        Ou écrivez-nous
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        On lit tout, on répond à tout.
                      </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <motion.div variants={slideUp} transition={transitionSmooth}>
                          <FormInput
                            label="Nom complet"
                            placeholder="Votre nom"
                            required
                            value={formData.nom}
                            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          />
                        </motion.div>
                        <motion.div variants={slideUp} transition={transitionSmooth}>
                          <FormInput
                            label="Email"
                            type="email"
                            placeholder="votre@email.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </motion.div>
                      </div>
                      <motion.div variants={slideUp} transition={transitionSmooth}>
                        <FormInput
                          label="Sujet"
                          placeholder="De quoi s'agit-il ?"
                          required
                          value={formData.sujet}
                          onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                        />
                      </motion.div>
                      <motion.div variants={slideUp} transition={transitionSmooth}>
                        <FormTextarea
                          label="Message"
                          placeholder="Votre message..."
                          rows={6}
                          maxLength={2000}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </motion.div>
                      <motion.div variants={slideUp} transition={transitionSmooth}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button type="submit" size="lg" className="rounded-full px-8 text-sm font-semibold h-12">
                            Envoyer le message
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right — contact methods */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={staggerContainer(0.08, 0.15)}
              className="space-y-10"
            >
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
                  Nos coordonnées
                </h3>
                <div className="space-y-3">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card p-4 hover:border-primary/20 transition-all duration-200"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.03] group-hover:bg-primary/10 transition-colors duration-200">
                        <method.icon className="size-4 text-muted-foreground/70 group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/75 uppercase tracking-wide">{method.label}</p>
                        <p className="text-sm font-medium text-foreground mt-0.5">{method.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              <div className="h-px bg-border/30" />

              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <div className="rounded-xl border border-border/50 overflow-hidden">
                  <div className="flex h-52 items-center justify-center bg-muted/30">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <MapPin className="size-6 text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground/70">Carte Google Maps</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                        Ouvrir dans Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="h-px bg-border/30" />

              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <div className="flex items-start gap-3 rounded-xl bg-primary/5 p-4">
                  <MessageCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Besoin d&apos;une réponse rapide ?</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Appelez-nous au{" "}
                      <a href="tel:+261341234567" className="text-primary hover:underline font-medium">
                        +261 34 12 345 67
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

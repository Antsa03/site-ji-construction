"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, Clock3, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/form/FormInput"
import { FormTextarea } from "@/components/form/FormTextarea"
import { PageHero } from "@/components/layout/PageHero"
import { slideUp, slideLeft, staggerContainer, transitionSmooth } from "@/lib/animations"
import { PremiumSection } from "@/components/layout/PremiumSection"
import { siteConfig } from "@/lib/site-config"

const contactMethods = [
  {
    icon: Phone,
    label: "Appel direct",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    description: siteConfig.hoursWeek,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Envoyer un message",
    href: siteConfig.whatsappHref,
    description: "Idéal pour envoyer photos, plans ou localisation",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    description: "Réponse sous 24h ouvrées",
  },
  {
    icon: MapPin,
    label: "Bureau",
    value: siteConfig.address,
    href: siteConfig.mapsHref,
    description: `${siteConfig.city}, ${siteConfig.country}`,
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Votre message n’a pas pu être envoyé.")
      }

      setSubmitted(true)
    } catch {
      setSubmitError("Impossible d’envoyer le message pour le moment. Réessayez ou contactez-nous par téléphone.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet, simplement."
        description="Appelez, envoyez un WhatsApp, écrivez-nous ou passez au bureau. Nous répondons sous 24h ouvrées et proposons un devis gratuit, sans engagement."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-h-12 rounded-full">
            <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2">
              Appeler maintenant
              <Phone className="size-4" aria-hidden="true" />
            </a>
          </Button>

          <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              WhatsApp
              <MessageCircle className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </PageHero>

      <PremiumSection>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:gap-12">
          {/* Form panel */}
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex min-h-[520px] flex-col items-center justify-center text-center"
                >
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.08]">
                    <CheckCircle2
                      className="size-8 text-primary-text dark:text-primary"
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="mb-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground">
                    Message envoyé
                  </h2>

                  <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                    Merci {formData.nom.split(" ")[0] || ""}. Nous vous répondons sous 24h ouvrées.
                    Pour une urgence, appelez-nous directement.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="outline" className="min-h-11 rounded-full">
                      <a href={siteConfig.phoneHref}>Appeler JI Construction</a>
                    </Button>

                    <Button asChild className="min-h-11 rounded-full">
                      <a
                        href={siteConfig.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={staggerContainer(0.06, 0.1)}
                >
                  <motion.div
                    variants={slideUp}
                    transition={transitionSmooth}
                    className="mb-8 border-b border-border/60 pb-6"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Formulaire
                    </span>

                    <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-foreground">
                      Écrivez-nous
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Ajoutez le maximum de contexte utile : lieu, type de travaux, surface, délai
                      souhaité.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <motion.div variants={slideUp} transition={transitionSmooth}>
                        <FormInput
                          label="Nom complet"
                          placeholder="Votre nom"
                          required
                          autoComplete="name"
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
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={slideUp} transition={transitionSmooth}>
                      <FormInput
                        label="Sujet"
                        placeholder="Ex. devis rénovation toiture"
                        required
                        value={formData.sujet}
                        onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                      />
                    </motion.div>

                    <motion.div variants={slideUp} transition={transitionSmooth}>
                      <FormTextarea
                        label="Message"
                        placeholder="Décrivez votre besoin, votre localisation et vos délais..."
                        rows={6}
                        maxLength={2000}
                        required
                        value={formData.message}
                        hint="Nous ne partageons pas vos coordonnées. Elles servent uniquement à vous répondre."
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </motion.div>

                    {submitError ? (
                      <p className="rounded-2xl border border-destructive/25 bg-destructive/10 px-4 py-3 text-sm font-medium text-foreground">
                        {submitError}
                      </p>
                    ) : null}

                    <motion.div
                      variants={slideUp}
                      transition={transitionSmooth}
                      className="border-t border-border/60 pt-6"
                    >
                      <Button
                        type="submit" disabled={isSubmitting}
                        size="lg"
                        className="min-h-12 rounded-full px-8 text-sm font-semibold"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer(0.08, 0.15)}
            className="space-y-6 lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div
              variants={slideLeft}
              transition={transitionSmooth}
              className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-primary/[0.08] blur-3xl" />

              <h3 className="relative mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                Coordonnées et horaires
              </h3>

              <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex min-h-16 items-start gap-4 rounded-2xl border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-background hover:shadow-sm"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200">
                      <method.icon
                        className="size-8 transition-colors duration-200"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {method.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">{method.value}</p>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideLeft}
              transition={transitionSmooth}
              className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center text-muted-foreground">
                  <Clock3 className="size-8" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">Horaires</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Lundi à vendredi : 8h — 17h
                  </p>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Visite de chantier possible sur rendez-vous.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideLeft}
              transition={transitionSmooth}
              className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-muted/40">
                <div
                  className="absolute inset-0 text-foreground opacity-[0.035] dark:opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative flex flex-col items-center gap-3 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                    <MapPin className="size-5 text-muted-foreground" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">{siteConfig.address}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{`${siteConfig.city}, ${siteConfig.country}`}</p>
                  </div>

                  <a
                    href={siteConfig.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-11 rounded-full px-4 py-3 text-xs font-semibold text-foreground transition-colors hover:bg-background"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={slideLeft}
              transition={transitionSmooth}
              className="rounded-[2rem] border border-primary/20 bg-primary/[0.06] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                Conseil
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Pour une réponse plus précise, ajoutez la localisation, la surface approximative,
                l’état actuel du terrain ou du bâtiment, ainsi que votre délai souhaité.
              </p>
            </motion.div>
          </motion.aside>
        </div>
      </PremiumSection>


    </>
  )
}

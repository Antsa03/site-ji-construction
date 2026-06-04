"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Loader2,
} from "lucide-react"

import {
  IconRenovation,
  IconBungalow,
  IconPlans,
  IconAutre,
  IconMaison,
  IconVilla,
  IconImmeuble,
  IconGarage,
  IconEntrepot,
} from "@/components/form/FormIcons"

import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/form/FormInput"
import { FormTextarea } from "@/components/form/FormTextarea"
import { FormPhone } from "@/components/form/FormPhone"
import { FormSelect, type FormSelectOption } from "@/components/form/FormSelect"
import { PageHero } from "@/components/layout/PageHero"

import { slideUp, slideLeft, staggerContainer, transitionSmooth } from "@/lib/animations"
import { PremiumSection } from "@/components/layout/PremiumSection"
import { siteConfig } from "@/lib/site-config"

const projectTypes: FormSelectOption[] = [
  { value: "maison", label: "Maison individuelle", icon: <IconMaison className="size-4" /> },
  { value: "villa", label: "Villa haut standing", icon: <IconVilla className="size-4" /> },
  { value: "bungalow", label: "Bungalow sur mesure", icon: <IconBungalow className="size-4" /> },
  { value: "immeuble", label: "Immeuble / résidence", icon: <IconImmeuble className="size-4" /> },
  { value: "renovation", label: "Rénovation", icon: <IconRenovation className="size-4" /> },
  { value: "entrepot", label: "Entrepôt / industriel", icon: <IconEntrepot className="size-4" /> },
  { value: "garage", label: "Garage / abri", icon: <IconGarage className="size-4" /> },
  { value: "etudes", label: "Études et plans", icon: <IconPlans className="size-4" /> },
  { value: "autre", label: "Autre projet", icon: <IconAutre className="size-4" /> },
]

const steps = [
  {
    number: "01",
    title: "Vos coordonnées",
    description: "Dites-nous comment vous recontacter pour clarifier votre besoin.",
  },
  {
    number: "02",
    title: "Votre projet",
    description: "Type de travaux, localisation, budget indicatif, délai souhaité.",
  },
  {
    number: "03",
    title: "Résumé",
    description: "Vérifiez les informations avant l’envoi de la demande.",
  },
]

type FormData = {
  nom: string
  email: string
  telephone: string
  type: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialFormData: FormData = {
  nom: "",
  email: "",
  telephone: "",
  type: "",
  message: "",
}

function validateFields(formData: FormData, fields: (keyof FormData)[]) {
  const errors: FormErrors = {}

  if (fields.includes("nom") && formData.nom.trim().length < 2) {
    errors.nom = "Indiquez au moins votre nom ou le nom de votre entreprise."
  }

  if (fields.includes("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Ajoutez une adresse email valide, par exemple nom@email.com."
  }

  if (fields.includes("telephone") && formData.telephone.replace(/\D/g, "").length < 7) {
    errors.telephone = "Ajoutez un numéro joignable à Madagascar."
  }

  if (fields.includes("type") && !formData.type) {
    errors.type = "Choisissez le type de projet le plus proche."
  }

  if (fields.includes("message") && formData.message.trim().length < 20) {
    errors.message = "Décrivez le projet en quelques phrases pour recevoir une réponse utile."
  }

  return errors
}

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})

  const selectedProjectLabel = useMemo(
    () => projectTypes.find((project) => project.value === formData.type)?.label,
    [formData.type]
  )

  const stepFields: Record<number, (keyof FormData)[]> = {
    0: ["nom", "email", "telephone"],
    1: ["type", "message"],
    2: ["nom", "email", "telephone", "type", "message"],
  }

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function validateStep(step = currentStep) {
    const nextErrors = validateFields(formData, stepFields[step])
    setErrors((current) => ({ ...current, ...nextErrors }))
    return Object.keys(nextErrors).length === 0
  }

  function nextStep() {
    if (validateStep() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const nextErrors = validateFields(formData, stepFields[2])
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Demande non envoyée")
      }

      setSubmitted(true)
    } catch {
      setErrors({
        message:
          "Impossible d’envoyer la demande pour le moment. Réessayez ou contactez-nous directement par téléphone.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pb-16 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary/0.12),transparent_34%),linear-gradient(to_bottom,theme(colors.background),theme(colors.card))] dark:bg-[radial-gradient(circle_at_top,theme(colors.primary/0.14),transparent_36%),linear-gradient(to_bottom,theme(colors.background),theme(colors.card))]" />

        <div
          className="absolute inset-0 text-foreground opacity-[0.025] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto max-w-xl text-center"
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur sm:p-8">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.08]">
              <CheckCircle2
                className="size-8 text-primary-text dark:text-primary"
                aria-hidden="true"
              />
            </div>

            <h1 className="mb-3 font-heading text-3xl font-bold tracking-tight text-foreground">
              Demande de devis reçue
            </h1>

            <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-muted-foreground">
              Merci {formData.nom.split(" ")[0] || ""}. Nous vous recontactons sous 24h ouvrées pour
              confirmer les détails. Le devis est gratuit et sans engagement.
            </p>

            <div className="rounded-2xl border border-border/70 bg-background/70 p-5 text-left text-sm text-muted-foreground">
              <div className="mb-4 border-b border-border/60 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Résumé envoyé
                </span>
              </div>

              <div className="space-y-3">
                <p>
                  <span className="font-semibold text-foreground">Nom :</span> {formData.nom}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email :</span> {formData.email}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Téléphone :</span> +261{" "}
                  {formData.telephone}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Projet :</span>{" "}
                  {selectedProjectLabel}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline" className="min-h-11 rounded-full gap-2">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  Appeler directement
                </a>
              </Button>

              <Button asChild className="min-h-11 rounded-full gap-2">
                <a
                  href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(`Bonjour JI Construction, j'ai envoyé une demande de devis pour ${selectedProjectLabel ?? "un projet"} au nom de ${formData.nom}. Pouvez-vous confirmer la réception ?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Devis gratuit"
        title="Recevez une estimation claire pour votre chantier."
        description="Décrivez votre projet en moins de 3 minutes. Nous vérifions les informations, puis nous vous rappelons sous 24h ouvrées pour préparer un devis utile et sans engagement."
      >
        <div className="flex flex-wrap gap-3">
          <span className="trust-chip">
            <Clock3 className="size-4" aria-hidden="true" />
            Réponse sous 24h
          </span>

          <span className="trust-chip">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Devis gratuit, sans obligation
          </span>
        </div>
      </PageHero>

      <PremiumSection>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">
          {/* Main panel */}
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.06)] backdrop-blur sm:p-8">
            <ol
              className="mb-10 grid grid-cols-3 gap-2 sm:gap-3"
              aria-label="Progression du formulaire"
            >
              {steps.map((step, i) => {
                const state =
                  i < currentStep ? "terminée" : i === currentStep ? "en cours" : "à venir"

                return (
                  <li
                    key={step.title}
                    className={`relative flex items-center gap-2 rounded-2xl border p-2.5 transition-all duration-300 sm:gap-3 sm:p-3 ${
                      i === currentStep
                        ? "border-primary/35 bg-primary/[0.06] shadow-sm"
                        : i < currentStep
                          ? "border-primary/20 bg-card"
                          : "border-border/60 bg-muted/40"
                    }`}
                  >
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-mono font-bold transition-all duration-300 sm:size-10 ${
                        i <= currentStep
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-background text-muted-foreground ring-1 ring-border"
                      }`}
                      aria-hidden="true"
                    >
                      {i < currentStep ? "✓" : step.number}
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-foreground sm:text-sm">
                        {step.title}
                      </span>
                      <span className="hidden text-xs text-muted-foreground sm:block">
                        Étape {i + 1} — {state}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ol>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="mb-8 border-b border-border/60 pb-6"
              >
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {steps[currentStep].title}
                </h2>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {steps[currentStep].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate>
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormInput
                        label="Nom complet"
                        placeholder="Rakoto Jean"
                        required
                        value={formData.nom}
                        error={errors.nom}
                        autoComplete="name"
                        onChange={(e) => updateField("nom", e.target.value)}
                      />

                      <FormInput
                        label="Email"
                        type="email"
                        placeholder="rakoto@email.com"
                        required
                        value={formData.email}
                        error={errors.email}
                        autoComplete="email"
                        onChange={(e) => updateField("email", e.target.value)}
                      />
                    </div>

                    <FormPhone
                      label="Téléphone"
                      required
                      value={formData.telephone}
                      error={errors.telephone}
                      hint="Format local accepté, par exemple 34 12 345 67."
                      autoComplete="tel"
                      onChange={(e) => updateField("telephone", e.target.value)}
                    />
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-6"
                  >
                    <FormSelect
                      label="Type de projet"
                      name="type"
                      options={projectTypes}
                      required
                      value={formData.type}
                      error={errors.type}
                      onValueChange={(value) => updateField("type", value)}
                    />

                    <FormTextarea
                      label="Décrivez votre projet"
                      placeholder="Surface souhaitée, localisation, état actuel, budget approximatif, délais..."
                      rows={5}
                      maxLength={1000}
                      required
                      value={formData.message}
                      error={errors.message}
                      hint="Plus le contexte est précis, plus notre première réponse sera utile."
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-6 shadow-sm">
                      <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/60 pb-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Coordonnées
                        </span>

                        <button
                          type="button"
                          onClick={() => setCurrentStep(0)}
                          className="min-h-11 rounded-full px-3 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                        >
                          Modifier
                        </button>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">{formData.nom || "—"}</p>
                        <p className="text-sm text-muted-foreground">{formData.email || "—"}</p>
                        <p className="text-sm text-muted-foreground">
                          +261 {formData.telephone || "—"}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-6 shadow-sm">
                      <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/60 pb-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Projet
                        </span>

                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="min-h-11 rounded-full px-3 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
                        >
                          Modifier
                        </button>
                      </div>

                      <div className="space-y-3">
                        <p className="text-sm font-medium text-foreground">
                          {selectedProjectLabel || "—"}
                        </p>
                        <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                          {formData.message || "—"}
                        </p>
                      </div>
                    </div>

                    <p className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-4 text-xs leading-relaxed text-muted-foreground">
                      En envoyant la demande, vous ne vous engagez à rien. Nous vous contactons
                      uniquement pour comprendre le besoin et proposer les prochaines étapes.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between gap-4 border-t border-border/60 pt-6">
                {currentStep > 0 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    className="min-h-11 rounded-full px-5 text-sm"
                  >
                    <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
                    Précédent
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="min-h-11 rounded-full px-6 text-sm font-semibold"
                  >
                    Continuer
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-11 rounded-full px-6 text-sm font-semibold"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
                    ) : null}
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                  </Button>
                )}
              </div>
            </form>
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
                Ce qui se passe ensuite
              </h3>

              <div className="relative space-y-5 pl-6">
                <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border/60" />

                {[
                  "Nous vérifions votre demande",
                  "Un conseiller vous rappelle sous 24h ouvrées",
                  "Nous proposons une visite ou un échange technique",
                  "Vous recevez un devis détaillé et sans engagement",
                ].map((item, i) => (
                  <div key={item} className="relative flex items-start gap-3">
                    <div
                      className={`absolute -left-6 top-1 size-[14px] rounded-full border-2 transition-colors duration-300 ${
                        i <= currentStep
                          ? "border-primary bg-primary"
                          : "border-border bg-background"
                      }`}
                    />

                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideLeft}
              transition={transitionSmooth}
              className="rounded-[2rem] border border-border/70 bg-card/90 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-foreground">
                Contact direct
              </h3>

              <div className="space-y-3">
                {[
                  {
                    icon: Phone,
                    label: siteConfig.phoneDisplay,
                    href: siteConfig.phoneHref,
                    helper: "Appel direct",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    href: siteConfig.whatsappHref,
                    helper: "Pratique pour photos et plans",
                  },
                  {
                    icon: Mail,
                    label: siteConfig.email,
                    href: siteConfig.emailHref,
                    helper: "Réponse sous 24h",
                  },
                  {
                    icon: MapPin,
                    label: siteConfig.address,
                    href: siteConfig.mapsHref,
                    helper: "Antananarivo",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex min-h-11 items-center gap-3 rounded-2xl p-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                  >
                    <div className="flex size-10 items-center justify-center text-muted-foreground transition-colors duration-200">
                      <item.icon
                        className="size-6 transition-colors duration-200"
                        aria-hidden="true"
                      />
                    </div>

                    <span>
                      <span className="block font-medium text-foreground">{item.label}</span>
                      <span className="block text-xs text-muted-foreground">{item.helper}</span>
                    </span>
                  </a>
                ))}
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

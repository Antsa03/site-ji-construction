"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { IconConstruction, IconRenovation, IconBungalow, IconPlans, IconAutre, IconMaison, IconVilla, IconImmeuble, IconGarage, IconEntrepot } from "@/components/form/FormIcons"

import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/form/FormInput"
import { FormTextarea } from "@/components/form/FormTextarea"
import { FormPhone } from "@/components/form/FormPhone"
import { FormSelect, type FormSelectOption } from "@/components/form/FormSelect"
import { slideUp, slideLeft, staggerContainer, transitionSmooth } from "@/lib/animations"

const projectTypes: FormSelectOption[] = [
  { value: "maison", label: "Maison individuelle", icon: <IconMaison className="size-4" /> },
  { value: "villa", label: "Villa haut standing", icon: <IconVilla className="size-4" /> },
  { value: "bungalow", label: "Bungalow sur mesure", icon: <IconBungalow className="size-4" /> },
  { value: "immeuble", label: "Immeuble / Résidence", icon: <IconImmeuble className="size-4" /> },
  { value: "renovation", label: "Rénovation", icon: <IconRenovation className="size-4" /> },
  { value: "entrepot", label: "Entrepôt / Industriel", icon: <IconEntrepot className="size-4" /> },
  { value: "garage", label: "Garage / Abri", icon: <IconGarage className="size-4" /> },
  { value: "etudes", label: "Études et plans", icon: <IconPlans className="size-4" /> },
  { value: "autre", label: "Autre projet", icon: <IconAutre className="size-4" /> },
]

const steps = [
  { number: "01", title: "Vos informations", description: "Quelques infos pour qu'on puisse vous recontacter" },
  { number: "02", title: "Votre projet", description: "Décrivez-nous ce que vous avez en tête" },
  { number: "03", title: "Envoi", description: "Vérifiez et envoyez votre demande" },
]

export default function DevisPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    type: "",
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function nextStep() {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
  }

  function prevStep() {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-card pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md px-6 text-center"
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
            Merci {formData.nom.split(" ")[0] || ""} !
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            On vous rappelle sous 24h. Promis, on lit chaque message ✍️
          </p>
          <div className="rounded-xl border border-border/50 bg-[#f9f7f4] p-5 text-left text-sm text-muted-foreground space-y-2">
            <p><span className="text-foreground font-medium">Nom :</span> {formData.nom}</p>
            <p><span className="text-foreground font-medium">Email :</span> {formData.email}</p>
            <p><span className="text-foreground font-medium">Projet :</span> {projectTypes.find(p => p.value === formData.type)?.label}</p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-card pt-20 pb-14 sm:pt-28 sm:pb-18">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.1)}>
            <motion.div variants={slideUp} transition={transitionSmooth} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Devis gratuit</span>
            </motion.div>
            <motion.h1 variants={slideUp} transition={transitionSmooth} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-[family-name:var(--font-heading)] max-w-xl leading-tight">
              Votre projet mérite<br /><span className="text-muted-foreground/75">une vraie réponse.</span>
            </motion.h1>
            <motion.p variants={slideUp} transition={transitionSmooth} className="mt-4 text-base text-muted-foreground max-w-md">
              Pas un formulaire automatique. On lit chaque demande, on appelle, on écoute.
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
              {/* Progress bar */}
              <div className="flex items-center gap-3 mb-10">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 flex-1">
                    <div className={`flex items-center justify-center size-9 rounded-full text-xs font-mono font-bold transition-colors duration-300 ${
                      i <= currentStep ? "bg-primary text-white" : "bg-muted text-muted-foreground/75"
                    }`}>
                      {i < currentStep ? "✓" : step.number}
                    </div>
                    <div className={`h-px flex-1 transition-colors duration-300 ${
                      i < currentStep ? "bg-primary" : "bg-border/30"
                    }`} />
                  </div>
                ))}
              </div>

              {/* Step header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {steps[currentStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal info */}
                  {currentStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormInput
                          label="Nom complet"
                          placeholder="Rakoto Jean"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        />
                        <FormInput
                          label="Email"
                          type="email"
                          placeholder="rakoto@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <FormPhone
                        label="Téléphone"
                        required
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      />
                    </motion.div>
                  )}

                  {/* Step 2: Project details */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <FormSelect
                        label="Type de projet"
                        name="type"
                        options={projectTypes}
                        required
                      />
                      <FormTextarea
                        label="Décrivez votre projet"
                        placeholder="Surface souhaitée, localisation, budget approximatif, délais..."
                        rows={5}
                        maxLength={1000}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      <p className="text-[11px] text-muted-foreground/70 italic font-serif">
                        Promis, on lit chaque message ✍️
                      </p>
                    </motion.div>
                  )}

                  {/* Step 3: Review */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="rounded-xl border border-border/50 bg-[#f9f7f4] p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Coordonnées</span>
                          <button type="button" onClick={() => setCurrentStep(0)} className="text-xs text-primary hover:underline">Modifier</button>
                        </div>
                        <p className="text-sm text-foreground">{formData.nom || "—"}</p>
                        <p className="text-sm text-muted-foreground">{formData.email || "—"}</p>
                        <p className="text-sm text-muted-foreground">+261 {formData.telephone || "—"}</p>
                      </div>
                      <div className="rounded-xl border border-border/50 bg-[#f9f7f4] p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">Projet</span>
                          <button type="button" onClick={() => setCurrentStep(1)} className="text-xs text-primary hover:underline">Modifier</button>
                        </div>
                        <p className="text-sm text-foreground">{projectTypes.find(p => p.value === formData.type)?.label || "—"}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{formData.message || "—"}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-10">
                  {currentStep > 0 ? (
                    <Button type="button" variant="ghost" onClick={prevStep} className="rounded-full px-5 text-sm">
                      <ArrowLeft className="size-4 mr-2" /> Précédent
                    </Button>
                  ) : <div />}

                  {currentStep < steps.length - 1 ? (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="button" onClick={nextStep} className="rounded-full px-6 text-sm font-semibold">
                        Suivant <ArrowRight className="size-4 ml-2" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="rounded-full px-6 text-sm font-semibold">
                        Envoyer la demande <ArrowRight className="size-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>

            {/* Right — sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={staggerContainer(0.08, 0.15)}
              className="space-y-10"
            >
              {/* How it works — timeline */}
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-6">
                  Comment ça marche
                </h3>
                <div className="relative pl-6 space-y-6">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/40" />

                  {[
                    { step: "Vous décrivez votre projet", active: currentStep >= 0 },
                    { step: "On vous rappelle sous 24h", active: currentStep >= 1 },
                    { step: "On visite le terrain ensemble", active: currentStep >= 2 },
                    { step: "On vous envoie un devis détaillé", active: false },
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-3">
                      <div className={`absolute -left-6 top-1 size-[14px] rounded-full border-2 transition-colors duration-300 ${
                        item.active ? "bg-primary border-primary" : "bg-background border-border/40"
                      }`} />
                      <p className={`text-sm transition-colors duration-300 ${
                        item.active ? "text-foreground" : "text-muted-foreground/70"
                      }`}>
                        {item.step}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="h-px bg-border/30" />

              {/* Contact shortcuts */}
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-5">
                  Contact direct
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Phone, label: "+261 34 12 345 67", href: "tel:+261341234567" },
                    { icon: Mail, label: "contact@jiconstruction.mg", href: "mailto:contact@jiconstruction.mg" },
                    { icon: MapPin, label: "Lot II A 45 Analakely", href: "https://maps.google.com" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <div className="flex size-8 items-center justify-center rounded-lg bg-foreground/[0.03] group-hover:bg-primary/10 transition-colors duration-200">
                        <item.icon className="size-3.5 text-muted-foreground/70 group-hover:text-primary transition-colors duration-200" />
                      </div>
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              <div className="h-px bg-border/30" />

              {/* Trust */}
              <motion.div variants={slideLeft} transition={transitionSmooth}>
                <div className="space-y-2.5">
                  {["Réponse garantie sous 24h", "Devis détaillé et transparent", "100% gratuit, sans engagement"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-[#7A9B7E] shrink-0" />
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

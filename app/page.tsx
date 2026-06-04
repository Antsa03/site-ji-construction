import { HeroSection } from "@/components/home/HeroSection"
import { CraftServicesSection } from "@/components/home/CraftServicesSection"
import { WhyUsSection } from "@/components/home/WhyUsSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { GuaranteesSection } from "@/components/home/GuaranteesSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { CtaSection } from "@/components/home/CtaSection"
import { SectionDivider } from "@/components/home/SectionDivider"
import { FAQSection } from "@/components/home/FAQSection"

export default function Home() {
  return (
    <div className="premium-page">
      <HeroSection />
      <SectionDivider variant="copper" />

      {/* 1- Prestations */}
      <CraftServicesSection />
      <SectionDivider variant="dots" />

      {/* 2- Méthode Chantier */}
      <ProcessSection />
      <SectionDivider variant="default" />

      {/* 3- Réalisations */}
      <ProjectsSection />
      <SectionDivider variant="copper" />

      {/* 4 - Pourquoi nous */}
      <WhyUsSection />
      <SectionDivider variant="default" />

      {/* 5 - Témoignages */}
      <TestimonialsSection />
      <SectionDivider variant="dots" />

      {/* 6 - Contrôle chantier */}
      <GuaranteesSection />
      <SectionDivider variant="dots" />

      {/* 7 - Questions fréquentes */}
      <FAQSection />
      <SectionDivider variant="copper" />

      {/* 8 - On en parle */}
      <CtaSection />
    </div>
  )
}

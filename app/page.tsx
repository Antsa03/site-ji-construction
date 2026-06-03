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

      <CraftServicesSection />
      <SectionDivider variant="dots" />

      <ProcessSection />
      <SectionDivider variant="default" />

      <WhyUsSection />
      <SectionDivider variant="default" />

      <ProjectsSection />
      <SectionDivider variant="copper" />

      <TestimonialsSection />
      <SectionDivider variant="dots" />

      <GuaranteesSection />
      <SectionDivider variant="dots" />

      <FAQSection />
      <SectionDivider variant="copper" />

      <CtaSection />
    </div>
  )
}

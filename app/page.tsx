import { HeroSection } from "@/components/home/HeroSection"
import { CraftServicesSection } from "@/components/home/CraftServicesSection"
import { WhyUsSection } from "@/components/home/WhyUsSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { CtaSection } from "@/components/home/CtaSection"
import { SectionDivider } from "@/components/home/SectionDivider"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="copper" />
      <CraftServicesSection />
      <SectionDivider variant="dots" />
      <WhyUsSection />
      <SectionDivider variant="default" />
      <ProjectsSection />
      <SectionDivider variant="copper" />
      <TestimonialsSection />
      <SectionDivider variant="dots" />
      <CtaSection />
    </>
  )
}

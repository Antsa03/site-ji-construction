import { HeroSection } from "@/components/home/HeroSection"
import { ActivitiesSection } from "@/components/home/ActivitiesSection"
import { WhyUsSection } from "@/components/home/WhyUsSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { CtaSection } from "@/components/home/CtaSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ActivitiesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

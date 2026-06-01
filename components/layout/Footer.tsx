"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, ArrowUpRight, ArrowUp } from "lucide-react"

import { slideUp, staggerContainer, transitionSmooth } from "@/lib/animations"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/bungalows", label: "Bungalows" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
]

function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [40, 0])
  const lineScale = useTransform(scrollYProgress, [0, 0.4], [0, 1])

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#f5f3ef] dark:bg-[#1a1a1a]">
      {/* Concrete texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated line at top — hand-drawn feel */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        style={{ scaleX: lineScale, originX: 0.5 }}
      />

      {/* Architectural blueprint line — very subtle */}
      <svg
        className="absolute top-12 left-8 w-40 h-20 opacity-[0.04] pointer-events-none"
        viewBox="0 0 160 80"
      >
        <path
          d="M0 40 L40 40 L40 10 L80 10 L80 40 L120 40 L120 60 L160 60"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx="40" cy="10" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="80" cy="10" r="2" fill="currentColor" opacity="0.3" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Main section */}
        <div className="pt-20 sm:pt-28 pb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer(0.1)}
            className="grid gap-16 lg:grid-cols-[1.5fr_1fr]"
          >
            {/* Left — expressive headline */}
            <motion.div variants={slideUp} transition={transitionSmooth}>
              {/* Section number — architect style */}
              <p className="text-xs text-muted-foreground/70 uppercase tracking-[0.25em] mb-8 font-mono">
                01 — Signature
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-heading)] leading-[1.05] max-w-lg tracking-tight">
                Bâtir, c&apos;est
                <br />
                <em className="not-italic text-muted-foreground/70">donner vie.</em>
              </h2>

              <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
                Chaque projet est une histoire. Des fondations à la toiture, on écrit la vôtre avec
                soin, matériaux nobles et savoir-faire local.
              </p>

              {/* Handwritten annotation */}
              <p className="mt-6 text-xs text-muted-foreground/60 italic font-serif tracking-wide">
                — depuis 2009, Madagascar
              </p>
            </motion.div>

            {/* Right — contact as business card */}
            <motion.div variants={slideUp} transition={transitionSmooth} className="lg:pt-12">
              <p className="text-xs text-muted-foreground/70 uppercase tracking-[0.25em] mb-6 font-mono">
                02 — Contact
              </p>

              <div className="rounded-2xl border border-foreground/[0.06] bg-[#f9f7f4] dark:bg-[#222222] p-6 sm:p-8 relative">
                {/* Corner marks — architectural drawing style */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-foreground/10" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-foreground/10" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-foreground/10" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-foreground/10" />

                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "+261 34 12 345 67", href: "tel:+261341234567" },
                    {
                      icon: Mail,
                      label: "contact@jiconstruction.mg",
                      href: "mailto:contact@jiconstruction.mg",
                    },
                    {
                      icon: MapPin,
                      label: "Lot II A 45 Analakely, Antananarivo",
                      href: "https://maps.google.com",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <item.icon className="size-3.5 text-muted-foreground/70 group-hover:text-primary transition-colors duration-200 shrink-0" />
                      <span className="text-sm">{item.label}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-foreground/[0.06]">
                  <Link
                    href="/devis"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="relative">
                      Demander un devis
                      <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Marquee with fade edges */}
        <div className="relative py-8 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f5f3ef] dark:from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f5f3ef] dark:from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-xs text-muted-foreground/80 uppercase tracking-[0.25em]"
              >
                Construction <span className="text-primary/20 mx-2">★</span> Rénovation{" "}
                <span className="text-muted-foreground/30 mx-2">—</span> Bungalows{" "}
                <span className="text-primary/20 mx-2">+</span> Études{" "}
                <span className="text-muted-foreground/30 mx-2">—</span> Plans{" "}
                <span className="text-primary/20 mx-2">★</span> Architecture{" "}
                <span className="text-muted-foreground/30 mx-2">—</span>&nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        {/* Links row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer(0.06)}
          className="py-8 border-t border-foreground/[0.06]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            {/* Nav links with draw-in underline */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group text-[11px] text-muted-foreground/80 hover:text-foreground transition-colors duration-200 uppercase tracking-[0.2em] relative"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1px] bg-foreground/30 transition-all duration-300" />
                </Link>
              ))}
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={slideUp}
              transition={transitionSmooth}
              className="flex items-center gap-2.5"
            >
              {[
                {
                  name: "facebook",
                  href: "https://facebook.com",
                  icon: "/images/icons/facebook.svg",
                },
                {
                  name: "instagram",
                  href: "https://instagram.com",
                  icon: "/images/icons/instagram.svg",
                },
                {
                  name: "linkedin",
                  href: "https://linkedin.com",
                  icon: "/images/icons/linkedin.svg",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-8 items-center justify-center rounded-full border border-foreground/[0.06] hover:border-foreground/10 hover:bg-foreground/[0.03] transition-all duration-200"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="size-3 opacity-50 group-hover:opacity-80 group-hover:rotate-6 transition-all duration-300 dark:invert dark:opacity-70 dark:group-hover:opacity-100"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-foreground/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-[11px] text-muted-foreground/70">
                Pensé, dessiné et bâti à Antananarivo · MMXXVI
              </p>
              <span className="hidden sm:inline text-muted-foreground/80">·</span>
              <p className="text-[10px] text-muted-foreground/60 italic font-serif">
                &ldquo;Ny asa tsara dia maharitra&rdquo;
              </p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-[11px] text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              Retour en haut
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="size-3" />
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

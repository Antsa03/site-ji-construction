"use client"

import Link from "next/link"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
  type Variants,
} from "framer-motion"
import { useRef } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

/* ═══════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════ */

const smoothEase: Transition["ease"] = [0.22, 1, 0.36, 1]

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

const replayViewport = {
  once: true,
  amount: 0.35,
  margin: "0px 0px -10% 0px",
}

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
}

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
}

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const titleAccentVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const scaleLineVariant: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const diamondVariant: Variants = {
  hidden: {
    scale: 0,
    rotate: 0,
  },
  visible: {
    scale: 1,
    rotate: 45,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const statVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

/* ═══════════════════════════════════════════════════════
   PROFESSIONAL BTP BLUEPRINT PATTERN
   ═══════════════════════════════════════════════════════ */
function BtpBlueprintPattern() {
  const shouldReduceMotion = useReducedMotion()
  const motifOffsetY = 140

  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ji-gold-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#b8860b" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0.12" />
        </linearGradient>

        <linearGradient id="ji-gold-soft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0" />
          <stop offset="50%" stopColor="#b8860b" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ji-fill-soft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0.035" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0.09" />
        </linearGradient>

        <radialGradient id="ji-focus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Grille technique visible — fixe */}
      <g>
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={160 * (i + 1)}
            y1="0"
            x2={160 * (i + 1)}
            y2="900"
            stroke="#b8860b"
            strokeOpacity="0.16"
            strokeWidth="1"
          />
        ))}

        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={140 * (i + 1)}
            x2="1600"
            y2={140 * (i + 1)}
            stroke="#b8860b"
            strokeOpacity="0.16"
            strokeWidth="1"
          />
        ))}

        <line x1="0" y1="450" x2="1600" y2="450" stroke="url(#ji-gold-soft)" strokeWidth="1.6" />

        <line x1="900" y1="0" x2="900" y2="900" stroke="url(#ji-gold-soft)" strokeWidth="1.6" />
      </g>

      {/* Motifs BTP — rejoués au retour dans le viewport */}
      <g transform={`translate(0 ${motifOffsetY})`}>
        <circle cx="1010" cy="420" r="430" fill="url(#ji-focus-glow)" />

        {/* Cadre technique centre-droite */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={replayViewport}
          transition={{
            duration: 1.2,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <rect
            x="640"
            y="120"
            width="460"
            height="340"
            stroke="url(#ji-gold-line)"
            strokeWidth="1.6"
            fill="none"
          />

          <rect
            x="685"
            y="165"
            width="370"
            height="250"
            stroke="#b8860b"
            strokeOpacity="0.32"
            strokeWidth="1.2"
            fill="url(#ji-fill-soft)"
          />

          <circle
            cx="870"
            cy="290"
            r="130"
            stroke="#b8860b"
            strokeOpacity="0.32"
            strokeWidth="1.2"
            fill="none"
          />

          <circle
            cx="870"
            cy="290"
            r="76"
            stroke="#b8860b"
            strokeOpacity="0.16"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 6"
          />

          <line
            x1="685"
            y1="290"
            x2="1055"
            y2="290"
            stroke="#b8860b"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          <line
            x1="870"
            y1="165"
            x2="870"
            y2="415"
            stroke="#b8860b"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        </motion.g>

        {/* Bungalow / élévation */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={replayViewport}
          transition={{
            duration: 1.3,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <g transform="translate(760 220)">
            <line
              x1="-40"
              y1="250"
              x2="380"
              y2="250"
              stroke="#b8860b"
              strokeOpacity="0.46"
              strokeWidth="1.4"
            />

            <rect
              x="20"
              y="95"
              width="260"
              height="130"
              rx="1"
              stroke="#b8860b"
              strokeOpacity="0.46"
              strokeWidth="1.9"
              fill="url(#ji-fill-soft)"
            />

            <path
              d="M-5 110 L150 18 L305 110"
              stroke="#b8860b"
              strokeOpacity="0.54"
              strokeWidth="2.2"
              fill="none"
            />

            <path
              d="M25 104 L150 34 L275 104"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.2"
              fill="none"
            />

            <line
              x1="50"
              y1="95"
              x2="50"
              y2="225"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.3"
            />

            <line
              x1="250"
              y1="95"
              x2="250"
              y2="225"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.3"
            />

            <rect
              x="128"
              y="145"
              width="46"
              height="80"
              stroke="#b8860b"
              strokeOpacity="0.5"
              strokeWidth="1.4"
              fill="none"
            />

            <rect
              x="52"
              y="135"
              width="48"
              height="36"
              stroke="#b8860b"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              fill="none"
            />

            <line
              x1="76"
              y1="135"
              x2="76"
              y2="171"
              stroke="#b8860b"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <line
              x1="52"
              y1="153"
              x2="100"
              y2="153"
              stroke="#b8860b"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <rect
              x="202"
              y="135"
              width="48"
              height="36"
              stroke="#b8860b"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              fill="none"
            />

            <line
              x1="226"
              y1="135"
              x2="226"
              y2="171"
              stroke="#b8860b"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <line
              x1="202"
              y1="153"
              x2="250"
              y2="153"
              stroke="#b8860b"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <rect
              x="95"
              y="225"
              width="110"
              height="10"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1"
              fill="none"
            />

            <rect
              x="110"
              y="235"
              width="80"
              height="8"
              stroke="#b8860b"
              strokeOpacity="0.22"
              strokeWidth="1"
              fill="none"
            />

            <line
              x1="-5"
              y1="5"
              x2="305"
              y2="5"
              stroke="#b8860b"
              strokeOpacity="0.22"
              strokeWidth="1"
            />

            <line
              x1="-5"
              y1="0"
              x2="-5"
              y2="10"
              stroke="#b8860b"
              strokeOpacity="0.22"
              strokeWidth="1"
            />

            <line
              x1="305"
              y1="0"
              x2="305"
              y2="10"
              stroke="#b8860b"
              strokeOpacity="0.22"
              strokeWidth="1"
            />

            <text
              x="150"
              y="-5"
              textAnchor="middle"
              fill="#b8860b"
              fillOpacity="0.46"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="0.1em"
            >
              ÉLÉVATION
            </text>
          </g>
        </motion.g>

        {/* Plan intérieur */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={replayViewport}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <g transform="translate(1035 180)">
            <rect
              x="0"
              y="0"
              width="265"
              height="230"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.5"
              fill="none"
            />

            <rect
              x="18"
              y="18"
              width="229"
              height="194"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.2"
              fill="url(#ji-fill-soft)"
            />

            <line
              x1="110"
              y1="18"
              x2="110"
              y2="212"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.2"
            />

            <line
              x1="18"
              y1="100"
              x2="247"
              y2="100"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.2"
            />

            <line
              x1="170"
              y1="100"
              x2="170"
              y2="212"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.1"
            />

            <path
              d="M100 100 A20 20 0 0 1 120 80"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.1"
              fill="none"
            />

            <path
              d="M170 112 A20 20 0 0 1 190 132"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.1"
              fill="none"
            />

            <path
              d="M110 155 A20 20 0 0 1 90 175"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.1"
              fill="none"
            />

            <text
              x="62"
              y="60"
              textAnchor="middle"
              fill="#b8860b"
              fillOpacity="0.42"
              fontSize="10"
              fontFamily="monospace"
            >
              SALON
            </text>

            <text
              x="180"
              y="60"
              textAnchor="middle"
              fill="#b8860b"
              fillOpacity="0.42"
              fontSize="10"
              fontFamily="monospace"
            >
              CHAMBRE
            </text>

            <text
              x="65"
              y="155"
              textAnchor="middle"
              fill="#b8860b"
              fillOpacity="0.42"
              fontSize="10"
              fontFamily="monospace"
            >
              CUISINE
            </text>

            <text
              x="210"
              y="160"
              textAnchor="middle"
              fill="#b8860b"
              fillOpacity="0.42"
              fontSize="10"
              fontFamily="monospace"
            >
              SDB
            </text>
          </g>
        </motion.g>

        {/* Grue de chantier */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={replayViewport}
          transition={{
            duration: 1.2,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <g transform="translate(1325 120)">
            <line
              x1="0"
              y1="20"
              x2="0"
              y2="380"
              stroke="#b8860b"
              strokeOpacity="0.5"
              strokeWidth="1.8"
            />

            <line
              x1="22"
              y1="20"
              x2="22"
              y2="380"
              stroke="#b8860b"
              strokeOpacity="0.5"
              strokeWidth="1.8"
            />

            {Array.from({ length: 11 }).map((_, i) => {
              const y = 40 + i * 30

              return (
                <g key={`crane-${i}`}>
                  <line
                    x1="0"
                    y1={y}
                    x2="22"
                    y2={y}
                    stroke="#b8860b"
                    strokeOpacity="0.26"
                    strokeWidth="1"
                  />

                  <line
                    x1="0"
                    y1={y - 20}
                    x2="22"
                    y2={y}
                    stroke="#b8860b"
                    strokeOpacity="0.32"
                    strokeWidth="1"
                  />

                  <line
                    x1="22"
                    y1={y - 20}
                    x2="0"
                    y2={y}
                    stroke="#b8860b"
                    strokeOpacity="0.32"
                    strokeWidth="1"
                  />
                </g>
              )
            })}

            <line
              x1="11"
              y1="40"
              x2="-210"
              y2="40"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.8"
            />

            <line
              x1="11"
              y1="40"
              x2="130"
              y2="52"
              stroke="#b8860b"
              strokeOpacity="0.44"
              strokeWidth="1.4"
            />

            <line
              x1="-150"
              y1="40"
              x2="11"
              y2="10"
              stroke="#b8860b"
              strokeOpacity="0.32"
              strokeWidth="1.1"
            />

            <line
              x1="-105"
              y1="40"
              x2="-105"
              y2="112"
              stroke="#b8860b"
              strokeOpacity="0.46"
              strokeWidth="1.2"
            />

            <path
              d="M-105 112 Q-105 126 -94 126 Q-82 126 -82 114"
              stroke="#b8860b"
              strokeOpacity="0.46"
              strokeWidth="1.2"
              fill="none"
            />
          </g>
        </motion.g>

        {/* Ligne de cote principale */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={replayViewport}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <line
            x1="180"
            y1="785"
            x2="1240"
            y2="785"
            stroke="#b8860b"
            strokeOpacity="0.44"
            strokeWidth="1.4"
          />

          <line
            x1="180"
            y1="772"
            x2="180"
            y2="798"
            stroke="#b8860b"
            strokeOpacity="0.44"
            strokeWidth="1.4"
          />

          <line
            x1="1240"
            y1="772"
            x2="1240"
            y2="798"
            stroke="#b8860b"
            strokeOpacity="0.44"
            strokeWidth="1.4"
          />

          <line
            x1="520"
            y1="777"
            x2="520"
            y2="793"
            stroke="#b8860b"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          <line
            x1="860"
            y1="777"
            x2="860"
            y2="793"
            stroke="#b8860b"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          <text
            x="710"
            y="776"
            textAnchor="middle"
            fill="#b8860b"
            fillOpacity="0.5"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            12.00m
          </text>
        </motion.g>
      </g>

      {/* Repères d’angle — fixes */}
      <g>
        <path
          d="M70 110 L120 110 L120 60"
          stroke="#b8860b"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          fill="none"
        />

        <path
          d="M1530 110 L1480 110 L1480 60"
          stroke="#b8860b"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          fill="none"
        />

        <path
          d="M70 760 L120 760 L120 810"
          stroke="#b8860b"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          fill="none"
        />

        <path
          d="M1530 760 L1480 760 L1480 810"
          stroke="#b8860b"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          fill="none"
        />
      </g>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-28 sm:flex sm:min-h-[92svh] sm:items-center sm:pt-20 sm:pb-0"
    >
      {/* Layer 1 : base */}
      <div className="absolute inset-0 bg-background" />

      {/* Layer 2 : image réelle subtile */}
      <div
        className="absolute inset-0 opacity-[0.10] dark:opacity-[0.14] sm:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--background) 0%, color-mix(in oklch, var(--background) 72%, transparent) 42%, color-mix(in oklch, var(--background) 8%, transparent) 100%), url('/images/hero/construction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "68% center",
        }}
      />

      {/* Layer 3 : gradients premium */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute -top-1/4 -left-1/4 w-[140%] h-[140%]"
          style={{
            background:
              "radial-gradient(ellipse 52% 44% at 24% 34%, rgba(184,134,11,0.09), transparent 70%)",
          }}
        />

        <div
          className="absolute -bottom-1/4 -right-1/4 w-[140%] h-[140%]"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 74% 62%, rgba(184,134,11,0.08), transparent 65%)",
          }}
        />

        <div
          className="absolute top-1/4 left-1/4 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 35% 35% at 55% 45%, rgba(255,255,255,0.04), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Layer 4 : dark mode overlay */}
      <div className="absolute inset-0 hidden dark:block">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 25% 35%, rgba(184,134,11,0.12), transparent 70%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 75% 65%, rgba(120,80,20,0.11), transparent 60%)",
          }}
        />
      </div>

      {/* Layer 5 : masque de lisibilité */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, var(--background) 0%, color-mix(in oklch, var(--background) 72%, transparent) 22%, color-mix(in oklch, var(--background) 28%, transparent) 45%, color-mix(in oklch, var(--background) 6%, transparent) 64%, transparent 100%)",
        }}
      />

      {/* Layer 6 : motif BTP prioritaire */}
      <div
        className="absolute inset-0 z-[3] opacity-100"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 26%, black 42%, black 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 26%, black 42%, black 100%)",
        }}
      >
        <BtpBlueprintPattern />
      </div>

      {/* Layer 7 : grain subtil */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.026] dark:opacity-[0.045] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-20 mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl items-end px-5 sm:min-h-0 sm:px-8 lg:px-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={staggerContainer(0.11, 0.15)}
          className="flex max-w-3xl flex-col gap-5 rounded-[2rem] border border-border/80 bg-background/90 p-5 backdrop-blur-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 lg:gap-6"
        >
          {/* Label */}
          <motion.div variants={fadeInLeft} className="flex items-center gap-3">
            <motion.div
              className="h-px origin-left bg-primary"
              variants={scaleLineVariant}
              style={{ width: 32 }}
            />

            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-sm sm:tracking-[0.25em]">
              JI Construction — BTP &amp; Bungalows
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={titleVariant}
            className="text-[clamp(3.4rem,17vw,5.2rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-foreground sm:text-7xl sm:leading-[0.92] lg:text-8xl xl:text-9xl"
          >
            <span className="block">Construire juste.</span>

            <motion.span variants={titleAccentVariant} className="block text-primary">
              Bâtir durable.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-[0.98rem] leading-7 text-muted-foreground sm:text-lg sm:leading-relaxed"
          >
            Construction, rénovation et bungalows sur mesure à Madagascar. Des projets bien conçus,
            bien chiffrés, bien réalisés.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="grid gap-3 pt-2 sm:flex sm:flex-wrap">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="min-h-12 w-full rounded-full px-7 text-sm font-bold sm:w-auto"
                asChild
              >
                <Link href="/devis" className="inline-flex items-center gap-2">
                  Demander un devis gratuit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="min-h-12 w-full rounded-full border-border/80 bg-background/[0.88] px-7 text-sm font-bold shadow-sm backdrop-blur-sm sm:w-auto"
                asChild
              >
                <Link href="/bungalows" className="inline-flex items-center gap-2">
                  Comparer les bungalows
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative divider */}
          <motion.div variants={fadeInUp} className="flex max-w-2xl items-center gap-3 pt-4">
            <motion.div
              className="h-px flex-1 origin-left"
              style={{
                background: "linear-gradient(to right, rgba(184,134,11,0.38), transparent)",
              }}
              variants={scaleLineVariant}
            />

            <motion.div
              className="h-1.5 w-1.5 rotate-45 border border-primary/30"
              variants={diamondVariant}
            />

            <div className="h-px w-12 bg-primary/20" />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer(0.08, 0)}
            className="grid grid-cols-3 gap-3 pt-3 sm:flex sm:flex-wrap sm:items-center sm:gap-8 sm:pt-4"
          >
            {[
              { value: "15+", label: "ans" },
              { value: "100+", label: "projets" },
              { value: "24h", label: "réponse devis" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={statVariant}
                className="flex min-w-0 flex-col gap-0.5 rounded-2xl border border-border/70 bg-card/70 px-3 py-2 sm:flex-row sm:items-baseline sm:gap-2 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
              >
                <span className="text-xl font-bold text-foreground sm:text-3xl">{stat.value}</span>

                <span className="text-[0.64rem] uppercase leading-tight tracking-wider text-muted-foreground sm:text-xs">
                  {stat.label}
                </span>

                {i < 2 && <span className="hidden text-lg text-border sm:ml-4 sm:inline">/</span>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={replayViewport}
        transition={{
          duration: 0.8,
        }}
        className="absolute bottom-8 right-8 z-20 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] font-mono text-muted-foreground/40">
          Scroll
        </span>

        <motion.div
          className="w-px h-10 origin-top bg-primary/25"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 z-30 h-0.5"
        style={{
          width: progressWidth,
          background: "linear-gradient(90deg, #b8860b, #8b6914)",
        }}
      />
    </section>
  )
}

export { HeroSection }

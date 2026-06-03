"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

import {
  slideUp,
  slideLeft,
  slideRight,
  staggerContainer,
  transitionSmooth,
} from "@/lib/animations"

/* ═══════════════════════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════════════════════ */

const services = [
  {
    num: "01",
    title: "Construction",
    subtitle: "neuve",
    description:
      "Maisons, immeubles, locaux commerciaux, entrepôts. Du sol à la toiture, on gère l'intégralité de votre projet.",
    features: ["Gros oeuvre", "Second oeuvre", "Finitions sur mesure"],
    cta: "Découvrir nos chantiers",
    href: "/prestations#construction",
    isAccent: true,
    illustration: "construction" as const,
  },
  {
    num: "02",
    title: "Rénovation",
    subtitle: "",
    description:
      "Transformation complète de bâtiments existants. Structure, électricité, plomberie, revêtements — on rénove de A à Z.",
    features: ["Réhabilitation", "Mise aux normes", "Modernisation"],
    cta: "Voir nos rénovations",
    href: "/prestations#renovation",
    isAccent: false,
    illustration: "renovation" as const,
  },
  {
    num: "03",
    title: "Bungalows",
    subtitle: "sur mesure",
    description:
      "Conception et fabrication de bungalows modulaires. Du traditionnel malgache au contemporain épuré.",
    features: ["Hôtellerie", "Habitat", "Professionnel"],
    cta: "Configurer mon bungalow",
    href: "/bungalows",
    isAccent: true,
    illustration: "bungalows" as const,
  },
  {
    num: "04",
    title: "Études",
    subtitle: "& plans",
    description:
      "Plans architecturaux, études de structure, métrés et devis. La rigueur technique au service de votre vision.",
    features: ["Architecte", "Géomètre", "Bureau d'études"],
    cta: "Confier votre projet",
    href: "/devis",
    isAccent: false,
    illustration: "etudes" as const,
  },
]

/* ═══════════════════════════════════════════════════════
   TEXTURED SVG ILLUSTRATIONS — Enhanced
   ═══════════════════════════════════════════════════════ */

function ConstructionIllustration() {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <pattern id="bp1" patternUnits="userSpaceOnUse" width="12" height="12">
          <path d="M12 0H0M0 0V12" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
        </pattern>
        <linearGradient id="wood1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.04" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="120" height="100" fill="url(#bp1)" rx="2" />
      <path
        d="M15 25h90M15 45h90M15 65h70"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.1"
        strokeDasharray="4 3"
      />
      <path
        d="M30 15v70M60 15v55M90 15v40"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.1"
        strokeDasharray="4 3"
      />
      <rect
        x="20"
        y="55"
        width="45"
        height="8"
        rx="1"
        fill="url(#wood1)"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <line x1="25" y1="57" x2="25" y2="61" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      <line
        x1="35"
        y1="57"
        x2="35"
        y2="61"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <line x1="50" y1="57" x2="50" y2="61" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      <line
        x1="58"
        y1="57"
        x2="58"
        y2="61"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <rect
        x="72"
        y="50"
        width="22"
        height="14"
        rx="1"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <line x1="72" y1="57" x2="94" y2="57" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <line x1="83" y1="50" x2="83" y2="57" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <line x1="77" y1="57" x2="77" y2="64" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <line x1="89" y1="57" x2="89" y2="64" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <path
        d="M30 30 L50 30 L50 45"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
      <circle cx="50" cy="30" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.3" />
      <path d="M82 28 L90 20 L93 23 L85 31 Z" fill="currentColor" opacity="0.12" />
      <rect
        x="79"
        y="31"
        width="4"
        height="16"
        rx="1"
        transform="rotate(-15 79 31)"
        fill="currentColor"
        opacity="0.1"
      />
      <g opacity="0.2">
        <line x1="20" y1="78" x2="65" y2="78" stroke="currentColor" strokeWidth="0.4" />
        <line x1="20" y1="76" x2="20" y2="80" stroke="currentColor" strokeWidth="0.4" />
        <line x1="65" y1="76" x2="65" y2="80" stroke="currentColor" strokeWidth="0.4" />
        <text x="42" y="76" textAnchor="middle" fontSize="5" fill="currentColor">
          4.50m
        </text>
      </g>
    </svg>
  )
}

function RenovationIllustration() {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="stone-old" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="wall-new" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="15"
        width="42"
        height="70"
        rx="2"
        fill="url(#stone-old)"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <rect
        x="10"
        y="17"
        width="18"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.2"
      />
      <rect
        x="30"
        y="17"
        width="18"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.15"
      />
      <rect
        x="10"
        y="29"
        width="12"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.18"
      />
      <rect
        x="24"
        y="29"
        width="14"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.22"
      />
      <rect
        x="40"
        y="29"
        width="8"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.15"
      />
      <rect
        x="10"
        y="43"
        width="16"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.2"
      />
      <rect
        x="28"
        y="43"
        width="20"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.16"
      />
      <rect
        x="10"
        y="55"
        width="14"
        height="11"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.18"
      />
      <rect
        x="26"
        y="55"
        width="22"
        height="11"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.2"
      />
      <rect
        x="10"
        y="68"
        width="38"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.15"
      />
      <g opacity="0.35">
        <line x1="54" y1="50" x2="64" y2="50" stroke="currentColor" strokeWidth="1" />
        <path
          d="M62 46 L68 50 L62 54"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect
        x="70"
        y="15"
        width="42"
        height="70"
        rx="2"
        fill="url(#wall-new)"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
      <line
        x1="70"
        y1="38"
        x2="112"
        y2="38"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.12"
      />
      <line
        x1="70"
        y1="61"
        x2="112"
        y2="61"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.12"
      />
      <line x1="91" y1="15" x2="91" y2="85" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
      <rect
        x="80"
        y="44"
        width="22"
        height="16"
        rx="1"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
      <line
        x1="91"
        y1="44"
        x2="91"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <line
        x1="80"
        y1="52"
        x2="102"
        y2="52"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <g opacity="0.2">
        <path d="M60 25 L61 28 L64 29 L61 30 L60 33 L59 30 L56 29 L59 28 Z" fill="currentColor" />
        <path
          d="M65 70 L66 72 L68 73 L66 74 L65 76 L64 74 L62 73 L64 72 Z"
          fill="currentColor"
          opacity="0.6"
        />
      </g>
      <text
        x="29"
        y="82"
        textAnchor="middle"
        fontSize="4.5"
        fill="currentColor"
        opacity="0.2"
        fontStyle="italic"
      >
        avant
      </text>
      <text
        x="91"
        y="82"
        textAnchor="middle"
        fontSize="4.5"
        fill="currentColor"
        opacity="0.2"
        fontStyle="italic"
      >
        après
      </text>
    </svg>
  )
}

function BungalowIllustration() {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <pattern
          id="wood-grain"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(5)"
        >
          <line
            x1="0"
            y1="0"
            x2="8"
            y2="0"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.08"
          />
          <line
            x1="0"
            y1="3"
            x2="8"
            y2="3"
            stroke="currentColor"
            strokeWidth="0.2"
            opacity="0.05"
          />
          <line
            x1="0"
            y1="6"
            x2="8"
            y2="6"
            stroke="currentColor"
            strokeWidth="0.25"
            opacity="0.06"
          />
        </pattern>
        <linearGradient id="roof-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="88" rx="42" ry="4" fill="currentColor" opacity="0.04" />
      <rect
        x="22"
        y="72"
        width="76"
        height="6"
        rx="1"
        fill="currentColor"
        opacity="0.06"
        stroke="currentColor"
        strokeWidth="0.4"
      />
      <rect
        x="25"
        y="40"
        width="70"
        height="32"
        fill="url(#wood-grain)"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <line
        x1="25"
        y1="48"
        x2="95"
        y2="48"
        stroke="currentColor"
        strokeWidth="0.25"
        opacity="0.1"
      />
      <line
        x1="25"
        y1="56"
        x2="95"
        y2="56"
        stroke="currentColor"
        strokeWidth="0.25"
        opacity="0.1"
      />
      <line
        x1="25"
        y1="64"
        x2="95"
        y2="64"
        stroke="currentColor"
        strokeWidth="0.25"
        opacity="0.1"
      />
      <path
        d="M18 42 L60 18 L102 42 Z"
        fill="url(#roof-grad)"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
        opacity="0.35"
      />
      <line
        x1="60"
        y1="18"
        x2="60"
        y2="16"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.25"
      />
      <line x1="30" y1="38" x2="55" y2="22" stroke="currentColor" strokeWidth="0.2" opacity="0.1" />
      <line x1="65" y1="22" x2="90" y2="38" stroke="currentColor" strokeWidth="0.2" opacity="0.1" />
      <rect
        x="53"
        y="52"
        width="14"
        height="20"
        rx="1"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="64" cy="62" r="1" fill="currentColor" opacity="0.2" />
      <rect
        x="32"
        y="46"
        width="12"
        height="10"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
      <line
        x1="38"
        y1="46"
        x2="38"
        y2="56"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <line
        x1="32"
        y1="51"
        x2="44"
        y2="51"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <rect
        x="76"
        y="46"
        width="12"
        height="10"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.25"
      />
      <line
        x1="82"
        y1="46"
        x2="82"
        y2="56"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <line
        x1="76"
        y1="51"
        x2="88"
        y2="51"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.15"
      />
      <path
        d="M48 52 L60 46 L72 52"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
        opacity="0.2"
      />
      <rect
        x="50"
        y="72"
        width="20"
        height="3"
        rx="0.5"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      <rect
        x="52"
        y="75"
        width="16"
        height="3"
        rx="0.5"
        fill="currentColor"
        opacity="0.04"
        stroke="currentColor"
        strokeWidth="0.3"
      />
      <g opacity="0.15">
        <line x1="15" y1="78" x2="15" y2="62" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="15" cy="58" r="5" fill="currentColor" opacity="0.3" />
        <circle cx="12" cy="62" r="3.5" fill="currentColor" opacity="0.2" />
        <circle cx="18" cy="61" r="3" fill="currentColor" opacity="0.2" />
      </g>
      <g opacity="0.1">
        <line x1="107" y1="78" x2="107" y2="65" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="107" cy="62" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="105" cy="65" r="2.5" fill="currentColor" opacity="0.2" />
      </g>
    </svg>
  )
}

function EtudesIllustration() {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <pattern id="bp2" patternUnits="userSpaceOnUse" width="15" height="15">
          <path d="M15 0H0M0 0V15" stroke="currentColor" strokeWidth="0.2" opacity="0.1" />
        </pattern>
      </defs>
      <rect x="10" y="10" width="100" height="80" rx="2" fill="url(#bp2)" opacity="0.5" />
      <g opacity="0.35">
        <ellipse
          cx="22"
          cy="50"
          rx="4"
          ry="30"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="currentColor"
          fillOpacity="0.03"
        />
        <path
          d="M22 20 Q30 20 30 25 L30 75 Q30 80 22 80"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="currentColor"
          fillOpacity="0.02"
        />
        <path d="M26 22 Q28 50 26 78" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
      </g>
      <g transform="rotate(-12 70 35)" opacity="0.3">
        <rect
          x="45"
          y="30"
          width="50"
          height="8"
          rx="0.5"
          fill="currentColor"
          opacity="0.04"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <line x1="50" y1="30" x2="50" y2="34" stroke="currentColor" strokeWidth="0.3" />
        <line x1="55" y1="30" x2="55" y2="33" stroke="currentColor" strokeWidth="0.2" />
        <line x1="60" y1="30" x2="60" y2="34" stroke="currentColor" strokeWidth="0.3" />
        <line x1="65" y1="30" x2="65" y2="33" stroke="currentColor" strokeWidth="0.2" />
        <line x1="70" y1="30" x2="70" y2="34" stroke="currentColor" strokeWidth="0.3" />
        <line x1="75" y1="30" x2="75" y2="33" stroke="currentColor" strokeWidth="0.2" />
        <line x1="80" y1="30" x2="80" y2="34" stroke="currentColor" strokeWidth="0.3" />
        <line x1="85" y1="30" x2="85" y2="33" stroke="currentColor" strokeWidth="0.2" />
        <line x1="90" y1="30" x2="90" y2="34" stroke="currentColor" strokeWidth="0.3" />
        <text x="50" y="38" fontSize="3" fill="currentColor" opacity="0.5">
          1
        </text>
        <text x="60" y="38" fontSize="3" fill="currentColor" opacity="0.5">
          2
        </text>
        <text x="70" y="38" fontSize="3" fill="currentColor" opacity="0.5">
          3
        </text>
        <text x="80" y="38" fontSize="3" fill="currentColor" opacity="0.5">
          4
        </text>
        <text x="90" y="38" fontSize="3" fill="currentColor" opacity="0.5">
          5
        </text>
      </g>
      <g opacity="0.3" transform="translate(78 58)">
        <line
          x1="0"
          y1="0"
          x2="-8"
          y2="22"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="0"
          x2="8"
          y2="22"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <circle cx="0" cy="0" r="1.2" fill="currentColor" opacity="0.4" />
        <path d="M-8 22 L-6 18" stroke="currentColor" strokeWidth="0.4" />
        <path d="M8 22 Q10 18 7 15" stroke="currentColor" strokeWidth="0.4" fill="none" />
        <path
          d="M-8 22 Q-12 35 0 38 Q12 35 8 22"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          fill="none"
          opacity="0.4"
        />
      </g>
      <g opacity="0.2" transform="rotate(25 35 70)">
        <rect x="30" y="62" width="3" height="18" rx="0.5" fill="currentColor" opacity="0.15" />
        <path d="M30 80 L31.5 85 L33 80" fill="currentColor" opacity="0.2" />
        <rect x="30" y="62" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.08" />
      </g>
      <g opacity="0.15">
        <rect x="40" y="55" width="28" height="22" stroke="currentColor" strokeWidth="0.5" />
        <line x1="40" y1="65" x2="54" y2="65" stroke="currentColor" strokeWidth="0.3" />
        <rect x="54" y="55" width="14" height="10" stroke="currentColor" strokeWidth="0.3" />
        <path
          d="M54 70 Q60 70 60 77"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
          strokeDasharray="1.5 1"
        />
      </g>
      <g opacity="0.15">
        <line x1="40" y1="82" x2="68" y2="82" stroke="currentColor" strokeWidth="0.3" />
        <line x1="40" y1="80" x2="40" y2="84" stroke="currentColor" strokeWidth="0.3" />
        <line x1="68" y1="80" x2="68" y2="84" stroke="currentColor" strokeWidth="0.3" />
        <text x="54" y="86" textAnchor="middle" fontSize="4" fill="currentColor">
          8.20m
        </text>
      </g>
    </svg>
  )
}

const illustrations: Record<string, React.ComponentType> = {
  construction: ConstructionIllustration,
  renovation: RenovationIllustration,
  bungalows: BungalowIllustration,
  etudes: EtudesIllustration,
}

/* ═══════════════════════════════════════════════════════
   CARD COMPONENT — Enhanced
   ═══════════════════════════════════════════════════════ */

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Illustration = illustrations[service.illustration]
  const directionVariant = index % 2 === 0 ? slideLeft : slideRight
  const isOdd = index % 2 !== 0

  return (
    <motion.article
      variants={directionVariant}
      transition={transitionSmooth}
      className={`group relative flex flex-col rounded-lg overflow-hidden bg-card card-bevel ${
        isOdd ? "md:translate-y-8" : ""
      }`}
      style={{
        borderLeft: `3px solid ${
          service.isAccent ? "oklch(0.72 0.14 85 / 0.35)" : "oklch(0.55 0.015 50 / 0.2)"
        }`,
      }}
    >
      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path
            d="M100 0 L100 100 L0 100"
            stroke={service.isAccent ? "oklch(0.72 0.14 85 / 0.08)" : "oklch(0.55 0.015 50 / 0.05)"}
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M100 0 L100 40 L60 40"
            stroke={service.isAccent ? "oklch(0.72 0.14 85 / 0.06)" : "oklch(0.55 0.015 50 / 0.04)"}
            strokeWidth="0.3"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* ── Card inner ── */}
      <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-8">
        {/* Top: editorial service index, not a generic icon badge */}
        <div className="mb-6 flex items-start justify-between gap-6">
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            className="select-none text-6xl font-black leading-none tracking-[-0.09em] sm:text-7xl"
            style={{
              color: service.isAccent ? "var(--primary)" : "var(--warm-gray)",
              opacity: 0.14,
              fontFamily: "var(--font-heading)",
            }}
          >
            {service.num}
          </motion.span>
          <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Domaine BTP
          </span>
        </div>

        {/* Title */}
        <h3
          className="mb-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.title}
          {service.subtitle && <span className="ml-1.5 font-normal text-muted-foreground">{service.subtitle}</span>}
        </h3>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        {/* Technical visual plate — treated like a project drawing instead of an AI icon */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 overflow-hidden rounded-2xl border border-border bg-muted/45 p-4"
          style={{ color: service.isAccent ? "var(--primary)" : "var(--warm-gray)" }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Croquis technique
            </span>
            <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary-text/70">
              JI-{service.num}
            </span>
          </div>
          <div className="h-28 opacity-75 transition-opacity duration-500 group-hover:opacity-95 sm:h-32">
            <Illustration />
          </div>
        </motion.div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((feat) => (
            <span
              key={feat}
              className="inline-block text-[11px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-sm border text-muted-foreground transition-colors duration-300 group-hover:border-foreground/15"
              style={{ borderColor: "var(--border)" }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* CTA — ghost button with hover fill */}
        <motion.div
          className="mt-auto"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={service.href}
            className="inline-flex items-center gap-2.5 text-sm font-semibold transition-colors duration-300 group/link"
            style={
              {
                "--link-color": service.isAccent ? "oklch(0.72 0.14 85)" : "oklch(0.55 0.015 50)",
                "--link-border": service.isAccent
                  ? "oklch(0.72 0.14 85 / 0.3)"
                  : "oklch(0.55 0.015 50 / 0.2)",
              } as React.CSSProperties
            }
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border transition-all duration-300
               text-[var(--link-color)]
               border-[var(--link-border)]
               group-hover/link:bg-[var(--link-color)]
               group-hover/link:border-[var(--link-color)]
               group-hover/link:text-white"
            >
              {service.cta}
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Hover material texture overlay */}
      {service.illustration === "bungalows" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none wood-texture-overlay" />
      )}
      {service.illustration === "renovation" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none stone-texture-overlay" />
      )}
    </motion.article>
  )
}

/* ═══════════════════════════════════════════════════════
   MAIN SECTION — Enhanced
   ═══════════════════════════════════════════════════════ */

function CraftServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 concrete-texture blueprint-overlay">
      {/* Subtle warm gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, oklch(0.97 0.01 85 / 0.5), transparent 70%), radial-gradient(ellipse 60% 50% at 70% 80%, oklch(0.96 0.008 250 / 0.2), transparent 60%)",
        }}
      />

      {/* Copper glow accent */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.14 85 / 0.03), transparent 70%)",
        }}
      />

      {/* Animated architectural accent — top right */}
      <motion.div
        className="absolute top-20 right-0 w-[300px] h-[300px] pointer-events-none"
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <circle cx="150" cy="150" r="120" stroke="oklch(0.72 0.14 85)" strokeWidth="0.3" />
          <circle cx="150" cy="150" r="80" stroke="oklch(0.72 0.14 85)" strokeWidth="0.2" />
          <line x1="150" y1="30" x2="150" y2="270" stroke="oklch(0.72 0.14 85)" strokeWidth="0.2" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="oklch(0.72 0.14 85)" strokeWidth="0.2" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer(0.1)}
          className="mb-16 sm:mb-20 lg:mb-24 max-w-2xl"
        >
          {/* Section label */}
          <motion.span
            variants={slideUp}
            transition={transitionSmooth}
            className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-mono block mb-3"
          >
            02 — Prestations
          </motion.span>

          {/* Surtitle with accent bar */}
          <motion.div
            variants={slideUp}
            transition={transitionSmooth}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-primary/40" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary-text">
              Ce qu&apos;on fait
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h2
            variants={slideUp}
            transition={transitionSmooth}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-foreground font-[family-name:var(--font-heading)]"
          >
            On construit,
            <br />
            on rénove,
            <br />
            <span className="text-primary-text">on crée.</span>
          </motion.h2>
        </motion.div>

        {/* ── Cards grid — asymmetric layout ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer(0.12, 0.15)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { CraftServicesSection }

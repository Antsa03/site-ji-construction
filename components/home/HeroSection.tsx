"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

/* ═══════════════════════════════════════════════════════
   STAGGER CONTAINER VARIANTS
   ═══════════════════════════════════════════════════════ */
const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

/* ═══════════════════════════════════════════════════════
   GEOMETRIC PATTERN — much more visible
   ═══════════════════════════════════════════════════════ */
function GeometricPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="copperH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0" />
          <stop offset="50%" stopColor="#b8860b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="copperV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0" />
          <stop offset="50%" stopColor="#b8860b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="copperDiag" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0" />
          <stop offset="50%" stopColor="#b8860b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Vertical grid lines ── */}
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.line
          key={`v-${i}`}
          x1={200 * (i + 1)}
          y1="0"
          x2={200 * (i + 1)}
          y2="800"
          stroke="#b8860b"
          strokeOpacity={0.14}
          strokeWidth="0.7"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
        />
      ))}

      {/* ── Horizontal grid lines ── */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.line
          key={`h-${i}`}
          x1="0"
          y1={160 * (i + 1)}
          x2="1200"
          y2={160 * (i + 1)}
          stroke="#b8860b"
          strokeOpacity={0.14}
          strokeWidth="0.7"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 + i * 0.15, ease: "easeOut" }}
        />
      ))}

      {/* ── Copper accent cross — thicker, more visible ── */}
      <motion.line
        x1="0"
        y1="400"
        x2="1200"
        y2="400"
        stroke="url(#copperH)"
        strokeWidth="1.5"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.line
        x1="600"
        y1="0"
        x2="600"
        y2="800"
        stroke="url(#copperV)"
        strokeWidth="1.5"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Diagonal accents — much more visible ── */}
      <motion.line
        x1="0"
        y1="0"
        x2="400"
        y2="400"
        stroke="url(#copperDiag)"
        strokeWidth="0.8"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 2 }}
      />
      <motion.line
        x1="1200"
        y1="0"
        x2="800"
        y2="400"
        stroke="url(#copperDiag)"
        strokeWidth="0.8"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 2.2 }}
      />
      {/* Additional diagonals — bottom */}
      <motion.line
        x1="0"
        y1="800"
        x2="400"
        y2="400"
        stroke="url(#copperDiag)"
        strokeWidth="0.8"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 2.4 }}
      />
      <motion.line
        x1="1200"
        y1="800"
        x2="800"
        y2="400"
        stroke="url(#copperDiag)"
        strokeWidth="0.8"
        pathLength={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 2.6 }}
      />

      {/* ── Inner diamond — bigger, more visible ── */}
      <motion.path
        d="M600 150 L850 400 L600 650 L350 400 Z"
        stroke="#b8860b"
        strokeOpacity={0.2}
        strokeWidth="1"
        fill="#b8860b"
        fillOpacity={0.03}
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── Second diamond — rotated 45° ── */}
      <motion.rect
        x="450"
        y="250"
        width="300"
        height="300"
        stroke="#b8860b"
        strokeOpacity={0.08}
        strokeWidth="0.6"
        strokeDasharray="8 6"
        fill="none"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, delay: 2.8 }}
      />

      {/* ── Concentric circles at center — bigger, more visible ── */}
      {[60, 120, 180, 250].map((r, i) => (
        <motion.circle
          key={`c-${i}`}
          cx="600"
          cy="400"
          r={r}
          stroke="#b8860b"
          strokeOpacity={0.12 - i * 0.02}
          strokeWidth={i === 0 ? "0.8" : "0.5"}
          strokeDasharray={i % 2 === 1 ? "6 4" : "none"}
          fill="none"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 2.8 + i * 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      {/* ── Center dot ── */}
      <motion.circle
        cx="600"
        cy="400"
        r="4"
        fill="#b8860b"
        fillOpacity={0.2}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
        style={{ transformOrigin: "600px 400px" }}
      />

      {/* ── Corner marks — bigger, bolder ── */}
      {[
        { x: 100, y: 100 },
        { x: 1100, y: 100 },
        { x: 100, y: 700 },
        { x: 1100, y: 700 },
      ].map((pos, i) => (
        <motion.g
          key={`mark-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
        >
          {/* Crosshairs */}
          <line
            x1={pos.x - 20}
            y1={pos.y}
            x2={pos.x + 20}
            y2={pos.y}
            stroke="#b8860b"
            strokeOpacity={0.25}
            strokeWidth="0.7"
          />
          <line
            x1={pos.x}
            y1={pos.y - 20}
            x2={pos.x}
            y2={pos.y + 20}
            stroke="#b8860b"
            strokeOpacity={0.25}
            strokeWidth="0.7"
          />
          {/* Diamond */}
          <rect
            x={pos.x - 6}
            y={pos.y - 6}
            width={12}
            height={12}
            stroke="#b8860b"
            strokeOpacity={0.2}
            strokeWidth="0.6"
            fill="#b8860b"
            fillOpacity={0.03}
            transform={`rotate(45 ${pos.x} ${pos.y})`}
          />
          {/* Circle */}
          <circle
            cx={pos.x}
            cy={pos.y}
            r="10"
            stroke="#b8860b"
            strokeOpacity={0.1}
            strokeWidth="0.4"
            fill="none"
          />
        </motion.g>
      ))}

      {/* ── Corner brackets — architectural ── */}
      {[
        { d: "M60 100 L100 100 L100 60", x: 100, y: 100 },
        { d: "M1140 100 L1100 100 L1100 60", x: 1100, y: 100 },
        { d: "M60 700 L100 700 L100 740", x: 100, y: 700 },
        { d: "M1140 700 L1100 700 L1100 740", x: 1100, y: 700 },
      ].map((bracket, i) => (
        <motion.path
          key={`bracket-${i}`}
          d={bracket.d}
          stroke="#b8860b"
          strokeOpacity={0.2}
          strokeWidth="0.8"
          fill="none"
          pathLength={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.8 + i * 0.12 }}
        />
      ))}

      {/* ── Tick marks along center horizontal — more visible ── */}
      {Array.from({ length: 11 }).map((_, i) => {
        const x = 100 + i * 100
        return (
          <motion.line
            key={`tick-h-${i}`}
            x1={x}
            y1="392"
            x2={x}
            y2="408"
            stroke="#b8860b"
            strokeOpacity={0.18}
            strokeWidth="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 + i * 0.05 }}
          />
        )
      })}

      {/* ── Tick marks along center vertical ── */}
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 100 + i * 100
        return (
          <motion.line
            key={`tick-v-${i}`}
            x1="592"
            y1={y}
            x2="608"
            y2={y}
            stroke="#b8860b"
            strokeOpacity={0.18}
            strokeWidth="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 + i * 0.05 }}
          />
        )
      })}

      {/* ── Dimension annotations — visible ── */}
      {/* Top */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.6 }}
      >
        <line
          x1="100"
          y1="55"
          x2="1100"
          y2="55"
          stroke="#b8860b"
          strokeOpacity={0.12}
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="48"
          x2="100"
          y2="62"
          stroke="#b8860b"
          strokeOpacity={0.15}
          strokeWidth="0.5"
        />
        <line
          x1="1100"
          y1="48"
          x2="1100"
          y2="62"
          stroke="#b8860b"
          strokeOpacity={0.15}
          strokeWidth="0.5"
        />
        <text
          x="600"
          y="50"
          textAnchor="middle"
          fill="#b8860b"
          fillOpacity={0.2}
          fontSize="9"
          fontFamily="monospace"
        >
          120.00
        </text>
      </motion.g>

      {/* Left */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.6 }}
      >
        <line
          x1="55"
          y1="100"
          x2="55"
          y2="700"
          stroke="#b8860b"
          strokeOpacity={0.12}
          strokeWidth="0.5"
        />
        <line
          x1="48"
          y1="100"
          x2="62"
          y2="100"
          stroke="#b8860b"
          strokeOpacity={0.15}
          strokeWidth="0.5"
        />
        <line
          x1="48"
          y1="700"
          x2="62"
          y2="700"
          stroke="#b8860b"
          strokeOpacity={0.15}
          strokeWidth="0.5"
        />
        <text
          x="45"
          y="405"
          textAnchor="middle"
          fill="#b8860b"
          fillOpacity={0.2}
          fontSize="9"
          fontFamily="monospace"
          transform="rotate(-90 45 405)"
        >
          80.00
        </text>
      </motion.g>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════
   FLOATING SHAPES — bigger, more visible
   ═══════════════════════════════════════════════════════ */
function FloatingShapes() {
  const shapes = [
    { x: "12%", y: "18%", size: 90, rotation: 15, delay: 0 },
    { x: "78%", y: "12%", size: 70, rotation: -20, delay: 0.3 },
    { x: "68%", y: "68%", size: 110, rotation: 8, delay: 0.6 },
    { x: "22%", y: "72%", size: 55, rotation: -12, delay: 0.9 },
    { x: "88%", y: "42%", size: 75, rotation: 25, delay: 1.2 },
    { x: "5%", y: "48%", size: 65, rotation: -8, delay: 1.5 },
  ]

  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0, rotate: shape.rotation - 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: shape.rotation,
            y: [0, -15, 8, -8, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 2 + shape.delay },
            scale: {
              duration: 0.8,
              delay: 2 + shape.delay,
              ease: [0.22, 1, 0.36, 1],
            },
            rotate: { duration: 0.8, delay: 2 + shape.delay },
            y: {
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3 + shape.delay,
            },
          }}
        >
          <svg
            width={shape.size}
            height={shape.size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {i % 3 === 0 && (
              /* Diamond with inner detail */
              <>
                <path
                  d="M50 5 L95 50 L50 95 L5 50 Z"
                  stroke="#b8860b"
                  strokeOpacity={0.25}
                  fill="#b8860b"
                  fillOpacity={0.04}
                  strokeWidth="1"
                />
                <path
                  d="M50 20 L80 50 L50 80 L20 50 Z"
                  stroke="#b8860b"
                  strokeOpacity={0.12}
                  fill="none"
                  strokeWidth="0.5"
                  strokeDasharray="4 3"
                />
                <line
                  x1="50"
                  y1="5"
                  x2="50"
                  y2="95"
                  stroke="#b8860b"
                  strokeOpacity={0.08}
                  strokeWidth="0.4"
                />
                <line
                  x1="5"
                  y1="50"
                  x2="95"
                  y2="50"
                  stroke="#b8860b"
                  strokeOpacity={0.08}
                  strokeWidth="0.4"
                />
              </>
            )}
            {i % 3 === 1 && (
              /* Concentric circles with crosshairs */
              <>
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="#b8860b"
                  strokeOpacity={0.2}
                  strokeWidth="0.6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="#b8860b"
                  strokeOpacity={0.12}
                  strokeWidth="0.5"
                  strokeDasharray="5 4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="16"
                  stroke="#b8860b"
                  strokeOpacity={0.08}
                  strokeWidth="0.4"
                />
                <circle cx="50" cy="50" r="3" fill="#b8860b" fillOpacity={0.15} />
                <line
                  x1="50"
                  y1="6"
                  x2="50"
                  y2="94"
                  stroke="#b8860b"
                  strokeOpacity={0.1}
                  strokeWidth="0.4"
                />
                <line
                  x1="6"
                  y1="50"
                  x2="94"
                  y2="50"
                  stroke="#b8860b"
                  strokeOpacity={0.1}
                  strokeWidth="0.4"
                />
                {/* Tick marks */}
                <line
                  x1="50"
                  y1="6"
                  x2="50"
                  y2="12"
                  stroke="#b8860b"
                  strokeOpacity={0.18}
                  strokeWidth="0.5"
                />
                <line
                  x1="50"
                  y1="88"
                  x2="50"
                  y2="94"
                  stroke="#b8860b"
                  strokeOpacity={0.18}
                  strokeWidth="0.5"
                />
                <line
                  x1="6"
                  y1="50"
                  x2="12"
                  y2="50"
                  stroke="#b8860b"
                  strokeOpacity={0.18}
                  strokeWidth="0.5"
                />
                <line
                  x1="88"
                  y1="50"
                  x2="94"
                  y2="50"
                  stroke="#b8860b"
                  strokeOpacity={0.18}
                  strokeWidth="0.5"
                />
              </>
            )}
            {i % 3 === 2 && (
              /* Triangle with internal structure */
              <>
                <path
                  d="M50 8 L94 88 L6 88 Z"
                  stroke="#b8860b"
                  strokeOpacity={0.22}
                  fill="#b8860b"
                  fillOpacity={0.03}
                  strokeWidth="0.8"
                />
                <path
                  d="M50 30 L75 75 L25 75 Z"
                  stroke="#b8860b"
                  strokeOpacity={0.1}
                  fill="none"
                  strokeWidth="0.4"
                  strokeDasharray="4 3"
                />
                <line
                  x1="50"
                  y1="8"
                  x2="50"
                  y2="88"
                  stroke="#b8860b"
                  strokeOpacity={0.08}
                  strokeWidth="0.4"
                />
                <line
                  x1="28"
                  y1="48"
                  x2="72"
                  y2="48"
                  stroke="#b8860b"
                  strokeOpacity={0.06}
                  strokeWidth="0.3"
                />
                {/* Altitude markers */}
                <circle cx="50" cy="55" r="2" fill="#b8860b" fillOpacity={0.12} />
              </>
            )}
          </svg>
        </motion.div>
      ))}
    </>
  )
}

/* ═══════════════════════════════════════════════════════
   DIMENSION LINES — bigger, more visible
   ═══════════════════════════════════════════════════════ */
function DimensionLines() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
      viewBox="0 0 1200 140"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main dimension line */}
      <line
        x1="100"
        y1="55"
        x2="1100"
        y2="55"
        stroke="#b8860b"
        strokeOpacity={0.2}
        strokeWidth="0.7"
      />
      {/* End ticks */}
      <line
        x1="100"
        y1="42"
        x2="100"
        y2="68"
        stroke="#b8860b"
        strokeOpacity={0.2}
        strokeWidth="0.7"
      />
      <line
        x1="1100"
        y1="42"
        x2="1100"
        y2="68"
        stroke="#b8860b"
        strokeOpacity={0.2}
        strokeWidth="0.7"
      />
      {/* Intermediate ticks */}
      {[300, 500, 700, 900].map((x) => (
        <line
          key={x}
          x1={x}
          y1="49"
          x2={x}
          y2="61"
          stroke="#b8860b"
          strokeOpacity={0.12}
          strokeWidth="0.5"
        />
      ))}
      {/* Label */}
      <text
        x="600"
        y="48"
        textAnchor="middle"
        fill="#b8860b"
        fillOpacity={0.3}
        fontSize="10"
        fontFamily="monospace"
      >
        12.00m
      </text>

      {/* Secondary dimension — left */}
      <line
        x1="200"
        y1="85"
        x2="450"
        y2="85"
        stroke="#b8860b"
        strokeOpacity={0.15}
        strokeWidth="0.6"
      />
      <line
        x1="200"
        y1="78"
        x2="200"
        y2="92"
        stroke="#b8860b"
        strokeOpacity={0.15}
        strokeWidth="0.6"
      />
      <line
        x1="450"
        y1="78"
        x2="450"
        y2="92"
        stroke="#b8860b"
        strokeOpacity={0.15}
        strokeWidth="0.6"
      />
      <text
        x="325"
        y="80"
        textAnchor="middle"
        fill="#b8860b"
        fillOpacity={0.25}
        fontSize="8"
        fontFamily="monospace"
      >
        2.40m
      </text>

      {/* Secondary dimension — right */}
      <line
        x1="650"
        y1="85"
        x2="1000"
        y2="85"
        stroke="#b8860b"
        strokeOpacity={0.15}
        strokeWidth="0.6"
      />
      <line
        x1="650"
        y1="78"
        x2="650"
        y2="92"
        stroke="#b8860b"
        strokeOpacity={0.15}
        strokeWidth="0.6"
      />
      <line
        x1="1000"
        y1="78"
        x2="1000"
        y2="92"
        stroke="#b8860b"
        strokeOpacity={0.15}
        strokeWidth="0.6"
      />
      <text
        x="825"
        y="80"
        textAnchor="middle"
        fill="#b8860b"
        fillOpacity={0.25}
        fontSize="8"
        fontFamily="monospace"
      >
        3.60m
      </text>

      {/* Third level — detail dimension */}
      <line
        x1="300"
        y1="110"
        x2="500"
        y2="110"
        stroke="#b8860b"
        strokeOpacity={0.1}
        strokeWidth="0.4"
      />
      <line
        x1="300"
        y1="105"
        x2="300"
        y2="115"
        stroke="#b8860b"
        strokeOpacity={0.1}
        strokeWidth="0.4"
      />
      <line
        x1="500"
        y1="105"
        x2="500"
        y2="115"
        stroke="#b8860b"
        strokeOpacity={0.1}
        strokeWidth="0.4"
      />
      <text
        x="400"
        y="107"
        textAnchor="middle"
        fill="#b8860b"
        fillOpacity={0.18}
        fontSize="7"
        fontFamily="monospace"
      >
        1.80m
      </text>
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

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const patternOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 sm:items-center sm:pb-0 overflow-hidden"
    >
      {/* ─── Layer 1 : base ─── */}
      <div className="absolute inset-0 bg-background" />

      {/* ─── Layer 2 : mesh gradients ─── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute -top-1/4 -left-1/4 w-[140%] h-[140%]"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 25% 35%, rgba(184,134,11,0.09), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[140%] h-[140%]"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 70% 65%, rgba(184,134,11,0.06), transparent 65%)",
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 35% 35% at 50% 45%, rgba(255,255,255,0.04), transparent 60%)",
          }}
        />
      </motion.div>

      {/* ─── Layer 3 : dark mode overlay ─── */}
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
              "radial-gradient(ellipse 50% 50% at 75% 65%, rgba(120,80,20,0.1), transparent 60%)",
          }}
        />
      </div>

      {/* ─── Layer 4 : geometric pattern ─── */}
      <motion.div className="absolute inset-0" style={{ opacity: patternOpacity }}>
        <GeometricPattern />
      </motion.div>

      {/* ─── Layer 5 : floating shapes ─── */}
      <FloatingShapes />

      {/* ─── Layer 6 : noise grain ─── */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── Layer 7 : dimension lines ─── */}
      <DimensionLines />

      {/* ═══ CONTENT ═══ */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1, 0.5)}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <motion.div
                className="h-px bg-primary origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ width: 32 }}
              />
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-muted-foreground">
                JI Construction — BTP &amp; Bungalows
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.92] tracking-tight text-foreground"
            >
              <span className="block">Bâtit pour</span>
              <motion.span
                className="block bg-gradient-to-r text-primary dark:from-amber-400 dark:via-amber-300 dark:to-amber-500 bg-clip-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                durer.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-base sm:text-lg max-w-xl leading-relaxed text-muted-foreground"
            >
              Chantiers d&apos;envergure. Bungalows sur mesure. Un seul partenaire&nbsp;: JI
              Construction, Madagascar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="rounded-full px-7 text-sm font-semibold shadow-lg shadow-primary/25"
                  asChild
                >
                  <Link href="/devis" className="inline-flex items-center gap-2 text-white">
                    Demander une étude de chantier
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-border px-7 text-sm font-semibold shadow-sm backdrop-blur-sm"
                  asChild
                >
                  <Link href="/bungalows" className="inline-flex items-center gap-2">
                    Voir nos bungalows
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex items-center gap-3 pt-4"
            >
              <motion.div
                className="h-px flex-1 origin-left"
                style={{
                  background: "linear-gradient(to right, rgba(184,134,11,0.35), transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              <motion.div
                className="w-1.5 h-1.5 rotate-45 border border-primary/30"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
              <div className="h-px w-12 bg-primary/20" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="flex items-center gap-5 sm:gap-8 pt-4"
            >
              {[
                { value: "15+", label: "ans" },
                { value: "100+", label: "projets" },
                { value: "98%", label: "délais tenus" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 + i * 0.12 }}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                  {i < 2 && <span className="ml-2 sm:ml-4 text-lg text-border">/</span>}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2"
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

      {/* ─── Progress bar ─── */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5"
        style={{
          width: progressWidth,
          background: "linear-gradient(90deg, #b8860b, #8b6914)",
        }}
      />
    </section>
  )
}

export { HeroSection }

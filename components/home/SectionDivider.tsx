"use client"

import { motion } from "framer-motion"

/* ═══════════════════════════════════════════════════════
   ARCHITECTURAL SECTION DIVIDER — stronger / more visible
   ═══════════════════════════════════════════════════════ */

function SectionDivider({ variant = "default" }: { variant?: "default" | "copper" | "dots" }) {
  if (variant === "copper") {
    return (
      <div className="relative overflow-hidden py-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-px flex-1 origin-left"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.14 85 / 0.52), oklch(0.72 0.14 85 / 0.12))",
              }}
            />
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-primary/55" />
              <div className="h-4 w-4 rotate-45 border-[1.5px] border-primary/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/55" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-px flex-1 origin-right"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.14 85 / 0.12), oklch(0.72 0.14 85 / 0.52))",
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className="relative py-6">
        <div className="flex items-center justify-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-full"
              style={{
                width: i === 2 ? 12 : 6,
                height: i === 2 ? 12 : 6,
                background: i === 2 ? "oklch(0.72 0.14 85 / 0.72)" : "oklch(0.55 0.015 50 / 0.36)",
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  /* Default: architectural line with stronger measurement marks */
  return (
    <div className="relative overflow-hidden py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <svg className="h-14 w-full" viewBox="0 0 1200 56" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="dividerGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.55 0.015 50 / 0)" />
              <stop offset="15%" stopColor="oklch(0.55 0.015 50 / 0.34)" />
              <stop offset="85%" stopColor="oklch(0.55 0.015 50 / 0.34)" />
              <stop offset="100%" stopColor="oklch(0.55 0.015 50 / 0)" />
            </linearGradient>
          </defs>

          {/* Main line */}
          <motion.line
            x1="0"
            y1="28"
            x2="1200"
            y2="28"
            stroke="url(#dividerGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Measurement ticks */}
          {[150, 300, 450, 600, 750, 900, 1050].map((x, i) => (
            <motion.g
              key={x}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
            >
              <line
                x1={x}
                y1={x === 600 ? "10" : "18"}
                x2={x}
                y2={x === 600 ? "46" : "38"}
                stroke="oklch(0.55 0.015 50 / 0.32)"
                strokeWidth="1"
              />
            </motion.g>
          ))}

          {/* Center diamond */}
          <motion.path
            d="M600 12 L612 28 L600 44 L588 28 Z"
            stroke="oklch(0.72 0.14 85 / 0.58)"
            strokeWidth="1.1"
            fill="oklch(0.72 0.14 85 / 0.14)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{ transformOrigin: "600px 28px" }}
          />

          {/* Outer diamond ring */}
          <motion.path
            d="M600 4 L618 28 L600 52 L582 28 Z"
            stroke="oklch(0.72 0.14 85 / 0.26)"
            strokeWidth="0.8"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            style={{ transformOrigin: "600px 28px" }}
          />
        </svg>
      </div>
    </div>
  )
}

export { SectionDivider }

"use client"

import { motion } from "framer-motion"

/* ═══════════════════════════════════════════════════════
   ARCHITECTURAL SECTION DIVIDER — scaled up
   ═══════════════════════════════════════════════════════ */

function SectionDivider({ variant = "default" }: { variant?: "default" | "copper" | "dots" }) {
  if (variant === "copper") {
    return (
      <div className="relative py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 h-px origin-left"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.14 85 / 0.4), oklch(0.72 0.14 85 / 0.06))",
              }}
            />
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-3 h-3 rotate-45 border-[1.5px] border-primary/35" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 h-px origin-right"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.14 85 / 0.06), oklch(0.72 0.14 85 / 0.4))",
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className="relative py-12">
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
                width: i === 2 ? 10 : 5,
                height: i === 2 ? 10 : 5,
                background: i === 2 ? "oklch(0.72 0.14 85 / 0.55)" : "oklch(0.55 0.015 50 / 0.25)",
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  /* Default: architectural line with measurement marks */
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <svg className="w-full h-20" viewBox="0 0 1200 60" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="dividerGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.55 0.015 50 / 0)" />
              <stop offset="15%" stopColor="oklch(0.55 0.015 50 / 0.2)" />
              <stop offset="85%" stopColor="oklch(0.55 0.015 50 / 0.2)" />
              <stop offset="100%" stopColor="oklch(0.55 0.015 50 / 0)" />
            </linearGradient>
          </defs>

          {/* Main line */}
          <motion.line
            x1="0"
            y1="30"
            x2="1200"
            y2="30"
            stroke="url(#dividerGrad)"
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Measurement ticks — taller */}
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
                y1={x === 600 ? "16" : "22"}
                x2={x}
                y2={x === 600 ? "44" : "38"}
                stroke="oklch(0.55 0.015 50 / 0.15)"
                strokeWidth="0.7"
              />
            </motion.g>
          ))}

          {/* Center diamond — bigger */}
          <motion.path
            d="M600 18 L610 30 L600 42 L590 30 Z"
            stroke="oklch(0.72 0.14 85 / 0.35)"
            strokeWidth="0.8"
            fill="oklch(0.72 0.14 85 / 0.06)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{ transformOrigin: "600px 30px" }}
          />

          {/* Outer diamond ring — new detail */}
          <motion.path
            d="M600 12 L616 30 L600 48 L584 30 Z"
            stroke="oklch(0.72 0.14 85 / 0.12)"
            strokeWidth="0.5"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            style={{ transformOrigin: "600px 30px" }}
          />
        </svg>
      </div>
    </div>
  )
}

export { SectionDivider }

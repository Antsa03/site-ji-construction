"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  animate?: boolean
}

function Logo({ className, size = "md", animate = false }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: "text-lg" },
    md: { width: 40, height: 40, text: "text-xl" },
    lg: { width: 56, height: 56, text: "text-2xl" },
  }

  const s = sizes[size]

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <motion.svg
        width={s.width}
        height={s.height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        whileHover={animate ? { scale: 1.05 } : undefined}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Building base with JI letters */}
        <rect x="8" y="20" width="48" height="36" rx="3" className="fill-primary" />
        <rect x="12" y="24" width="40" height="28" rx="2" className="fill-background" />

        {/* Roof / top accent */}
        <path d="M4 22L32 4L60 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary" fill="none" />

        {/* Window patterns */}
        <rect x="16" y="28" width="8" height="8" rx="1" className="fill-primary/20" />
        <rect x="28" y="28" width="8" height="8" rx="1" className="fill-primary/20" />
        <rect x="40" y="28" width="8" height="8" rx="1" className="fill-primary/20" />
        <rect x="16" y="40" width="8" height="8" rx="1" className="fill-primary/20" />
        <rect x="40" y="40" width="8" height="8" rx="1" className="fill-primary/20" />

        {/* Door */}
        <rect x="27" y="38" width="10" height="18" rx="2" className="fill-primary/30" />
        <circle cx="35" cy="48" r="1" className="fill-primary" />

        {/* Crane arm accent */}
        <line x1="52" y1="8" x2="52" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/60" />
        <line x1="44" y1="8" x2="56" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/60" />
        <line x1="44" y1="8" x2="44" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary/40" />
      </motion.svg>

      <div className="flex flex-col">
        <span className={cn(
          "font-bold leading-tight tracking-tight font-[family-name:var(--font-heading)]",
          s.text
        )}>
          <span className="text-primary">JI</span>{" "}
          <span className="text-foreground">Construction</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-none">
          BTP & Bungalows
        </span>
      </div>
    </div>
  )
}

export { Logo }

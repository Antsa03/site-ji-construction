"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  animate?: boolean
}

function Logo({ className, size = "md", animate = false }: LogoProps) {
  const sizes = {
    sm: { width: 80, height: 80, text: "text-base", offset: "-ml-1" },
    md: { width: 80, height: 80, text: "text-lg", offset: "-ml-3" },
    lg: { width: 120, height: 120, text: "text-xl", offset: "-ml-5" },
    xl: { width: 200, height: 200, text: "text-2xl", offset: "-ml-7" },
  }
  const s = sizes[size]

  return (
    <div className={cn("flex items-center gap-0", className)}>
      <Image
        src="/ji-logo.png"
        alt="JI Construction Logo"
        width={s.width}
        height={s.height}
        className={cn(
          "shrink-0",
          animate ? "transition-transform duration-300 hover:scale-105" : undefined
        )}
        priority
      />

      {/* L'offset négatif dynamique vient "grignoter" le vide transparent de l'image */}
      <div className={cn("flex flex-col", s.offset)}>
        <span
          className={cn(
            "font-bold leading-tight tracking-tight font-[family-name:var(--font-heading)]",
            s.text
          )}
        >
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

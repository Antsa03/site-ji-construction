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
    sm: {
      width: 78,
      height: 78,
      text: "text-sm",
      label: "text-[9px]",
      offset: "-ml-3",
    },
    md: {
      width: 92,
      height: 92,
      text: "text-base",
      label: "text-[10px]",
      offset: "-ml-4",
    },
    lg: {
      width: 132,
      height: 132,
      text: "text-xl",
      label: "text-[11px]",
      offset: "-ml-6",
    },
    xl: {
      width: 220,
      height: 220,
      text: "text-2xl",
      label: "text-xs",
      offset: "-ml-10",
    },
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
          "shrink-0 object-contain",
          animate && "transition-transform duration-300 hover:scale-105"
        )}
        priority
      />

      <div className={cn("flex flex-col justify-center", s.offset)}>
        <span
          className={cn(
            "font-bold leading-none tracking-tight font-[family-name:var(--font-heading)]",
            s.text
          )}
        >
          <span className="text-foreground">Construction</span>
        </span>

        <span
          className={cn(
            "mt-1 uppercase leading-none tracking-[0.16em] text-muted-foreground",
            s.label
          )}
        >
          BTP & Bungalows
        </span>
      </div>
    </div>
  )
}

export { Logo }

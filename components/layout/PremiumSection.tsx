import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PremiumSectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  withGrid?: boolean
  variant?: "default" | "soft" | "card"
}

function PremiumSection({
  children,
  className,
  containerClassName,
  withGrid = true,
  variant = "default",
}: PremiumSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background py-16 sm:py-24",
        variant === "soft" && "bg-card",
        variant === "card" && "bg-background",
        className
      )}
    >
      {variant === "default" ? (
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,theme(colors.card),theme(colors.background))]" />
      ) : null}

      {withGrid ? (
        <div
          className="absolute inset-0 text-foreground opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      ) : null}

      <div className={cn("relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export { PremiumSection }

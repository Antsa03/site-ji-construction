"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { FormField } from "./FormField"

interface FormPhoneProps extends Omit<React.ComponentProps<"input">, "type"> {
  label: string
  error?: string
  success?: boolean
  hint?: string
}

function FormPhone({
  label,
  error,
  success,
  hint,
  required,
  className,
  id,
  ...props
}: FormPhoneProps) {
  const name = id || "telephone"

  return (
    <FormField
      label={label}
      name={name}
      error={error}
      success={success}
      required={required}
      hint={hint}
    >
      <div className="relative flex items-center">
        <div className="absolute left-4 flex items-center gap-2 text-sm text-muted-foreground/50 select-none pointer-events-none">
          <span className="text-base leading-none">🇲🇬</span>
          <span className="text-xs font-medium">+261</span>
        </div>
        <input
          id={name}
          type="tel"
          inputMode="tel"
          required={required}
          aria-invalid={!!error}
          className={cn(
            "h-14 w-full rounded-lg border border-border bg-white dark:bg-[#1e1e1e] pl-[76px] pr-4 text-sm text-foreground",
            "outline-none transition-all duration-200",
            "placeholder:text-muted-foreground/40",
            "hover:border-foreground/20 focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/15",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[#C2553D] focus:border-[#C2553D] focus:ring-[#C2553D]/10",
            success && "border-[#7A9B7E]/30",
            className
          )}
          placeholder="34 12 345 67"
          {...props}
        />
      </div>
    </FormField>
  )
}

export { FormPhone }

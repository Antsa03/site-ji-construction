"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { FormField } from "./FormField"

interface FormInputProps extends React.ComponentProps<"input"> {
  label: string
  error?: string
  success?: boolean
  hint?: string
}

function FormInput({
  label,
  error,
  success,
  hint,
  required,
  className,
  id,
  ...props
}: FormInputProps) {
  const name = id || props.name || label.toLowerCase().replace(/\s+/g, "-")

  return (
    <FormField
      label={label}
      name={name}
      error={error}
      success={success}
      required={required}
      hint={hint}
    >
      <input
        id={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "h-14 w-full rounded-lg border border-border bg-white dark:bg-[#1e1e1e] px-4 text-sm text-foreground",
          "outline-none transition-all duration-200",
          "placeholder:text-muted-foreground/40",
          "hover:border-foreground/20 focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/15",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-[#C2553D] focus:border-[#C2553D] focus:ring-[#C2553D]/10",
          success && "border-[#7A9B7E]/30",
          className
        )}
        {...props}
      />
    </FormField>
  )
}

export { FormInput }

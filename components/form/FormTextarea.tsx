"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { FormField } from "./FormField"

interface FormTextareaProps extends React.ComponentProps<"textarea"> {
  label: string
  error?: string
  success?: boolean
  hint?: string
  maxLength?: number
}

function FormTextarea({
  label,
  error,
  success,
  hint,
  required,
  maxLength,
  className,
  id,
  ...props
}: FormTextareaProps) {
  const { onChange, value: controlledValue, ...textareaProps } = props
  const name = id || textareaProps.name || label.toLowerCase().replace(/\s+/g, "-")
  const [internalValue, setInternalValue] = React.useState("")
  const value = typeof controlledValue === "string" ? controlledValue : internalValue
  const showCounter = maxLength && value.length > maxLength * 0.8

  return (
    <FormField
      label={label}
      name={name}
      error={error}
      success={success}
      required={required}
      hint={hint}
    >
      <div className="relative">
        <textarea
          id={name}
          required={required}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={[error ? `${name}-error` : undefined, hint ? `${name}-hint` : undefined].filter(Boolean).join(" ") || undefined}
          name={name}
          onChange={(e) => {
            setInternalValue(e.target.value)
            onChange?.(e)
          }}
          className={cn(
            "min-h-[120px] max-h-[300px] w-full rounded-lg border border-border bg-white dark:bg-[#1e1e1e] px-4 py-3.5 text-sm text-foreground",
            "outline-none transition-all duration-200 resize-none",
            "placeholder:text-muted-foreground",
            "hover:border-foreground/20 focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/15",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[#C2553D] focus:border-[#C2553D] focus:ring-[#C2553D]/10",
            success && "border-[#7A9B7E]/30",
            className
          )}
          value={controlledValue}
          {...textareaProps}
        />
        {showCounter && (
          <span className="absolute bottom-3 right-3 text-[10px] text-muted-foreground tabular-nums">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </FormField>
  )
}

export { FormTextarea }

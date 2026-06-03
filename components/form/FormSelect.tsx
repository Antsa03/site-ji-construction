"use client"

import * as React from "react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { FormField } from "./FormField"
import { cn } from "@/lib/utils"

interface FormSelectOption {
  value: string
  label: string
  icon?: React.ReactNode
}

interface FormSelectProps {
  label: string
  name: string
  options: FormSelectOption[]
  placeholder?: string
  error?: string
  success?: boolean
  required?: boolean
  hint?: string
  value?: string
  onValueChange?: (value: string) => void
}

function FormSelect({
  label,
  name,
  options,
  placeholder = "Sélectionnez...",
  error,
  success,
  required,
  hint,
  value,
  onValueChange,
}: FormSelectProps) {
  return (
    <FormField
      label={label}
      name={name}
      error={error}
      success={success}
      required={required}
      hint={hint}
    >
      <Select required={required} value={value} onValueChange={onValueChange} name={name}>
        <SelectTrigger
          id={name}
          aria-invalid={!!error}
          aria-describedby={[error ? `${name}-error` : undefined, hint ? `${name}-hint` : undefined]
            .filter(Boolean)
            .join(" ") || undefined}
          className={cn(
            "min-h-14 rounded-lg border border-border bg-white dark:bg-[#1e1e1e] px-4 text-sm",
            "hover:border-foreground/20 focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/15",
            error && "border-[#A23E2F] focus:border-[#A23E2F] focus:ring-[#A23E2F]/10",
            success && "border-[#4F7A54]/40",
            "dark:bg-input/30 dark:hover:bg-input/50"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className="min-h-11 rounded-md">
              <span className="flex items-center gap-2.5">
                {option.icon && (
                  <span className="text-muted-foreground/70 shrink-0" aria-hidden="true">
                    {option.icon}
                  </span>
                )}
                {option.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  )
}

export { FormSelect }
export type { FormSelectOption }

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  name: string
  error?: string
  success?: boolean
  required?: boolean
  hint?: string
  children: React.ReactNode
  className?: string
}

function FormField({
  label,
  name,
  error,
  success,
  required,
  hint,
  children,
  className,
}: FormFieldProps) {
  const hintId = hint ? `${name}-hint` : undefined
  const errorId = error ? `${name}-error` : undefined

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]"
      >
        {label}
        {required && (
          <span className="text-primary ml-0.5" aria-label="obligatoire">
            *
          </span>
        )}
      </label>

      {children}

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            id={errorId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
            role="alert"
          >
            <AlertCircle className="size-3 text-[#A23E2F] shrink-0" aria-hidden="true" />
            <p className="text-[11px] font-medium text-[#A23E2F]">{error}</p>
          </motion.div>
        )}
        {success && !error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <CheckCircle2 className="size-3 text-[#4F7A54] shrink-0" aria-hidden="true" />
            <p className="text-[11px] font-medium text-[#4F7A54]">Parfait</p>
          </motion.div>
        )}
      </AnimatePresence>

      {hint && !error && !success && (
        <p id={hintId} className="text-[11px] text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  )
}

export { FormField }
export type { FormFieldProps }

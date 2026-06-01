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
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={name}
        className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.15em]"
      >
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>

      {children}

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <AlertCircle className="size-3 text-[#C2553D] shrink-0" />
            <p className="text-[11px] text-[#C2553D]">{error}</p>
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
            <CheckCircle2 className="size-3 text-[#7A9B7E] shrink-0" />
            <p className="text-[11px] text-[#7A9B7E]">Parfait</p>
          </motion.div>
        )}
      </AnimatePresence>

      {hint && !error && !success && (
        <p className="text-[11px] text-muted-foreground/70">{hint}</p>
      )}
    </div>
  )
}

export { FormField }
export type { FormFieldProps }

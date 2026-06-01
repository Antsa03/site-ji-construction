"use client"

interface IconProps {
  className?: string
}

function IconConstruction({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M5 20V8l7-5 7 5v12" />
      <path d="M9 20v-6h6v6" />
      <path d="M10 12h4" />
      <path d="M12 3v2" />
    </svg>
  )
}

function IconRenovation({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 10h1" />
      <path d="M14 10h1" />
      <path d="M9 14h1" />
      <path d="M14 14h1" />
      <path d="M11 7v2" />
      <circle cx="12" cy="5" r="1" />
    </svg>
  )
}

function IconBungalow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M2 12l10-8 10 8" />
      <path d="M5 12v9" />
      <path d="M19 12v9" />
      <path d="M10 21v-5h4v5" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
    </svg>
  )
}

function IconPlans({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18" />
      <path d="M9 3v18" />
      <path d="M13 13h4" />
      <path d="M13 17h4" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" />
    </svg>
  )
}

function IconAutre({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  )
}

function IconMaison({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V9l7-6 7 6v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 13h6" />
      <path d="M12 9v4" />
    </svg>
  )
}

function IconVilla({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M4 20V10l8-7 8 7v10" />
      <path d="M8 20v-5h8v5" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M11 10v3" />
      <path d="M12 3l-1 2h2l-1-2z" />
    </svg>
  )
}

function IconImmeuble({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M6 21V9l6-5 6 5v12" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 14h6" />
      <path d="M12 11v3" />
      <path d="M4 9l8-6 8 6" />
    </svg>
  )
}

function IconGarage({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M7 21V11l5-4 5 4v10" />
      <path d="M10 21v-4h4v4" />
      <path d="M10 15h4" />
      <path d="M12 12v3" />
    </svg>
  )
}

function IconEntrepot({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M5 20V8l7-5 7 5v12" />
      <path d="M9 20v-6h6v6" />
      <path d="M10 12h4" />
      <path d="M12 3v2" />
      <path d="M16 6h2" />
      <path d="M6 6h2" />
    </svg>
  )
}

export {
  IconConstruction,
  IconRenovation,
  IconBungalow,
  IconPlans,
  IconAutre,
  IconMaison,
  IconVilla,
  IconImmeuble,
  IconGarage,
  IconEntrepot,
}

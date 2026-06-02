import type { Variants, Transition } from "framer-motion"

// --- Transition presets ---

export const transitionSmooth: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
}

export const transitionFast: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
}

export const transitionSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
}

// --- Core reusable variants ---

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

// --- Text reveal variants ---

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export const lineReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)" },
}

// --- Container variants ---

export function staggerContainer(
  staggerDelay = 0.15,
  delayChildren = 0.1
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

// --- Section entrance (default pattern for all sections) ---

export const sectionEntrance: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// --- Horizontal reveal for connecting lines ---

export const horizontalReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
}

// --- Scale up for decorative numbers ---

export const numberReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// --- Transition presets ---

export const transitionElastic: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 12,
  mass: 0.8,
}

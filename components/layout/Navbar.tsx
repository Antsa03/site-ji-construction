"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/layout/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/bungalows", label: "Bungalows" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
]

function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const { resolvedTheme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const isHome = pathname === "/"

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60)
  })

  const isTransparent = isHome && !isScrolled

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isTransparent ? "bg-transparent" : "glass shadow-sm"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group" transitionTypes={["nav-back"]}>
          <Logo animate size="lg" className="transition-opacity duration-300" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center md:flex" onMouseLeave={() => setHoveredIndex(null)}>
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                transitionTypes={link.href === "/" ? ["nav-back"] : ["nav-forward"]}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 rounded-md",
                  cn(
                    "hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )
                )}
              >
                {/* Hover pill background */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-md bg-muted"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full",
                      "bg-primary"
                    )}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={cn(
              "flex size-8 items-center justify-center rounded-full transition-colors duration-200"
              // isTransparent
              //   ? "text-white/60 hover:text-white hover:bg-white/10"
              //   : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
            aria-label="Changer le thème"
          >
            {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer"
          >
            <Button
              size="sm"
              className="rounded-full px-5 text-[13px] shadow-sm shadow-primary/10 text-white"
              asChild
            >
              <Link href="/devis">Devis gratuit</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                isTransparent && "text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo size="sm" />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1 px-2">
              {navLinks.map((link, i) => (
                <SheetClose asChild key={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      transitionTypes={link.href === "/" ? ["nav-back"] : ["nav-forward"]}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                        pathname === link.href
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </SheetClose>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="mt-6 px-3"
              >
                <Button asChild className="w-full rounded-full">
                  <Link href="/devis">Devis gratuit</Link>
                </Button>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export { Navbar }

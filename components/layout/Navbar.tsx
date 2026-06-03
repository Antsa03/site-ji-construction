"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Sun, Moon, Phone, MessageCircle } from "lucide-react"
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
  { href: "/devis", label: "Devis gratuit" },
  { href: "/contact", label: "Contact" },
]

function Navbar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-xl transition-all duration-300"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="JI Construction — retour à l’accueil"
          className="group inline-flex rounded-md"
          transitionTypes={["nav-back"]}
        >
          <Logo animate size="md" className="transition-opacity duration-300" />
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
                  "relative min-h-11 rounded-lg px-4 py-3 text-[13px] font-medium transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-lg bg-muted"
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

                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex size-11 items-center justify-center cursor-pointer rounded-full text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
            aria-label={
              resolvedTheme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"
            }
          >
            {resolvedTheme === "dark" ? <Sun className="size-6" /> : <Moon className="size-6" />}
          </button>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button size="sm" className="rounded-full px-5 text-[13px] shadow-sm" asChild>
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
              aria-label="Ouvrir le menu de navigation"
              className="text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
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
                        "block min-h-11 rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-200",
                        pathname === link.href
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
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
                <SheetClose asChild>
                  <Button asChild className="min-h-11 w-full rounded-full">
                    <Link href="/devis">Demander un devis gratuit</Link>
                  </Button>
                </SheetClose>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="mt-6 border-t border-border px-3 pt-5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Contact direct
                </p>

                <div className="mt-3 grid gap-2">
                  <SheetClose asChild>
                    <a
                      href="tel:+261341234567"
                      className="flex min-h-11 items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                    >
                      <Phone className="size-4 text-muted-foreground" aria-hidden="true" />
                      +261 34 12 345 67
                    </a>
                  </SheetClose>

                  <SheetClose asChild>
                    <a
                      href="https://wa.me/261341234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                    >
                      <MessageCircle className="size-4 text-muted-foreground" aria-hidden="true" />
                      WhatsApp
                    </a>
                  </SheetClose>
                </div>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export { Navbar }

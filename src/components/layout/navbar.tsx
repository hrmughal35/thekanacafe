"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "Story" },
  { href: "#branches", label: "Branches" },
  { href: "#business-bay", label: "Flagship" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#reserve", label: "Reserve" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-background/70 py-3 shadow-xl backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#top"
            className="flex items-center gap-3"
            aria-label="The Kana Cafe home"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white/85 shadow-glow ring-1 ring-gold/30">
              <Image
                src="/logo.jpg"
                alt=""
                fill
                className="object-contain"
                sizes="44px"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-sm uppercase tracking-[0.45em] text-gold">
                Kana
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                Cafe · Dubai
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs uppercase tracking-[0.28em] text-muted-foreground transition hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex">
            <Button asChild>
              <Link href="#reserve">Book a table</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-foreground lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-[70] w-[min(100vw,380px)] border-l border-white/10 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
                  Menu
                </p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-2 py-3 text-sm uppercase tracking-[0.25em] text-foreground/90 hover:bg-white/5"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="w-full" asChild>
                  <Link href="#reserve" onClick={() => setOpen(false)}>
                    Reserve table
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

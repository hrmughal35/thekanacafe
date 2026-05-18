"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientParticles } from "@/components/effects/ambient-particles";

const HERO_VIDEO =
  "https://assets.mixkit.co/videos/preview/mixkit-woman-enjoying-coffee-in-a-cafe-4429-large.mp4";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden py-24 sm:py-28"
    >
      <div className="absolute inset-0 z-0 min-h-[100svh]">
        <video
          className="absolute inset-0 h-full min-h-full w-full object-cover object-center opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsla(352,86%,52%,0.2),transparent_48%),radial-gradient(circle_at_80%_0%,hsla(352,62%,24%,0.35),transparent_42%)]" />
        <AmbientParticles />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.h1
          className="max-w-4xl font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_2px_32px_rgba(0,0,0,0.65)]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Experience Dubai&apos;s Most
          <span className="block max-w-4xl bg-gradient-to-r from-white via-gold to-gold-dim bg-clip-text text-transparent [filter:drop-shadow(0_2px_24px_rgba(0,0,0,0.75))]">
            Atmospheric Café
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl font-arabic text-lg text-sand/95 md:text-xl [text-shadow:0_1px_20px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          أجواء دبي على ضفاف القناة — ليالي فاخرة على مدار الساعة
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Luxury dining, premium shisha, fresh juices, and unforgettable
          nights—curated for the city&apos;s after-hours luminaries.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button size="lg" asChild>
            <Link href="#branches">Explore branches</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#reserve">Reserve table</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.6 },
          y: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
        }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown className="h-5 w-5 text-gold" />
      </motion.div>
    </section>
  );
}

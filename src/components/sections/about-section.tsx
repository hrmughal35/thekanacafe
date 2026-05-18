"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/layout/section-heading";

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 80, damping: 22 });
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (!textRef.current) return;
      const rounded = Math.round(v);
      const display =
        rounded >= 1000 ? rounded.toLocaleString("en-US") : `${rounded}`;
      textRef.current.textContent = `${display}${suffix ?? ""}`;
    });
    return () => unsub();
  }, [spring, suffix]);

  return (
    <div
      ref={root}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-inner backdrop-blur-md"
    >
      <p className="font-display text-4xl text-gold">
        <span ref={textRef}>
          0{suffix ?? ""}
        </span>
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh-gold opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80"
                alt="Kana Cafe lounge with warm lighting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 right-4 hidden max-w-xs rounded-2xl border border-white/15 bg-card/90 p-4 text-sm text-muted-foreground shadow-glow backdrop-blur-xl md:block">
              Canal breezes, velvet seating, and the aroma of copper Turkish
              coffee—your invitation to slow down in fast Dubai.
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Where modern Arabic lounge culture meets Dubai nights."
              description="From sunrise breakfasts to sunrise-after parties, Kana is a luminous sanctuary: canal views, couture-level service, curated shisha, karak poured with ceremony, and social energy that lingers."
            />

            <motion.ul
              className="mt-8 space-y-3 text-sm text-muted-foreground"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {[
                "24/7 atmosphere tuned for dreamers and dealmakers",
                "Canal-side terraces and skyline drama at Business Bay",
                "Premium shisha rituals with bespoke blends",
                "Turkish coffee forged in copper with golden crema",
                "Design-forward lounges built for cinematic nights",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex gap-3"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <StatCounter value={3500} suffix="+" label="Guest reviews" />
              <StatCounter value={5} suffix="+" label="Dubai branches" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-inner backdrop-blur-md">
                <p className="font-display text-4xl text-gold">24/7</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Doors never close
                </p>
              </div>
              <StatCounter
                value={12000}
                suffix="+"
                label="Luminaries hosted"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

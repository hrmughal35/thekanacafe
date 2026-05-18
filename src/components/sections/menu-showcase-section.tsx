"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { menuCategories } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MenuShowcaseSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-menu-card]").forEach((card) => {
        const img = card.querySelector("[data-menu-image]");
        gsap.fromTo(
          card,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: false,
              toggleActions: "play none none reverse",
            },
          }
        );
        if (img) {
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={root} className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-80 bg-radial-fade opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu"
          title="A tasting reel of Kana signatures."
          description="Hover to feel textures—each card is a chapter in our nightly ritual, from copper coffee to midnight shisha."
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {menuCategories.map((cat, index) => (
            <article
              key={cat.key}
              data-menu-card
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03] shadow-lift backdrop-blur-xl"
              style={{ minHeight: 320 }}
            >
              <div className="relative h-72 w-full overflow-hidden md:h-80">
                <div className="absolute inset-0 scale-110" data-menu-image>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/3 to-transparent" />
                <motion.div
                  className="absolute inset-0 opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, hsl(352 86% 52% / 0.55), transparent 55%)",
                  }}
                />
              </div>
              <div className="space-y-2 p-7">
                <p className="text-xs uppercase tracking-[0.35em] text-gold">
                  {String(index + 1).padStart(2, "0")} · {cat.key}
                </p>
                <h3 className="font-display text-3xl text-foreground">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cat.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

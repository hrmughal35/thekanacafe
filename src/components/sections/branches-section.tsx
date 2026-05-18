"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { branches } from "@/lib/site";
import { BranchCard } from "@/components/branches/branch-card";
import { SectionHeading } from "@/components/layout/section-heading";

const tabs = [
  { id: "all", label: "All lounges" },
  ...branches.map((b) => ({ id: b.id, label: b.area })),
];

export function BranchesSection() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return branches;
    return branches.filter((b) => b.id === active);
  }, [active]);

  return (
    <section id="branches" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Destinations"
          title="Five Dubai lounges. One luminous mood."
          description="Select a district to reveal contact channels, maps, and WhatsApp—reimagining Taplink with the polish of a five-star concierge desk."
          align="center"
        />

        <LayoutGroup>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {tabs.map((t) => {
              const selected = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className="relative rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                >
                  {selected && (
                    <motion.span
                      layoutId="branchTab"
                      className="absolute inset-0 rounded-full border border-gold/40 bg-white/[0.06] shadow-glow"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((branch, index) => (
                <BranchCard key={branch.id} branch={branch} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}

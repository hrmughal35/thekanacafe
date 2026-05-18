"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <motion.p
        className="text-xs uppercase tracking-[0.45em] text-gold"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

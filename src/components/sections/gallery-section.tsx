"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Dialog,
  DialogContent,
  Title,
  Description,
} from "@/components/ui/dialog";

export function GallerySection() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = galleryImages[activeIndex];

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Masonry of flavor, smoke, and mirrored water."
          align="center"
        />

        <div className="mt-14 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setOpen(true);
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-gold/20 p-0">
          {active && (
            <>
              <Title className="sr-only">{active.alt}</Title>
              <Description className="sr-only">{active.tag} photograph</Description>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-gold">
                    {active.tag}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {active.alt}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

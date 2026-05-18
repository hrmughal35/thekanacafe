"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone, PhoneForwarded } from "lucide-react";
import type { Branch } from "@/lib/site";
import { Button } from "@/components/ui/button";

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function waLink(num: string, label: string) {
  const n = num.replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(`Hello ${label}, I would love to visit THE KANA CAFE.`)}`;
}

export function BranchCard({
  branch,
  index,
}: {
  branch: Branch;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-[1px] shadow-lift"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="gradient-ring h-full w-full rounded-2xl blur-2xl opacity-40" />
      </div>
      <div className="relative overflow-hidden rounded-[15px] bg-card/80 backdrop-blur-xl">
        <div className="relative h-56 w-full overflow-hidden sm:h-64">
          <Image
            src={branch.image}
            alt={branch.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 500px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          {branch.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-gold/50 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold backdrop-blur-md">
              Flagship lounge
            </span>
          )}
        </div>

        <div className="space-y-4 p-6">
          <div>
            <h3 className="font-display text-2xl text-foreground">
              {branch.name}
            </h3>
            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {branch.address}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href={`tel:${branch.restaurantPhone}`}>
                <Phone className="h-4 w-4 text-gold" />
                Restaurant
              </a>
            </Button>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href={`tel:${branch.managerPhone}`}>
                <PhoneForwarded className="h-4 w-4 text-gold" />
                Manager
              </a>
            </Button>
            <Button variant="wine" className="w-full gap-2 sm:col-span-2" asChild>
              <a
                href={waLink(branch.whatsapp, branch.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp concierge
              </a>
            </Button>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a
                href={mapsUrl(branch.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

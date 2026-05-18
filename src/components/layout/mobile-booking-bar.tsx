"use client";

import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export function MobileBookingBar() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-background/85 px-4 py-3 backdrop-blur-xl md:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href="#reserve"
        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-dim px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-glow"
      >
        <CalendarCheck className="h-5 w-5" />
        Reserve a table
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { MouseGlow } from "@/components/effects/mouse-glow";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <LoadingScreen onDone={() => setReady(true)} />}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <MouseGlow className="relative min-h-screen">
          <div className="noise pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-overlay" />
          {children}
        </MouseGlow>
      </motion.div>
    </>
  );
}

"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, hsla(352, 86%, 52%, 0.14), transparent 55%)`;

  return (
    <motion.div
      className={className}
      style={{ background }}
      aria-hidden
    >
      {children}
    </motion.div>
  );
}

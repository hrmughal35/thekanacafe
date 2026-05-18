"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    let completed = false;

    const finish = () => {
      if (completed) return;
      completed = true;
      setVisible(false);
      onDoneRef.current();
    };

    /** Always exit — covers Strict Mode killing tweens, GSAP edge cases, or very slow devices */
    const fallback = window.setTimeout(finish, 4500);

    const ringEl = ring.current;
    const logoEl = logo.current;
    const rootEl = root.current;

    if (!ringEl || !logoEl || !rootEl) {
      window.clearTimeout(fallback);
      finish();
      return () => window.clearTimeout(fallback);
    }

    let tl: gsap.core.Timeline | null = null;

    try {
      tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          window.clearTimeout(fallback);
          finish();
        },
      });

      tl.fromTo(
        ringEl,
        { rotate: -90, scale: 0.85, opacity: 0 },
        { rotate: 0, scale: 1, opacity: 1, duration: 0.85 }
      )
        .fromTo(
          logoEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.45"
        )
        .to(ringEl, {
          scale: 1.05,
          duration: 0.55,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
        })
        .to(rootEl, { opacity: 0, duration: 0.45, ease: "power2.inOut" });
    } catch {
      window.clearTimeout(fallback);
      finish();
    }

    return () => {
      window.clearTimeout(fallback);
      tl?.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-mesh-gold opacity-60" />
      <div className="noise pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
      <div className="relative flex flex-col items-center gap-8">
        <div
          ref={ring}
          className="relative flex h-36 w-36 items-center justify-center rounded-full p-[2px] gradient-ring shadow-glow md:h-44 md:w-44"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-background/90 backdrop-blur-md">
            <div ref={logo} className="relative h-24 w-24 md:h-28 md:w-28">
              <Image
                src="/logo.jpg"
                alt="The Kana Cafe emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <p className="font-display text-xs uppercase tracking-[0.55em] text-muted-foreground">
          Entering the lounge
        </p>
      </div>
    </div>
  );
}

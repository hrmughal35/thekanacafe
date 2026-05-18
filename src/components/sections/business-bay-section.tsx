"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { businessBayMenu, branches, reviews, siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";

const flagship = branches.find((b) => b.featured)!;

const bayTestimonials = reviews.slice(0, 3);

export function BusinessBaySection() {
  return (
    <section
      id="business-bay"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=2000&q=80"
          alt="Business Bay skyline at night"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Flagship"
          title="Business Bay · canal-side skyline theatre."
          description="Our signature lounge overlooks moving water and neon horizons—velvet banquettes, luminous marble, shisha smoke curling into midnight air, and a soundtrack tuned for the city’s inner circle."
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-lift"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gold">
              Guest reflections
            </p>
            <div className="mt-6 min-h-[11rem] overflow-hidden pb-10">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={8}
                speed={600}
                loop
                watchOverflow
                autoplay={{ delay: 5200, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="business-bay-testimonials [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-white/25 [&_.swiper-pagination-bullet-active]:!bg-gold [&_.swiper-pagination-bullet-active]:!opacity-100"
              >
                {bayTestimonials.map((r) => (
                  <SwiperSlide
                    key={r.id}
                    className="!h-auto"
                    style={{ height: "auto" }}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gold/40">
                        <Image
                          src={r.avatar}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
                          <p className="font-medium text-foreground">
                            {r.name}
                          </p>
                          <div
                            className="flex shrink-0 gap-0.5 text-gold"
                            aria-label={`${r.rating} out of 5 stars`}
                          >
                            {Array.from({ length: r.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-gold text-gold"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {r.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {businessBayMenu.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-inner"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="space-y-1 p-4">
                  <p className="font-display text-lg text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/12 bg-gradient-to-r from-wine/25 via-background to-gold/15 p-8 shadow-glow sm:flex-row">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Flagship reservations
            </p>
            <p className="mt-2 font-display text-2xl text-foreground">
              Canal tables disappear fast after dark.
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Tell us your occasion—birthdays, majlis, post-midnight
              debriefs—and we&apos;ll orchestrate the seating.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#reserve">Reserve Business Bay</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href={`https://wa.me/${flagship.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book a canal-side table at Business Bay."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {siteConfig.name}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

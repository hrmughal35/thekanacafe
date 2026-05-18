"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-wine/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Whispers from Google reviews, elevated."
          description="Real nights, real voices—edited lightly for rhythm, faithful to what guests feel when the city goes quiet."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mt-14"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <article className="glass-strong flex h-full flex-col rounded-2xl p-6 shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/40">
                      <Image
                        src={r.avatar}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {r.name}
                      </p>
                      <div className="mt-1 flex text-gold">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ rotate: -12, opacity: 0, y: 6 }}
                            whileInView={{ rotate: 0, opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                          >
                            <Star className="h-4 w-4 fill-gold text-gold" />
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{r.text}”
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-gold/80">
                    Google-inspired testimonial
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

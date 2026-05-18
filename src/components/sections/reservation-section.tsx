"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { branches } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ReservationSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [branch, setBranch] = useState(branches[2]?.id ?? branches[0]?.id);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    window.setTimeout(() => setStatus("idle"), 2800);
  }

  return (
    <section id="reserve" className="relative pb-36 pt-24 sm:pb-44 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-radial-fade opacity-70" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reservations"
          title="Whisper your evening to us."
          description="Our concierge reads every note—canal-side, shisha pairing, celebration setups. This form is front-end only; wire it to your CRM or inbox on deploy."
          align="center"
        />

        <motion.form
          onSubmit={onSubmit}
          className="glass-strong mt-12 space-y-6 overflow-visible rounded-3xl p-8 shadow-lift md:p-10 [color-scheme:dark]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <Input id="name" name="name" required autoComplete="name" />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
              />
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Guests" htmlFor="guests">
              <Input
                id="guests"
                name="guests"
                type="number"
                min={1}
                max={40}
                defaultValue={2}
              />
            </Field>
            <Field label="Branch" htmlFor="branch">
              <input type="hidden" name="branch" value={branch} readOnly />
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger id="branch">
                  <SelectValue placeholder="Select lounge" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((b) => (
                    <SelectItem key={b.id} value={b.id}>
                      {b.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Date" htmlFor="date">
              <Input id="date" name="date" type="date" required />
            </Field>
            <Field label="Time" htmlFor="time">
              <Input id="time" name="time" type="time" required />
            </Field>
          </div>

          <Field label="Occasion notes" htmlFor="message">
            <Textarea id="message" name="message" rows={4} />
          </Field>

          <div className="!mt-10 border-t border-white/10 pt-8">
            <motion.div
              whileTap={{ scale: 0.99 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 360, damping: 22 }}
            >
              <Button
                type="submit"
                size="lg"
                className="relative h-14 w-full overflow-hidden text-sm uppercase tracking-[0.2em] shadow-glow"
              >
                <span className="relative z-10">
                  {status === "sent"
                    ? "Received · we will be in touch"
                    : "Submit request"}
                </span>
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-wine/40 via-transparent to-gold/40"
                  initial={{ x: "-100%" }}
                  animate={{ x: status === "sent" ? "0%" : "-100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[10px] font-medium uppercase tracking-[0.28em] text-sand/90"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

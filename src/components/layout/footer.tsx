import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { branches, siteConfig } from "@/lib/site";

const feedPreview = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80",
  "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80",
];

export function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/10 bg-black/50">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/85 ring-1 ring-gold/25">
                <Image
                  src="/logo.jpg"
                  alt="The Kana Cafe logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-xl tracking-[0.3em] text-gold">
                  THE KANA CAFE
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Canal breezes, velvet nights, and luminous lounges across Dubai.
              Open around the clock for the city that never sleeps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-gold/50 hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4" />
                {siteConfig.instagramHandle}
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-gold/50 hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                Email concierge
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">
                Branches
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {branches.map((b) => (
                  <li key={b.id}>
                    <Link
                      href="#branches"
                      className="transition hover:text-foreground"
                    >
                      {b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">
                Hours &amp; contact
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    Concierge line (sample):{" "}
                    <a
                      href="tel:+971400000000"
                      className="text-foreground hover:text-gold"
                    >
                      +971 4 000 0000
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>Dubai, United Arab Emirates · multiple lounges</span>
                </li>
                <li>Daily · Open 24 hours</li>
              </ul>
            </div>
          </div>
        </div>

            <div className="mt-8 border-y border-white/10 py-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">
                Instagram moodboard
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Preview grid linking to our live feed—swap with the official API
                if you need automated posts.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {feedPreview.map((src) => (
                  <Link
                    key={src}
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                    <span className="absolute inset-0 bg-black/35 opacity-0 transition group-hover:opacity-100" />
                    <InstagramIcon className="absolute bottom-2 right-2 h-4 w-4 text-white opacity-0 transition group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-inner">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            Visit us · THE KANA CAFE Business Bay
          </p>
          <div className="mt-3 aspect-[21/9] w-full overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="THE KANA CAFE Business Bay on Google Maps"
              className="h-full min-h-[220px] w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115519.83534107804!2d55.150774171766024!3d25.203396025770815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6915dd493d49%3A0xada102c63ae9a998!2sTHE%20KANA%20CAFE%20BUSINESS%20BAY!5e0!3m2!1sen!2s!4v1779083939316!5m2!1sen!2s"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Crafted for Dubai
          nights.
        </p>
      </div>
    </footer>
  );
}

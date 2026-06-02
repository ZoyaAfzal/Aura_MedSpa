import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion-primitives";
import { treatments } from "@/lib/treatments";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments — Aura Aesthetics" },
      { name: "description", content: "Explore our full menu of luxury aesthetic treatments — injectables, lasers, facials, body contouring and wellness rituals." },
      { property: "og:title", content: "Treatments — Aura Aesthetics" },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <section className="pt-40 pb-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ The full menu</p></Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-cormorant text-6xl md:text-8xl text-foreground text-balance max-w-4xl leading-[0.95]">
                Every ritual, <em className="text-brand-primary">crafted with intention</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-foreground/70">
                From quiet maintenance to transformative treatments, discover the full Aura menu.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-32 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.05}>
                <Link to="/treatments/$slug" params={{ slug: t.slug }} className="group block">
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="rounded-3xl overflow-hidden bg-card border border-border hover:border-brand-primary/60 transition-colors"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <motion.img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover opacity-80"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7 }}
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase glass text-foreground">
                        {t.category}
                      </span>
                    </div>
                    <div className="p-7">
                      <h2 className="font-cormorant text-3xl text-foreground mb-2">{t.name}</h2>
                      <p className="text-sm text-foreground/60 mb-5 line-clamp-2">{t.short}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm tracking-widest uppercase text-brand-primary">{t.price}</span>
                        <motion.span
                          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors"
                          whileHover={{ rotate: 45 }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion-primitives";
import { getTreatment, treatments } from "@/lib/treatments";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const t = getTreatment(params.slug);
    if (!t) throw notFound();
    return t;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Treatment"} — Aura Aesthetics` },
      { name: "description", content: loaderData?.short ?? "" },
      { property: "og:title", content: `${loaderData?.name} — Aura Aesthetics` },
      { property: "og:description", content: loaderData?.short ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/treatments/${loaderData?.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <p className="font-cormorant text-4xl text-foreground">Treatment not found</p>
      <Link to="/treatments" className="mt-4 text-brand-primary underline">Back to treatments</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <p className="font-cormorant text-3xl text-foreground">Something went wrong</p>
      <button onClick={reset} className="mt-4 text-brand-primary underline">Try again</button>
    </div>
  ),
  component: TreatmentDetail,
});

function TreatmentDetail() {
  const t = Route.useLoaderData() as import("@/lib/treatments").Treatment;
  const related = treatments.filter((x) => x.slug !== t.slug).slice(0, 3);

  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <Link to="/treatments" className="text-xs tracking-[0.25em] uppercase text-foreground/60 hover:text-brand-primary transition">
              ← All treatments
            </Link>
            <div className="grid lg:grid-cols-2 gap-16 mt-8 items-center">
              <div>
                <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ {t.category}</p></Reveal>
                <Reveal delay={0.1}>
                  <h1 className="font-cormorant text-6xl md:text-7xl text-foreground leading-[1] text-balance">{t.name}</h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-lg">{t.description}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="mt-8 flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock className="w-4 h-4 text-brand-primary" /> {t.duration}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Sparkles className="w-4 h-4 text-brand-primary" /> {t.price}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <Link to="/contact" className="inline-block mt-10">
                    <button className="rounded-full bg-brand-primary text-brand-dark px-8 py-4 text-sm tracking-wide hover:bg-white transition">
                      Book this treatment →
                    </button>
                  </Link>
                </Reveal>
              </div>
              <Reveal y={80}>
                <div className="rounded-3xl overflow-hidden h-[560px]">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-80" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-card">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal><h2 className="font-cormorant text-4xl md:text-5xl text-foreground mb-12">Benefits</h2></Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {t.benefits.map((b, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-secondary/40">
                    <span className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-xs">0{i + 1}</span>
                    <p className="text-foreground/80 pt-0.5">{b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-background noise-bg">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal><h2 className="font-cormorant text-4xl md:text-5xl text-foreground mb-16">The Process</h2></Reveal>
            <div className="grid md:grid-cols-4 gap-8">
              {t.process.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div>
                    <span className="font-cormorant text-5xl text-brand-primary">0{i + 1}</span>
                    <h3 className="font-cormorant text-2xl mt-4 mb-2 text-foreground">{p.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing card */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="rounded-3xl bg-card border border-border p-12 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-primary mb-4">{t.name}</p>
                <p className="font-cormorant text-7xl mb-2 text-foreground">{t.price}</p>
                <p className="text-foreground/60 text-sm mb-8">{t.duration} · medical-grade</p>
                <Link to="/contact">
                  <button className="rounded-full bg-brand-primary text-brand-dark px-8 py-4 text-sm tracking-wide hover:bg-white transition">
                    Book now
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal><h2 className="font-cormorant text-4xl md:text-5xl text-foreground mb-12">Related Treatments</h2></Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.1}>
                  <Link to="/treatments/$slug" params={{ slug: r.slug }} className="block group">
                    <motion.div whileHover={{ y: -6 }} className="rounded-3xl overflow-hidden bg-card border border-border">
                      <div className="h-56 overflow-hidden">
                        <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} src={r.image} alt={r.name} className="w-full h-full object-cover opacity-80" />
                      </div>
                      <div className="p-6 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-brand-primary">{r.category}</p>
                          <h3 className="font-cormorant text-2xl text-foreground mt-1">{r.name}</h3>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-brand-primary transition" />
                      </div>
                    </motion.div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary text-center px-6">
          <Reveal>
            <h2 className="font-cormorant text-5xl md:text-6xl text-foreground text-balance max-w-2xl mx-auto">
              Ready to begin your <em className="text-brand-primary">{t.name}</em> journey?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 rounded-full bg-brand-primary text-brand-dark px-8 py-4 text-sm tracking-wide hover:bg-white transition">
              Book a consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

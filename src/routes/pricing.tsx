import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/sections/HomeSections";
import { Reveal } from "@/components/motion-primitives";
import { treatments } from "@/lib/treatments";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Membership — Aura Aesthetics" },
      { name: "description", content: "Transparent pricing for every treatment plus three membership tiers — Starter, Signature and Elite." },
      { property: "og:title", content: "Pricing — Aura Aesthetics" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="bg-background noise-bg min-h-screen">
      <Navbar />
      <main>
        <section className="pt-40 pb-16 px-6 lg:px-10 text-center">
          <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Pricing</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-cormorant text-6xl md:text-8xl text-foreground text-balance max-w-4xl mx-auto leading-[0.95]">
              Transparent. <em className="text-brand-primary">Considered</em>.
            </h1>
          </Reveal>
        </section>

        <PricingSection />

        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <Reveal><h2 className="font-cormorant text-4xl md:text-5xl text-foreground mb-12">Per-treatment pricing</h2></Reveal>
            <div className="divide-y divide-border border-y border-border">
              {treatments.map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.04}>
                  <div className="grid grid-cols-12 gap-4 py-6 items-center">
                    <p className="col-span-7 md:col-span-6 font-cormorant text-2xl text-foreground">{t.name}</p>
                    <p className="hidden md:block col-span-4 text-sm text-foreground/60">{t.duration}</p>
                    <p className="col-span-5 md:col-span-2 text-right font-cormorant text-2xl text-brand-primary">{t.price}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

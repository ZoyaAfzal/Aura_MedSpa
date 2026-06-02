import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion-primitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const all = [
  { cat: "Treatments", items: [
    { q: "How do you choose a treatment for me?", a: "Each consultation begins with a thorough skin analysis, medical history review and conversation about your goals." },
    { q: "Can I combine multiple treatments?", a: "Absolutely. Many of our most-loved results come from layered protocols, designed in sequence." },
    { q: "Will I see immediate results?", a: "Some treatments (HydraFacial, IV) deliver instant glow. Others (laser, microneedling) build over weeks." },
  ]},
  { cat: "Safety", items: [
    { q: "Are your practitioners medically licensed?", a: "Every treatment is overseen by board-certified physicians; all injectors are licensed medical professionals." },
    { q: "What if I have a reaction?", a: "We have full medical protocols on-site and 24/7 follow-up care for the rare event of any adverse response." },
    { q: "Is downtime required?", a: "Most treatments require minimal downtime. We'll clearly outline what to expect before booking." },
  ]},
  { cat: "Pricing & Booking", items: [
    { q: "How do memberships work?", a: "Choose Starter, Signature or Elite - each includes monthly rituals plus exclusive perks and discounts." },
    { q: "Do you offer payment plans?", a: "Yes, we partner with Cherry and Affirm for flexible monthly payment options on treatments over $300." },
    { q: "What is your cancellation policy?", a: "Please give us 24 hours notice; same-day cancellations incur a 50% fee." },
  ]},
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aura Aesthetics" },
      { name: "description", content: "Answers to common questions about treatments, safety, pricing and booking at Aura Aesthetics." },
      { property: "og:title", content: "FAQ — Aura Aesthetics" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="bg-background noise-bg min-h-screen">
      <Navbar />
      <main className="pt-40 pb-32 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ FAQ</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-cormorant text-6xl md:text-8xl text-foreground text-balance leading-[0.95]">
              Curious? <em className="text-brand-primary">We hear you</em>.
            </h1>
          </Reveal>
        </div>
        <div className="max-w-4xl mx-auto mt-20 space-y-16">
          {all.map((g) => (
            <Reveal key={g.cat}>
              <div>
                <h2 className="font-cormorant text-3xl text-brand-primary mb-6">{g.cat}</h2>
                <Accordion type="single" collapsible className="border-y border-border">
                  {g.items.map((item, i) => (
                    <AccordionItem key={i} value={`${g.cat}-${i}`} className="border-b border-border last:border-0">
                      <AccordionTrigger className="font-cormorant text-2xl text-foreground text-left py-6 hover:no-underline hover:text-brand-primary transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-base">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

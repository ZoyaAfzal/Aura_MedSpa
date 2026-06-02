import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion-primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Aura Aesthetics" },
      { name: "description", content: "Book your consultation or get in touch with the Aura Aesthetics team." },
      { property: "og:title", content: "Contact — Aura Aesthetics" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background noise-bg min-h-screen">
      <Navbar />
      <main>
        <section className="pt-40 pb-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
              <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Begin</p></Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-cormorant text-6xl md:text-7xl text-foreground text-balance leading-[1]">
                  Step into <em className="text-brand-primary">Aura</em>.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-lg text-foreground/70 max-w-md">
                  Reach out to book your complimentary consultation. We respond within one business day.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-12 space-y-6">
                  {[
                    { Icon: Mail, label: "Email", value: "hello@auraaesthetics.com" },
                    { Icon: Clock, label: "Hours", value: "Tue-Sat - 10am - 7pm" },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex gap-5 items-start">
                      <div className="w-11 h-11 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-brand-primary mb-1">{label}</p>
                        <p className="text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl glass p-10 shadow-2xl border border-border"
              >
                <h2 className="font-cormorant text-3xl text-foreground mb-8">Book a consultation</h2>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="First name" required className="h-12 rounded-xl bg-white/5 border-border text-foreground placeholder:text-foreground/30 focus-visible:ring-brand-primary/50" />
                    <Input placeholder="Last name" required className="h-12 rounded-xl bg-white/5 border-border text-foreground placeholder:text-foreground/30 focus-visible:ring-brand-primary/50" />
                  </div>
                  <Input type="email" placeholder="Email address" required className="h-12 rounded-xl bg-white/5 border-border text-foreground placeholder:text-foreground/30 focus-visible:ring-brand-primary/50" />
                  <Input type="tel" placeholder="Phone" className="h-12 rounded-xl bg-white/5 border-border text-foreground placeholder:text-foreground/30 focus-visible:ring-brand-primary/50" />
                  <Input placeholder="Treatment of interest" className="h-12 rounded-xl bg-white/5 border-border text-foreground placeholder:text-foreground/30 focus-visible:ring-brand-primary/50" />
                  <Textarea placeholder="Tell us about your goals..." rows={5} className="rounded-xl bg-white/5 border-border text-foreground placeholder:text-foreground/30 focus-visible:ring-brand-primary/50" />
                  <Button type="submit" className="w-full h-12 rounded-full bg-brand-primary text-brand-dark hover:bg-white text-sm tracking-widest uppercase transition-colors">
                    {sent ? "✓ Sent — we'll be in touch" : "Send request"}
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
        <div className="h-24" />
      </main>
      <Footer />
    </div>
  );
}

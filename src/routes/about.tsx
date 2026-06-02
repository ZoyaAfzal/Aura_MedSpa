import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal, Counter } from "@/components/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aura Aesthetics" },
      { name: "description", content: "Founded on the belief that aesthetic medicine should feel as luxurious as it is precise. Meet the team behind Aura." },
      { property: "og:title", content: "About — Aura Aesthetics" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Dr. Elena Marchetti", role: "Medical Director", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop" },
  { name: "Camille Laurent", role: "Lead Aesthetician", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop" },
  { name: "Dr. Aria Patel", role: "Aesthetic Physician", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop" },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <section className="pt-40 pb-20 px-6 lg:px-10 noise-bg">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-6">✦ Our story</p></Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-cormorant text-6xl md:text-8xl text-foreground text-balance leading-[0.95]">
                A new chapter for <em className="text-brand-primary">aesthetic medicine</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Aura was founded by Dr. Elena Marchetti in 2016 with a singular vision: to redefine what medical beauty care could feel like. Today we serve a community of over 5,000 clients who return for the science and stay for the serenity.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 px-6 lg:px-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-7 h-[460px] rounded-3xl overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&auto=format&fit=crop" alt="Spa interior" className="w-full h-full object-cover opacity-80" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="md:col-span-5 h-[460px] rounded-3xl overflow-hidden"
            >
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop" alt="Clinic exterior" className="w-full h-full object-cover opacity-80" />
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-secondary/20 noise-bg border-y border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-12 text-center">
            {[{ v: 10, s: "+", l: "Years" }, { v: 5000, s: "+", l: "Clients" }, { v: 15, s: "+", l: "Treatments" }, { v: 98, s: "%", l: "Return rate" }].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="font-cormorant text-6xl text-foreground"><Counter to={s.v} suffix={s.s} /></p>
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mt-2">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-32 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Our team</p></Reveal>
              <Reveal delay={0.1}><h2 className="font-cormorant text-5xl md:text-6xl text-foreground text-balance">The hands behind <em className="text-brand-primary">your glow</em>.</h2></Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group">
                    <div className="overflow-hidden rounded-3xl h-96">
                      <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} src={m.img} alt={m.name} className="w-full h-full object-cover opacity-80 grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="font-cormorant text-2xl text-foreground mt-6">{m.name}</h3>
                    <p className="text-sm text-brand-primary uppercase tracking-widest mt-1">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-secondary text-foreground text-center px-6 border-t border-border">
          <Reveal>
            <h2 className="font-cormorant text-5xl md:text-7xl text-balance max-w-3xl mx-auto">
              Step into <em className="text-brand-primary">Aura</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact">
              <button className="mt-10 rounded-full bg-brand-primary text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-brand-primary/90 transition">Book a consultation</button>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

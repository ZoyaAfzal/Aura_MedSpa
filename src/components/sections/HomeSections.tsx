import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Star, ChevronDown, Plus, Minus, ShieldCheck, Award, HeartHandshake, Microscope } from "lucide-react";
import { Reveal, MagneticButton, Parallax, CharReveal, Counter } from "@/components/motion-primitives";
import { treatments } from "@/lib/treatments";
import { posts } from "@/lib/blog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ============ HERO ============ */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2000&auto=format&fit=crop"
        alt="Med Spa Treatment Room"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-brand-dark/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-transparent to-brand-dark/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 backdrop-blur-md border border-brand-primary/30 text-[10px] tracking-[0.2em] uppercase text-brand-primary mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          The Gold Standard of Aesthetic Medicine
        </motion.div>

        <h1 className="font-cormorant text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.95] text-foreground max-w-5xl text-balance">
          <CharReveal text="Rediscover Your" />
          <br />
          <span className="italic text-brand-primary">
            <CharReveal text="Most Radiant Self." />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 max-w-xl text-lg text-foreground/70 leading-relaxed"
        >
          A sanctuary where medical precision meets refined hospitality. Tailored aesthetic medicine for the woman who wants to feel - not just look - extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/contact">
            <MagneticButton className="group rounded-full bg-brand-primary text-foreground px-8 py-4 text-sm tracking-wide font-medium flex items-center gap-2 hover:bg-white transition-colors">
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </MagneticButton>
          </Link>
          <Link to="/treatments">
            <button className="rounded-full border border-foreground/30 text-foreground px-8 py-4 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors">
              Explore Treatments
            </button>
          </Link>
        </motion.div>

        {/* Floating glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden lg:block absolute right-10 bottom-32 w-80 glass rounded-3xl p-5 shadow-2xl"
        >
          <div className="flex gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&auto=format&fit=crop"
              alt="Signature HydraFacial"
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-primary mb-1">Featured</p>
              <p className="font-cormorant text-2xl text-foreground leading-tight">Signature HydraFacial</p>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
                ))}
              </div>
            </div>
          </div>
          <Link
            to="/treatments/$slug"
            params={{ slug: "hydrafacial" }}
            className="mt-4 flex items-center justify-between text-xs uppercase tracking-widest text-foreground/70 hover:text-brand-primary transition"
          >
            Discover ritual
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown className="w-4 h-4 text-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ MARQUEE ============ */
export function MarqueeSection() {
  const items = ["Botox", "Fillers", "HydraFacial", "Laser Resurfacing", "IV Therapy", "Microneedling", "PRP Therapy", "Chemical Peels"];
  const row = [...items, ...items, ...items];
  return (
    <section className="bg-secondary py-12 overflow-hidden border-y border-brand-primary/10">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-cormorant italic text-5xl md:text-6xl text-foreground tracking-wide">
              {t}
            </span>
            <span className="text-brand-primary text-3xl">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ============ ABOUT SNIPPET ============ */
export function AboutSnippetSection() {
  return (
    <section className="py-32 bg-background noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative h-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-3/4 h-[480px] overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&auto=format&fit=crop"
              alt="Aura spa interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 right-0 w-2/3 h-[360px] overflow-hidden rounded-2xl border-8 border-background"
          >
            <img
              src="https://images.unsplash.com/photo-1598440442996-ef491e3f1c41?w=700&auto=format&fit=crop"
              alt="Aura team"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <Reveal delay={0.6}>
            <div className="absolute top-8 right-4 glass rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-cormorant text-3xl text-foreground">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-foreground/60">Years of excellence</p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-6">✦ About us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-cormorant text-5xl md:text-6xl text-foreground leading-tight mb-8 text-balance">
              A sanctuary for <em className="text-brand-primary">science-backed</em> beauty.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-foreground/70 leading-relaxed mb-5">
              Aura was founded on a simple belief: aesthetic medicine should feel as luxurious as it is precise. Our board-certified practitioners pair the latest in clinical innovation with the warmth of true hospitality.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-foreground/70 leading-relaxed mb-10">
              From your first consultation to your final reveal, every detail is considered — because you deserve to feel held, heard, and quietly transformed.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground border-b border-border pb-1 hover:text-brand-primary hover:border-brand-primary transition"
            >
              About us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ STATS ============ */
export function StatsSection() {
  const stats = [
    { value: 5000, suffix: "+", label: "Happy clients" },
    { value: 98, suffix: "%", label: "Satisfaction" },
    { value: 15, suffix: "+", label: "Treatments" },
    { value: 10, suffix: " yr", label: "Experience" },
  ];
  return (
    <section className="py-24 bg-secondary/30 noise-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center relative">
              <p className="font-cormorant text-6xl md:text-7xl text-foreground">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs tracking-[0.25em] uppercase text-foreground/60">{s.label}</p>
              {i < stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-brand-primary/20" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TREATMENTS ============ */
export function TreatmentsSection() {
  return (
    <section className="bg-background py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 top-10 text-center pointer-events-none">
        <p className="font-cormorant italic text-[18rem] leading-none text-foreground/[0.03] tracking-tighter select-none">
          treatments
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Our rituals</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-cormorant text-5xl md:text-7xl text-foreground max-w-2xl leading-tight text-balance">
                Treatments crafted to <em className="text-brand-primary">reveal you</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/treatments" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/80 hover:text-brand-primary transition group">
              All treatments
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.slice(0, 6).map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <Link to="/treatments/$slug" params={{ slug: t.slug }} className="group block">
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-3xl overflow-hidden border border-border hover:border-brand-primary/60 transition-colors ${
                    i === 1 ? "lg:mt-12" : i === 4 ? "lg:mt-12" : ""
                  }`}
                >
                  <div className="relative h-[440px] overflow-hidden">
                    <motion.img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase glass text-foreground">
                      {t.category}
                    </span>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-cormorant text-3xl text-white mb-2">{t.name}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">{t.short}</p>
                    </div>
                    <motion.span
                      className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white group-hover:bg-brand-primary group-hover:text-white transition-colors"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.span>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY US ============ */
export function WhyUsSection() {
  const benefits = [
    { icon: Microscope, title: "Expert Practitioners", text: "Board-certified physicians with decades of combined experience in aesthetic medicine." },
    { icon: Award, title: "Advanced Technology", text: "FDA-approved devices and the latest medical innovations — never compromised." },
    { icon: HeartHandshake, title: "Personalized Care", text: "Every plan is bespoke. We listen first, then prescribe — never the other way around." },
    { icon: ShieldCheck, title: "Safe & Certified", text: "Rigorous clinical protocols, sterile environments, and full medical oversight." },
  ];
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Why Aura</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-cormorant text-5xl md:text-6xl text-foreground leading-tight mb-12 text-balance">
              The difference is in the <em className="text-brand-primary">details</em>.
            </h2>
          </Reveal>
          <div className="space-y-8">
            {benefits.map((b, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <div className="flex gap-6 pb-8 border-b border-border last:border-0">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl text-foreground mb-2">{b.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative h-[700px]">
          <Reveal y={80}>
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1000&auto=format&fit=crop"
                alt="Aura treatment room"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="absolute -bottom-6 -left-6 max-w-xs glass rounded-2xl p-6 shadow-2xl">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
                ))}
              </div>
              <p className="font-cormorant italic text-lg text-foreground leading-snug">
                "The most luxurious medical experience I've ever had. I left feeling brand new."
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-foreground/60">— Sophia R.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS ============ */
export function ProcessSection() {
  const steps = [
    { n: "01", title: "Consultation", text: "We listen, assess, and understand your goals." },
    { n: "02", title: "Personalized Plan", text: "A bespoke protocol mapped to your skin and lifestyle." },
    { n: "03", title: "Your Treatment", text: "Performed in our serene, medical-grade suites." },
    { n: "04", title: "Lasting Results", text: "Ongoing care and refinements as you evolve." },
  ];
  return (
    <section className="py-32 bg-background noise-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ How it works</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-cormorant text-5xl md:text-7xl text-foreground text-balance">
              Your <em className="text-brand-primary">journey</em>, four steps.
            </h2>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <svg className="hidden md:block absolute top-12 left-[12%] right-[12%] h-2 pointer-events-none" viewBox="0 0 1000 4" preserveAspectRatio="none">
            <motion.path
              d="M0 2 L1000 2"
              stroke="#94A390"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.15}>
              <div className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-secondary border border-brand-primary/30 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm">
                  <span className="font-cormorant text-3xl text-brand-primary">{s.n}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed max-w-[200px] mx-auto">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PRICING ============ */
export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "89",
      desc: "Discover the Aura experience.",
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=600&auto=format&fit=crop",
      features: ["Skin consultation", "Express facial", "Take-home regimen", "Loyalty access"],
      featured: false,
    },
    {
      name: "Signature",
      price: "179",
      desc: "Our most-loved monthly ritual.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
      features: ["Everything in Starter", "Signature HydraFacial", "LED therapy", "Priority booking", "10% off injectables"],
      featured: true,
    },
    {
      name: "Elite",
      price: "299",
      desc: "Concierge-level transformation.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop",
      features: ["Everything in Signature", "Quarterly injectables credit", "Annual laser session", "Dedicated concierge", "VIP events"],
      featured: false,
    },
  ];
  return (
    <section className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Membership</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-cormorant text-5xl md:text-7xl text-foreground text-balance">
              Bespoke care, <em className="text-brand-primary">your way</em>.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className={`rounded-3xl overflow-hidden group border border-border ${
                  p.featured
                    ? "bg-secondary text-foreground md:-mt-6 md:mb-6 shadow-2xl shadow-brand-primary/10"
                    : "bg-secondary/50 text-foreground"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />
                  {p.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase bg-brand-primary text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-cormorant text-3xl mb-2">{p.name}</h3>
                  <p className={`text-sm mb-6 ${p.featured ? "text-foreground/60" : "text-foreground/60"}`}>{p.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8 overflow-hidden">
                    <span className={`text-sm ${p.featured ? "text-foreground/60" : "text-foreground/60"}`}>$</span>
                    <motion.span
                      className="font-cormorant text-6xl"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {p.price}
                    </motion.span>
                    <span className={`text-sm ${p.featured ? "text-foreground/60" : "text-foreground/60"}`}>/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className={`w-1 h-1 rounded-full ${p.featured ? "bg-brand-primary" : "bg-brand-primary/60"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block">
                    <button
                      className={`w-full rounded-full py-3 text-sm tracking-wide transition ${
                        p.featured
                          ? "bg-brand-primary text-white hover:bg-foreground hover:text-background"
                          : "bg-foreground text-background hover:bg-brand-primary hover:text-white"
                      }`}
                    >
                      Get Started →
                    </button>
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
export function TestimonialsSection() {
  const cards = [
    { name: "Isabella M.", role: "Signature Member", quote: "Aura redefined what beauty care should feel like. The space, the people, the results — all impeccable.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
    { name: "Olivia R.", role: "PRP Client", quote: "I'd been to a dozen clinics. None felt this human. None gave me skin like this.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
    { name: "Sophia K.", role: "Elite Member", quote: "Calm, considered, completely transformative. I never want to go anywhere else.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" },
    { name: "Amelia W.", role: "Laser Client", quote: "The clinical precision paired with genuine warmth — rare and wonderful.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400" },
    { name: "Charlotte D.", role: "HydraFacial Regular", quote: "My skin has never looked better. Truly the gold standard.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { name: "Ava L.", role: "Signature Member", quote: "Every visit feels like a retreat. I leave glowing, inside and out.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" },
  ];
  return (
    <section className="bg-background py-32 overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Reflections</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-cormorant text-5xl md:text-7xl text-foreground max-w-3xl text-balance">
            Voices from <em className="text-brand-primary">the lounge</em>.
          </h2>
        </Reveal>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -1800, right: 0 }}
        className="flex gap-6 cursor-grab active:cursor-grabbing pl-6 lg:pl-10"
      >
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="min-w-[340px] md:min-w-[420px] glass rounded-3xl p-8 relative shadow-lg"
          >
            <span className="absolute top-4 right-6 font-cormorant text-7xl text-brand-primary/30 leading-none">"</span>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3 h-3 fill-brand-primary text-brand-primary" />
              ))}
            </div>
            <p className="font-cormorant italic text-2xl text-foreground leading-snug mb-8">"{c.quote}"</p>
            <div className="flex items-center gap-4">
              <img src={c.image} alt={c.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-70" />
              <div>
                <p className="text-foreground text-sm">{c.name}</p>
                <p className="text-foreground/50 text-xs">{c.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ============ BLOG PREVIEW ============ */
export function BlogPreviewSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Journal</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-cormorant text-5xl md:text-7xl text-foreground max-w-2xl text-balance">
                Wisdom from <em className="text-brand-primary">our experts</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-brand-primary transition group">
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-72 object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-brand-primary">{p.category}</span>
                <h3 className="font-cormorant text-2xl text-foreground mt-3 mb-3 group-hover:text-brand-primary transition">{p.title}</h3>
                <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 group-hover:text-brand-primary transition">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
const faqs = [
  { q: "Are your treatments medically supervised?", a: "Every treatment at Aura is overseen by a board-certified physician and performed by licensed medical professionals." },
  { q: "How do I know which treatment is right for me?", a: "We begin every relationship with a complimentary consultation to map a plan tailored to your goals, skin and lifestyle." },
  { q: "Is there downtime?", a: "Most of our treatments require minimal to no downtime. We'll clearly outline expectations before any procedure." },
  { q: "What does pricing look like?", a: "We offer transparent per-treatment pricing as well as membership tiers that include curated monthly rituals." },
  { q: "Are results permanent?", a: "Results vary by treatment. We'll always discuss longevity and maintenance during your consultation." },
  { q: "Can I combine multiple treatments?", a: "Absolutely — and often we recommend it. Combination protocols deliver layered, longer-lasting results." },
];
export function FAQSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Questions</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-cormorant text-5xl md:text-6xl text-foreground text-balance mb-8">
                Curious? <em className="text-brand-primary">We hear you</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/faq" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground border-b border-border pb-1 hover:text-brand-primary hover:border-brand-primary transition">
                See all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-2">
            <Reveal>
              <Accordion type="single" collapsible className="divide-y divide-border border-y border-border">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
                    <AccordionTrigger className="font-cormorant text-2xl text-foreground text-left py-6 hover:no-underline hover:text-brand-primary [&[data-state=open]>svg]:rotate-45">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed pb-6 text-base">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
export function CTASection() {
  const images = [
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop",
  ];
  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-gradient-to-br from-secondary via-background to-brand-primary/10">
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative">
        <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-6">✦ Begin</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-cormorant text-6xl md:text-8xl text-foreground text-balance leading-[1]">
            Ready to elevate <em className="text-brand-primary">your skin</em>?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-foreground/70 max-w-xl mx-auto">
            Step into Aura. Your most radiant chapter starts with a single consultation.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link to="/contact" className="inline-block mt-10">
            <MagneticButton className="rounded-full bg-brand-primary text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-brand-primary/90 transition">
              Book a Consultation
            </MagneticButton>
          </Link>
        </Reveal>

        <div className="mt-24 flex gap-4 justify-center pb-0">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`w-40 h-56 md:w-48 md:h-64 object-cover rounded-t-2xl shadow-xl opacity-90 ${
                i % 2 === 0 ? "translate-y-6" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

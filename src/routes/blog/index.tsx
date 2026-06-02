import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion-primitives";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Aura Aesthetics" },
      { name: "description", content: "Expert insights on skincare, aesthetic medicine and the science of glowing." },
      { property: "og:title", content: "Journal — Aura Aesthetics" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="bg-background noise-bg min-h-screen">
      <Navbar />
      <main>
        <section className="pt-40 pb-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <Reveal><p className="text-xs tracking-[0.3em] uppercase text-brand-primary mb-5">✦ Journal</p></Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-cormorant text-6xl md:text-8xl text-foreground text-balance max-w-3xl leading-[0.95]">
                Wisdom from <em className="text-brand-primary">our experts</em>.
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="pb-32 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <div className={`overflow-hidden rounded-2xl mb-5 ${i % 3 === 1 ? "h-96" : "h-72"}`}>
                    <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-primary">{p.category} · {p.readTime}</span>
                  <h2 className="font-cormorant text-3xl text-foreground mt-3 mb-3 group-hover:text-brand-primary transition">{p.title}</h2>
                  <p className="text-sm text-foreground/60 mb-4">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60 group-hover:text-brand-primary transition-colors">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
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

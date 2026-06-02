import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion-primitives";
import { getPost, posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = getPost(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Article"} — Aura Journal` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/blog/${loaderData?.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream">
      <p className="font-cormorant text-4xl">Article not found</p>
      <Link to="/blog" className="mt-4 text-brand-primary underline">Back to journal</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={reset} className="text-brand-primary underline">Try again</button>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const p = Route.useLoaderData() as import("@/lib/blog").Post;
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-xs uppercase tracking-widest text-foreground/60 hover:text-brand-primary">← All articles</Link>
            <Reveal>
              <span className="block mt-8 text-[10px] uppercase tracking-widest text-brand-primary">{p.category} · {p.readTime} · {p.date}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-cormorant text-5xl md:text-7xl text-foreground mt-5 leading-[1] text-balance">{p.title}</h1>
            </Reveal>
          </div>
        </section>

        <Reveal y={80}>
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <img src={p.image} alt={p.title} className="w-full h-[520px] object-cover rounded-3xl" />
          </div>
        </Reveal>

        <article className="py-20 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto space-y-8">
            {p.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg text-foreground/80 leading-[1.8] font-jost">{para}</p>
              </Reveal>
            ))}
          </div>
        </article>

        <section className="py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <Reveal><h2 className="font-cormorant text-4xl text-foreground mb-10">Continue reading</h2></Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.1}>
                  <Link to="/blog/$slug" params={{ slug: r.slug }} className="group block">
                    <div className="h-64 overflow-hidden rounded-2xl mb-4">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-primary">{r.category}</p>
                    <h3 className="font-cormorant text-2xl text-foreground mt-2 group-hover:text-brand-primary transition">{r.title}</h3>
                  </Link>
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

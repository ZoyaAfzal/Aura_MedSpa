import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSection,
  MarqueeSection,
  AboutSnippetSection,
  StatsSection,
  TreatmentsSection,
  WhyUsSection,
  ProcessSection,
  PricingSection,
  TestimonialsSection,
  BlogPreviewSection,
  FAQSection,
  CTASection,
} from "@/components/sections/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Aesthetics — Luxury Med Spa" },
      { name: "description", content: "A sanctuary where medical precision meets refined hospitality. Botox, fillers, HydraFacial, laser, IV therapy and more." },
      { property: "og:title", content: "Aura Aesthetics — Where Science Meets Serenity" },
      { property: "og:description", content: "Luxury aesthetic medicine for your most radiant self." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSnippetSection />
        <StatsSection />
        <TreatmentsSection />
        <WhyUsSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

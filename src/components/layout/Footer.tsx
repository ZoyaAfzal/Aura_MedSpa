import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-1">
            <span className="font-cormorant text-4xl">Aura</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-4" />
          </div>
          <p className="mt-4 text-sm text-foreground/60 leading-relaxed max-w-xs">
            Where science meets serenity. A sanctuary devoted to your most radiant self.
          </p>
        </div>

        <div>
          <h4 className="font-jost text-xs uppercase tracking-[0.2em] text-brand-primary mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/treatments" className="hover:text-brand-primary transition">Treatments</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition">About</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-primary transition">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-brand-primary transition">Journal</Link></li>
            <li><Link to="/faq" className="hover:text-brand-primary transition">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-jost text-xs uppercase tracking-[0.2em] text-brand-primary mb-5">Treatments</h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/treatments/$slug" params={{ slug: "botox-fillers" }} className="hover:text-brand-primary transition">Botox & Fillers</Link></li>
            <li><Link to="/treatments/$slug" params={{ slug: "hydrafacial" }} className="hover:text-brand-primary transition">HydraFacial</Link></li>
            <li><Link to="/treatments/$slug" params={{ slug: "laser-skin-resurfacing" }} className="hover:text-brand-primary transition">Laser Resurfacing</Link></li>
            <li><Link to="/treatments/$slug" params={{ slug: "iv-therapy" }} className="hover:text-brand-primary transition">IV Therapy</Link></li>
            <li><Link to="/treatments/$slug" params={{ slug: "microneedling" }} className="hover:text-brand-primary transition">Microneedling</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-jost text-xs uppercase tracking-[0.2em] text-brand-primary mb-5">Stay in touch</h4>
          <p className="text-sm text-foreground/60 mb-4">Skincare wisdom & exclusive offers, monthly.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="you@email.com"
              className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/40 rounded-full px-4"
            />
            <Button type="submit" className="rounded-full bg-brand-primary text-white hover:bg-brand-primary/90 px-5">
              <Mail className="w-4 h-4" />
            </Button>
          </form>
          <div className="flex gap-4 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="text-foreground/60 hover:text-brand-primary transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex justify-end text-xs text-foreground/40">
          <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition">
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}

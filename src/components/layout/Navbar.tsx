import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 group">
          <span className={`font-cormorant text-3xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}>
            Aura
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-3 group-hover:scale-150 transition-transform" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm tracking-wide transition-colors group ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-foreground/80 hover:text-foreground"}`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="rounded-full bg-brand-primary text-white hover:bg-brand-primary/90 px-6 h-11 font-jost tracking-wide transition-colors">
              Book Now
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-6 h-20">
              <span className="font-cormorant text-3xl text-foreground">Aura<span className="text-brand-primary">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 pt-16">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-cormorant text-4xl text-foreground"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button className="rounded-full bg-brand-primary text-white px-8 h-12 mt-4">
                    Book a Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export interface Treatment {
  slug: string;
  name: string;
  category: string;
  short: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  benefits: string[];
  process: { title: string; text: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "botox-fillers",
    name: "Botox & Fillers",
    category: "Injectables",
    short: "Smooth lines and restore volume with FDA-approved neuromodulators.",
    description: "Precision-placed neuromodulators and dermal fillers soften expression lines, restore lost volume, and sculpt facial contours with subtle, natural-looking results.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&auto=format&fit=crop",
    price: "From $299",
    duration: "30-45 min",
    benefits: ["Softens fine lines & wrinkles", "Restores facial volume", "Subtle, natural results", "Minimal downtime"],
    process: [
      { title: "Consultation", text: "We assess your facial anatomy and listen to your goals." },
      { title: "Mapping", text: "Precise injection sites are mapped for symmetry and balance." },
      { title: "Treatment", text: "Comfortable injections using ultra-fine needles." },
      { title: "Aftercare", text: "Personalized recovery and follow-up scheduling." },
    ],
  },
  {
    slug: "laser-skin-resurfacing",
    name: "Laser Skin Resurfacing",
    category: "Laser",
    short: "Reveal smoother, brighter skin with medical-grade laser technology.",
    description: "Advanced fractional laser stimulates collagen, refines texture, and dissolves pigmentation for a luminous, even complexion.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&auto=format&fit=crop",
    price: "From $450",
    duration: "60 min",
    benefits: ["Reduces scarring & pigmentation", "Boosts collagen production", "Refines texture & tone", "Long-lasting radiance"],
    process: [
      { title: "Skin Analysis", text: "Deep imaging to identify pigment and texture issues." },
      { title: "Prep", text: "Numbing and a cooling barrier for comfort." },
      { title: "Laser", text: "Precision fractional delivery across treatment zones." },
      { title: "Glow", text: "5-7 day renewal with visible results." },
    ],
  },
  {
    slug: "hydrafacial",
    name: "Signature HydraFacial",
    category: "Facials",
    short: "Cleanse, exfoliate, extract and hydrate in one luminous treatment.",
    description: "Our signature multi-step facial deeply cleanses, exfoliates, extracts impurities and infuses skin with antioxidant-rich serums.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop",
    price: "From $189",
    duration: "50 min",
    benefits: ["Instant glow, zero downtime", "Deep pore cleansing", "Hydration boost", "Antioxidant infusion"],
    process: [
      { title: "Cleanse", text: "Gentle exfoliation removes dead skin." },
      { title: "Extract", text: "Painless vacuum extraction of impurities." },
      { title: "Infuse", text: "Custom serums delivered into the dermis." },
      { title: "Protect", text: "LED therapy and SPF finish." },
    ],
  },
  {
    slug: "body-contouring",
    name: "Body Contouring",
    category: "Body",
    short: "Non-invasive sculpting to redefine your silhouette.",
    description: "Cutting-edge radiofrequency and cryolipolysis reduce stubborn fat and tighten skin - no surgery, no downtime.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&auto=format&fit=crop",
    price: "From $599",
    duration: "75 min",
    benefits: ["Targets stubborn fat", "Tightens skin", "No surgery", "Visible in 4-6 weeks"],
    process: [
      { title: "Body Mapping", text: "We chart your contouring goals." },
      { title: "Cooling", text: "Targeted cryolipolysis applicators." },
      { title: "RF Tightening", text: "Radiofrequency stimulates collagen." },
      { title: "Reveal", text: "Gradual sculpting over 6 weeks." },
    ],
  },
  {
    slug: "iv-therapy",
    name: "IV Vitamin Therapy",
    category: "Wellness",
    short: "Replenish, restore and rejuvenate from the inside out.",
    description: "Physician-curated IV cocktails deliver vitamins, minerals and antioxidants directly to your bloodstream for instant vitality.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&auto=format&fit=crop",
    price: "From $199",
    duration: "45 min",
    benefits: ["Boosts energy & immunity", "Hydration restoration", "Glow from within", "Recovery support"],
    process: [
      { title: "Wellness Intake", text: "Bloodwork-informed formulation." },
      { title: "Custom Drip", text: "Your blend prepared on-site." },
      { title: "Infusion", text: "Relax in our private lounge." },
      { title: "Renewal", text: "Feel results within hours." },
    ],
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    category: "Resurfacing",
    short: "Reveal a fresh layer of luminous, even-toned skin.",
    description: "Medical-grade peels - from gentle lactic to deep TCA - exfoliate damaged surface cells to unveil radiant new skin.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop",
    price: "From $169",
    duration: "40 min",
    benefits: ["Brightens dull skin", "Fades pigmentation", "Smooths texture", "Customizable depth"],
    process: [
      { title: "Skin Prep", text: "Pre-peel protocol over 1–2 weeks." },
      { title: "Application", text: "Layered, precision-applied acids." },
      { title: "Neutralize", text: "Calming barrier replenishment." },
      { title: "Reveal", text: "Peel & glow over 5–10 days." },
    ],
  },
  {
    slug: "microneedling",
    name: "Microneedling RF",
    category: "Skin",
    short: "Stimulate collagen for firmer, smoother, more radiant skin.",
    description: "Radiofrequency microneedling triggers deep collagen remodeling - ideal for scars, pores and skin laxity.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop",
    price: "From $349",
    duration: "60 min",
    benefits: ["Tightens & firms", "Minimizes pores", "Reduces acne scars", "Boosts elasticity"],
    process: [
      { title: "Numbing", text: "Topical anesthetic for comfort." },
      { title: "Treatment", text: "Microchannels delivered with RF energy." },
      { title: "Serum", text: "Growth factors penetrate deeply." },
      { title: "Recovery", text: "24-48 hr glow-up window." },
    ],
  },
  {
    slug: "prp-therapy",
    name: "PRP Therapy",
    category: "Regenerative",
    short: "Harness your body's own platelets for natural rejuvenation.",
    description: "Platelet-rich plasma - drawn from your own blood - accelerates healing, restores volume and revives hair growth.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&auto=format&fit=crop",
    price: "From $549",
    duration: "75 min",
    benefits: ["100% natural source", "Stimulates collagen", "Restores hair density", "Long-lasting renewal"],
    process: [
      { title: "Draw", text: "A small blood sample is taken." },
      { title: "Concentrate", text: "Platelets are spun and isolated." },
      { title: "Apply", text: "Injected or microneedled into target areas." },
      { title: "Regenerate", text: "Visible results over 4-8 weeks." },
    ],
  },
];

export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug);

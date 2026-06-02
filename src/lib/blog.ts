export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "5-benefits-of-hydrafacial",
    title: "5 Benefits of HydraFacial You Didn't Know About",
    excerpt: "Beyond the instant glow, HydraFacial offers science-backed benefits that transform your skin from within.",
    category: "Facials",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop",
    date: "May 28, 2026",
    readTime: "6 min read",
    content: [
      "The HydraFacial has become the most-requested medical-grade facial in the world and for good reason. It combines cleansing, exfoliation, extraction and hydration in a single 50-minute session with zero downtime.",
      "Beyond the obvious instant glow, here are five benefits that may surprise you. First, it deeply decongests pores using painless vortex suction, far more effective than traditional manual extractions.",
      "Second, the antioxidant-infused serums actively neutralize free radicals, slowing visible signs of aging. Third, hydration levels improve measurably for up to 7 days post-treatment.",
      "Fourth, regular HydraFacials gradually improve skin tone and reduce hyperpigmentation. Finally, it's safe for nearly every skin type, including sensitive and rosacea-prone skin.",
    ],
  },
  {
    slug: "what-is-prp-therapy",
    title: "What is PRP Therapy? The Science Behind the Glow",
    excerpt: "Platelet-rich plasma harnesses your body's natural healing, here's how this regenerative treatment works.",
    category: "Regenerative",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&auto=format&fit=crop",
    date: "May 22, 2026",
    readTime: "8 min read",
    content: [
      "Platelet-rich plasma (PRP) therapy uses a concentrated solution of your own platelets to accelerate healing, stimulate collagen and revive hair growth. The process begins with a simple blood draw.",
      "Your blood is then spun in a centrifuge to isolate the platelet-rich layer, a golden serum packed with growth factors. This concentrate is then applied via injection or microneedling.",
      "Because PRP is derived from your own body, allergic reactions are virtually impossible. Results build over 4 to 8 weeks as your skin's natural collagen production ramps up.",
      "Clinical studies show PRP can improve skin texture by up to 40% and significantly boost hair density when used to treat thinning.",
    ],
  },
  {
    slug: "botox-vs-fillers",
    title: "Botox vs Fillers: Which is Right for You?",
    excerpt: "Two of the most popular injectables but they do very different things. Here's how to choose.",
    category: "Injectables",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&auto=format&fit=crop",
    date: "May 14, 2026",
    readTime: "5 min read",
    content: [
      "Botox and dermal fillers are often confused, but they address completely different concerns. Botox temporarily relaxes the muscles that cause expression lines, think forehead furrows and crow's feet.",
      "Fillers, on the other hand, restore lost volume and sculpt facial contours. They're hyaluronic-acid based and instantly plump areas like cheeks, lips and tear troughs.",
      "If your concern is dynamic wrinkles that appear when you smile or frown, Botox is the answer. If it's flattened cheeks, thin lips or shadowed under-eyes, you want filler.",
      "Many patients benefit from a combination of both, a tailored approach we call the 'liquid facelift'.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

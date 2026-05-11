"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface MenuItem {
  category: string;
  name: string;
  price: string;
  type?: "HOT" | "COLD";
  badge?: string;
  tags?: string[];
  desc: string;
  img: string;
  accent: string;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const CATEGORIES = ["All", "Coffee", "Cold Drinks", "Food", "Pastries"];

const MENU_ITEMS: MenuItem[] = [
  {
    category: "Coffee",
    name: "Saffron Latte",
    price: "Rs. 420",
    type: "HOT",
    badge: "House Signature",
    tags: ["Hot", "Milk-based", "Floral"],
    desc: "A whisper of saffron steeped into steamed whole milk, pulled over a double ristretto. Floral, golden, unapologetic.",
    img: "/Saffron-Latte.png",
    accent: "#D97706",
  },
  {
    category: "Coffee",
    name: "Cold Brew",
    price: "Rs. 380",
    type: "COLD",
    badge: "Staff Favourite",
    tags: ["Cold", "Black", "Bold"],
    desc: "18 hours of slow extraction at room temperature. Served over a single large ice cube in a chilled glass.",
    img: "/Cold Brew.png",
    accent: "#3D2010",
  },
  {
    category: "Coffee",
    name: "Cortado",
    price: "Rs. 350",
    type: "HOT",
    tags: ["Hot", "Strong", "Milk-based"],
    desc: "Equal parts espresso and warm milk. No hiding, no sweetness, no theatre. Just the shot, softened.",
    img: "/Cortado.png",
    accent: "#C5845A",
  },
  {
    category: "Coffee",
    name: "Pour Over",
    price: "Rs. 450",
    type: "HOT",
    badge: "Single Origin",
    tags: ["Hot", "Black", "Complex"],
    desc: "A single-origin cup brewed to order using a Hario V60. The origin rotates weekly — ask us where it's from.",
    img: "/Pour-Over.png",
    accent: "#A08060",
  },
  {
    category: "Coffee",
    name: "Cardamom Cappuccino",
    price: "Rs. 390",
    type: "HOT",
    badge: "Karachi Classic",
    tags: ["Hot", "Spiced", "Milk-based"],
    desc: "Our nod to the chai you grew up with. A double shot of espresso, velvety microfoam, and a crack of green cardamom.",
    img: "/Cardamom Cappuccino.png",
    accent: "#9B6B4A",
  },
  {
    category: "Coffee",
    name: "Iced Americano",
    price: "Rs. 320",
    type: "COLD",
    tags: ["Cold", "Black", "Clean"],
    desc: "Simple. Cold. Deeply underrated. Two shots of espresso over ice with a splash of cold water.",
    img: "/Iced Americano.png",
    accent: "#3D3D3D",
  },
  {
    category: "Cold Drinks",
    name: "Iced Saffron Latte",
    price: "Rs. 440",
    desc: "The same saffron-infused espresso, now over ice. A tall glass of something beautiful for the long Karachi afternoons.",
    img: "/Iced Saffron Latte.png",
    accent: "#D97706",
  },
  {
    category: "Cold Drinks",
    name: "Pink Lemonade Cold Brew",
    price: "Rs. 420",
    badge: "Seasonal",
    desc: "Our cold brew blended with house-made hibiscus lemonade. Tart, floral, and completely unexpected.",
    img: "/Pink Lemonade Cold Brew.png",
    accent: "#EC4899",
  },
  {
    category: "Cold Drinks",
    name: "Mango Lassi Smoothie",
    price: "Rs. 350",
    desc: "Alphonso mango, full-fat yoghurt, a pinch of cardamom. Thick. Cold. Distinctly Pakistani.",
    img: "/Mango Lassi Smoothie.png",
    accent: "#FBBF24",
  },
  {
    category: "Cold Drinks",
    name: "Sparkling Mint Limeade",
    price: "Rs. 290",
    desc: "House-pressed lime, fresh mint, chilled sparkling water. The cleanest thing on the menu.",
    img: "/Sparkling Mint Limeade.png",
    accent: "#6EE7B7",
  },
  {
    category: "Food",
    name: "Avocado Toast",
    price: "Rs. 480",
    badge: "Most Ordered",
    desc: "Sourdough from the bakery nearby, hand-mashed avocado, sea salt, chilli flakes, topped with a 6-minute soft-boiled egg.",
    img: "/avocado-toast.jpg",
    accent: "#6A9A40",
  },
  {
    category: "Food",
    name: "Eggs Benedict",
    price: "Rs. 520",
    desc: "Two poached eggs on toasted brioche with wilted spinach and house-made hollandaise. We don't rush it.",
    img: "/Eggs Benedict.png",
    accent: "#E8B860",
  },
  {
    category: "Food",
    name: "Shakshuka",
    price: "Rs. 450",
    badge: "Weekend Special",
    desc: "Eggs slow-poached in a spiced tomato and pepper sauce with a Pakistani twist. Served in the cast iron pan.",
    img: "/Shakshuka.png",
    accent: "#C84A20",
  },
  {
    category: "Food",
    name: "Grilled Chicken Ciabatta",
    price: "Rs. 560",
    desc: "Herb-marinated chicken, grilled to order, layered with sundried tomatoes, rocket, and garlic aioli on ciabatta.",
    img: "/Grilled Chicken Ciabatta.png",
    accent: "#C2410C",
  },
  {
    category: "Pastries",
    name: "Cardamom Croissant",
    price: "Rs. 290",
    badge: "Baked Daily",
    desc: "72-hour laminated dough, baked each morning at 5AM. Cardamom-scented butter layered into each fold.",
    img: "/Cardamom Croissant.png",
    accent: "#C8A855",
  },
  {
    category: "Pastries",
    name: "Banana Walnut Cake",
    price: "Rs. 260",
    desc: "Traditional recipe. Dense, moist, not too sweet. Served in a thick slice with clotted cream on the side.",
    img: "/Banana Walnut Cake.png",
    accent: "#92400E",
  },
  {
    category: "Pastries",
    name: "Cheese & Herb Scone",
    price: "Rs. 240",
    desc: "Crumbly, warm, and slightly dangerous. Sharp cheddar, fresh thyme, cracked black pepper. Pairs with anything.",
    img: "/Cheese & Herb Scone.png",
    accent: "#FDE68A",
  },
  {
    category: "Pastries",
    name: "Saffron & Pistachio Tart",
    price: "Rs. 320",
    badge: "House Signature",
    desc: "Buttery shortcrust shell filled with saffron custard and topped with crushed roasted pistachios.",
    img: "/saffron & Pistachio Tart.png",
    accent: "#D97706",
  },
];

/* ─────────────────────────────────────────────
   Flip Card Component
───────────────────────────────────────────── */
function FlipCard({ item, index }: { item: MenuItem; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const isHot = item.type === "HOT";
  const isCold = item.type === "COLD";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
      className="h-[300px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transitionTimingFunction: "cubic-bezier(0.4,0.2,0.2,1)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0905]/95 via-[#0D0905]/30 to-transparent" />
            {/* Subtle accent tint at top */}
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: `radial-gradient(ellipse at top right, ${item.accent}, transparent 70%)` }}
            />
          </div>

          {/* Hover hint pill — top right */}
          <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm opacity-60">
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/50 font-medium">Hover</span>
          </div>

          {/* Badge — top left */}
          {item.badge && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span
                className="px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-semibold"
                style={{ background: item.accent, color: "#fff" }}
              >
                {item.badge}
              </span>
            </div>
          )}

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
            {/* Type pill */}
            {item.type && (
              <div
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full mb-3 border"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: isHot ? "#D97706" : "#22D3EE",
                  borderColor: isHot ? "rgba(217,119,6,0.35)" : "rgba(34,211,238,0.3)",
                  background: isHot ? "rgba(217,119,6,0.1)" : "rgba(34,211,238,0.08)",
                }}
              >
                <span>{isHot ? "● Hot" : "● Cold"}</span>
              </div>
            )}

            <h3 className="text-white font-light text-xl leading-snug mb-1" style={{ fontFamily: "var(--font-display, Georgia, serif)" }}>
              {item.name}
            </h3>

            {/* Dotted rule + price */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex-1 border-b border-dashed border-white/15" />
              <span className="text-base font-light" style={{ color: item.accent }}>
                {item.price}
              </span>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[#FAFAF6] border border-[#E8E3DA]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Top accent line */}
          <div className="h-[3px] w-full" style={{ background: item.accent }} />

          <div className="flex flex-col h-full p-5 pt-4">
            {/* Category + type */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[9px] uppercase tracking-[0.15em] font-semibold"
                style={{ color: item.accent }}
              >
                {item.category}
              </span>
              {item.type && (
                <>
                  <span className="text-[#C4BDB4] text-[9px]">·</span>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-[#A09890]">{item.type}</span>
                </>
              )}
            </div>

            {/* Name */}
            <h3
              className="text-[#1C1917] text-[22px] font-light leading-tight mb-3"
              style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
            >
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-[#78716C] text-[12.5px] leading-relaxed flex-1 line-clamp-4">
              {item.desc}
            </p>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] text-[#78716C] border border-[#E0DAD2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Divider + footer */}
            <div className="border-t border-[#EAE5DC] pt-3 flex items-center justify-between">
              <span
                className="text-xl font-light"
                style={{ color: item.accent, fontFamily: "var(--font-display, Georgia, serif)" }}
              >
                {item.price}
              </span>

              <button
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[11px] uppercase tracking-widest font-medium text-white transition-opacity hover:opacity-80 active:scale-95"
                style={{ background: "#1C1917" }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1h2l1.4 7h6.2l1.4-5H4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6.5" cy="12" r="0.8" fill="white" />
                  <circle cx="10.5" cy="12" r="0.8" fill="white" />
                </svg>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Filter Bar
───────────────────────────────────────────── */
function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Offset should be around the hero height + main pt
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-[70px] z-40 transition-all duration-300 py-4 ${isSticky
          ? "bg-[#FAFAF7] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-b border-[#E7E2D9]"
          : "bg-transparent border-y border-[#E7E2D9]/30"
        }`}
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-center gap-10 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="relative font-sans text-[11px] uppercase tracking-[0.25em] shrink-0 transition-all duration-300 py-2"
            style={{
              color: active === cat ? "#B45309" : "#78716C",
              fontWeight: active === cat ? 600 : 400,
            }}
          >
            {cat}
            {active === cat && (
              <motion.div
                layoutId="menu-filter-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B45309]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function MenuPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === filter);

  return (
    <main className="w-full bg-[#FAFAF7] text-[#1C1917] min-h-screen pt-32">
      {/* Hero */}
      <section className="relative px-6 md:px-16 max-w-4xl mx-auto text-center mb-24">
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B45309] mb-5">
          Artisanal Coffee & Kitchen
        </p>
        <motion.h1
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="font-display font-light text-7xl md:text-9xl mb-8 tracking-tighter"
        >
          The Menu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xs md:text-sm text-[#78716C] max-w-xs mx-auto uppercase tracking-widest leading-loose opacity-60"
        >
          Every item has a reason to exist.
          <br />
          Nothing is here by accident.
        </motion.p>
      </section>

      {/* Filter bar */}
      <FilterBar active={filter} onChange={setFilter} />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item, idx) => (
              <FlipCard key={item.name} item={item} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

/* ───────────────────────── MENU DATA ───────────────────────── */
const CATEGORIES = ["All", "Espresso", "Specialty", "Cold & Iced", "Bakery", "Brunch"] as const;
type Category = (typeof CATEGORIES)[number];

const MENU_ITEMS = [
  // ── ESPRESSO ──
  {
    id: 1,
    name: "Saffron Latte",
    price: "Rs. 420",
    tag: "Signature",
    category: "Espresso" as Category,
    desc: "Saffron-infused milk with a double ristretto. Our most iconic creation.",
    origin: "Beans: Ethiopia Yirgacheffe · Notes: Floral, Citrus, Bergamot",
    ingredients: "Espresso, steamed oat milk, saffron infusion, honey",
    img: "/Saffron-Latte.png",
    accent: "#D97706",
  },
  {
    id: 2,
    name: "Cortado",
    price: "Rs. 350",
    tag: "Classic",
    category: "Espresso" as Category,
    desc: "Equal parts espresso and warm milk — the purist's choice.",
    origin: "Beans: Yemen Mocha · Notes: Wine, Berries, Dark Spice",
    ingredients: "Double espresso, warm whole milk",
    img: "/Cortado.png",
    accent: "#C5845A",
  },
  {
    id: 3,
    name: "Flat White",
    price: "Rs. 380",
    tag: "Espresso",
    category: "Espresso" as Category,
    desc: "Velvety microfoam over a double ristretto. Silky, intense, perfected.",
    origin: "Beans: Colombia Huila · Notes: Caramel, Hazelnut, Brown Sugar",
    ingredients: "Double ristretto, whole milk microfoam",
    img: "/latte-art.jpg",
    accent: "#B8956E",
  },
  {
    id: 4,
    name: "Espresso",
    price: "Rs. 280",
    tag: "Classic",
    category: "Espresso" as Category,
    desc: "A single, perfectly extracted shot. No frills, all craft.",
    origin: "Beans: Blend of Ethiopia & Colombia",
    ingredients: "18g freshly ground, 36ml extraction",
    img: "/image copy 4.png",
    accent: "#3D1F0A",
  },
  {
    id: 5,
    name: "Double Espresso",
    price: "Rs. 320",
    tag: "Classic",
    category: "Espresso" as Category,
    desc: "Two shots pulled simultaneously for a full-bodied, bold experience.",
    origin: "Beans: Blend seasonal selection",
    ingredients: "36g freshly ground, 72ml extraction",
    img: "/image copy 4.png",
    accent: "#5C3420",
  },
  {
    id: 6,
    name: "Cappuccino",
    price: "Rs. 360",
    tag: "Classic",
    category: "Espresso" as Category,
    desc: "Traditional thirds — espresso, steamed milk, and thick dry foam.",
    origin: "Beans: Ethiopia Natural · Notes: Blueberry, Dark Chocolate",
    ingredients: "Espresso, steamed milk, dry foam, light cocoa dust",
    img: "/Cardamom Cappuccino.png",
    accent: "#9B6B4A",
  },
  {
    id: 7,
    name: "Ristretto",
    price: "Rs. 300",
    tag: "Intense",
    category: "Espresso" as Category,
    desc: "Short pull, concentrated flavour. Sweeter and more complex than espresso.",
    origin: "Beans: Yemen Haraaz · Notes: Dried Fruit, Tobacco, Spice",
    ingredients: "14g coffee, 20ml restricted extraction",
    img: "/image copy 4.png",
    accent: "#6B3A20",
  },
  {
    id: 8,
    name: "Macchiato",
    price: "Rs. 310",
    tag: "Classic",
    category: "Espresso" as Category,
    desc: "Espresso 'stained' with a small amount of foamed milk.",
    origin: "Beans: Ethiopia Guji · Notes: Jasmine, Peach, Caramel",
    ingredients: "Double espresso, 1 tbsp milk foam",
    img: "/latte-art.jpg",
    accent: "#C8956A",
  },

  // ── SPECIALTY ──
  {
    id: 9,
    name: "Rose & Cardamom Latte",
    price: "Rs. 460",
    tag: "New",
    category: "Specialty" as Category,
    desc: "Floral and aromatic — rose water and ground cardamom meet ristretto.",
    origin: "Beans: Kenya AA · Notes: Blackcurrant, Grapefruit, Rose",
    ingredients: "Espresso, oat milk, rose water, ground cardamom, honey",
    img: "/image copy 5.png",
    accent: "#C2698A",
  },
  {
    id: 10,
    name: "Pistachio Latte",
    price: "Rs. 450",
    tag: "Bestseller",
    category: "Specialty" as Category,
    desc: "House-made pistachio paste with oat milk and a double shot.",
    origin: "Beans: Colombia Huila · Notes: Nutty, Sweet, Caramel",
    ingredients: "Espresso, oat milk, house pistachio paste",
    img: "/image copy 3.png",
    accent: "#7A9A4A",
  },
  {
    id: 11,
    name: "Pour Over",
    price: "Rs. 450",
    tag: "Filter",
    category: "Specialty" as Category,
    desc: "Single-origin pour-over brewed to order. A 4-minute ritual.",
    origin: "Beans: Rotating seasonal · Notes: varies",
    ingredients: "Single origin beans, filtered water, paper filter",
    img: "/Pour-Over.png",
    accent: "#A08060",
  },
  {
    id: 12,
    name: "Affogato",
    price: "Rs. 490",
    tag: "Dessert",
    category: "Specialty" as Category,
    desc: "A shot of espresso poured over house-made vanilla bean gelato.",
    origin: "Beans: Ethiopia Natural · Notes: Blueberry, Vanilla",
    ingredients: "Double espresso, vanilla bean gelato, hazelnut crumble",
    img: "/image copy 2.png",
    accent: "#F5F0E8",
  },
  {
    id: 13,
    name: "Turmeric Golden Milk",
    price: "Rs. 380",
    tag: "Wellness",
    category: "Specialty" as Category,
    desc: "Anti-inflammatory golden milk with turmeric, ginger, and black pepper.",
    origin: "Non-caffeinated · Locally sourced spices",
    ingredients: "Oat milk, turmeric, ginger, black pepper, honey, cinnamon",
    img: "/Saffron-Latte.png",
    accent: "#E8A820",
  },
  {
    id: 14,
    name: "Chai Latte",
    price: "Rs. 360",
    tag: "Spiced",
    category: "Specialty" as Category,
    desc: "House-blended masala chai with steamed oat milk and cinnamon.",
    origin: "Chai blend: cardamom, cinnamon, ginger, clove, star anise",
    ingredients: "House chai concentrate, oat milk, cinnamon",
    img: "/saffron-latte.jpg",
    accent: "#C87840",
  },
  {
    id: 15,
    name: "Matcha Latte",
    price: "Rs. 430",
    tag: "Specialty",
    category: "Specialty" as Category,
    desc: "Ceremonial-grade Japanese matcha whisked and layered over steamed milk.",
    origin: "Matcha: Uji region, Japan",
    ingredients: "Ceremonial matcha, oat milk, honey",
    img: "/saffron-latte.jpg",
    accent: "#6A9A40",
  },

  // ── COLD & ICED ──
  {
    id: 16,
    name: "Cold Brew",
    price: "Rs. 380",
    tag: "Bestseller",
    category: "Cold & Iced" as Category,
    desc: "18-hour slow-steeped Colombian medium-dark. Silky, bold, clean.",
    origin: "Beans: Colombia Huila · Notes: Dark Chocolate, Walnut, Molasses",
    ingredients: "Cold brew concentrate, filtered water, ice",
    img: "/Cold Brew.png",
    accent: "#3D2010",
  },
  {
    id: 17,
    name: "Nitro Cold Brew",
    price: "Rs. 450",
    tag: "Premium",
    category: "Cold & Iced" as Category,
    desc: "Cold brew infused with nitrogen — velvety, creamy, naturally sweet.",
    origin: "Beans: Colombia · Notes: Milk Chocolate, Vanilla",
    ingredients: "Cold brew, nitrogen gas",
    img: "/cold-brew.jpg",
    accent: "#2A1808",
  },
  {
    id: 18,
    name: "Iced Saffron Latte",
    price: "Rs. 440",
    tag: "Signature Iced",
    category: "Cold & Iced" as Category,
    desc: "Our saffron latte signature, served over hand-cut ice cubes.",
    origin: "Beans: Ethiopia Yirgacheffe · Notes: Floral, Citrus",
    ingredients: "Espresso, cold oat milk, saffron, honey, ice",
    img: "/image copy 5.png",
    accent: "#D97706",
  },
  {
    id: 19,
    name: "Iced Matcha Pistachio",
    price: "Rs. 490",
    tag: "New",
    category: "Cold & Iced" as Category,
    desc: "Layered ceremonial matcha over pistachio milk on hand-cut ice.",
    origin: "Matcha: Uji Japan · Pistachio: Sicily",
    ingredients: "Ceremonial matcha, pistachio milk, honey, ice",
    img: "/image copy 5.png",
    accent: "#5A8A30",
  },
  {
    id: 20,
    name: "Mango Lassi Smoothie",
    price: "Rs. 520",
    tag: "Refreshing",
    category: "Cold & Iced" as Category,
    desc: "A tropical blend of alphonso mango, cardamom, and greek yoghurt.",
    origin: "Fruit: Fresh Sindhri Mango · Region: Sindh",
    ingredients: "Mango, cardamom, honey, yoghurt, crushed ice",
    img: "/Mango Lassi Smoothie.png",
    accent: "#FBBF24",
  },
  {
    id: 33,
    name: "Iced Americano",
    price: "Rs. 320",
    tag: "Classic",
    category: "Cold & Iced" as Category,
    desc: "A clean, crisp double shot over hand-cut ice. The minimalist's choice.",
    origin: "Beans: Ethiopia Natural · Notes: Berries",
    ingredients: "Double espresso, filtered water, ice",
    img: "/Iced Americano.png",
    accent: "#3D3D3D",
  },
  {
    id: 34,
    name: "Sparkling Mint Limeade",
    price: "Rs. 380",
    tag: "Seasonal",
    category: "Cold & Iced" as Category,
    desc: "Fresh garden mint, hand-pressed lime, and effervescent bubbles.",
    origin: "Locally sourced garden mint",
    ingredients: "Lime juice, fresh mint, simple syrup, soda, ice",
    img: "/Sparkling Mint Limeade.png",
    accent: "#6EE7B7",
  },
  {
    id: 35,
    name: "Pink Lemonade Cold Brew",
    price: "Rs. 460",
    tag: "Signature",
    category: "Cold & Iced" as Category,
    desc: "A stunning layered drink of hibiscus-infused lemonade and cold brew.",
    origin: "Hibiscus: Egyptian · Cold Brew: Colombia",
    ingredients: "Cold brew, hibiscus lemonade, rose petals, ice",
    img: "/Pink Lemonade Cold Brew.png",
    accent: "#EC4899",
  },

  // ── BAKERY ──
  {
    id: 21,
    name: "Cardamom Croissant",
    price: "Rs. 290",
    tag: "Bakery",
    category: "Bakery" as Category,
    desc: "Laminated butter dough with ground cardamom and pistachio filling.",
    origin: "Baked fresh daily · French technique, Karachi soul",
    ingredients: "Flour, European butter, cardamom, pistachio cream",
    img: "/Cardamom Croissant.png",
    accent: "#C8A855",
  },
  {
    id: 22,
    name: "Saffron Kouign-Amann",
    price: "Rs. 320",
    tag: "Signature",
    category: "Bakery" as Category,
    desc: "Caramelised Breton butter cake infused with saffron — crispy, flaky.",
    origin: "Baked fresh · Brittany technique",
    ingredients: "Flour, butter, sugar, saffron, fleur de sel",
    img: "/Cardamom Croissant.png",
    accent: "#D4A840",
  },
  {
    id: 23,
    name: "Banana Walnut Cake",
    price: "Rs. 350",
    tag: "Classic",
    category: "Bakery" as Category,
    desc: "Moist, dense banana bread with roasted walnuts and a hint of cinnamon.",
    origin: "Baked fresh · House recipe",
    ingredients: "Ripe bananas, walnuts, brown butter, cinnamon",
    img: "/Banana Walnut Cake.png",
    accent: "#92400E",
  },
  {
    id: 24,
    name: "Saffron & Pistachio Tart",
    price: "Rs. 340",
    tag: "Patisserie",
    category: "Bakery" as Category,
    desc: "Our signature dessert. Saffron custard in a pistachio-crust shell.",
    origin: "Saffron: Iranian Sargol · Pistachio: Afghan",
    ingredients: "Shortcrust pastry, saffron custard, roasted pistachios",
    img: "/saffron & Pistachio Tart.png",
    accent: "#D97706",
  },
  {
    id: 25,
    name: "Cheese & Herb Scone",
    price: "Rs. 280",
    tag: "Bakery",
    category: "Bakery" as Category,
    desc: "Savory, buttery scone with sharp cheddar and fresh rosemary.",
    origin: "Baked fresh daily",
    ingredients: "Sharp cheddar, fresh rosemary, sea salt, buttermilk",
    img: "/Cheese & Herb Scone.png",
    accent: "#FDE68A",
  },

  // ── BRUNCH ──
  {
    id: 27,
    name: "Avocado Toast",
    price: "Rs. 480",
    tag: "Brunch",
    category: "Brunch" as Category,
    desc: "Smashed avocado, poached egg, chili flakes on house sourdough.",
    origin: "Sourdough: house-baked · Eggs: farm-fresh Karachi",
    ingredients: "Sourdough, avocado, egg, lemon, chili, EVOO, microgreens",
    img: "/image copy 2.png",
    accent: "#6A9A40",
  },
  {
    id: 28,
    name: "Eggs Benedict",
    price: "Rs. 540",
    tag: "Weekend",
    category: "Brunch" as Category,
    desc: "House-cured beef with poached eggs and hollandaise on brioche.",
    origin: "Brioche: house-baked · Eggs: farm-fresh",
    ingredients: "Brioche, house-cured beef, poached eggs, hollandaise, capers",
    img: "/Eggs Benedict.png",
    accent: "#E8B860",
  },
  {
    id: 29,
    name: "Shakshuka",
    price: "Rs. 490",
    tag: "Brunch",
    category: "Brunch" as Category,
    desc: "Eggs poached in spiced tomato and pepper sauce, served with sourdough.",
    origin: "Traditional North African · House spice blend",
    ingredients: "Eggs, tomato, peppers, cumin, paprika, feta, sourdough",
    img: "/Shakshuka.png",
    accent: "#C84A20",
  },
  {
    id: 36,
    name: "Grilled Chicken Ciabatta",
    price: "Rs. 620",
    tag: "Brunch",
    category: "Brunch" as Category,
    desc: "Marinated chicken, sun-dried tomatoes, and pesto on toasted ciabatta.",
    origin: "Ciabatta: house-baked · Pesto: fresh basil",
    ingredients: "Ciabatta, grilled chicken, sun-dried tomato, basil pesto, rocket",
    img: "/Grilled Chicken Ciabatta.png",
    accent: "#C2410C",
  },
];

/* ───────────────────────── MENU CARD ───────────────────────── */
function MenuCard({ item, index }: { item: (typeof MENU_ITEMS)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative h-[480px] rounded-3xl overflow-hidden bg-[#13100F] border border-white/5 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── IMAGE SECTION ── */}
      <div className="relative h-[65%] w-full overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13100F] via-transparent to-transparent opacity-60" />

        {/* Floating Badges */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <span 
            className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium backdrop-blur-md border border-white/10"
            style={{ background: `${item.accent}22`, color: item.accent }}
          >
            {item.tag}
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md bg-white/5 border border-white/10 text-white/90">
            {item.price}
          </span>
        </div>
      </div>

      {/* ── CONTENT SECTION ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-[45%] transition-transform duration-500 group-hover:-translate-y-4">
        <h3 className="font-display text-2xl text-[#F2EFE8] mb-2 leading-tight">
          {item.name}
        </h3>
        <p className="font-sans text-[13px] text-white/40 line-clamp-2 leading-relaxed mb-4">
          {item.desc}
        </p>
        
        {/* Detail Trigger */}
        <div className="flex items-center gap-2 text-white/20 group-hover:text-[#D97706] transition-colors duration-300">
          <span className="font-sans text-[9px] uppercase tracking-[0.25em]">View Details</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </div>
      </div>

      {/* ── HOVER OVERLAY (DETAIL VIEW) ── */}
      <motion.div 
        initial={false}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
          pointerEvents: isHovered ? "auto" : "none"
        }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="absolute inset-0 bg-[#0D0C0A]/95 p-8 flex flex-col justify-center border border-[#D97706]/30 rounded-3xl"
      >
        <div className="w-10 h-px bg-[#D97706] mb-6" />
        
        <h4 className="font-display text-xl text-[#F2EFE8] mb-4">{item.name}</h4>
        
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#D97706]/60 mb-1">Terroir & Origin</p>
            <p className="text-sm text-white/70 font-sans leading-relaxed">{item.origin}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#D97706]/60 mb-1">Crafted With</p>
            <p className="text-sm text-white/70 font-sans leading-relaxed">{item.ingredients}</p>
          </div>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-[#D97706]">{item.price}</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── MAIN COMPONENT ───────────────────────── */
export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative w-full py-32 px-6 md:px-16"
      style={{ background: "#0D0C0A" }}
    >
      {/* Decorative top rule */}
      <div
        className="absolute top-0 left-16 right-16 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div style={{ width: 32, height: 1, background: "#D97706" }} />
              <span
                className="font-sans text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#D97706" }}
              >
                Our Offerings
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="font-display font-light leading-tight"
                style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", color: "#F2EFE8" }}
              >
                The{" "}
                <em className="font-accent-italic not-italic" style={{ color: "#D97706" }}>
                  Signature
                </em>{" "}
                Menu
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-sans text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {filtered.length} items crafted with intentional sourcing and old-world technique. Tap each card to reveal its story.
          </motion.p>
        </div>

        {/* ── Category Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300"
              style={{
                background: activeCategory === cat ? "#D97706" : "rgba(255,255,255,0.05)",
                color: activeCategory === cat ? "#0D0C0A" : "rgba(255,255,255,0.5)",
                border: activeCategory === cat ? "1px solid #D97706" : "1px solid rgba(255,255,255,0.1)",
                fontWeight: activeCategory === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="font-sans text-sm mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
            Seasonal specials change weekly. Ask your barista.
          </p>
          <a href="#reserve">
            <button
              className="font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "transparent",
                border: "1px solid rgba(217,119,6,0.4)",
                color: "#D97706",
              }}
            >
              Reserve Your Table
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { BlurIn, NumberTicker, AnimatedTestimonials } from "@/components/ui/motion";
import { Footer } from "@/components/Footer";

const PILLARS = [
  { icon: "☕", title: "Single Origin Beans", desc: "Traceable to the farm. Roasted weekly in small batches." },
  { icon: "🌿", title: "Ethically Sourced", desc: "We know where our coffee comes from — and we're proud of it." },
  { icon: "🥐", title: "Baked Every Dawn", desc: "Croissants, scones and cakes made fresh before you arrive." },
  { icon: "⭐", title: "Karachi's Favourite", desc: "4.9 stars across 380+ reviews. The city has spoken." },
];

const MENU_PREVIEW = [
  {
    name: "Saffron Latte",
    price: "Rs. 420",
    desc: "A whisper of saffron steeped into steamed whole milk, pulled over a double ristretto. Floral, golden, unapologetic.",
    img: "/Saffron-Latte.png",
    badge: "Signature",
  },
  {
    name: "Cold Brew",
    price: "Rs. 380",
    desc: "18 hours of patience. Served over a single large ice cube. Silky, bold, and clean.",
    img: "/Cold Brew.png",
  },
  {
    name: "Pour Over",
    price: "Rs. 450",
    desc: "Single-origin beans, brewed to order. A 4-minute ritual that brings out the soul of the bean.",
    img: "/pour.png",
  },
  {
    name: "Cardamom Cappuccino",
    price: "Rs. 390",
    desc: "Our nod to the chai you grew up with. Double espresso infused with freshly ground cardamom.",
    img: "/Cortado.png",
    badge: "Signature",
  },
];

const TIMELINE = [
  { time: "07:30", label: "Morning", menu: "Saffron Latte & Cardamom Croissant", gradient: "linear-gradient(to top right, #FDE68A, #FEF3C7)" },
  { time: "10:00", label: "Midmorning", menu: "Pour Over & Banana Walnut Cake", gradient: "linear-gradient(to top right, #FCD34D, #FDE68A)" },
  { time: "13:00", label: "Afternoon", menu: "Cold Brew & Avocado Toast", gradient: "linear-gradient(to top right, #FBBF24, #FCD34D)" },
  { time: "17:00", label: "Evening", menu: "Cortado & Cheese Scone", gradient: "linear-gradient(to top right, #F59E0B, #FBBF24)" },
  { time: "20:00", label: "Night", menu: "Cardamom Cappuccino & slow conversation", gradient: "linear-gradient(to top right, #D97706, #F59E0B)" },
];

const TESTIMONIALS = [
  { text: "I wrote my thesis here. The pour over every single day. I don't know which one I'm more proud of.", author: "Hina M., Architect" },
  { text: "Saffron & Steam doesn't feel like a brand. It feels like someone actually cares.", author: "Omar F., Regular since Day 1" },
  { text: "The Saffron Latte alone is worth the drive from Gulshan.", author: "Sara K., Food Writer" },
];

export default function Home() {
  return (
    <main className="w-full bg-[#FAFAF7] text-[#1C1917] overflow-hidden">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1 — HERO
          Using the Hero component as requested (no change to Hero page)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Hero />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2 — FOUR PILLARS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 md:px-16 border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PILLARS.map((p, i) => (
            <BlurIn key={p.title} delay={i * 0.15}>
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-display text-xl mb-2">{p.title}</h3>
              <p className="font-sans text-sm text-[#78716C] leading-relaxed">{p.desc}</p>
            </BlurIn>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3 — OUR HERITAGE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="lg:w-[55%]">
          <BlurIn>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">Since the gates of old Karachi</p>
            <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.1] mb-8">
              A Karachi legacy<br/>poured into every cup.
            </h2>
            <div className="font-sans text-sm md:text-base text-[#5C534A] space-y-6 mb-12">
              <p>
                Tucked on Zamzama Boulevard, Saffron & Steam has welcomed Karachi&apos;s writers, architects, students and dreamers since 2019. We brew with intention. We source with care. We roast weekly so nothing ever sits stale.
              </p>
              <p>
                Whether it&apos;s your 7AM cortado or a slow Saturday pour over, the cup is always made for you.
              </p>
            </div>
            
            <div className="flex gap-12 mb-10 border-t border-[#E7E2D9] pt-8">
              <div>
                <p className="font-display text-4xl text-[#B45309]"><NumberTicker value={10} suffix="+" /></p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#78716C] mt-2">Signature Coffees</p>
              </div>
              <div>
                <p className="font-display text-4xl text-[#B45309]"><NumberTicker value={6} /> Years</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#78716C] mt-2">In Karachi</p>
              </div>
            </div>

            <Link href="/story" className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest font-semibold text-[#B45309]">
              Read our story 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </BlurIn>
        </div>

        <div className="lg:w-[45%] relative h-[600px] w-full rounded-2xl overflow-hidden" style={{ background: "linear-gradient(to bottom right, #E8DFD0, #D4C4A8)" }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50" style={{ backgroundImage: "url('/latte-art.jpg')" }}
          />
          <motion.div 
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl shadow-2xl p-4 flex items-end"
            style={{ background: "linear-gradient(135deg, #FBF8F3, #E8DFD0)" }}
          >
            <span className="font-display text-lg">Latte Art</span>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4 — SIGNATURE MENU PREVIEW
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 bg-[#1A1208] text-[#F2EFE8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <BlurIn>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#D97706] mb-4">Most Loved</p>
              <h2 className="font-display text-5xl md:text-6xl font-light mb-6">Signature Coffees</h2>
              <p className="font-sans text-sm text-white/50 max-w-md mx-auto">
                A taste of what keeps people coming back — slow-brewed, single-origin, made to order.
              </p>
            </BlurIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
            {MENU_PREVIEW.map((item, i) => (
              <BlurIn key={item.name} delay={i * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                  className="group relative h-[600px] cursor-pointer"
                >
                  {/* Physical Card Container */}
                  <div className="relative h-full w-full rounded-[32px] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#D97706]/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:-translate-y-2">
                    
                    {/* Parallax Image Section */}
                    <div className="relative h-[75%] w-full overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110 group-hover:rotate-1"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority={i < 2}
                      />
                      {/* Dark Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Price Tag */}
                      <div className="absolute top-6 right-6 z-20">
                        <div className="bg-black/40 backdrop-blur-md border border-[#D97706]/30 px-4 py-2 rounded-full">
                          <span className="font-sans text-sm font-light text-[#D97706] tracking-widest">{item.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Glassmorphic Pedestal */}
                    <div className="absolute bottom-0 inset-x-0 h-[35%] p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-[2px]">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-[1px] w-6 bg-[#D97706]/60" />
                          <span className="text-[9px] uppercase tracking-[0.4em] text-[#D97706] font-bold">Signature</span>
                        </div>
                        
                        <h3 className="font-display text-2xl text-white tracking-tight leading-tight group-hover:text-[#D97706] transition-colors duration-500">
                          {item.name}
                        </h3>
                        
                        <p className="font-sans text-[12px] text-white/40 leading-relaxed line-clamp-2 italic font-light">
                          {item.desc}
                        </p>

                        <div className="pt-4 flex items-center justify-between">
                          <div className="text-[#D97706] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                            <span className="text-xs uppercase tracking-[0.2em] font-bold">Taste Now →</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gold Rim Detail */}
                    <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-[32px] pointer-events-none group-hover:border-[#D97706]/20 transition-colors duration-700" />
                  </div>
                </motion.div>
              </BlurIn>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" className="group inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest font-semibold text-[#D97706] px-8 py-4 border border-[#D97706]/30 rounded-full transition-colors hover:bg-[#D97706]/10">
              Explore the Full Menu <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5 — A DAY AT SAFFRON & STEAM
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 max-w-4xl mx-auto">
        <BlurIn className="text-center mb-20">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">A Day in Karachi</p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-6">From dawn to dusk.</h2>
          <p className="font-sans text-sm text-[#78716C]">Five moments. One kitchen. One place.</p>
        </BlurIn>

        <div className="space-y-8">
          {TIMELINE.map((t, i) => (
            <motion.div 
              key={t.time}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center p-6 rounded-2xl hover:bg-[#F2EFE8] transition-colors"
            >
              <div className="font-display text-4xl text-[#B45309] w-24 shrink-0">{t.time}</div>
              <div className="w-16 h-16 rounded-full shrink-0 shadow-inner" style={{ background: t.gradient }} />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-1">{t.label}</p>
                <p className="font-display text-xl">{t.menu}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6 — GALLERY STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 overflow-hidden">
        <div className="px-6 md:px-16 max-w-7xl mx-auto mb-16">
          <BlurIn>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">The Gallery</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">A feast for the eyes.</h2>
          </BlurIn>
        </div>

        <div className="flex gap-4 px-6 md:px-16 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: "none" }}>
          {[
            { name: "The Morning Light", src: "/morning-light.png", w: "w-[400px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #FDE68A, #D4C4A8)" },
            { name: "The Pour", src: "/pour.png", w: "w-[250px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #B45309, #78350F)" },
            { name: "The Corner Table", src: "/corner-table.png", w: "w-[300px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #E8DFD0, #A8A29E)" },
            { name: "Latte Art", src: "/latte-art.jpg", w: "w-[250px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #FBF8F3, #D4C4A8)" },
            { name: "The Pastry Shelf", src: "/pastry-shelf.png", w: "w-[350px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #D97706, #FBBF24)" },
            { name: "After Hours", src: "/after-hours.png", w: "w-[400px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #451A03, #1C1917)" },
            // New images added per request
            { name: "Sunrise Brew", src: "/saffron-latte.jpg", w: "w-[300px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #FFED4A, #F59E0B)" },
            { name: "Evening Glow", src: "/hero-bg.jpg", w: "w-[400px]", h: "h-[300px]", grad: "linear-gradient(to bottom right, #1E3A8A, #3B82F6)" },
          ].map((img, i) => (
            <motion.div
              key={img.name}
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className={`${img.w} ${img.h} shrink-0 snap-center rounded-2xl relative group overflow-hidden cursor-crosshair`}
            >
              {/* Background gradient for depth and fallback */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: img.grad }} />
              
              {/* Actual Image */}
              <Image 
                src={img.src} 
                alt={img.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Glassmorphic Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 backdrop-blur-[1px] transition-all duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                <p className="font-display text-white text-xl drop-shadow-lg">{img.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery" className="font-sans text-[11px] uppercase tracking-widest text-[#B45309] font-semibold hover:underline">
            See the full gallery →
          </Link>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 7 — TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 max-w-4xl mx-auto text-center border-t border-[#E7E2D9]">
        <BlurIn className="mb-16">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">Guests Say</p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-4">Loved across Karachi.</h2>
          <p className="font-sans text-sm text-[#78716C]">4.9 from 380+ reviews</p>
        </BlurIn>

        <AnimatedTestimonials testimonials={TESTIMONIALS} interval={6000} />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 8 — CLOSING CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-6 text-center bg-[#F2EFE8]">
        <BlurIn>
          <h2 className="font-display text-6xl md:text-8xl font-light leading-[0.9] mb-8">
            Pull up a chair.<br/>The kettle is on.
          </h2>
          <p className="font-sans text-sm text-[#78716C] max-w-md mx-auto mb-12">
            Walk in, order ahead, or reserve your table.<br/>Average spend Rs 350–500 per person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reserve" className="w-full sm:w-auto font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 bg-[#B45309] text-white rounded-full font-semibold transition-transform hover:scale-105">
              Reserve a Table
            </Link>
            <Link href="/menu" className="w-full sm:w-auto font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 border border-[#B45309] text-[#B45309] rounded-full transition-colors hover:bg-[#B45309]/10">
              View Menu
            </Link>
          </div>
        </BlurIn>
      </section>

      <Footer />
    </main>
  );
}

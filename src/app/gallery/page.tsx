"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlurIn } from "@/components/ui/motion";
import { Footer } from "@/components/Footer";
import Image from "next/image";

// Reusable Gallery Cell component for the clip-path animations
function GalleryCell({ 
  name, label, hoverText, img, className = "", delay = 0, priority = false
}: { 
  name: string; label: string; hoverText: string; img: string; className?: string; delay?: number; priority?: boolean
}) {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className={`relative group overflow-hidden rounded-2xl cursor-crosshair ${className}`}
      style={{ minHeight: "300px" }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
        <Image 
          src={img} 
          alt={name} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, 50vw" 
          priority={priority}
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
      
      {/* Label (always visible or slides up on hover) */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
        <p className="font-display text-white text-2xl drop-shadow-md">{name}</p>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <p className="font-sans text-[10px] uppercase tracking-widest text-white/70 mb-1">{label}</p>
          <p className="font-sans text-sm text-white/90 leading-relaxed">{hoverText}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <main className="w-full bg-[#FAFAF7] text-[#1C1917] min-h-screen">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PAGE HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full pt-40 pb-20 px-6 text-center border-b border-[#E7E2D9]">
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px" }} />
        
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#B45309] mb-4 relative z-10">
          The Atmosphere
        </p>
        <BlurIn>
          <h1 className="font-display font-light text-6xl md:text-8xl mb-6 relative z-10">A Feast for the Eyes</h1>
        </BlurIn>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-sans text-sm md:text-base text-[#78716C] relative z-10 max-w-sm mx-auto"
        >
          Some places you visit once.<br/>Some places you keep coming back to.<br/>This is what ours looks like.
        </motion.p>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GRID 1: THE SPACE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <BlurIn className="mb-12">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-2">The Space</p>
          <h2 className="font-display text-4xl">Every corner tells a story.</h2>
        </BlurIn>

        {/* Bento Grid: 2 large (span-2), 4 small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          <GalleryCell 
            className="md:col-span-2" delay={0.1}
            name="The Morning Light" label="7:30AM · Zamzama Boulevard" 
            hoverText="The hour before it gets busy. The best light in the building."
            img="/image.png" 
            priority={true}
          />
          <GalleryCell 
            className="md:col-span-1" delay={0.2}
            name="The Corner Table" label="Table 4 · The Quiet One" 
            hoverText="Three novels have been finished here. We're keeping count."
            img="/image copy.png" 
            priority={true}
          />
          <GalleryCell 
            className="md:col-span-1" delay={0.3}
            name="The Bar" label="The Espresso Bar" 
            hoverText="Where every cup begins."
            img="/image copy 2.png" 
            priority={true}
          />
          <GalleryCell 
            className="md:col-span-1" delay={0.4}
            name="The Window Seat" label="Window Seat · First Come" 
            hoverText="Arrives early, leaves late. The most coveted seat in the house."
            img="/image copy 3.png" 
            priority={true}
          />
          <GalleryCell 
            className="md:col-span-1" delay={0.5}
            name="The Pastry Shelf" label="5AM · Freshly Baked" 
            hoverText="Aisha stacks it at 6:30. It's half-gone by 9."
            img="/pastry-shelf.png" 
          />
          <GalleryCell 
            className="md:col-span-2" delay={0.6}
            name="After Hours" label="10PM · The Last Orders" 
            hoverText="The city slows down. The conversations don't."
            img="/image copy 4.png" 
          />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GRID 2: THE CRAFT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-[#E7E2D9]">
        <BlurIn className="mb-12">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-2">The Craft</p>
          <h2 className="font-display text-4xl">What goes into every cup.</h2>
        </BlurIn>

        {/* 4-cell equal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[400px]">
          <GalleryCell delay={0.1}
            name="The Pour" label="V60 · Single Origin" 
            hoverText="Four minutes. Sixty grams. One perfect cup."
            img="/pour.png" 
          />
          <GalleryCell delay={0.2}
            name="Latte Art" label="Microfoam · Hand Poured" 
            hoverText="Bilal's been practising the rosetta for five years. It shows."
            img="/latte-art.jpg" 
          />
          <GalleryCell delay={0.3}
            name="The Grind" label="Fresh. Every Time." 
            hoverText="We grind to order. Always. Pre-ground coffee is an insult to the bean."
            img="/image copy 5.png" 
          />
          <GalleryCell delay={0.4}
            name="The Roast" label="Our Micro-Roastery · 2024" 
            hoverText="We roast every bean we serve. The cycle is complete."
            img="/hero-bg.jpg" 
          />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GRID 3: THE FOOD
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-[#E7E2D9]">
        <BlurIn className="mb-12">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-2">From the Kitchen</p>
          <h2 className="font-display text-4xl">Food made with the same obsession.</h2>
        </BlurIn>

        {/* 4-cell equal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[400px]">
          <GalleryCell delay={0.1}
            name="The Croissant" label="72-Hour Laminate" 
            hoverText="You can hear the layers when you break it."
            img="/Cardamom Croissant.png" 
          />
          <GalleryCell delay={0.2}
            name="Avocado Toast" label="Sourdough from Next Door" 
            hoverText="The bread comes from a bakery two streets over. We're not telling you which one."
            img="/avocado-toast.jpg" 
          />
          <GalleryCell delay={0.3}
            name="The Tart" label="Saffron & Pistachio Tart" 
            hoverText="Our most photographed item. For good reason."
            img="/saffron & Pistachio Tart.png" 
          />
          <GalleryCell delay={0.4}
            name="The Shakshuka" label="Weekend Special" 
            hoverText="Cast iron. Slow-poached. Worth waking up for."
            img="/Shakshuka.png" 
          />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CLOSING STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 text-center bg-[#1A1208] text-[#F2EFE8]">
        <BlurIn>
          <blockquote className="font-accent-italic text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight mb-10 text-[#D97706]">
            &ldquo;We didn&apos;t design the atmosphere. We just kept caring about the details until the atmosphere took care of itself.&rdquo;
          </blockquote>
          <p className="font-sans text-sm uppercase tracking-widest text-white/50 mb-12">
            — Zara Siddiqui, Founder
          </p>
          <Link href="/story" className="inline-block font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 bg-[#D97706] text-[#080706] rounded-full font-semibold transition-transform hover:scale-105">
            Read Our Story
          </Link>
        </BlurIn>
      </section>

      <Footer />
    </main>
  );
}

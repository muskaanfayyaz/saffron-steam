"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* 
  Mosaic layout — 6 cells with distinct personalities.
  We reuse our generated images with unique label overlays.
*/
const CELLS = [
  {
    id: 1,
    label: "The Ritual",
    sublabel: "Morning pour-over · 7:30 AM",
    img: "/pour.png",
    span: "col-span-2 row-span-2",
    size: "large",
    accent: "#D97706",
  },
  {
    id: 2,
    label: "Artisan Bakes",
    sublabel: "Hand-crafted daily",
    img: "/Cardamom Croissant.png",
    span: "col-span-1 row-span-1",
    size: "small",
    accent: "#C5845A",
  },
  {
    id: 3,
    label: "The Pastry Shelf",
    sublabel: "Fresh at 8 AM",
    img: "/pastry-shelf.png",
    span: "col-span-1 row-span-1",
    size: "small",
    accent: "#C8A855",
  },
  {
    id: 4,
    label: "Cold Brew",
    sublabel: "18-hr slow steep",
    img: "/Cold Brew.png",
    span: "col-span-1 row-span-2",
    size: "medium",
    accent: "#3D2010",
  },
  {
    id: 5,
    label: "Single Origin",
    sublabel: "Ethiopia · Yemen",
    img: "/image copy 5.png",
    span: "col-span-1 row-span-1",
    size: "small",
    accent: "#6B8A40",
  },
  {
    id: 6,
    label: "Evening Glow",
    sublabel: "Open till 11:30 PM",
    img: "/image copy 4.png",
    span: "col-span-1 row-span-1",
    size: "small",
    accent: "#C47820",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative w-full py-32 px-6 md:px-16"
      style={{ background: "#0D0C0A" }}
    >
      {/* Decorative rule */}
      <div
        className="absolute top-0 left-16 right-16 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.25), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div style={{ width: 32, height: 1, background: "#D97706" }} />
              <span
                className="font-sans text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#D97706" }}
              >
                Atmosphere
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="font-display font-light leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", color: "#F2EFE8" }}
            >
              Inside{" "}
              <em className="font-accent-italic not-italic" style={{ color: "#D97706" }}>
                Saffron &amp; Steam
              </em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Every corner of our space is curated for the moment — from first light to last call.
          </motion.p>
        </div>

        {/* Bento mosaic grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[640px] md:h-[780px]">
          {CELLS.map((cell, i) => (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${cell.span} group relative rounded-2xl overflow-hidden cursor-none`}
            >
              {/* Actual image */}
              <Image
                src={cell.img}
                alt={cell.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Base dark overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(8,7,6,0.25)" }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, rgba(8,7,6,0.92) 0%, rgba(8,7,6,0.4) 50%, transparent 100%)`,
                }}
              />

              {/* Accent bar at bottom on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: cell.accent }}
              />

              {/* Label — reveal on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <p
                  className="font-display text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "#F2EFE8", transitionDelay: "0.05s" }}
                >
                  {cell.label}
                </p>
                <p
                  className="font-sans text-xs tracking-wide mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "rgba(255,255,255,0.55)", transitionDelay: "0.1s" }}
                >
                  {cell.sublabel}
                </p>
              </div>

              {/* Number badge always visible */}
              <div
                className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "rgba(8,7,6,0.5)", backdropFilter: "blur(8px)" }}
              >
                <span className="font-sans text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  0{cell.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-8">
            {[["2 Locations", "DHA & Clifton"], ["Daily Roast", "7:30 AM"], ["Open Until", "11:30 PM"]].map(([title, sub]) => (
              <div key={title} className="text-center">
                <p className="font-display text-base font-medium" style={{ color: "#F2EFE8" }}>
                  {title}
                </p>
                <p className="font-sans text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
          <a href="#reserve">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="font-sans text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full"
              style={{
                background: "rgba(217,119,6,0.12)",
                border: "1px solid rgba(217,119,6,0.35)",
                color: "#D97706",
              }}
            >
              Book a Visit
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

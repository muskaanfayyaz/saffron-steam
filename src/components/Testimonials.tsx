"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const REVIEWS = [
  {
    name: "Aisha Mirza",
    handle: "@aisha.mirza",
    initials: "AM",
    img: "/Aisha Mirza.png",
    rating: 5,
    text: "I've been to specialty coffee shops in London and Berlin. Saffron & Steam holds its own against any of them. The Saffron Latte is unlike anything I've tasted.",
    location: "DHA Phase 6",
    color: "#D97706",
  },
  {
    name: "Bilal Khan",
    handle: "@bilalkhan.official",
    initials: "BK",
    img: "/Bilal Khan.png",
    rating: 5,
    text: "The pour-over here changed how I think about coffee. Clean, complex, and brewed with real care. This is what Karachi needed.",
    location: "Clifton",
    color: "#B45309",
  },
  {
    name: "Zara Siddiqui",
    handle: "@zara.siddiqui",
    initials: "ZS",
    img: "/zara Siddiqui.png",
    rating: 5,
    text: "The space is warm and the pastries are extraordinary. I come here to work, to think, to breathe. It's become part of my daily routine.",
    location: "Gulshan-e-Iqbal",
    color: "#C2698A",
  },
  {
    name: "Omar Shaikh",
    handle: "@omarshaikh_",
    initials: "OS",
    rating: 5,
    text: "Every single detail is intentional — from the music to the mugs. A premium experience that Karachi genuinely deserves.",
    location: "PECHS",
    color: "#5A8A30",
  },
  {
    name: "Hira Farooqui",
    handle: "@hira.farq",
    initials: "HF",
    rating: 5,
    text: "The cold brew is the best I've had anywhere in Pakistan. The team knows their beans, knows their craft. Come here once and you won't go anywhere else.",
    location: "Bahria Town",
    color: "#3B7AC4",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setPrev(active);
      setActive((a) => (a + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(t);
  }, [active]);

  const review = REVIEWS[active];

  return (
    <section
      className="relative w-full py-32 px-6 md:px-16 overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 font-display font-light pointer-events-none select-none"
        style={{
          fontSize: "clamp(14rem, 30vw, 28rem)",
          lineHeight: 0.8,
          color: "rgba(180,83,9,0.05)",
          top: 0,
        }}
      >
        &ldquo;
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-5"
        >
          <div style={{ width: 32, height: 1, background: "#B45309" }} />
          <span
            className="font-sans text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#B45309" }}
          >
            Guest Reviews
          </span>
          <div style={{ width: 32, height: 1, background: "#B45309" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="font-display font-light text-center mb-20"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", color: "#1C1917" }}
        >
          What Our Guests{" "}
          <em className="font-accent-italic not-italic" style={{ color: "#B45309" }}>
            Say
          </em>
        </motion.h2>

        {/* ── Review area ── */}
        <div className="relative min-h-[340px]">
          {/* Stacked card shadows behind */}
          <div
            className="absolute inset-x-8 bottom-0 h-full rounded-3xl"
            style={{ background: "#E8DFD0", transform: "translateY(8px) scale(0.96)" }}
          />
          <div
            className="absolute inset-x-4 bottom-0 h-full rounded-3xl"
            style={{ background: "#EDE5D8", transform: "translateY(4px) scale(0.98)" }}
          />

          {/* Active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-3xl p-10 md:p-14"
              style={{ background: "#FBF8F3", border: "1px solid rgba(180,83,9,0.1)" }}
            >
              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 }}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={i < review.rating ? review.color : "#E7E2D9"}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote text */}
              <blockquote
                className="font-display font-light leading-relaxed mb-10"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", color: "#1C1917" }}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer row */}
              <div className="flex items-center gap-4">
                {/* Avatar with Image or Initials */}
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center font-sans text-sm font-semibold flex-shrink-0 bg-white shadow-sm border-2"
                  style={{ borderColor: `${review.color}30` }}
                >
                  {review.img ? (
                    <Image
                      src={review.img}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span style={{ color: review.color }}>{review.initials}</span>
                  )}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold" style={{ color: "#1C1917" }}>
                    {review.name}
                  </p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: "#78716C" }}>
                    {review.handle} &nbsp;·&nbsp; {review.location}
                  </p>
                </div>

                {/* Quotation mark decoration */}
                <div
                  className="ml-auto font-display text-6xl font-light leading-none"
                  style={{ color: review.color + "20" }}
                >
                  &rdquo;
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Pagination dots ── */}
        <div className="flex justify-center gap-3 mt-10">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              onClick={() => { setPrev(active); setActive(i); }}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === active ? 32 : 8,
                height: 8,
                background: i === active ? "#B45309" : "#D9CEC4",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Reviewer avatar row ── */}
        <div className="flex justify-center gap-4 mt-8">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              onClick={() => { setPrev(active); setActive(i); }}
              className="relative transition-all duration-300 overflow-hidden group"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "white",
                border: i === active ? `2px solid ${r.color}` : "2px solid transparent",
                cursor: "pointer",
                opacity: i === active ? 1 : 0.6,
                transform: i === active ? "scale(1.15)" : "scale(1)",
              }}
            >
              {r.img ? (
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-[10px] font-bold" style={{ color: r.color }}>{r.initials}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

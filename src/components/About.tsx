"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MILESTONES = [
  { year: "2019", event: "First Roast", desc: "Opened our doors in Zamzama with a single espresso machine and a dream." },
  { year: "2021", event: "Second Branch", desc: "Expanded to Clifton — demand outgrew our first space in 18 months." },
  { year: "2023", event: "Direct Trade", desc: "Established direct relationships with farms in Ethiopia and Yemen." },
  { year: "2024", event: "National Recognition", desc: "Named Karachi's #1 Specialty Cafe by Dawn Food & Travel." },
];

export function About() {
  return (
    <section
      id="story"
      className="relative w-full overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      {/* Top accent rule */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(90deg, transparent, #D97706, transparent)" }}
      />

      {/* ── SPLIT: Left dark panel + Right cream ── */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* ──── LEFT DARK PANEL — The visual ──── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:w-[45%] relative min-h-[60vh] lg:min-h-screen"
          style={{ background: "#0D0C0A" }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/image.png"
              alt="Saffron & Steam ambiance"
              fill
              className="object-cover opacity-40"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(13,12,10,0.2), rgba(13,12,10,0.85))" }}
            />
          </div>

          {/* Overlay content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-12 lg:p-16">
            {/* Top tagline */}
            <div>
              <div style={{ width: 32, height: 1, background: "#D97706", marginBottom: "16px" }} />
              <span
                className="font-sans text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#D97706" }}
              >
                Our Story
              </span>
            </div>

            {/* Center quote */}
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1px solid rgba(217,119,6,0.15)",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  border: "1px solid rgba(217,119,6,0.2)",
                }}
              />
              {/* Bean mark */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: 64,
                  height: 88,
                  background: "radial-gradient(ellipse at 40% 35%, #D97706 0%, #8B4513 60%, #3D1A08 100%)",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  boxShadow: "0 0 48px rgba(217,119,6,0.4)",
                }}
              />
            </div>

            {/* Bottom pull quote */}
            <div>
              <blockquote
                className="font-accent-italic text-2xl leading-tight mb-4"
                style={{ color: "#F2EFE8" }}
              >
                &ldquo;Every bean has a story before it reaches your cup.&rdquo;
              </blockquote>
              <p
                className="font-sans text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                — Ali Hassan, Head Roaster
              </p>
            </div>
          </div>
        </motion.div>

        {/* ──── RIGHT PANEL — Timeline & Text ──── */}
        <div
          className="lg:w-[55%] py-24 px-8 md:px-14 lg:px-20 flex flex-col justify-center"
          style={{ background: "#F5F0E8" }}
        >
          {/* Headline stagger */}
          <div className="mb-10">
            {["We didn't open", "a coffee shop.", "We built a sanctuary."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                  className={`font-display font-light leading-tight ${i === 2 ? "font-accent-italic" : ""}`}
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    color: i === 2 ? "#B45309" : "#1C1917",
                  }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 mb-14"
          >
            <p className="font-sans text-base leading-relaxed" style={{ color: "#5C534A" }}>
              Saffron &amp; Steam was born from a simple frustration — Karachi deserved better coffee.
              Not the instant packs or the generic chains, but coffee that had a story, a farmer&apos;s name,
              a roast date.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: "#5C534A" }}>
              So we started small, in a borrowed kitchen, with one grinder and a lot of stubbornness.
              Five years later, we&apos;re still roasting every morning and still obsessing over every extraction.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-0">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                className="relative flex gap-8 pb-10"
              >
                {/* Vertical line */}
                {i < MILESTONES.length - 1 && (
                  <div
                    className="absolute left-[2.1rem] top-10 bottom-0 w-px"
                    style={{ background: "linear-gradient(to bottom, #B45309, #B4530920)" }}
                  />
                )}

                {/* Year badge */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-medium text-sm"
                  style={{
                    background: i === 0 ? "#B45309" : "#F2EFE8",
                    color: i === 0 ? "#F2EFE8" : "#B45309",
                    border: "2px solid #B4530940",
                    boxShadow: i === 0 ? "0 0 0 6px rgba(180,83,9,0.1)" : "none",
                  }}
                >
                  {m.year}
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h4 className="font-display text-lg font-medium mb-1" style={{ color: "#1C1917" }}>
                    {m.event}
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#78716C" }}>
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 mt-4 pt-8"
            style={{ borderTop: "1px solid #E7E2D9" }}
          >
            {[["2", "Locations"], ["SCA", "Certified"], ["5+", "Years"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="font-display text-2xl font-light" style={{ color: "#B45309" }}>{v}</p>
                <p className="font-sans text-xs uppercase tracking-widest mt-1" style={{ color: "#78716C" }}>{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) raw.set(to);
  }, [inView, raw, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const PILLARS = [
  {
    num: "01",
    title: "Roasted Daily",
    desc: "Our beans are roasted in small batches each morning, ensuring peak freshness and flavour in every cup.",
    img: "/pour.png",
  },
  {
    num: "02",
    title: "Sourced Ethically",
    desc: "Direct trade relationships with farmers in Ethiopia, Colombia, and Yemen — transparency from crop to cup.",
    img: "/Cold Brew.png",
  },
  {
    num: "03",
    title: "Brewed Perfectly",
    desc: "Our baristas hold SCA certifications. Every pour, every tamp, every extraction is intentional.",
    img: "/image copy 5.png",
  },
];

export function Experience() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#1A1208" }}
    >
      {/* ── PART 1: Pull-quote block ── */}
      <div className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end gap-12">
          {/* Giant italic quote — Jucier-inspired editorial type */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="flex-1"
          >
            <p
              className="font-accent-italic leading-[0.9]"
              style={{
                fontSize: "clamp(3rem, 8vw, 7.5rem)",
                color: "#F2EFE8",
              }}
            >
              &ldquo;Not just a coffee shop.{" "}
              <em
                className="not-italic"
                style={{ color: "#D97706" }}
              >
                A ritual.
              </em>
              &rdquo;
            </p>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex lg:flex-col gap-12 lg:gap-8 lg:min-w-[200px] lg:pb-3"
          >
            {[
              { number: 98, suffix: "k+", label: "Cups Served", sub: "since 2019" },
              { number: 5, suffix: "yrs", label: "Crafted", sub: "est. Karachi" },
              { number: 12, suffix: "+", label: "Origins", sub: "seasonal rotation" },
            ].map((s, i) => (
              <div key={s.label}>
                <span
                  className="font-display font-light block"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#D97706", lineHeight: 1 }}
                >
                  <CountUp to={s.number} suffix={s.suffix} />
                </span>
                <span className="font-sans text-sm font-medium block mt-1" style={{ color: "#F2EFE8" }}>
                  {s.label}
                </span>
                <span className="font-sans text-xs block" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {s.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="mx-16 h-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* ── PART 2: Three pillars — horizontal editorial strip ── */}
      <div className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div style={{ width: 32, height: 1, background: "#D97706" }} />
          <span
            className="font-sans text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "#D97706" }}
          >
            Our Philosophy
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group"
            >
              {/* Image thumb */}
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(13,12,10,0.35)" }}
                />
                {/* Number badge */}
                <div
                  className="absolute top-4 left-4 font-display text-5xl font-light"
                  style={{ color: "rgba(217,119,6,0.6)", lineHeight: 1 }}
                >
                  {pillar.num}
                </div>
              </div>

              {/* Text */}
              <div
                className="h-px w-8 mb-5 transition-all duration-500 group-hover:w-16"
                style={{ background: "#D97706" }}
              />
              <h3
                className="font-display text-2xl font-light mb-3 transition-colors duration-300"
                style={{ color: "#F2EFE8" }}
              >
                {pillar.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── PART 3: Full-width marquee ticker ── */}
      <div
        className="py-8 overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} className="flex items-center gap-0">
              {[
                "Specialty Coffee",
                "Single Origin",
                "Direct Trade",
                "SCA Certified",
                "Artisan Pastry",
                "Cold Brew",
                "Pour Over",
                "Karachi's Finest",
              ].map((word) => (
                <span
                  key={word}
                  className="font-display text-2xl font-light whitespace-nowrap px-10"
                  style={{ color: "rgba(255,255,255,0.12)" }}
                >
                  {word}
                  <span className="ml-10 font-accent-italic" style={{ color: "rgba(217,119,6,0.35)" }}>
                    ✦
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

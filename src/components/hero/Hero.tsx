"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 140]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#080706" }}
    >
      {/* ── Full-bleed BG Image with Parallax ── */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 scale-110 pointer-events-none"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Saffron & Steam – cinematic espresso"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay system */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to bottom, rgba(8,7,6,0.55) 0%, transparent 35%)",
              "linear-gradient(to top, rgba(8,7,6,0.95) 0%, rgba(8,7,6,0.5) 40%, transparent 70%)",
              "linear-gradient(to right, rgba(8,7,6,0.7) 0%, transparent 60%)",
            ].join(", "),
          }}
        />
      </motion.div>

      {/* ── Floating noise grain ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />


      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center pt-32 pb-24 px-8 md:px-16 max-w-7xl mx-auto w-full"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <div style={{ width: 40, height: 1, background: "#D97706" }} />
          <span
            className="font-sans text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "#D97706" }}
          >
            Est. 2019 · Specialty Coffee · Karachi
          </span>
        </motion.div>

        {/* Headline — cinematic stagger */}
        <h1
          className="font-display font-light leading-[0.95] mb-10 overflow-hidden"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "#F2EFE8" }}
        >
          {["Where Every", "Cup Tells", "A Story."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.8 + i * 0.14,
                  duration: 1,
                  ease: [0.77, 0, 0.175, 1],
                }}
              >
                {i === 1 ? (
                  <>
                    Cup{" "}
                    <em
                      className="font-accent-italic not-italic"
                      style={{ color: "#D97706" }}
                    >
                      Tells
                    </em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom row — description + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="font-sans text-base md:text-lg leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Specialty coffee, single-origin beans, and artisan pastries — served
            in a space designed for those who believe in the ritual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <a href="/menu">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300"
                style={{ background: "#D97706", color: "#080706", fontWeight: 600 }}
              >
                Explore Menu
              </motion.button>
            </a>
            <a href="/reserve">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Reserve
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating stat pills ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4"
      >
        {[
          { val: "98k+", label: "Cups Served" },
          { val: "5★", label: "Avg Rating" },
          { val: "2019", label: "Est. Year" },
        ].map((stat) => (
          <div
            key={stat.val}
            className="rounded-2xl px-5 py-4 text-right"
            style={{
              background: "rgba(8,7,6,0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="font-display text-2xl font-light" style={{ color: "#F2EFE8" }}>
              {stat.val}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span
          className="font-sans text-[10px] uppercase tracking-[0.25em]"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "rgba(255,255,255,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background: "#D97706",
            }}
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

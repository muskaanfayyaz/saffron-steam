"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function BlurIn({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(12px)", opacity: 0, y: 20 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function NumberTicker({ 
  value, 
  suffix = "", 
  className = "" 
}: { 
  value: number; 
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (current) => `${Math.round(current)}${suffix}`);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

export function AnimatedTestimonials({
  testimonials,
  interval = 5000,
  dark = false
}: {
  testimonials: { text: string; author: string }[];
  interval?: number;
  dark?: boolean;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(t);
  }, [testimonials.length, interval]);

  return (
    <div className="relative w-full min-h-[220px] flex items-center justify-center overflow-hidden">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{
            opacity: active === i ? 1 : 0,
            y: active === i ? 0 : 30,
            filter: active === i ? "blur(0px)" : "blur(10px)",
            pointerEvents: active === i ? "auto" : "none",
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute w-full px-4 flex flex-col items-center text-center justify-center"
        >
          <blockquote 
            className="font-display font-light leading-relaxed mb-8 max-w-2xl"
            style={{ 
              fontSize: "clamp(1.2rem, 3.5vw, 2rem)", 
              color: dark ? "#F2EFE8" : "#1C1917" 
            }}
          >
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <p 
            className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold" 
            style={{ color: dark ? "rgba(255,255,255,0.4)" : "#D97706" }}
          >
            {t.author}
          </p>
        </motion.div>
      ))}
      <div className="absolute -bottom-8 flex gap-2">
        {testimonials.map((_, i) => (
          <div 
            key={i}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ 
              width: active === i ? 24 : 8,
              background: active === i ? "#D97706" : "rgba(217,119,6,0.2)"
            }}
          />
        ))}
      </div>
    </div>
  );
}

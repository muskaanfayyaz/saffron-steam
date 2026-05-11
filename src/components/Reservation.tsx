"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export function Reservation() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <section
      id="reserve"
      className="relative w-full overflow-hidden"
      style={{ background: "#0D0C0A" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.35), transparent)" }}
      />

      {/* Full split layout */}
      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        {/* ─── LEFT: Info panel with image bg ─── */}
        <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-auto">
          <Image
            src="/hero-bg.jpg"
            alt="Saffron & Steam interior"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(13,12,10,0.85) 0%, rgba(13,12,10,0.65) 100%)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-10 lg:p-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div style={{ width: 32, height: 1, background: "#D97706" }} />
                <span
                  className="font-sans text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: "#D97706" }}
                >
                  Reservations
                </span>
              </motion.div>

              <div className="overflow-hidden mb-3">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                  className="font-display font-light leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F2EFE8" }}
                >
                  Reserve Your
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                  className="font-accent-italic font-light leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#D97706" }}
                >
                  Table
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-sans text-sm leading-relaxed max-w-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                We hold tables for up to 8 guests. Walk-ins are welcome, but a reservation ensures you get our best spot.
              </motion.p>
            </div>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mt-10"
            >
              {[
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Zamzama Boulevard",
                  sub: "DHA Phase 5, Karachi",
                },
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Mon – Sun",
                  sub: "7:30 AM – 11:30 PM",
                },
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "+92 321 000 0000",
                  sub: "Reservations & enquiries",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(217,119,6,0.12)", color: "#D97706" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium" style={{ color: "#F2EFE8" }}>
                      {item.title}
                    </p>
                    <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ─── RIGHT: Form panel ─── */}
        <div
          className="lg:w-[55%] flex items-center justify-center p-8 md:p-16"
          style={{ background: "#141210" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-lg"
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #B45309, #D97706)" }}
                  >
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-light" style={{ color: "#F2EFE8" }}>
                    Reservation Received
                  </h3>
                  <p className="font-sans text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    We&apos;ll confirm your table via WhatsApp within a few minutes. See you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-light mb-6" style={{ color: "#F2EFE8" }}>
                    Make a Reservation
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Full Name", type: "text", placeholder: "Sara Riaz", id: "res-name" },
                      { label: "Phone", type: "tel", placeholder: "+92 300 0000000", id: "res-phone" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label
                          htmlFor={f.id}
                          className="font-sans text-[10px] uppercase tracking-widest block mb-2"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          className="w-full px-4 py-3.5 rounded-xl font-sans text-sm outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#F2EFE8",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Date", type: "date", id: "res-date" },
                      { label: "Time", type: "time", id: "res-time" },
                      { label: "Guests", type: "number", id: "res-guests", placeholder: "2", min: "1", max: "8" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label
                          htmlFor={f.id}
                          className="font-sans text-[10px] uppercase tracking-widest block mb-2"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          placeholder={"placeholder" in f ? f.placeholder : undefined}
                          min={"min" in f ? f.min : undefined}
                          max={"max" in f ? f.max : undefined}
                          required
                          className="w-full px-4 py-3.5 rounded-xl font-sans text-sm outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#F2EFE8",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      htmlFor="res-notes"
                      className="font-sans text-[10px] uppercase tracking-widest block mb-2"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Special Requests
                    </label>
                    <textarea
                      id="res-notes"
                      rows={3}
                      placeholder="Dietary requirements, occasion, seating preference..."
                      className="w-full px-4 py-3.5 rounded-xl font-sans text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#F2EFE8",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-3"
                    style={{
                      background: "#D97706",
                      color: "#0D0C0A",
                      fontWeight: 600,
                    }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black"
                        />
                        Confirming...
                      </>
                    ) : (
                      <>
                        Confirm Reservation
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-sans text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                    No credit card required · Confirmation via WhatsApp
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

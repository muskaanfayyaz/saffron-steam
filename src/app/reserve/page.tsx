"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BlurIn } from "@/components/ui/motion";
import { Footer } from "@/components/Footer";

export default function ReservePage() {
  const [formState, setFormState] = useState({
    name: "", phone: "", date: "", time: "", size: "1-2", occasion: "None", notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would ping an API.
  };

  return (
    <main className="w-full bg-[#FAFAF7] text-[#1C1917] min-h-screen">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PAGE HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full pt-40 pb-20 px-6 text-center border-b border-[#E7E2D9]">
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px" }} />
        
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#B45309] mb-4 relative z-10">
          Come Sit With Us
        </p>
        <BlurIn>
          <h1 className="font-display font-light text-6xl md:text-8xl mb-6 relative z-10">Reserve Your Table</h1>
        </BlurIn>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-sans text-sm md:text-base text-[#78716C] relative z-10 max-w-sm mx-auto"
        >
          We keep a few tables for people who plan ahead.<br/>
          The rest are first-come, first-served —<br/>
          but this one will have your name on it.
        </motion.p>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN CONTENT (FORM & INFO)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: RESERVATION FORM */}
        <div className="lg:w-[55%]">
          <BlurIn>
            <div className="p-8 md:p-12 rounded-3xl border border-[#B45309]/20 shadow-2xl relative overflow-hidden"
                 style={{ background: "rgba(250, 250, 247, 0.9)", backdropFilter: "blur(20px)" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97706]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="mb-10 relative z-10">
                <h2 className="font-display text-4xl mb-2">Make a Reservation</h2>
                <p className="font-sans text-sm text-[#78716C]">We&apos;ll confirm by WhatsApp within the hour.</p>
              </div>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center relative z-10">
                  <div className="w-16 h-16 bg-[#D97706]/20 text-[#D97706] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                  <h3 className="font-display text-3xl mb-4">Request Received</h3>
                  <p className="font-sans text-sm text-[#78716C]">Thank you, {formState.name || "friend"}. We have received your request for {formState.size} people. You will receive a WhatsApp confirmation shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Full Name</label>
                      <input required type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors" placeholder="Jane Doe" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Phone Number</label>
                      <input required type="tel" value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors" placeholder="+92 3XX XXXXXXX" />
                      <p className="text-[9px] text-[#A8A29E] mt-1">WhatsApp preferred</p>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Date</label>
                      <input required type="date" min={new Date().toISOString().split("T")[0]} value={formState.date} onChange={e => setFormState({...formState, date: e.target.value})} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Time</label>
                      <select required value={formState.time} onChange={e => setFormState({...formState, time: e.target.value})} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors appearance-none">
                        <option value="" disabled>Select a time</option>
                        {Array.from({length: 31}).map((_, i) => {
                          const hour = Math.floor(i / 2) + 7;
                          const min = i % 2 === 0 ? "30" : "00";
                          const actualHour = i % 2 === 0 ? hour : hour + 1;
                          if(actualHour > 22) return null;
                          const ampm = actualHour >= 12 ? "PM" : "AM";
                          const displayHour = actualHour > 12 ? actualHour - 12 : actualHour;
                          return <option key={i} value={`${displayHour}:${min} ${ampm}`}>{`${displayHour}:${min} ${ampm}`}</option>
                        })}
                      </select>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Party Size</label>
                      <select value={formState.size} onChange={e => setFormState({...formState, size: e.target.value})} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors appearance-none">
                        <option value="1-2">1–2 People</option>
                        <option value="3-4">3–4 People</option>
                        <option value="5-6">5–6 People</option>
                        <option value="7-8">7–8 People</option>
                        <option value="9+">9+ (Call us)</option>
                      </select>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Occasion</label>
                      <select value={formState.occasion} onChange={e => setFormState({...formState, occasion: e.target.value})} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors appearance-none">
                        <option value="None">None</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Business Meeting">Business Meeting</option>
                        <option value="First Date">First Date</option>
                        <option value="Just Because">Just Because</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-2">Special Requests</label>
                    <textarea value={formState.notes} onChange={e => setFormState({...formState, notes: e.target.value})} rows={3} className="w-full bg-transparent border-b border-[#E7E2D9] py-3 text-[#1C1917] focus:outline-none focus:border-[#D97706] transition-colors resize-none" placeholder="Dietary requirements, accessibility needs, or anything else we should know..." />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="pt-4">
                    <button type="submit" className="w-full font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 bg-[#B45309] text-white rounded-full font-semibold relative overflow-hidden group">
                      <span className="relative z-10">Request Table</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>
                    <div className="mt-6 space-y-2 font-sans text-xs text-[#78716C] text-center">
                      <p>✓ No payment required to reserve</p>
                      <p>✓ Free cancellation up to 2 hours before</p>
                      <p>✓ We&apos;ll confirm via WhatsApp</p>
                    </div>
                  </motion.div>
                </form>
              )}
            </div>
          </BlurIn>
        </div>

        {/* RIGHT: INFO PANEL */}
        <div className="lg:w-[45%] flex flex-col gap-12">
          <BlurIn delay={0.2}>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">We&apos;re Open</p>
            <div className="space-y-3 font-sans text-sm text-[#1C1917]">
              <div className="flex justify-between border-b border-[#E7E2D9] pb-3"><span>Monday – Friday</span><span>7:30 AM – 11:00 PM</span></div>
              <div className="flex justify-between border-b border-[#E7E2D9] pb-3"><span>Saturday – Sunday</span><span>8:00 AM – 11:30 PM</span></div>
              <div className="flex justify-between pb-3"><span>Public Holidays</span><span>9:00 AM – 10:00 PM</span></div>
            </div>
          </BlurIn>

          <BlurIn delay={0.3}>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">Find Us</p>
            <div className="font-sans text-sm text-[#1C1917] space-y-1 mb-6">
              <p>Zamzama Boulevard</p>
              <p>DHA Phase 5, Karachi</p>
              <p>Pakistan</p>
            </div>
            <div className="w-full h-32 rounded-xl bg-[#E8DFD0] border border-[#D97706]/20 mb-4 flex items-center justify-center text-[#B45309] font-sans text-xs uppercase tracking-widest">
              [ Map Placeholder ]
            </div>
            <p className="font-sans text-xs text-[#78716C]">10 mins from Dolmen Mall Clifton <br/> Free parking on the street after 6PM</p>
          </BlurIn>

          <BlurIn delay={0.4}>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">Get in Touch</p>
            <div className="font-sans text-sm text-[#1C1917] space-y-3">
              <p>📞 <span className="ml-3">+92 321 555 0190</span></p>
              <p>📱 <span className="ml-3 text-[#78716C]">WhatsApp preferred</span></p>
              <p>📧 <span className="ml-3">hello@saffronandsteam.pk</span></p>
              <p>📸 <span className="ml-3">@saffronandsteam</span></p>
            </div>
          </BlurIn>

          <BlurIn delay={0.5}>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">Before You Arrive</p>
            <ul className="space-y-3 font-sans text-sm text-[#78716C] list-disc pl-4">
              <li>Tables held for 15 minutes past reservation time</li>
              <li>For parties of 9 or more, please call directly</li>
              <li>We are a specialty coffee house — no shisha</li>
              <li>Children welcome. High chairs available on request</li>
              <li>Both indoor and outdoor seating available</li>
            </ul>
          </BlurIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT TO EXPECT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-[#E7E2D9]">
        <BlurIn className="mb-16 text-center">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-2">Your Visit</p>
          <h2 className="font-display text-4xl">What a morning at<br/>Saffron & Steam looks like.</h2>
        </BlurIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🚪", title: "Arrive", desc: "Walk in, find your table, settle in. There's no rush here. Order when you're ready." },
            { icon: "☕", title: "Order", desc: "Your barista will walk you through the menu. Ask what's fresh. They'll tell you honestly." },
            { icon: "🕰️", title: "Stay", desc: "Tables are yours for as long as you need them. We don't turn the music up to hint at closing time." }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-white border border-[#E7E2D9] text-center"
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3 className="font-display text-2xl mb-3">{card.title}</h3>
              <p className="font-sans text-sm text-[#78716C] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CLOSING CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 text-center bg-[#F2EFE8]">
        <BlurIn>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-6">
            Not ready to commit?<br/>Just walk in.
          </h2>
          <p className="font-sans text-sm text-[#78716C] max-w-sm mx-auto mb-10">
            Most seats are walk-in. We always find room for one more good conversation.
          </p>
          <Link href="/menu" className="inline-flex font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 border border-[#B45309] text-[#B45309] rounded-full font-semibold transition-colors hover:bg-[#B45309]/10">
            View the Menu
          </Link>
        </BlurIn>
      </section>

      <Footer />
    </main>
  );
}

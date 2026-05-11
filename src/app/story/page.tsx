"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlurIn, NumberTicker, AnimatedTestimonials } from "@/components/ui/motion";
import { Footer } from "@/components/Footer";
const TIMELINE = [
  { year: "2019", text: "First cup served. 12 seats. One dream. One grinder that broke on day three." },
  { year: "2020", text: "Survived. You know why this one matters. We stayed open for the city that needed somewhere to go." },
  { year: "2021", text: "Opened our second location in Gulshan-e-Iqbal. Twice the tables. The same obsession." },
  { year: "2022", text: "Launched weekend cupping sessions. Regulars became regulars who knew what a V60 was." },
  { year: "2023", text: "Named Best Independent Café, Dawn Food Awards. We cried a little. We didn't tell anyone." },
  { year: "2024", text: "Opened our micro-roastery. We now roast every bean we serve. The cycle is complete." },
  { year: "2025", text: "Still independent. Still on Zamzama. Still making it count, cup by cup." }
];

const TEAM = [
  { 
    name: "Zara Siddiqui", 
    role: "Founder & Head Roaster", 
    img: "/zara Siddiqui.png", 
    text: "Zara came back from Istanbul with an obsession and a notebook full of coffee recipes. She still pulls the first shot every morning." 
  },
  { 
    name: "Bilal Khan", 
    role: "Head Barista", 
    img: "/Bilal Khan.png", 
    text: "Bilal has been with Saffron & Steam since week two. He invented the Cardamom Cappuccino on a quiet Tuesday and hasn't stopped experimenting since." 
  },
  { 
    name: "Aisha Mirza", 
    role: "Pastry Chef", 
    img: "/Aisha Mirza.png", 
    text: "Aisha arrives at 5AM so you don't have to think about it. She trained in Paris, came home to Karachi, and decided croissants deserve better butter." 
  }
];

const TESTIMONIALS = [
  { text: "I wrote my thesis here. Ordered the pour over every single day for three months. I don't know which one I'm more proud of.", author: "Hina M., Architect" },
  { text: "Saffron & Steam doesn't feel like a brand. It feels like someone actually cares. You taste the difference.", author: "Omar F., Regular since Day 1" },
  { text: "The Saffron Latte alone is worth the drive from Gulshan. I've tried to recreate it at home. I've failed every time.", author: "Sara K., Food Writer" },
  { text: "I've been to coffee shops on four continents. This one has something most of them don't — soul. It sounds like a cliché until you sit there for an hour.", author: "Bilal A., Traveller" },
  { text: "My 7AM cortado is non-negotiable. My team knows not to schedule anything before my Saffron & Steam run.", author: "Nadia R., Doctor" }
];

export default function StoryPage() {
  return (
    <main className="w-full bg-[#FAFAF7] text-[#1C1917] overflow-hidden">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PAGE HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center border-b border-[#E7E2D9]">
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px" }} />
        
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#B45309] mb-4 relative z-10">
          Who We Are
        </p>
        <BlurIn>
          <h1 className="font-display font-light text-6xl md:text-8xl mb-6 relative z-10">Our Story</h1>
        </BlurIn>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-sans text-sm md:text-base text-[#78716C] relative z-10 max-w-sm mx-auto"
        >
          We didn&apos;t open a coffee shop.<br/>We built the place we always wished existed.
        </motion.p>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: THE BEGINNING
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 max-w-4xl mx-auto text-center">
        <BlurIn>
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">2019 · Karachi</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.1] mb-16">It Started With<br/>a Bad Cup</h2>
          
          <blockquote className="font-accent-italic text-3xl md:text-4xl text-[#D97706] mb-16">
            &ldquo;Why couldn&apos;t Karachi have coffee this good?&rdquo;
          </blockquote>
        </BlurIn>

        <div className="font-sans text-sm md:text-base text-[#5C534A] leading-relaxed space-y-8 text-left max-w-2xl mx-auto">
          {["In 2019, our founder Zara Siddiqui came back from six months in Istanbul with one obsession and not much else. She had spent her mornings in tiny neighbourhood cafes where the barista knew the origin of every bean and the coffee tasted like something that mattered.",
            "She came home to Karachi and found franchise chains and instant coffee dressed up in expensive cups. She didn't want to complain about it. She wanted to fix it. Saffron & Steam opened six months later in a rented shopfront on Zamzama Boulevard — 12 seats, one espresso machine, a secondhand grinder, and more ambition than sense.",
            "The name came from the first drink she ever made that felt right: a saffron-steeped espresso pulled on a cold December morning, steam rising from the cup like a small quiet ceremony. That was the feeling she wanted to bottle."
          ].map((text, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: THE PHILOSOPHY
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 bg-[#1A1208] text-[#F2EFE8] flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 max-w-xl mx-auto lg:mx-0">
          <BlurIn>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#D97706] mb-4">How We Think</p>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.1] mb-10">We Believe Coffee<br/>is a Conversation</h2>
            <div className="font-sans text-sm text-white/60 space-y-6 leading-relaxed mb-12">
              <p>Every bean we use is traceable. We know the farm, the altitude, the harvest season, and the name of the cooperative we bought it from. We roast in small batches every week so nothing ever sits. We brew to order because shortcuts show up in the cup and we respect you too much for that.</p>
              <p>This isn&apos;t pretension — it&apos;s just what happens when you actually care about the thing you&apos;re making. Coffee done right is a small act of respect. You came in, you sat down, you gave us a few minutes of your morning. The least we can do is make them count.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {["Traceable Beans", "Weekly Roast", "Brewed to Order", "Zero Shortcuts"].map(pill => (
                <span key={pill} className="font-sans text-[10px] uppercase tracking-widest px-4 py-2 border border-white/20 rounded-full">
                  {pill}
                </span>
              ))}
            </div>
          </BlurIn>
        </div>
        <div className="lg:w-1/2 h-[500px] w-full relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[80%] h-full rounded-2xl overflow-hidden relative shadow-2xl border border-white/10"
          >
            <Image src="/image copy 2.png" alt="Saffron & Steam Bar" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[#D97706] mix-blend-overlay opacity-10" />
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: TIMELINE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 max-w-3xl mx-auto">
        <BlurIn className="mb-20 text-center md:text-left">
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">The Journey</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">Six years.<br/>Every one of them earned.</h2>
        </BlurIn>

        <div className="relative border-l border-[#D97706]/30 ml-4 md:ml-0 pl-8 md:pl-12 space-y-16">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-3 h-3 rounded-full bg-[#D97706] shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
              <h3 className="font-display text-3xl text-[#B45309] mb-2">{t.year}</h3>
              <p className="font-sans text-sm md:text-base text-[#5C534A] leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: THE TEAM
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 bg-[#F2EFE8]">
        <div className="max-w-7xl mx-auto">
          <BlurIn className="mb-20 text-center">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">The People</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Made by humans<br/>who mean it.</h2>
          </BlurIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-white p-8 rounded-2xl border border-[#E7E2D9] transition-transform hover:-translate-y-2 hover:shadow-xl text-center"
              >
                <div 
                  className="relative w-24 h-24 mx-auto rounded-full mb-6 shadow-inner overflow-hidden border-2 border-[#D97706]/20"
                >
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl mb-1 transition-colors group-hover:text-[#B45309]">{member.name}</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-[#78716C] mb-6">{member.role}</p>
                <p className="font-sans text-sm text-[#5C534A] leading-relaxed">{member.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: THE COMMUNITY
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-16 text-center max-w-4xl mx-auto">
        <BlurIn>
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#B45309] mb-4">Karachi Made Us</p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-8">The city shaped this<br/>place as much as we did.</h2>
          <div className="font-sans text-sm md:text-base text-[#5C534A] space-y-6 max-w-2xl mx-auto mb-16">
            <p>Our regulars are writers finishing chapters, architects between meetings, students pulling all-nighters before finals, parents stealing 20 quiet minutes before the day starts. Every table has heard something important.</p>
            <p>We didn&apos;t build Saffron & Steam for a demographic. We built it for anyone who needed somewhere that felt real. Karachi gave us that back a thousand times over.</p>
          </div>
        </BlurIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#E7E2D9]">
          {[
            { val: 6, suffix: "+", label: "Years Open" },
            { val: 2, suffix: "", label: "Locations" },
            { val: 380, suffix: "+", label: "Five-Star Reviews" },
            { val: 10, suffix: "+", label: "Coffees on Bar" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-display text-4xl text-[#B45309] mb-2"><NumberTicker value={stat.val} suffix={stat.suffix} /></p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-[#78716C]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6: TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 bg-[#1A1208] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <BlurIn className="mb-16">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#D97706] mb-4">Guests Say</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-4">Loved across the city.</h2>
            <p className="font-sans text-sm text-white/50">4.9 from 380+ reviews</p>
          </BlurIn>
          
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <AnimatedTestimonials testimonials={TESTIMONIALS} interval={6000} dark={true} />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CLOSING CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-6 text-center">
        <BlurIn>
          <h2 className="font-display text-6xl md:text-8xl font-light leading-[0.9] mb-8">
            Come and see<br/>for yourself.
          </h2>
          <p className="font-sans text-sm text-[#78716C] max-w-sm mx-auto mb-12">
            The door is open. The kettle is on.<br/>Your table is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reserve" className="w-full sm:w-auto font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 bg-[#B45309] text-white rounded-full font-semibold transition-transform hover:scale-105">
              Reserve a Table
            </Link>
            <Link href="/menu" className="w-full sm:w-auto font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 border border-[#B45309] text-[#B45309] rounded-full transition-colors hover:bg-[#B45309]/10">
              View the Menu
            </Link>
          </div>
        </BlurIn>
      </section>

      <Footer />
    </main>
  );
}

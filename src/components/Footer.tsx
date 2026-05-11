"use client";

import { motion } from "framer-motion";

const LINKS = {
  Visit: ["Menu", "Gallery", "Reservations", "Locations"],
  Discover: ["Our Story", "Brewing Method", "Bean Origins", "Press"],
  Connect: ["Instagram", "Facebook", "WhatsApp", "Newsletter"],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#080706", color: "#F2EFE8" }}
    >
      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-10">
        
        {/* Top Massive Brand Mark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left border-b pb-12"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <h2 
            className="font-display font-light tracking-tight leading-[0.85]" 
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)", color: "#F2EFE8" }}
          >
            Saffron &amp; <em className="font-accent-italic" style={{ color: "#D97706" }}>Steam</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Newsletter / Brand Col */}
          <div className="md:col-span-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] mb-5" style={{ color: "#D97706" }}>
                Join the Ritual
              </p>
              <p className="font-sans text-sm leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Subscribe to receive updates on new single-origin drops, seasonal menu changes, and exclusive events.
              </p>
              
              <form className="relative max-w-sm mb-12">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-transparent border-b border-white/20 pb-3 font-sans text-sm outline-none transition-colors focus:border-[#D97706]"
                  style={{ color: "#F2EFE8" }}
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 text-[10px] uppercase tracking-widest font-semibold transition-colors hover:text-[#D97706]"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Submit
                </button>
              </form>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D97706";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#D97706";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(217,119,6,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Spacing col */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Link columns */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col sm:flex-row gap-12 sm:gap-20">
            {Object.entries(LINKS).map(([col, links], ci) => (
              <motion.div
                key={col}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <p
                  className="font-sans text-[10px] uppercase tracking-[0.25em] mb-6"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {col}
                </p>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-sans text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#D97706")}
                        onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Hours col */}
          <div className="md:col-span-3 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
                Locations & Hours
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-sm font-semibold mb-1" style={{ color: "#F2EFE8" }}>Zamzama Blvd</p>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    DHA Phase 5, Karachi<br/>
                    Mon-Sun: 7:30 AM – 11:30 PM
                  </p>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold mb-1" style={{ color: "#F2EFE8" }}>Clifton Block 4</p>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Near Abdullah Shah Ghazi<br/>
                    Mon-Sun: 8:00 AM – 12:00 AM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Saffron &amp; Steam. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((t) => (
              <a
                key={t}
                href="#"
                className="font-sans text-xs transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#D97706")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

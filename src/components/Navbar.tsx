"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/story" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reserve", href: "/reserve" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use light text if we are on the homepage (since it's a dark hero image)
  // Otherwise use dark text for the cream-colored interior pages
  const isHome = pathname === "/";
  const navColor = isHome ? "rgba(255,255,255,0.7)" : "#5C534A";
  const navHoverColor = isHome ? "#D97706" : "#B45309";
  const brandColor = isHome ? "#F2EFE8" : "#1C1917";
  const bgStyle = scrolled 
    ? (isHome ? "rgba(8,7,6,0.85)" : "rgba(250,250,247,0.9)") 
    : "transparent";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b"
      style={{ 
        background: bgStyle,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderColor: scrolled 
          ? (isHome ? "rgba(255,255,255,0.05)" : "rgba(180,83,9,0.1)") 
          : "transparent"
      }}
    >
      <nav className="flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ 
              background: isHome ? "rgba(217,119,6,0.15)" : "rgba(180,83,9,0.1)", 
              border: `1px solid ${isHome ? "rgba(217,119,6,0.4)" : "rgba(180,83,9,0.3)"}` 
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: isHome ? "#D97706" : "#B45309" }} />
          </div>
          <span 
            className="font-display text-xl font-light tracking-[0.15em] transition-colors"
            style={{ color: brandColor }}
          >
            S&amp;S
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  className="font-sans text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                  style={{ color: isActive ? navHoverColor : navColor }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = navHoverColor)}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = isActive ? navHoverColor : navColor)}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-px"
                    style={{ background: navHoverColor }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/reserve">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="font-sans text-[11px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-colors duration-300"
              style={{
                background: isHome ? "rgba(217,119,6,0.15)" : "transparent",
                border: `1px solid ${isHome ? "rgba(217,119,6,0.5)" : "#B45309"}`,
                color: isHome ? "#D97706" : "#B45309",
              }}
            >
              Book a Table
            </motion.button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

"use client";

const ITEMS = [
  "Specialty Coffee",
  "Fresh Pastries",
  "Karachi's Finest",
  "Single Origin Beans",
  "Artisan Roasts",
  "Open Daily",
  "Est. 2019",
  "Saffron & Steam",
  "SCA Certified",
  "Pour Over Ritual",
  "Cold Brew",
  "Direct Trade",
];

const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function Marquee() {
  return (
    <div
      className="relative w-full py-5 overflow-hidden"
      style={{ background: "#0D0C0A" }}
      aria-hidden
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.4), transparent)" }}
      />
      {/* Bottom shimmer line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,119,6,0.4), transparent)" }}
      />

      <div className="flex">
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 mx-6 whitespace-nowrap"
            >
              <span
                className="font-display text-sm font-light tracking-[0.2em] uppercase"
                style={{ color: "rgba(217,119,6,0.7)" }}
              >
                {item}
              </span>
              <span
                className="font-accent-italic"
                style={{ color: "rgba(217,119,6,0.25)", fontSize: "0.6rem" }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

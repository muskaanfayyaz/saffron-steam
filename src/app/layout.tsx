import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { Navbar } from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saffron & Steam | Where Every Cup Tells a Story",
  description: "Specialty coffee roasted with precision. A premium cafe experience in Karachi's DHA, blending artisanal single-origin roasts with warm organic aesthetics.",
  keywords: ["saffron steam", "specialty coffee", "karachi cafe", "artisan coffee", "dha cafe"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${instrument.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground overflow-x-hidden" suppressHydrationWarning>
        <div className="page-curtain" />
        <CursorFollower />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

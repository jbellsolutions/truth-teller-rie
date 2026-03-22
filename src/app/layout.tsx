import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { NowPlayingBar } from "@/components/audio/NowPlayingBar";
import { AudioProvider } from "@/contexts/AudioContext";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Truth Teller Rie | Independent Music. Real Community.",
  description:
    "The home of Truth Teller Rie — conscious hip-hop and R&B. Listen, connect, and join the movement.",
  openGraph: {
    title: "Truth Teller Rie",
    description: "Independent music. Real community. No middlemen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)]">
        <AudioProvider>
          <Navbar />
          <main className="flex-1 pb-24">{children}</main>
          <NowPlayingBar />
        </AudioProvider>
      </body>
    </html>
  );
}

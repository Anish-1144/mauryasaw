import type { Metadata } from "next";
import { Geist, Geist_Mono, Domine, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MauryaFooter from "./components/MauryaFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "mouryasaw",
  description: "Maurya Saws Machine Tools",
  icons: {
    icon: "/logo-3.png",
    apple: "/logo-3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${domine.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
      >
        <Navbar />
        {children}
        <MauryaFooter />
      </body>
    </html>
  );
}

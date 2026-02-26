"use client";

import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import AnnouncementBanner from "./AnnouncementBanner";

export default function Navbar() {
  return (
    <header className="relative z-50 w-full">
      <AnnouncementBanner />

      {/* Glassmorphism nav bar */}
      <nav
        className="flex w-full justify-center border-b px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8"
        style={{
          fontFamily: "var(--font-barlow), sans-serif",
          background: "color-mix(in srgb, var(--color-sf) 85%, transparent)",
          backdropFilter: "blur(var(--blur-md))",
          WebkitBackdropFilter: "blur(var(--blur-md))",
          borderColor: "var(--color-st)",
        }}
      >
        <div className="flex w-full max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 [color:var(--color-black)]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <Image
              src="/logo3.png"
              alt="Maurya Saws Machine Tools"
              width={44}
              height={44}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
                Maurya Saws
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-500 sm:text-xs">
                Machine Tools
              </span>
            </div>
          </Link>

          <ShimmerButton
            className="relative z-10 py-2 shadow-lg"
            onClick={() => (window.location.href = "#")}
          >
            <span
              className="whitespace-nowrap text-xs font-bold uppercase tracking-wider !text-white sm:text-sm"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Visit site
            </span>
          </ShimmerButton>
        </div>
      </nav>
    </header>
  );
}

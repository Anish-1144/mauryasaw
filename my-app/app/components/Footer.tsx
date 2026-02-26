"use client";

import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "X", href: "#", icon: "x" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden border-t border-white/20 pt-12 pb-4 font-sans"
      style={{
        background:
          "linear-gradient(180deg, #e2e8f4 0%, #e8ecf0 40%, #f0e8e0 70%, #f5e6d8 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-10 pb-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left: Brand, address, contact, personnel, regions, GST */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo3.png"
                alt="Maurya Saws Machine Tools"
                width={140}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-medium text-zinc-800">
              MAURYA SAWS MACHINE TOOLS
            </p>

            <div className="space-y-3 text-sm text-zinc-700">
              <p className="max-w-xs leading-relaxed">
                B No. - 163, Dashrath Bagh Colony, Near Kushwah Nagar, Tikariya
                Road, Indore - 452015, Madhya Pradesh, India
              </p>
              <p>
                <span className="font-medium text-zinc-800">Phone:</span>{" "}
                <a href="tel:07971550280" className="hover:underline">
                  07971550280
                </a>
              </p>
              <p>
                <span className="font-medium text-zinc-800">Key Personnel:</span>{" "}
                Mr Munna Maurya (Proprietor)
              </p>
              <p>
                <span className="font-medium text-zinc-800">Mobile:</span>{" "}
                <a href="tel:07971550280" className="hover:underline">
                  07971550280
                </a>
              </p>
              <p>
                <a
                  href="#inquiry"
                  className="font-medium text-zinc-800 underline underline-offset-2 hover:no-underline"
                >
                  Send Inquiry
                </a>
              </p>
            </div>

            <div className="text-sm text-zinc-700">
              <p className="font-medium text-zinc-800">We deal in:</p>
              <p className="mt-1 leading-relaxed">
                Chhattisgarh, Delhi, Gujarat, Haryana, Jharkhand, Madhya Pradesh,
                Maharashtra, Uttar Pradesh, Punjab, Rajasthan, Tamil Nadu.
              </p>
            </div>

            <p className="text-sm text-zinc-700">
              <span className="font-medium text-zinc-800">GST:</span>{" "}
              23AZNPM2796B1ZA
            </p>
          </div>

          {/* Right: Social + Visit site */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                Socials
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-lg bg-white/70 px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:bg-white hover:shadow"
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <ShimmerButton
              className="relative z-10 py-2 text-sm transition-shadow duration-150 shadow-[0_1px_0_0_rgba(255,255,255,0.18),0_2px_0_0_rgba(0,0,0,0.15),0_4px_0_0_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.35)] active:translate-y-0.5 active:shadow-[0_1px_0_0_rgba(0,0,0,0.2),0_2px_6px_rgba(0,0,0,0.25)]"
              onClick={() => (window.location.href = "#")}
            >
              <span className="whitespace-nowrap font-medium tracking-tight !text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]">
                Visit site
              </span>
            </ShimmerButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-zinc-200/80 pt-6 text-sm text-zinc-600 sm:flex-row">
          <p>Copyright MAURYA SAWS MACHINE TOOLS 2026</p>
          <p>All rights reserved, Indore - 452015</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import OrangeBannerIcon from "./OrangeBannerIcon";

const Sparkle = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M7 0C7 0 6.3 4.2 6.3 6.3C4.2 6.3 0 7 0 7C0 7 4.2 7.7 6.3 7.7C6.3 9.8 7 14 7 14C7 14 7.7 9.8 7.7 7.7C9.8 7.7 14 7 14 7C14 7 9.8 6.3 7.7 6.3C7.7 4.2 7 0 7 0Z"
      fill="white"
      style={{ filter: "drop-shadow(0 0 2px rgba(255,210,160,0.5))" }}
    />
  </svg>
);

const Arrow = () => (
  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
    <path
      d="M0.5 5H12.5M12.5 5L8 1M12.5 5L8 9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronPair = ({ flip = false }: { flip?: boolean }) => (
  <svg
    width="48"
    height="40"
    viewBox="0 0 48 40"
    fill="none"
    className="h-8 w-10 sm:h-10 sm:w-12"
    style={flip ? { transform: "scaleX(-1)" } : {}}
  >
    <path d="M34 0H48L28 20L48 40H34L14 20Z" fill="#C85A20" fillOpacity="0.48" />
    <path d="M20 0H34L14 20L34 40H20L0 20Z" fill="#E8922C" fillOpacity="0.4" />
  </svg>
);

const ChevronSide = ({ align }: { align: "left" | "right" }) => {
  const isRight = align === "right";
  return (
    <div
      className="absolute top-0 h-8 w-44 overflow-hidden sm:h-10 sm:w-80 md:w-96"
      style={{
        [align]: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: isRight ? "row-reverse" : "row",
        pointerEvents: "none",
        WebkitMaskImage: isRight
          ? "linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
          : "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        maskImage: isRight
          ? "linear-gradient(to left, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)"
          : "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="shrink-0"
          style={{
            marginLeft: isRight ? 0 : i === 0 ? 0 : -10,
            marginRight: isRight ? (i === 0 ? 0 : -10) : 0,
          }}
        >
          <ChevronPair flip={isRight} />
        </div>
      ))}
    </div>
  );
};

export default function AnnouncementBanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full min-h-9 overflow-hidden cursor-pointer select-none sm:min-h-10 font-sans"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Layer 1: Base gradient — stronger vertical + horizontal variation */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #E09448 0%, #E8A858 25%, #EAA050 50%, #E8A858 75%, #E09448 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(90deg, #E8A050 0%, #E08A40 18%, #D97A35 38%, #D17030 50%, #D97A35 62%, #E08A40 82%, #E8A050 100%)",
        }}
      />

      {/* Layer 2: Soft blurred overlay — slightly stronger for more depth */}
      <div
        className="absolute -inset-2 sm:-inset-3"
        style={{
          background:
            "linear-gradient(90deg, #F0A858 0%, #E89048 25%, #E08038 50%, #E89048 75%, #F0A858 100%)",
          filter: "blur(14px)",
          opacity: 0.5,
        }}
      />

      <ChevronSide align="left" />
      <ChevronSide align="right" />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-4 px-3 sm:px-4">
        <a
          href="#"
          className="flex items-center gap-1.5 sm:gap-2 transition-transform duration-150 ease-out"
          style={{
            transform: hovered ? "scale(1.03) translateY(-0.5px)" : "scale(1) translateY(0)",
          }}
        >
          <div
            className="shrink-0"
            style={{
              filter: "drop-shadow(0 1px 0 rgba(100,45,15,0.4))",
            }}
          >
            <OrangeBannerIcon width={28} height={29} className="h-6 w-[27px] sm:h-7 sm:w-8" />
          </div>

          <span
            className="shrink-0 rounded px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white sm:text-[9px] sm:px-2"
            style={{
              background: "linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)",
              boxShadow:
                "0 1px 0 #1a1a1a, 0 2px 0 #151515, 0 3px 6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
              border: "0.5px solid rgba(0,0,0,0.25)",
            }}
          >
            NEW
          </span>

          <span
            className="text-white text-xs font-normal tracking-tight sm:text-[13px]"
            style={{
              textShadow:
                "0 1px 0 rgba(100,45,10,0.5), 0 2px 0 rgba(70,30,5,0.35), 0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Indus is live in beta.{" "}
            <span
              className="font-semibold"
              style={{
                textShadow:
                  "0 1px 0 rgba(100,45,10,0.55), 0 2px 0 rgba(70,30,5,0.4), 0 2px 5px rgba(0,0,0,0.25)",
              }}
            >
              Try Now
            </span>
          </span>

          <div
            className="shrink-0"
            style={{
              filter: "drop-shadow(0 1px 0 rgba(100,45,15,0.4))",
            }}
          >
            <Arrow />
          </div>

          <div
            className="shrink-0"
            style={{
              filter: "drop-shadow(0 1px 0 rgba(100,45,15,0.4))",
            }}
          >
            <OrangeBannerIcon width={28} height={29} className="h-6 w-[27px] sm:h-7 sm:w-8" />
          </div>
        </a>
      </div>
    </div>
  );
}

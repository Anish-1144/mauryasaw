import Image from "next/image";
import { MorphPanel } from "@/components/ui/ai-input";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Center logo just above main - smaller on mobile */}
      <div className="flex justify-center pt-1 sm:pt-2">
        <Image
          src="/center.svg"
          alt=""
          width={100}
          height={100}
          className="h-10 w-28 object-contain text-gray-400 sm:h-14 sm:w-40"
        />
      </div>
      <main className="flex items-center justify-center px-1.5 py-1.5 sm:px-2 sm:py-2 lg:px-2">
        {/* White rounded card - slightly smaller on mobile */}
        <article className="relative w-full max-w-7xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/40 max-sm:rounded-xl sm:rounded-4xl">
          {/* Top left */}
          <div
            className="pointer-events-none absolute left-3 top-3 h-7 w-7 scale-y-[-1] text-gray-300 max-sm:left-2 max-sm:top-2 max-sm:h-6 max-sm:w-6 sm:left-6 sm:top-6 sm:h-11 sm:w-11"
            aria-hidden
          >
            <Image
              src="/pdf-lift.svg"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          {/* Top right */}
          <div
            className="pointer-events-none absolute right-3 top-3 h-7 w-7 scale-x-[-1] scale-y-[-1] text-gray-300 max-sm:right-2 max-sm:top-2 max-sm:h-6 max-sm:w-6 sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            aria-hidden
          >
            <Image
              src="/pdf-lift.svg"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          {/* Bottom left */}
          <div
            className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 text-gray-300 max-sm:bottom-2 max-sm:left-2 max-sm:h-6 max-sm:w-6 sm:bottom-6 sm:left-6 sm:h-11 sm:w-11"
            aria-hidden
          >
            <Image
              src="/pdf-lift.svg"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          {/* Bottom right */}
          <div
            className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 scale-x-[-1] text-gray-300 max-sm:bottom-2 max-sm:right-2 max-sm:h-6 max-sm:w-6 sm:right-6 sm:bottom-6 sm:h-11 sm:w-11"
            aria-hidden
          >
            <Image
              src="/pdf-lift.svg"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="px-3 py-3 sm:px-4 sm:py-4 lg:px-4 lg:py-4">
            {/* Center logo - smaller on mobile */}
            <div
              className="mx-auto mb-4 flex h-9 w-9 shrink-0 items-center justify-center text-gray-300 max-sm:mb-3 max-sm:h-8 max-sm:w-8 sm:mb-6 sm:h-12 sm:w-12"
              aria-hidden
            >
              <Image
                src="/center logo.svg"
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Title */}
            <h1 className="font-serif mx-auto max-w-2xl text-center text-base font-medium leading-tight tracking-tight text-[#1A1A1A] sm:text-xl md:text-2xl">
              MAURYA SAWS MACHINE TOOLS
            </h1>

            {/* Body - shortened on mobile, full on larger screens */}
            <div className="mx-auto mt-3 max-w-5xl space-y-3 text-center text-[#4B5563] max-sm:mt-2 max-sm:space-y-2 max-sm:px-1 sm:mt-6 sm:space-y-4 sm:px-0">
              {/* Mobile: 5-line max, condensed text */}
              <div className="sm:hidden">
                <p className="mx-auto max-w-[95%] text-xs leading-[1.65] line-clamp-5">
                  Since 2019, Maurya Saws Machine Tools supplies quality cutting
                  tools and machines such as Bandsaw, TCT, M42 Bi-Metal and HSS
                  Blades at competitive prices. We deliver the best solutions for
                  your cutting needs. Get your blades from us.
                </p>
              </div>
              {/* Desktop: full text */}
              <div className="hidden sm:block sm:space-y-4">
                <p className="text-base leading-[1.6] md:text-lg">
                  Started in 2019, Maurya Saws Machine Tools is a
                  customer-focused company providing high-quality cutting tools
                  and industrial machines. We supply products like Hydraulic
                  Heavy Duty Double Column Bandsaw Machines, TCT Saw Blades, M42
                  Bi-Metal Bandsaw Blades, HSS Bandsaw Blades, and more all at
                  genuine and competitive prices.
                </p>
                <p className="text-base leading-[1.6] md:text-lg">
                  We believe in building long-term relationships by offering
                  reliable products, honest pricing, and strong business values.
                  Our goal is simple: to give our customers the best solutions
                  for their cutting and machining needs.
                </p>
              </div>
            </div>

            {/* Dummy quotation - smaller on mobile */}
            <div className="mx-auto mt-5 max-w-3xl max-sm:mt-4 sm:mt-10">
              <h2 className="mb-3 text-center font-serif text-sm font-medium text-[#1A1A1A] max-sm:mb-2 max-sm:text-base sm:text-lg">
                Sample Quotation
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50/50 max-sm:rounded-md">
                <table className="w-full text-left text-xs max-sm:text-[11px] sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-100/80">
                      <th className="px-2 py-2 font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        #
                      </th>
                      <th className="px-2 py-2 font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        Description
                      </th>
                      <th className="px-2 py-2 font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        Qty
                      </th>
                      <th className="px-2 py-2 font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        Rate (₹)
                      </th>
                      <th className="px-2 py-2 font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        Amount (₹)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#4B5563]">
                    <tr className="border-b border-gray-100">
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        1
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        Band Saw Blades (M42)
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        10
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        2,450
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        24,500
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        2
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        TCT Saw Blade (12&quot;)
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        5
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        1,800
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        9,000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        3
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        Bimetal Bandsaw Blade
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        8
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        1,200
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        9,600
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        4
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        HSS Saw Blades (Set)
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        3
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        3,500
                      </td>
                      <td className="px-2 py-2 max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        10,500
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={4}
                        className="px-2 py-2 text-right font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3"
                      >
                        Total
                      </td>
                      <td className="px-2 py-2 font-medium text-[#1A1A1A] max-sm:px-1.5 max-sm:py-1.5 sm:px-4 sm:py-3">
                        53,600
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-1.5 text-center text-[10px] text-[#4B5563] max-sm:mt-1 sm:mt-2 sm:text-xs">
                Quotation valid for 15 days. Prices exclude GST.
              </p>

              {/* Download as PDF button */}
              <div className="mt-4 flex justify-center max-sm:mt-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#1A1A1A] px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 max-sm:px-3 max-sm:py-1.5 max-sm:text-xs sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                  aria-label="Download quotation as PDF"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download as PDF
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Chat support - fixed bottom right, mobile responsive */}
        <div className="fixed bottom-0 right-0 z-10 p-3 pr-[max(0.75rem,env(safe-area-inset-right))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4">
          <MorphPanel />
        </div>
      </main>
      <div className="flex justify-center pt-1 sm:pt-2">
        <Image
          src="/center.svg"
          alt=""
          width={100}
          height={100}
          className="h-10 w-28 object-contain text-gray-400 sm:h-14 sm:w-40 scale-y-[-1]"
        />
      </div>
    </div>
  );
}

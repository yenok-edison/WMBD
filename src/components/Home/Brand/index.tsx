"use client";
import React from "react";
import Image from "next/image";

// ─── Brand data ───────────────────────────────────────────────────
// Replace src paths with your actual logo files.
// Use grayscale logos (PNG/SVG with transparent background) for best results.
const brands = [
  { name: "Google",      src: "/images/brand/google.svg" },
  { name: "Microsoft",   src: "/images/brand/microsoft.svg" },
  { name: "Amazon",      src: "/images/brand/amazon.svg" },
  { name: "Infosys",     src: "/images/brand/infosys.svg" },
  { name: "Wipro",       src: "/images/brand/wipro.svg" },
  { name: "Deloitte",    src: "/images/brand/deloitte.svg" },
  { name: "IBM",         src: "/images/brand/ibm.svg" },
  { name: "Accenture",   src: "/images/brand/accenture.svg" },
  { name: "Accenture",   src: "/images/brand/images.png" },
];

// Duplicate list so the marquee loops seamlessly
const duplicated = [...brands, ...brands];

const BrandAssociation: React.FC = () => {
  return (
    <section className=" dark:bg-darklight py-40 border-t border-b border-gray-100 dark:border-white/10 overflow-hidden">
      <div className="container mb-10 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 dark:text-white/40">
          Trusted By Leading Organisations
        </p>
      </div>

      {/* ── Marquee track ── */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10
          bg-gradient-to-r from-white dark:from-darklight to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10
          bg-gradient-to-l from-white dark:from-darklight to-transparent" />

        <div className="flex brand-marquee">
          {duplicated.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 flex items-center justify-center
                opacity-40 hover:opacity-100 hover:grayscale-0
                transition-all duration-300 cursor-pointer"
              style={{ minWidth: "120px" }}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={40}
                className="object-contain max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAssociation;

"use client";
// import React from "react";
import Link from "next/link";
import React, { useState } from "react";
import ThumbnailCarousel from "../ThumbnailCarousel";

// import ThumbnailCarousel from "@/components/ThumbnailCarousel"; // adjust path as needed

// Define per-slide content here
const slideContent = [
   {
    heading: "The Unwavering Leader",
    description:
      "Drawing from years of leadership advisory experience, Arjun Raj Urs shares insights, proven frameworks and a practical blueprint for leadership to help leaders drive growth, strengthen execution and build high-performing Organisations.",
    linkLabel: "Explore the Book",
    href: "/book",
  },
  {
    heading: "Growth & Organisational Performance",
    description:
      "Identify the hidden barriers that slow growth and execution. Build the structure, alignment and accountability needed to improve Organisational performance.",
    linkLabel: "Explore Growth Programs",
    href: "/enterprise",
  },
  {
    heading: "Arjun's Lens",
    description:
      "Thought-provoking perspectives on leadership, growth, accountability and execution for leaders building Organisations that are designed to win.",
    linkLabel: "Explore Articles",
    href: "/blog",
  },
];

const ConferencesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slideContent[activeIndex];

  return (
    // <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden py-12 lg:py-20 before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
      <div className="container">
        {/* <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mb-10"> */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-secondary mb-8 lg:mb-12 leading-tight">
          How We Design Organisations to Win More
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-24">
        {/* <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5"> */}

          {/* Carousel */}
          <div
            className="justify-center"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <ThumbnailCarousel onSlideChange={setActiveIndex} />
          </div>
          {/* <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
              <ThumbnailCarousel onSlideChange={setActiveIndex} />
          </div> */}

          {/* Dynamic content */}
          <div
            className="pt-2 lg:pt-0 text-center lg:text-left"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {/* Wrap in a key so React re-mounts with a fade when slide changes */}
            <div
              key={activeIndex}
              className="animate-fadeIn" // add this Tailwind custom animation (see below)
            >
              <h2>{current.heading}</h2>
              <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
                {current.description}
              </p>
              {/* <Link
                href={current.href}
                className="btn_outline btn-2 hover-outline-slide-down"
              >
                <span>{current.linkLabel}</span>
              </Link> */}
              <Link
                href={current.href}
                className="
                  relative inline-flex items-center justify-center
                  overflow-hidden rounded-xl
                  border border-primary
                  px-7 py-3
                  text-sm font-semibold
                  text-secondary
                  transition-all duration-300
                  group
                "
              >
                {/* Hover Background */}
                <span
                  className="
                    absolute inset-0
                    bg-secondary
                    translate-y-full
                    transition-transform duration-500 ease-out
                    group-hover:translate-y-0
                  "
                />

                {/* Text */}
                <span
                  className="
                    relative z-10
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {current.linkLabel}
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;


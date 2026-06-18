"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const enterpriseBarriers = [
  {
    title: "Productivity Barriers",
    icon: Users,
    image: "/images/enterprise/productivity.jpeg",
    items: [
      "No time to focus on growth due to firefighting and overburdened leadership",
      "Poor team collaboration leading to inefficiencies",
      "Team disconnected from company objectives and goals",
      "Operational bottlenecks preventing smooth execution",
    ],
  },

  {
    title: "Performance Barriers",
    icon: TrendingUp,
    image: "/images/enterprise/performance.jpeg",
    items: [
      "Lack of innovation and ownership",
      "Plummeting customer satisfaction scores",
      "Low employee morale and high attrition",
      "Inaccurate forecasts and estimations",
    ],
  },

  {
    title: "Profit Barriers",
    icon: ShieldCheck,
    image: "/images/enterprise/profit.jpeg",
    items: [
      "Low profits despite major efforts and investments",
      "Client trust damaged due to delayed deliveries",
      "Inefficient processes reducing scalability",
      "Poor visibility into operational profitability",
    ],
  },
];

const solutions = [
  {
    number: "01",
    title: "Win More By Design (Customized for Results)",
    content:
      "The Win More by Design (WMBD) coaching framework is an objective-driven approach that  enables organizations to set and achieve short-term goals and a process template to achieve long-term business goals. The  methodology implements a robust, goal-oriented process customized to each organisation’s unique needs, ensuring accelerated and sustainable growth.",
    highlights: [
    ],
  },

  {
    number: "02",
    title: "The Data-Driven Coaching & Course Correction (D2C3) Framework",
    content:
      "This systematic approach involves daily progress tracking against defined parameters. Through weekly comprehensive analyses, we identify key insights and areas requiring adjustment. This continuous monitoring creates a dynamic framework for identifying the growth accelerators and implementing the",
    highlights: [
     
    ],
  },

  {
    number: "03",
    title: "Growth Stories",
    content:
      "Success stories in case study format-downloadable PDFs",
    highlights: [
      {
        title: "Download WMBD Brochure",
        file: "/downloads/wmbd-brochure.pdf",
      },
      {
        title: "Download Case Study",
        file: "/downloads/wmbd-case-study.pdf",
      },
      {
        title: "Download Framework Guide",
        file: "/downloads/wmbd-guide.pdf",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// FADE UP
// ─────────────────────────────────────────────

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(40px)" : "translateY(0px)",
        transition: `all 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function EnterprisePage() {
  return (
    <main className="bg-IcyBreeze dark:bg-darkmode overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-28">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-6xl mx-auto text-center">
              {/* TAG */}
              {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-white dark:bg-darklight shadow-sm mb-7">
                <Sparkles className="w-4 h-4 text-primary" />

                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  Enterprise Solutions
                </span>
              </div> */}
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary bg-secondary dark:bg-teal-950 dark:border-teal-800 w-fit mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />

                <span className="text-[11px] font-medium text-white dark:text-teal-300 tracking-wide uppercase">
                  Enterprise Solutions
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.02] text-MidnightNavyText dark:text-IcyBreeze"
                // style={{
                //   fontFamily: "'Playfair Display', Georgia, serif",
                // }}
              >
                Growth Doesn’t Slow Down
                <br />
                Overnight.
                <span className="text-primary"> It Gets Blocked.</span>
              </h1>

              {/* DESC */}
              <p className="mt-10 text-lg md:text-xl leading-[2] text-SlateBlueText dark:text-CadetBlue max-w-5xl mx-auto">
                As organisations grow, new challenges begin to emerge.<br></br>
                At <strong>Win More By Design</strong>, we help founders, CEOs, business owners and leadership teams identify the hidden barriers that limit growth, weaken execution and reduce organizational effectiveness.<br></br>
                Through our structured Data Driven Coaching & Course Correction (D2C3) Model, we help organizations improve leadership effectiveness, strengthen accountability culture, enhance organizational productivity and create sustainable business growth.

              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BARRIERS */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          {/* HEADER */}
          <FadeUp>
            <div className="max-w-4xl mb-20">
              {/* <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                Enterprise Challenges
              </p> */}

              <h2
                className="text-5xl md:text-6xl font-bold leading-[1.08] text-MidnightNavyText dark:text-IcyBreeze"
              >
                Common Growth Challenges  
                <br />
                We Help Solve
              </h2>
            </div>
          </FadeUp>

          {/* CARDS */}
          <div className="grid xl:grid-cols-3 gap-8">
            {enterpriseBarriers.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.title} delay={index * 100}>
                  <div
                    className="
                      group
                      h-full
                      overflow-hidden
                      rounded-[38px]
                      border border-PowderBlueBorder dark:border-dark_border
                      bg-white dark:bg-darklight
                      shadow-[0_20px_80px_rgba(15,23,42,0.05)]
                      hover:-translate-y-2
                      transition-all duration-500
                    "
                  >
                    {/* IMAGE */}
                    <div className="relative h-[320px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[5000ms]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#081018] via-[#08101890] to-transparent" />

                      {/* ICON */}
                      <div className="absolute top-7 left-7 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* TITLE */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3
                          className="text-3xl font-bold text-white leading-[1.2]"
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <div className="space-y-5">
                        {item.items.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-4"
                          >
                            <div className="mt-1">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                            </div>

                            <p className="text-[15px] leading-[1.9] text-SlateBlueText dark:text-CadetBlue">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          {/* HEADER */}
          <FadeUp>
            <div className="max-w-5xl mb-20">
              {/* <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                Strategic Solutions
              </p> */}

              <h2
                className="text-5xl md:text-6xl font-bold leading-[1.08] text-MidnightNavyText dark:text-IcyBreeze"
              >
                Frameworks Designed
                <br />
                For Sustainable Growth
              </h2>
            </div>
          </FadeUp>

          {/* SOLUTION BLOCKS */}
          <div className="space-y-10">
            {solutions.map((item, index) => (
              <FadeUp key={item.title} delay={index * 100}>
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border border-PowderBlueBorder dark:border-dark_border
                    bg-white dark:bg-darklight
                    shadow-[0_20px_80px_rgba(15,23,42,0.05)]
                  "
                >
                  {/* GLOW */}
                  <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-primary/5 rounded-full blur-3xl" />

                  <div className="relative grid xl:grid-cols-[120px_1fr]">
                    {/* NUMBER */}
                    <div
                      className="
                        border-b xl:border-b-0 xl:border-r
                        border-PowderBlueBorder dark:border-dark_border
                        p-8 xl:p-12
                        flex xl:block items-center justify-between
                      "
                    >
                      {/* <span className="text-[80px] xl:text-[110px] leading-none font-bold text-primary/10">
                        {item.number}
                      </span> */}
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 md:p-12 xl:p-14">
                      <div className="max-w-5xl">
                        <h3
                          className="text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.15] text-MidnightNavyText dark:text-IcyBreeze"
                        >
                          {item.title}
                        </h3>

                        <div className="w-24 h-[2px] bg-primary rounded-full mt-7 mb-8" />

                        <p className="text-lg leading-[2] text-SlateBlueText dark:text-CadetBlue">
                          {item.content}
                        </p>

                        {/* HIGHLIGHTS */}
                        {/* <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
                          {item.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="
                                rounded-2xl
                                border border-PowderBlueBorder dark:border-dark_border
                                bg-[#f8fbfd] dark:bg-[#101826]
                                px-5 py-5
                              "
                            >
                              <p className="text-sm font-medium text-MidnightNavyText dark:text-IcyBreeze leading-[1.7]">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div> */}
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12">
                          {item.highlights.map((highlight, i) => (
                            <a
                              key={i}
                              href={highlight.file}
                              download
                              className="
                                rounded-2xl
                                border border-PowderBlueBorder dark:border-dark_border
                                bg-[#f8fbfd] dark:bg-[#101826]
                                px-5 py-5
                                flex items-center justify-between
                                hover:border-primary
                                hover:shadow-md
                                transition-all duration-300
                                group
                                cursor-pointer
                              "
                            >
                              <p className="text-sm font-medium text-MidnightNavyText dark:text-IcyBreeze leading-[1.7]">
                                {highlight.title}
                              </p>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-primary group-hover:translate-y-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 5v14m0 0l-6-6m6 6l6-6"
                                />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                bg-secondary
                px-8 md:px-16 py-20
                "
                // bg-gradient-to-br from-secondary via-[#102238] to-primary
            >
              {/* GLOW */}
              {/* <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl" /> */}

              <div className="relative flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12">
                {/* LEFT */}
                <div className="max-w-3xl">
                  <p className="uppercase tracking-[0.3em] text-sm text-cyan-300 font-semibold mb-5">
                    Growth Stories
                  </p>

                  <h2
                    className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] text-white"
                    // style={{
                    //   fontFamily:
                    //     "'Playfair Display', Georgia, serif",
                    // }}
                  >
                    How Healthy Is Your Organization?
                  </h2>

                  <p className="mt-8 text-lg leading-[2] text-white/75 max-w-2xl">
                    Partner with Win More By Design to improve leadership,
                    execution, accountability, and sustainable business growth.
                  </p>
                </div>

                {/* BUTTON */}
                <div className="shrink-0">
                  <Link
                    href="/forms"
                    className="
                      group
                      inline-flex items-center gap-3
                      rounded-full
                      bg-white
                      px-9 py-5
                      text-lg font-semibold
                      text-MidnightNavyText
                      hover:scale-105
                      transition-all duration-300
                      shadow-[0_10px_40px_rgba(255,255,255,0.15)]
                    "
                  >
                    OPA Assessment

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
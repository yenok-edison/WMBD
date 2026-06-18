"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import StrategyCallModal from "../StrategyCallModal";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="dark:bg-darkmode overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-12 py-16">

          {/* ── Left column ── */}
          <div className="col-span-6 flex flex-col gap-0">

            {/* Tag pill */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="800"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary bg-secondary dark:bg-teal-950 dark:border-teal-800 w-fit mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-[11px] font-medium text-white dark:text-teal-300 tracking-wide uppercase">
                Designing Wins   |   Developing Leaders.
              </span>
              {/* <span className="w-1.5 h-1.5 rounded-full bg-teal-500" /> */}
            </div>
            {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
                Business Growth Coaching
              </span>
            </div> */}

            

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              {/* Build Stronger Leaders{" "} */}
              <span className="text-primary">Is Your Organisation Designed to Win More?</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="900"
              className="text-base text-SlateBlueText dark:text-white/70 leading-relaxed mb-8 max-w-lg"
            >
              Win More By Design Led by Arjun Raj Urs enables sustainable growth through stronger leadership, improved productivity and scalable systems that drive execution and business performance. He helps founders, CEOs and leadership teams strengthen accountability, develop second-line leadership and remove the hidden barriers that limit growth and execution. 

            </p>

            {/* Barrier pills */}
            
            {/* <div
              data-aos="fade-up"
              data-aos-delay="380"
              data-aos-duration="900"
              className="flex flex-col gap-3 mb-8"
            >
              {[
                {
                  icon: "⚡",
                  title: "15+ Years of Leadership Advisory Experience",
                  bg: "bg-teal-50 dark:bg-teal-950",
                  iconBg: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
                },
                {
                  icon: "⚡",
                  title: "3000+ Professionals Impacted",
                  bg: "bg-violet-50 dark:bg-violet-950",
                  iconBg: "bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300",
                },
                {
                  icon: "⚡",
                  title: "100+ Leadership Workshops & Executive Sessions",
                  bg: "bg-amber-50 dark:bg-amber-950",
                  iconBg: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
                },
                {
                  icon: "⚡",
                  title: "Author | Speaker | Business Results Coach",
                  bg: "bg-amber-30 dark:bg-amber-950",
                  iconBg: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-100 dark:border-zinc-800 ${b.bg}`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${b.iconBg}`}>
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight">{b.title}</p>
                  </div>
                </div>
              ))}
            </div> */}

            {/* CTA buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="900"
              className="flex items-center gap-3 flex-wrap"
            >
              {/* <Link
                href="/"
                className=" relative overflow-hidden rounded-xl border border-sky-500 px-7 py-3 text-sm font-semibold text-sky-600 transition-all duration-500 hover:text-white group
                "
              >
                <span className="relative z-10">
                  Book a Strategy Call
                </span>

                <span className=" absolute inset-0 bg-sky-500 scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100
                "/>
              </Link> */}
              <button
                onClick={() => setModalOpen(true)}
                className="relative overflow-hidden rounded-xl border border-primary px-7 py-3 text-sm font-semibold text-secondary transition-all duration-500 hover:text-white group"
              >
                <span className="relative z-10">Book a Call</span>
                <span className="absolute inset-0 bg-secondary scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />
              </button>
           
              <Link
                href="/forms"
                className=" relative overflow-hidden rounded-xl border border-primary px-7 py-3 text-sm font-semibold text-secondary transition-all duration-500 hover:text-white group
                "
              >
                <span className="relative z-10">
                  Check your Organisation’s Health
                </span>

                <span className=" absolute inset-0 bg-secondary scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100
                "/>
              </Link>
            </div>
          </div>
          <StrategyCallModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />

          {/* ── Right column ── */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="hidden lg:flex col-span-6 items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] h-[620px] flex items-center justify-center">

              {/* Soft Background Glow */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-teal-500/10 blur-[120px]" />

              {/* Elegant Frame */}
              <div className="relative group">

                {/* Main Card */}
                <div className="relative w-[490px] h-[620px] rounded-[36px] overflow-hidden border border-white/10  shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

                  {/* Image */}
                  <Image
                    src="/images/hero/arjun.png"
                    alt="Arjun Raj Urs"
                    fill
                    priority
                    quality={100}
                    className="object-cover group-hover:scale-105 transition duration-[2500ms] ease-out"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Top Tag */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                      {/* <p className="text-xs tracking-[3px] uppercase text-yellow/80 font-medium">
                        Business Mentor
                      </p> */}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">

                    <h2 className="text-4xl font-bold text-white leading-tight">
                      Arjun Raj Urs
                    </h2>

                    {/* <div className="grid grid-cols-4 gap-4 mt-4"> */}
                    <div className="flex gap-0.25 mt-0.25">
                      <p className="text-s text-white mt-1">
                          Author | Speaker | Business Results Coach
                        </p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">

                      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-4">
                        <p className="text-2xl font-bold text-cyan-400">27+</p>
                        <p className="text-xs text-zinc-400 mt-1">
                          Years Experience
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-4">
                        <p className="text-2xl font-bold text-cyan-400">5,000+</p>
                        <p className="text-xs text-zinc-400 mt-1">
                          Professionals Empowered
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-1 py-4">
                        <p className="text-2xl font-bold text-cyan-400">50,000+</p>
                        <p className="text-xs text-zinc-400 mt-1">
                          Transformations Hours
                        </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-4">
                        <p className="text-2xl font-bold text-cyan-400">50+</p>
                        <p className="text-xs text-zinc-400 mt-1">
                          Organisations Scaled
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
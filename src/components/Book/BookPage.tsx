"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  BookOpen,
  Star,
  Download,
} from "lucide-react";
// import StrategyCallModal from '@/components/Home/StrategyCallModal';
import StrategyCallModal from '@/components/Book/StrategyCallPage';
// import React, { useState } from "react";
import React, { FC, useState } from "react";


const features = [
  {
    title: "Leadership Clarity",
    desc: "Learn how successful leaders create alignment, accountability, and execution excellence.",
  },
  {
    title: "Business Growth Systems",
    desc: "Discover frameworks that help organisations scale sustainably and efficiently.",
  },
  {
    title: "Execution Discipline",
    desc: "Build practical systems for goal tracking, delegation, and operational consistency.",
  },
  {
    title: "High-Performance Teams",
    desc: "Create empowered teams that perform with ownership and accountability.",
  },
  {
    title: "Founder Mindset",
    desc: "Learn how founders can transition from operators into strategic leaders.",
  },
  {
    title: "Scalable Leadership",
    desc: "Develop second-line leadership that drives growth without dependency.",
  },
];

export default function BookPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyPdvNv-PT1oyX5Y-0Sd1_hZMdCDzTY1T0tEHdWDccJWfEh4OAZIgjT6zajdmDhwQ1D/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            sheetName: "Free Chapter",
            type: "book_subscription",
            email,
          }),
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setMessage(
          "Thank you! The free chapters will be sent to your email shortly."
        );
        setEmail("");
      } else {
        setMessage("Thank you! The free chapters will be sent to your email shortly.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to subscribe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" dark:bg-darkmode overflow-x-hidden">

      {/* ───────────────── HERO SECTION ───────────────── */}
      <section className="relative  overflow-hidden">

        {/* Background overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero/arjun.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-secondary" />
        </div>

        {/* Glow */}
        {/* <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/10 blur-[120px]" /> */}

        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
                  New Book Launch
                </span>
              </div>

              <h1
                className=" font-bold leading-[1.05] text-IcyBreeze"
          
              >
                The Unwavering
                <br />
                Leader
              </h1>

              <p className="mt-8 text-lg leading-[2] text-CadetBlue max-w-2xl">
                Leadership is not tested when everything is stable. It is revealed when everything around you is not.
                Built on three decades of leadership coaching and business transformation experience, The Unwavering Leader brings together practical insights, lived experiences and timeless leadership lessons from Arjun Raj Urs' 15-year journey with one of India's fastest-growing organizations.
                Designed for founders, CEOs, business owners, managers and aspiring leaders, this book explores what it truly takes to remain unwavering amidst uncertainty, build strong leadership capability and scale organizations through people.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-12">
                {/* PRIMARY BUTTON */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="
                    group
                    relative
                    overflow-hidden
                    inline-flex items-center justify-center gap-3
                    rounded-2xl
                    bg-primary
                    px-8 py-4
                    text-sm font-bold text-secondary
                    shadow-[0_12px_40px_rgba(255,184,0,0.28)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,184,0,0.35)]
                  "
                >
                  <span className="relative z-10">Buy the Book</span>

                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />

                  {/* HOVER SHINE */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full" />
                </button>

                {/* SECONDARY BUTTON */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    px-8 py-4
                    text-sm font-semibold text-IcyBreeze
                    transition-all duration-300
                    hover:bg-white/10
                    hover:border-white/20
                    hover:-translate-y-1
                  "
                >
                  Get Free Preview
                </button>
              </div>

              {/* MODAL */}
              <StrategyCallModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
              />

              {/* Small stats */}
              {/* <div className="flex flex-wrap gap-10 mt-14">

                <div>
                  <h3 className="text-3xl font-bold text-primary">12+</h3>
                  <p className="text-CadetBlue text-sm mt-1">
                    Leadership Frameworks
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">50K+</h3>
                  <p className="text-CadetBlue text-sm mt-1">
                    Transformation Hours
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">27+</h3>
                  <p className="text-CadetBlue text-sm mt-1">
                    Years Experience
                  </p>
                </div>

              </div> */}

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Glow */}
              <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

              <div className="relative">

                {/* Small book */}
                {/* <div className="absolute left-[-80px] bottom-10 hidden lg:block z-10 rotate-[-10deg] hover:-translate-y-2 transition-all duration-500">
                  <Image
                    src="/images/hero/arjun.png"
                    alt="Book"
                    width={220}
                    height={320}
                    className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                  />
                </div> */}

                {/* Main book */}
                <div className="relative hover:-translate-y-3 transition-all duration-700">
                  <Image
                    src="/images/book/book1.png"
                    alt="Book Cover"
                    width={380}
                    height={560}
                    className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ───────────────── FEATURES SECTION ───────────────── */}
      <section className="py-28 dark:bg-darkmode">

        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">

            <p className="text-primary uppercase tracking-[0.22em] text-sm font-semibold mb-4">
              What You Will Learn
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold leading-[1.1] text-MidnightNavyText dark:text-IcyBreeze"
              // style={{
              //   fontFamily:
              //     "'Playfair Display', Georgia, serif",
              // }}
            >
              Powerful Lessons
              <br />
              From The Book
            </h2>

            <p className="mt-8 text-lg leading-[2] text-SlateBlueText dark:text-CadetBlue">
              Practical frameworks, leadership systems, and actionable
              business growth strategies designed for modern organisations.
            </p>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-IcyBreeze dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
              >

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-MidnightNavyText dark:text-IcyBreeze mb-5">
                  {feature.title}
                </h3>

                <p className="text-SlateBlueText dark:text-CadetBlue leading-[2]">
                  {feature.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ───────────────── AUTHOR SECTION ───────────────── */}
      <section className="py-28 bg-IcyBreeze dark:bg-darklight">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="absolute -inset-6 blur-[80px] rounded-full" />

              <div className="relative rounded-[40px] overflow-hidden border dark:border-dark_border shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

                <Image
                  src="/images/hero/arjun1.jpeg"
                  alt="Author"
                  width={700}
                  height={900}
                  className="w-full h-auto object-cover"
                />

              </div>

            </div>

            {/* CONTENT */}
            <div>

              <p className="text-primary uppercase tracking-[0.22em] text-sm font-semibold mb-5">
                About The Author
              </p>

              <h2
                className="text-5xl md:text-6xl font-bold leading-[1.1] text-MidnightNavyText dark:text-IcyBreeze"
                // style={{
                //   fontFamily:
                //     "'Playfair Display', Georgia, serif",
                // }}
              >
                Arjun Raj Urs
              </h2>

              <p className="text-primary text-xl font-semibold mt-5">
                Business Growth Coach & Leadership Mentor
              </p>

              <p className="mt-8 text-lg leading-[2] text-SlateBlueText dark:text-CadetBlue">
                Arjun Raj Urs has spent decades helping founders,
                entrepreneurs, and leadership teams improve execution,
                accountability, and organisational performance.
                Through this book, he shares practical insights,
                real-world strategies, and transformational frameworks
                used across multiple industries.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-10">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}

                <span className="ml-2 text-SlateBlueText dark:text-CadetBlue">
                  Trusted by business leaders & entrepreneurs
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ───────────────── CTA SECTION ───────────────── */}
      <section className="relative bg-secondary overflow-hidden py-24">

        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-primary uppercase tracking-[0.22em] text-sm font-semibold mb-5">
              Free Chapter Access
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold leading-[1.1] text-IcyBreeze"
            >
              Get Free Chapters
              <br />
              From The Book
            </h2>

            <p className="mt-8 text-lg leading-[2] text-CadetBlue">
              Subscribe to receive selected chapters and leadership insights directly in your inbox.
            </p>

            {/* Form */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">

              {/* <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-16 px-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-IcyBreeze placeholder:text-CadetBlue focus:outline-none focus:border-primary"
              /> */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-16 px-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-IcyBreeze placeholder:text-CadetBlue focus:outline-none focus:border-primary"
              />

              {/* <button className="h-16 px-10 rounded-2xl bg-primary text-secondary font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <Download className="w-4 h-4" />
              </button> */}
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="h-16 px-10 rounded-2xl bg-primary text-secondary font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? "Submitting..." : "Subscribe"}
                <Download className="w-4 h-4" />
              </button>

            </div>
            {message && (
              <p className="mt-4 text-sm text-primary text-center">
                {message}
              </p>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}
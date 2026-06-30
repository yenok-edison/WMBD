import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <section className="dark:bg-darkmode py-16 lg:py-24">
      <div className="container mx-auto px-5 lg:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-xs uppercase tracking-widest text-white">
            Contact
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary dark:text-white leading-tight">
            Let's Start Your
            <span className="text-primary"> Growth Journey</span>
          </h2>

          <p className="mt-6 text-base lg:text-lg leading-8 text-SlateBlueText dark:text-white/70">
            Whether you're looking to improve leadership, remove growth
            barriers or build a stronger organisation, we'd love to hear
            from you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* Card */}
          <div className="rounded-3xl border border-PowderBlueBorder dark:border-dark_border bg-white dark:bg-darklight p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              📞
            </div>

            <h3 className="mt-6 text-2xl font-bold text-secondary dark:text-white">
              Book a Strategy Call
            </h3>

            <p className="mt-4 text-SlateBlueText dark:text-white/70 leading-7">
              Speak with our team and discover how Win More By Design can
              help your organisation grow.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center mt-8 font-semibold text-primary hover:gap-4 transition-all"
            >
              Schedule Now →
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-PowderBlueBorder dark:border-dark_border bg-white dark:bg-darklight p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              ✉️
            </div>

            <h3 className="mt-6 text-2xl font-bold text-secondary dark:text-white">
              Email Us
            </h3>

            <p className="mt-4 text-SlateBlueText dark:text-white/70 leading-7">
              Send us your questions or business challenges and we'll get
              back to you shortly.
            </p>

            <a
              href="mailto:info@winmorebydesign.com"
              className="inline-flex items-center mt-8 font-semibold text-primary hover:gap-4 transition-all"
            >
              info@winmorebydesign.com →
            </a>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-PowderBlueBorder dark:border-dark_border bg-white dark:bg-darklight p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              📍
            </div>

            <h3 className="mt-6 text-2xl font-bold text-secondary dark:text-white">
              Visit Our Office
            </h3>

            <p className="mt-4 text-SlateBlueText dark:text-white/70 leading-7">
              We'd be happy to meet you in person to understand your
              organisational challenges.
            </p>

            <Link
              href="#map"
              className="inline-flex items-center mt-8 font-semibold text-primary hover:gap-4 transition-all"
            >
              View Location →
            </Link>
          </div>
        </div>

        {/* Map */}
        <div id="map" className="mt-16 lg:mt-24">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="YOUR_GOOGLE_MAP_EMBED_URL"
              className="w-full h-[320px] sm:h-[420px] lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      <div className="mt-16 border-b dark:border-dark_border" />
    </section>
  );
};

export default ContactInfo;
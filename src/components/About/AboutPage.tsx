"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";


const teamMembers = [
  {
    name: "Arjun Raj Urs",
    role: "Founder & Business Growth Coach",
    image: "/images/hero/arjun1.jpeg",
    description:
      "Arjun Raj Urs is a Business Results Coach and People Architect with over three decades of experience working with Organisations across growth, leadership development, and business transformation. As the creator of the Win More By Design™ methodology, Arjun combines practical business experience with leadership coaching to help Organisations strengthen productivity, align teams and achieve measurable business results.",

    cards: [
      {
        title: "CERTIFICATION",
        points: [
          "Certified Results Coach (ICF-affiliated)",
          "Axiometric Analyst",
          "NLP Master Practitioner",
          "Distinguished Toastmasters (DTM)",
        ],
      },
      {
        title: "EXPERIENCE",
        points: [
          "Spoken at events across India, USA, and Singapore",
          "Industry-agnostic",
          "Experienced working with various industries including IT, New Age Technologies, Manufacturing, Construction, FinWorld, Healthcare, Pharma, Services, Education and more.",
        ],
      },
    ],
  },

  {
    name: "Hari Talupuru",
    role: "Director – Marketing",
    image: "/images/hero/hari.png",
    description:
      "Hari Talupuru is a Marketing and Communication professional, responsible for the marketing function at WMBD Management Services LLP. He will be the frontending for us and will be the first connect for all our clients. Hari’s introduction to Win More By Design was through the coaching program conducted by Arjun Raj Urs in 2019. The power of practical methodology provided in the program led him to join WMBD Management Services LLP in 2024, to spread awareness of the program across corporates, enterprises, leaders and entrepreneurs. He has over 30 years of experience in the fields of Sales, Business Development, International Marketing, Communication, Team Development, Animations and App Development.",

    cards: [

    ],
  },
];

// ─────────────────────────────────────────────
// FADE UP ANIMATION
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
        transform: show ? "translateY(0px)" : "translateY(40px)",
        transition: `all 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────
// TEAM MEMBER CARD
// ─────────────────────────────────────────────

// const TeamMemberCard = ({
//   member,
//   reverse,
// }: {
//   member: (typeof teamMembers)[0];
//   reverse?: boolean;
// }) => {
//   return (
//     <div
//       className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""
//         }`}
//     >
//       {/* IMAGE */}
//       <div className="relative">

//         <div className="relative overflow-hidden rounded-[36px] border dark:border-dark_border dark:bg-darklight shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

//           <div className="relative h-[720px] w-full">

//             <Image
//               src={member.image}
//               alt={member.name}
//               fill
//               className="object-cover object-top hover:scale-[1.04] transition-transform duration-[4000ms]"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172ab3] via-transparent to-transparent" />

//             {/* Bottom Content */}
//             <div className="absolute bottom-8 left-8 right-8">

//               <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-6">

//                 <h2
//                   className="text-4xl md:text-5xl font-bold text-white"

//                 >
//                   {member.name}
//                 </h2>

//                 <p className="text-cyan-400 text-lg mt-2">
//                   {member.role}
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* CONTENT */}
//       <div>


//         <h2
//           className="text-5xl xl:text-6xl font-bold leading-[1.12] text-MidnightNavyText dark:text-IcyBreeze"

//         >
//           {member.name}
//         </h2>

//         <p className="text-primary text-xl font-semibold mt-5">
//           {member.role}
//         </p>

//         <div className="w-24 h-[2px] bg-primary mt-8 mb-8 rounded-full" />

//         <p className="text-lg leading-[2.1] text-SlateBlueText dark:text-CadetBlue">
//           {member.description}
//         </p>

//         {/* LIST POINTS */}
//         {/* INFO BOXES */}
//         <div className="grid sm:grid-cols-2 gap-5 mt-12">

//           {member.cards.map((card, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white dark:bg-darklight
//                 border border-PowderBlueBorder dark:border-dark_border
//                 rounded-3xl
//                 p-7
//                 shadow-[0_10px_30px_rgba(15,23,42,0.05)]
//                 hover:-translate-y-1
//                 transition-all duration-300
//               "
//             >

//               <h3 className="text-2xl font-bold text-MidnightNavyText dark:text-IcyBreeze mb-6">
//                 {card.title}
//               </h3>

//               <ul className="space-y-4">

//                 {card.points.map((point, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3"
//                   >
//                     <span className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />

//                     <p className="text-SlateBlueText dark:text-CadetBlue leading-[1.8] text-sm">
//                       {point}
//                     </p>
//                   </li>
//                 ))}

//               </ul>

//             </div>
//           ))}

//         </div>

//       </div>
//     </div>
//   );
// };

const TeamMemberCard = ({
  member,
  reverse,
}: {
  member: (typeof teamMembers)[0];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[36px] border dark:border-dark_border dark:bg-darklight shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="relative h-[420px] sm:h-[550px] lg:h-[720px] w-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top hover:scale-[1.04] transition-transform duration-[4000ms]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172ab3] via-transparent to-transparent" />

            {/* Bottom Content */}
            <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-[30px] p-5 lg:p-6">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
                  {member.name}
                </h2>

                <p className="text-cyan-400 text-sm sm:text-base lg:text-lg mt-2">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-MidnightNavyText dark:text-IcyBreeze">
          {member.name}
        </h2>

        <p className="text-primary text-lg lg:text-xl font-semibold mt-4 lg:mt-5">
          {member.role}
        </p>

        <div className="w-20 lg:w-24 h-[2px] bg-primary mt-6 mb-6 lg:mt-8 lg:mb-8 rounded-full mx-auto lg:mx-0" />

        <p className="text-base lg:text-lg leading-8 lg:leading-[2.1] text-SlateBlueText dark:text-CadetBlue">
          {member.description}
        </p>

        {member.cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 lg:mt-12">
            {member.cards.map((card, index) => (
              <div
                key={index}
                className="
                  bg-white
                  dark:bg-darklight
                  border
                  border-PowderBlueBorder
                  dark:border-dark_border
                  rounded-2xl
                  lg:rounded-3xl
                  p-5
                  lg:p-7
                  shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-xl lg:text-2xl font-bold text-MidnightNavyText dark:text-IcyBreeze mb-5 lg:mb-6">
                  {card.title}
                </h3>

                <ul className="space-y-3 lg:space-y-4">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-left"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />

                      <p className="text-sm lg:text-base text-SlateBlueText dark:text-CadetBlue leading-7">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

// export default function AboutPage() {
//   return (
//     <main className="bg-IcyBreeze dark:bg-darkmode overflow-x-hidden">

//       {/* HERO SECTION */}
//       <section className="relative pt-32 pb-24">

//         <div className="container mx-auto px-6 relative">

//           <FadeUp>

//             <div className="max-w-5xl mx-auto text-center">

//               <div
//                 data-aos="fade-right"
//                 data-aos-delay="100"
//                 data-aos-duration="800"
//                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary bg-secondary dark:bg-teal-950 dark:border-teal-800 w-fit mb-5"
//               >
//                 <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />

//                 <span className="text-[11px] font-medium text-white dark:text-teal-300 tracking-wide uppercase">
//                   About Us
//                 </span>
//               </div>

//               <h1
//                 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] text-MidnightNavyText dark:text-IcyBreeze"

//               >
//                 Building Stronger Leaders.
//                 <br />
//                 Designing Businesses that Win More.
//               </h1>

//               <p className="mt-10 text-lg md:text-xl leading-[2] text-SlateBlueText dark:text-CadetBlue max-w-4xl mx-auto">
//                 Win More By Design focuses on not just on solving immediate challenges, but on building stronger leaders, stronger teams and stronger Organisations. Through our Data Driven Coaching & Course Correction (D2C3™) approach, we help Organisations move from firefighting and bottlenecks to clarity, collaboration  and measurable business outcomes.
//               </p>

//             </div>

//           </FadeUp>

//         </div>
//       </section>

//       {/* TEAM MEMBERS */}
//       <section className="pb-32">

//         <div className="container mx-auto px-6">

//           <div className="space-y-32">

//             {teamMembers.map((member, index) => (
//               <FadeUp key={member.name} delay={index * 100}>
//                 <TeamMemberCard
//                   member={member}
//                   reverse={index % 2 !== 0}
//                 />
//               </FadeUp>
//             ))}

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }
export default function AboutPage() {
  return (
    <main className="bg-IcyBreeze dark:bg-darkmode overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-40 lg:pt-44 pb-14 lg:pb-24">
        <div className="container mx-auto px-5 lg:px-6 relative">
          <FadeUp>
            <div className="max-w-5xl mx-auto text-center">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary bg-secondary dark:bg-teal-950 dark:border-teal-800 mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />

                <span className="text-[11px] font-medium text-white dark:text-teal-300 tracking-wide uppercase">
                  About Us
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold leading-tight lg:leading-[1.08] text-MidnightNavyText dark:text-IcyBreeze">
                Building Stronger Leaders.
                <br className="hidden sm:block" />
                <span className="block">
                  Designing Businesses that Win More.
                </span>
              </h1>

              <p className="mt-6 lg:mt-10 text-base sm:text-lg md:text-xl leading-8 lg:leading-[2] text-SlateBlueText dark:text-CadetBlue max-w-3xl lg:max-w-4xl mx-auto">
                Win More By Design focuses not just on solving immediate
                challenges, but on building stronger leaders, stronger teams,
                and stronger Organisations. Through our Data Driven Coaching &
                Course Correction (D2C3™) approach, we help Organisations move
                from firefighting and bottlenecks to clarity, collaboration, and
                measurable business outcomes.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="pb-16 lg:pb-32">
        <div className="container mx-auto px-5 lg:px-6">
          <div className="space-y-16 lg:space-y-32">
            {teamMembers.map((member, index) => (
              <FadeUp key={member.name} delay={index * 100}>
                <TeamMemberCard
                  member={member}
                  reverse={index % 2 !== 0}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
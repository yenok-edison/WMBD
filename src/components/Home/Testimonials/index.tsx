"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    name: "Mr.Manjukiran Pacchhipulusu",
    profile: "/images/testimonials/profile1.jpeg",
    role: "Founder, Next Element Pvt Ltd",
    image: "/images/testimonials/image.png",
    review:
      "We were going through an uncertain phase during 2020. We are glad we were able to overcome the same and grow to 200+ Schools today.  Your coaching helped us in handling the setback and taking our company to new heights",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr.Vikas Goel",
    profile: "/images/testimonials/profile1.jpeg",
    role: "CFO, Weir Minerals",
    image: "/images/testimonials/image.png",
    review:
      "Arjun, you have set us on a journey from the traditional role of scorekeepers, data recorders and controllers to become value integrators. We are now moving towards business performance optimisation, predictive insights, enterprise risk management and enabling prudent decision-making. This shift has created opportunities for our people to lead, learn and grow beyond routine responsibilities.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr.Sachin Das",
    profile: "/images/testimonials/profile1.jpeg",
    role: "Director of Musee Musical",
    image: "/images/testimonials/image.png",
    review:
      "At Musee Musical, we had been looking for a coach who could help us with our transformation from a family-owned entity to a more professionally led organisation. One of the biggest concerns we had was the value which we have inherited and how this should not get diluted in this transformation, but here comes Arjun, who completely understands this value and has worked on how this could be translated as a culture, keeping the same as a pivotal piece in the transformation journey. Thank you, Arjun, for understanding the passion and using the same to fuel the change.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mr.Debashish",
    profile: "/images/testimonials/profile1.jpeg",
    role: "Director - HR India, Allergan",
    image: "/images/testimonials/image.png",
    review:
      "Your interventions helped our people gain a wider perspective. They now see their roles as a means for success and as a way to contribute to a larger cause. Our leaders and employees feel more self-assured.",
    rating: 5,
  },
];


interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(rating)].map((_, index) => (
        <span key={index}>⭐</span>
      ))}
    </div>
  );
};



const Testimonials = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         dots: true,
  //       },
  //     },
  //   ],
  // };
  const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
  };

  return (
    // <section className="bg-IcyBreeze dark:bg-darklight testimonial py-20">
    <section className="bg-IcyBreeze dark:bg-darklight testimonial py-12 lg:py-20">
      <div className="container">
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id}>
              {/* <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-10"> */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
                
                {/* Left Image */}
                <div className="col-span-3 bg-LightSkyBlue lg:block hidden overflow-hidden rounded-3xl">
                {/* <div className="col-span-3 overflow-hidden rounded-3xl mx-auto w-full max-w-xs lg:max-w-none"> */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={600}
                    className="w-full h-[320px] lg:h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Content */}
                <div className="col-span-9 lg:ml-20">
                {/* <div className="col-span-8 md:ml-20"> */}
                  
                  {/* <div className="flex items-center gap-5"> */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      width={80}
                      height={80}
                      // quality={100}
                      className="rounded-full object-cover w-20 h-20"
                    />

                    <div>
                      <h4 className="text-xl lg:text-2xl font-semibold text-secondary dark:text-darktext">
                        {item.name}
                      </h4>

                      {/* <StarRating rating={item.rating} /> */}
                      <div className="mt-2 flex justify-center sm:justify-start">
                          <StarRating rating={item.rating} />
                      </div>
                      <p className="text-sm lg:text-base italic text-SlateBlueText font-medium dark:text-darktext">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg lg:text-[22px] leading-7 lg:leading-[2rem] text-SlateBlueText dark:text-opacity-80 py-6 lg:py-10 max-w-3xl text-center sm:text-left">
                    <span className="text-4xl text-primary leading-none">“</span>
                      {item.review}
                    <span className="text-4xl text-primary leading-none">”</span>
                  </p>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
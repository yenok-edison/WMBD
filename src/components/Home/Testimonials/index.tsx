"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    name: "Mr.Manjukiran Pacchhipulusu",
    profile: "/images/testimonials/profile1.jpeg",
    image: "/images/testimonials/image.png",
    review:
      "We were going through an uncertain phase during 2020. We are glad we were able to overcome the same and grow to 200+ Schools today.  Your coaching helped us in handling the setback and taking our company to new heights",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr.Vikas Goel",
    profile: "/images/testimonials/profile1.jpeg",
    image: "/images/testimonials/image.png",
    review:
      "Arjun, you have set us on a journey from the traditional role of scorekeepers, data recorders and controllers to become value integrators. We are now moving towards business performance optimisation, predictive insights, enterprise risk management and enabling prudent decision-making. This shift has created opportunities for our people to lead, learn and grow beyond routine responsibilities.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr.Sachin Das",
    profile: "/images/testimonials/profile1.jpeg",
    image: "/images/testimonials/image.png",
    review:
      "At Musee Musical, we had been looking for a coach who could help us with our transformation from a family-owned entity to a more professionally led organisation. One of the biggest concerns we had was the value which we have inherited and how this should not get diluted in this transformation, but here comes Arjun, who completely understands this value and has worked on how this could be translated as a culture, keeping the same as a pivotal piece in the transformation journey. Thank you, Arjun, for understanding the passion and using the same to fuel the change.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mr.Debashish",
    profile: "/images/testimonials/profile1.jpeg",
    image: "/images/testimonials/image.png",
    review:
      "Your interventions helped our people gain a wider perspective. They now see their roles as a means for success and as a way to contribute to a larger cause. Our leaders and employees feel more self-assured.",
    rating: 5,
  },
];


// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex items-center gap-1">
//       {[...Array(rating)].map((_, index) => (
//         <svg
//           key={index}
//           className="w-4 h-4 text-yellow-500"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//       ))}
//     </div>
//   );
// };
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-IcyBreeze dark:bg-darklight testimonial py-20">
      <div className="container">
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id}>
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-10">
                
                {/* Left Image */}
                <div className="col-span-3 bg-LightSkyBlue lg:block hidden overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={600}
                    quality={100}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="col-span-8 md:ml-20">
                  
                  <div className="flex items-center gap-5">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      width={64}
                      height={64}
                      quality={100}
                      className="rounded-full object-cover"
                    />

                    <div>
                      <h4 className="text-xl font-medium text-secondary dark:text-darktext">
                        {item.name}
                      </h4>

                      <StarRating rating={item.rating} />
                    </div>
                  </div>

                  <p className="text-[22px] leading-[2rem] font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632">
                    {item.review}
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
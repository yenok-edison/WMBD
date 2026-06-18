"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    name: "Jordhan Daniyel",
    profile: "/images/testimonials/testimonials-profile.png",
    image: "/images/hero/john.png",
    review:
      "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through. My busy schedule leaves little, if any, time for blogging and social media.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Robert",
    profile: "/images/testimonials/testimonials-profile.png",
    image: "/images/hero/john.png",
    review:
      "The support and guidance I received were outstanding. Their team helped us improve our online visibility and engagement. Highly recommended for anyone looking to grow their brand.",
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
"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Props {
  onSlideChange?: (index: number) => void;
}

const ThumbnailCarousel: React.FC<Props> = ({ onSlideChange }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const navSliderRef = useRef<Slider | null>(null);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navSliderRef.current as Slider,
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current as Slider,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (_: number, newIndex: number) => {
      setActiveIndex(newIndex);
      onSlideChange?.(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true, focusOnSelect: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: true, focusOnSelect: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, focusOnSelect: true },
      },
    ],
  };

  useEffect(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const slides = [
    { src: "/images/ThumbnailSlider/c12.png", alt: "Conference 1" },
    { src: "/images/ThumbnailSlider/c2.jpeg", alt: "Conference 2" },
    { src: "/images/ThumbnailSlider/c3.jpeg", alt: "Conference 3" },
    // { src: "/images/ThumbnailSlider/Slider_4.jpg", alt: "Conference 4" },
  ];

  return (
    <div>
      <Slider {...settingsFor} ref={mainSliderRef} className="pb-3">
        {slides.map((slide, i) => (
          <div key={i}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={0}
              height={0}
              quality={100}
              layout="responsive"
              sizes="100vw"
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settingsNav} ref={navSliderRef} className="thumb">
        {slides.map((slide, i) => (
          <div key={i}>
            <Image
              src={slide.src}
              alt={`Thumbnail ${i + 1}`}
              width={0}
              height={0}
              quality={100}
              layout="responsive"
              sizes="100vw"
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ThumbnailCarousel;

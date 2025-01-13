import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <button onClick={() => sliderRef.current.slickNext()} className="slick-next-custom">Next</button>,
    prevArrow: <button onClick={() => sliderRef.current.slickPrev()} className="slick-prev-custom">Prev</button>,
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.fromTo(
        '.heading',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }}
      );

      // Animate the paragraph
      gsap.fromTo(
        '.paragraph',
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }}
      );

      // Animate the slider
      gsap.fromTo(
        '.slider',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }}
      );

      // Animate the arrows
      gsap.fromTo(
        '.arrows',
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }}
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup the animation on unmount
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden relative py-8 bg-white text-center px-4 lg:px-20">
      {/* Heading */}
      <div className="heading lg:mb-12">
        <p className="text-xs md:text-lg  text-gray-500">Urban Explorer & Adventure Seeker</p>
        <h2 className="text-2xl md:text-3xl font-semibold blkchry tracking-wider">Explore our carefully curated collections</h2>
      </div>

      {/* Layout for Paragraph, Image Slider, and Arrows */}
      <div className="flex gap-7 flex-col md:flex-row items-center justify-between">
        {/* Left Side - Paragraph */}
        <div className="paragraph w-full md:w-1/3 text-left mb-4 md:mb-0">
          <p className="text-sm text-center mb-4 md:text-left md:text-lg text-gray-600">
            Explore our collections, embrace quality craftsmanship, and make a statement with Markly. Your perfect bag is just a click away.
          </p>
        </div>

        {/* Center - Image Slider */}
        <div className="slider w-full md:w-1/3">
          <Slider ref={sliderRef} {...settings} className="w-full">
            <div className="flex justify-center">
              <img src="/images/blue-bag.png" alt="Collection" className=" w-[90%] m-auto lg:w-full object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/images/hero.png" alt="Collection" className=" w-[90%] m-auto lg:w-full object-contain" />
            </div>
          </Slider>
        </div>

        {/* Right Side - Arrows */}
        <div className="arrows w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0">
          <button onClick={() => sliderRef.current.slickPrev()} className="slick-prev-custom p-2">
            <FaArrowLeft />
          </button>

          <button onClick={() => sliderRef.current.slickNext()} className="slick-next-custom p-2 ml-2">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collection;

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
  useGSAP(() => {
    // Text Animation
    gsap.from(".choose-text", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".choose-text",
        start: "top 80%", // Trigger when the top of the element hits 80% of the viewport
        toggleActions: "play none none reverse",
      },
    });

    // Slider Animation
    gsap.from(".choose-slider", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".choose-slider",
        start: "top 80%", 
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F7F7F5]  relative py-16 px-6 lg:px-20">
      {/* Fixed Logo and Heading */}
      <div className="choose-text">
        <div className=" w-[100%] lg:w-[50%]">
          <img src="/images/black-logo.png" alt="Markly Logo" className="w-8 h-auto mb-4" />
          <h2 className="text-3xl font-semibold blkchry tracking-wider">Why Choose Markly?</h2>
          <p className="text-lg text-gray-600 mt-2">
            Discover our current best-sellers and customer favorites. Each product is a testament to
            Markly’s commitment to combining style, durability, and functionality.
          </p>
        </div>
      </div>

      {/* Slider */}
      <Slider {...settings} className="choose-slider mt-16 lg:mt-12">
        <div className="flex justify-center">
          <div className="bg-white box text-left p-8 mx-auto flex flex-col justify-center">
            <img src="/images/type1.png" alt="Quality Craftsmanship" className="mx-auto w-[70%] object-cover mb-6" />
            <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              Meticulously crafted using premium materials, our bags are a testament to enduring quality,
              ensuring you’re always prepared for any journey.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white box text-left p-8 mx-auto flex flex-col justify-center">
            <img src="/images/type2.png" alt="Versatility" className="mx-auto w-[70%] object-cover mb-6" />
            <h3 className="text-xl font-semibold mb-2">Versatility</h3>
            <p className="text-gray-600">
              From the office to weekend getaways, Markly bags seamlessly blend style with practicality,
              ensuring you’re always prepared for any journey.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white box text-left p-8 mx-auto flex flex-col justify-center">
            <img src="/images/type3.png" alt="Sustainability" className="mx-auto w-[60%] object-cover mb-6" />
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We’re committed to eco-friendly practices, sourcing materials responsibly and crafting bags
              that stand the test of time.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer arrow right-0  text-2xl text-gray-600 hover:text-white"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer arrow right-12 text-2xl bg-black text-white hover:text-white"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default Choose;

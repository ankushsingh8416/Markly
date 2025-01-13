import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollLink from '../ScrollLink';

gsap.registerPlugin(ScrollTrigger);

const Promotional = () => {
  useGSAP(() => {
    gsap.from(".text-content", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
        end: "top 30%",
        scrub: false,
        once: true, // Ensures the animation runs only once
      },
    });

    gsap.from(".bag-image", {
      y: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bag-image",
        start: "top 80%",
        scrub: false,
        once: true,
      },
    });
  }, []);

  return (
    <section className="bg-[#7F2E3B] overflow-hidden py-8 pb-0 text-white flex flex-col lg:flex-row items-center justify-center h-full lg:h-screen relative lg:px-20">
      {/* Left Image */}
      <div className="lg:w-1/2 hidden lg:flex justify-center lg:absolute bottom-0 left-0">
        <img
          src="/images/pink-bag.png"
          alt="Bag"
          className="bag-image w-full max-w-[400px] lg:max-w-none object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="text-content w-[95%]  lg:w-[80%] flex flex-col justify-center lg:pl-72 z-10  text-left">
        <h2 className="tarjan text-3xl lg:text-5xl font-semibold mb-4">
          Whether you're seeking classic sophistication, urban chic, or a companion for you, Markly has the perfect bag for every occasion.
        </h2>
        <p className="text-lg text-white/80 mb-6">
          Discover our current best-sellers and customer favorites. Each product is a testament to Markly’s commitment to combining style, durability, and functionality.
        </p>
        <ScrollLink to={"/product"}>

          <button className="bg-white lg:w-[200px] text-[#7F2E3B] px-6 py-3 text-lg font-semibold rounded hover:bg-gray-200 transition">
            Shop Now
          </button>
        </ScrollLink>
      </div>

      {/* Mobile Image */}
      <div className='block lg:hidden mt-4'>
        <img src="/images/mob-pink-img.png" alt="Mobile Bag" className="bag-image" />
      </div>
    </section>
  );
};

export default Promotional;

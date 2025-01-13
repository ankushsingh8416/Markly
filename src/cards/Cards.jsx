import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollLink from '../ScrollLink';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
    useGSAP(() => {
        // Define GSAP animations
        const tl = gsap.timeline({
            scrollTrigger: {
                scrollTrigger: {
                    trigger: ".cards-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    scroller: "body",
                    once: true, // This ensures the animation runs only once
                },
            },
        });

        tl.from(".left-text", { opacity: 0, x: -100, duration: 1, ease: "power3.out" })
            .from(".right-image", { opacity: 0, x: 100, duration: 1, ease: "power3.out" }, "-=0.8")
            .from(".left-image", { opacity: 0, x: -100, duration: 1, ease: "power3.out" })
            .from(".right-text", { opacity: 0, x: 100, duration: 1, ease: "power3.out" }, "-=0.8");

    }, []);

    return (
        <section className="overflow-hidden cards-section py-16 px-6 lg:px-20">
            {/* Top Part */}
            <div className="flex flex-col-reverse lg:space-x-4 justify-between lg:flex-row">
                {/* Left Text */}
                <div className="left-text lg:w-1/2 flex flex-col justify-center bg-white py-4 lg:p-6 mb-6 lg:mb-0">
                    <h2 className="blkchry text-3xl lg:text-5xl font-semibold mb-4">
                        We believe in fashion that cares for the planet.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Our commitment to sustainability goes beyond creating stylish bags - it’s about making a positive impact.
                    </p>
                    <ScrollLink to={"/product"}>
                        <button className="bg-black w-full lg:w-[200px] text-white px-6 py-3 text-lg font-semibold rounded hover:bg-gray-800 transition">

                            Shop Now
                            </button>
                        </ScrollLink>     
                </div>

                {/* Right Image */}
                <div className="right-image w-full lg:w-[45%] flex items-center justify-center bg-gray-200">
                    <img src="/images/card2.png" alt="Bag Image" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Bottom Part */}
            <div className="flex flex-col lg:space-x-4 justify-between lg:flex-row">
                {/* Left Image */}
                <div className="left-image w-full lg:w-[45%] flex items-center justify-center bg-gray-200">
                    <img src="/images/card.png" alt="Stones Image" className="w-full h-full object-cover" />
                </div>

                {/* Right Text */}
                <div className="right-text lg:w-1/2 flex flex-col justify-center bg-white py-4 lg:p-6">
                    <h3 className="blkchry text-3xl lg:text-5xl font-semibold mb-4">
                        Adventure collection is designed to keep up with your dynamic lifestyle.
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Offering durability without compromising on style.
                    </p>
                        <ScrollLink to={"/product"}>
                        <button className="bg-black w-full lg:w-[200px] text-white px-6 py-3 text-lg font-semibold rounded hover:bg-gray-800 transition">

                            Shop Now
                            </button>
                        </ScrollLink>                  
                </div>
            </div>
        </section>
    );
};

export default Cards;

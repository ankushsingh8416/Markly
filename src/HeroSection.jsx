import { useGSAP } from '@gsap/react';
import React from 'react';
import { gsap } from 'gsap';
import ScrollLink from './ScrollLink';

const HeroSection = () => {
    useGSAP(() => {
        const tl = gsap.timeline({ ease: "power3.out" });

        // Adding animations to the timeline
        tl.from(".hero-title", { opacity: 0, y: 50, duration: 1, delay: 0.5 })
            .from(".hero-description", { opacity: 0, y: 50, duration: 1 }, "-=0.8") 
            .from(".hero-button", { opacity: 0, y: 50, duration: 1 }, "-=0.8")
            .from(".hero-image", { opacity: 0, scale: 0.8, duration: 1 }, "-=0.8");
    }, []);

    return (
        <div className="h-full md:h-[calc(100vh-70px)] md:pb-0 pb-4 overflow-x-hidden bg-[#50220E] text-white flex flex-col relative">
            <div className="flex-grow flex flex-col justify-around items-center text-center top-0 relative px-4">
                <img
                    src="/images/hero.png"
                    alt="Bag"
                    className=" hero-image w-[80%] lg:w-[400px] m-auto relative lg:absolute lg:top-1/2 transform lg:-translate-y-1/2 z-0"
                />
                <div className=" z-10 px-4 py-6">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 hero-title">Markly Bags</h1>
                    <p className="hero-description text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-6">
                        We believe in the power of a well-crafted bag to enhance your lifestyle.
                        Explore our curated collection of premium bags that seamlessly blend style,
                        functionality, and durability.
                    </p>
                    <div className="hero-button">
                        <button className="bg-white text-[#50220E] px-6 py-3 text-sm lg:text-lg font-semibold rounded hover:bg-gray-200 transition">
                            <ScrollLink to={"/product"}>
                                Shop Now
                            </ScrollLink>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HeroSection;

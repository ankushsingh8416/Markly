import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Animate the text and form with a fade-in effect
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert(); // Cleanup the animation on unmount
    }, []);

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden relative h-[600px] flex items-center bg-cover bg-center text-white py-8 px-4 sm:py-12 sm:px-6 lg:px-20"
            style={{ backgroundImage: 'url("/images/bg-image.png")' }}
        >
            {/* Overlay for background darkening */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div ref={contentRef} className="relative z-10 ml-auto w-full lg:w-[50%]">
                {/* Text Section */}
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        Join the Markly Community — Subscribe to Our Newsletter
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl">
                        Be the first to know about new arrivals, exclusive promotions, and the latest trends in the world of bags. Sign up for our newsletter and stay connected with the Markly lifestyle.
                    </p>
                </div>

                {/* Subscription Form */}
                <div className="w-full">
                    <form className="flex flex-col sm:flex-row gap-4 items-center">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-grow w-full sm:w-auto p-3 sm:p-4 bg-transparent rounded border border-1 border-white text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white w-full lg:w-auto text-gray-900 px-4 py-3 sm:px-6 sm:py-4 font-semibold hover:bg-gray-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;

"use client";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter as font } from "next/font/google";
import { Spotlight } from "./ui/Spotlight";

const inter = font({ weight: "600", subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const firstRef = useRef<HTMLParagraphElement>(null);
    const secondRef = useRef<HTMLParagraphElement>(null);
    const thirdRef = useRef<HTMLParagraphElement>(null);
    const fourthRef = useRef<HTMLParagraphElement>(null);
    const fifthRef = useRef<HTMLParagraphElement>(null);
    const circlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElements = [firstRef.current, secondRef.current, thirdRef.current, fourthRef.current, fifthRef.current];
        const circlesContainer = circlesRef.current;

        textElements.forEach((element) => {
            if (element) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "top 50%",
                        end: "top 30%",
                        scrub: 1,
                    }
                });

                timeline
                    .to(element, { opacity: 1, duration: 1 })
                    .to(element, { opacity: 0.2, duration: 1 });
            }
        });

        if (circlesContainer) {
            const circles = circlesContainer.querySelectorAll('.circle');

            circles.forEach((circle) => {
                gsap.fromTo(circle,
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1,
                        scale: 1,
                        scrollTrigger: {
                            trigger: circlesContainer,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: 1,
                        }
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id='about' className={`${inter.className} relative flex flex-col items-center justify-center w-full h-screen text-center`}>  
            <div>
                <Spotlight className="-top-40 -left-10 md:-top-20 md;-left-32 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div ref={circlesRef} className="absolute inset-0 z-0">
                
            </div>

            <div className="relative z-10 flex flex-col space-y-8 md:space-y-12">
                <p ref={firstRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>We are not a coaching center</p>
                <p ref={secondRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>We are not about traditional careers</p>
                <p ref={thirdRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>Conatus is an institution to help you</p>
                <p ref={fourthRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>reach your full potential,</p>
                <p ref={fifthRef} style={{ opacity: 0.2 }} className='font-semibold md:text-5xl text-3xl'>Conatus is your first believer</p>
            </div>
        </div>
    );
}

export default About;

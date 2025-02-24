"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FaBookOpen } from "react-icons/fa";
import ScrollDownIcon from "@/components/ui/scroll-down-icon";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/Tooltip";

const AboutUs = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <div className="pb-20 pt-36 relative min-h-screen flex flex-col justify-center items-center">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-top-20 md;-left-32 h-screen"
              fill="white"
            />
            <Spotlight
              className="top-10 left-full h-[80vh] w-[50vw]"
              fill="purple"
            />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          {/* Logo */}
          <div className="absolute top-[15%] md:top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo.png"
              alt="Conatus Bharat Logo"
              width={300}
              height={80}
              className="drop-shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex justify-center my-20 relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
              <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
                About Conatus Bharat
              </h2>
              <TextGenerateEffect
                className="text-[32px] md:text-4xl lg:text-5xl"
                words="Beyond Classrooms, Beyond Boundaries"
              />
              <p className="mt-5 text-white text-sm md:text-lg leading-relaxed">
                At Conatus Bharat, we believe that education goes beyond textbooks and classrooms.
                Every child is unique, curious, and full of potential, and we are here to nurture that spark.
              </p>
              <p className="mt-3 text-white text-sm md:text-lg leading-relaxed">
                We are not just an EdTech platform—we are an ecosystem where students and schools can explore,
                learn, and grow beyond traditional boundaries. Our approach is child-centered and equity-driven,
                ensuring that every learner receives personalized support, holistic development, and access to
                opportunities that prepare them for life.
              </p>
              <p className="mt-3 text-white text-sm md:text-lg leading-relaxed">
                By fostering inclusive communities and innovative partnerships, we create learning environments
                that inspire curiosity, encourage independent thinking, and celebrate every child’s journey.
              </p>
              <p className="mt-3 text-white text-sm md:text-lg leading-relaxed">
                Together with families and schools, we are shaping a future where every child is inspired,
                supported, and empowered to own tomorrow.
              </p>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="/about" target="_blank" rel="noopener noreferrer">
                      <MagicButton
                        title="Learn More"
                        icon={<FaBookOpen />}
                        position="right"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-black-100 border border-white/[0.2] text-white shadow-xl"
                  >
                    Revolutionizing education with AI-driven learning and personalized assessments.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Scroll Down Icon */}
          <div className="absolute bottom-10 flex justify-center w-full">
            <ScrollDownIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

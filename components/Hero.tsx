"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaBookOpen } from "react-icons/fa";
import ScrollDownIcon from "./other_components/scroll-down-icon";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/Tooltip";

const Hero = () => {
  return (
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

      {/* Logo at Pointer Location */}
      <div className="absolute top-[15%] md:top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/logo.png" // Replace with your actual logo path
          alt="Conatus Bharat Logo"
          width={300} // Adjust size as needed
          height={80}
          className="drop-shadow-lg"
        />
      </div>

      <div className="flex justify-center my-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Conatus Bharat Education Pvt. Ltd.
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Empowering the Schools of Tomorrow"
          />

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

      {/* Scroll Down Icon - Placed at the bottom of the section */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <ScrollDownIcon/>
      </div>
    </div>
  );
};

export default Hero;
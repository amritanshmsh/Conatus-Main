import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ScrollDownIcon from "./scroll-down-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/Tooltip";

const HeroPortfolio = () => {
  return (
    <div className="pb-20 pt-36 relative min-h-screen flex flex-col justify-center items-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="cyan"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="indigo" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center my-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-cyan-100 max-w-80">
            Modern Portfolio Website Case Study
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Next.js 15 Portfolio - Real-time Innovation"
          />
          
          <div className="text-center space-y-4 mt-6 mb-8">
            <p className="text-sm md:text-lg lg:text-xl text-gray-300">
              A modern, interactive portfolio website featuring advanced animations, 3D elements, and real-time user interactions
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Next.js 15</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Three.js</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full">GSAP</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Supabase</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Framer Motion</span>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <div className="flex gap-4">
                <TooltipTrigger asChild>
                  <a href="https://www.priyanshweb.com/" target="_blank" rel="noopener noreferrer">
                    <MagicButton
                      title="Live Demo"
                      icon={<FaExternalLinkAlt />}
                      position="right"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipTrigger asChild>
                  <a href="https://github.com/priyansh-priyansh/modern-portfolio" target="_blank" rel="noopener noreferrer">
                    <MagicButton
                      title="View Source"
                      icon={<FaGithub />}
                      position="right"
                    />
                  </a>
                </TooltipTrigger>
              </div>
              <TooltipContent
                side="top"
                className="bg-black-100 border border-white/[0.2] text-white shadow-xl"
              >
                Experience the interactive portfolio
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default HeroPortfolio;

import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import ScrollDownIcon from "../../../components/ui/scroll-down-icon";

const HeroWonder = () => {
  return (
    <div className="pb-20 pt-36 relative min-h-screen flex flex-col justify-center items-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
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

      <div className="flex justify-center my-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Adaptive Learning Platform
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Wonder - Unlocking Every Child’s Potential"
          />

          <div className="text-center space-y-4 mt-6 mb-8">
            <p className="text-sm md:text-lg lg:text-xl text-gray-300">
              A personalized learning experience designed to nurture strengths,
              empower students, and transform education.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full">
                AI-Powered Insights
              </span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full">
                Gamified Learning
              </span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full">
                Skill-Based Reports
              </span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full">
                Personalized Pathways
              </span>
            </div>
          </div>

          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default HeroWonder;

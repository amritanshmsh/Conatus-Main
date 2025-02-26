"use client";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import ScrollDownIcon from "@/components/ui/scroll-down-icon";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";

const AboutUs = () => {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
      <div className="w-full max-w-4xl mb-8">
        <Link href="/">
          <button className="flex items-center gap-2 text-white px-4 py-2 bg-purple-600 rounded-md shadow-md hover:bg-purple-700 transition">
            <FaArrowLeft size={18} />
            <span>Back</span>
          </button>
        </Link>
      </div>
        <div className="pb-20 pt-36 relative min-h-screen flex flex-col justify-center items-center text-center px-5 sm:px-10">
          <div>
            <Spotlight className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="absolute top-[12%] md:top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80">
            <Image src="/logo.png" alt="Conatus Bharat Logo" width={300} height={80} className="drop-shadow-lg w-full" />
          </div>

          <div className="relative z-10 max-w-3xl px-4 sm:px-8">
            <h2 className="uppercase tracking-widest text-xs text-blue-100">About Conatus Bharat</h2>
            <TextGenerateEffect className="text-2xl sm:text-4xl lg:text-5xl mt-3" words="Beyond Classrooms, Beyond Boundaries" />
            <p className="mt-5 text-white text-sm sm:text-lg leading-relaxed">
              At Conatus Bharat, we believe that education goes beyond textbooks and classrooms. Every child is unique, curious, and full of potential, and we are here to nurture that spark.
            </p>
            <p className="mt-3 text-white text-sm sm:text-lg leading-relaxed">
              We are not just an EdTech platform—we are an ecosystem where students and schools can explore, learn, and grow beyond traditional boundaries. Our approach is child-centered and equity-driven, ensuring that every learner receives personalized support, holistic development, and access to opportunities that prepare them for life.
            </p>
            <p className="mt-3 text-white text-sm sm:text-lg leading-relaxed">
              By fostering inclusive communities and innovative partnerships, we create learning environments that inspire curiosity, encourage independent thinking, and celebrate every child’s journey.
            </p>
            <p className="mt-3 text-white text-sm sm:text-lg leading-relaxed">
              Together with families and schools, we are shaping a future where every child is inspired, supported, and empowered to own tomorrow.
            </p>
          </div>

          <div className="absolute bottom-10 flex justify-center w-full">
            <ScrollDownIcon />
          </div>
        </div>

        <div className="w-full pt-20 pb-10 relative z-[20] flex flex-col items-center text-center bg-black-200 px-5 sm:px-10" id="contact">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl text-white">
            Ready to take <span className="text-purple">your</span> school to the next level?
          </h1>
          <p className="text-white-200 md:mt-6 mt-4 text-lg max-w-2xl">
            Reach out to us today and let&apos;s discuss how we can help you achieve your full potential.
          </p>
          <a
            href={`mailto:conatusbharat@gmail.com?subject=Inquiry about Conatus Bharat Solutions&body=Hello Team Conatus Bharat,%0D%0A%0D%0AI am interested in learning more about your services for schools. Here are some details about my institution:%0D%0A%0D%0A- Name of the Institution: %0D%0A- Name of the Person: %0D%0A- Position in the Institution: %0D%0A- Email: %0D%0A- Contact Number: %0D%0A%0D%0APlease get back to me at your earliest convenience.%0D%0A%0D%0AThank you!`}
            className="mt-6"
          >
            <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
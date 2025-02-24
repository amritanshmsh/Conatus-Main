"use client";

import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

interface Founder {
  title: string;
  name: string;
  image: string;
  socials: {
    linkedin: string;
  };
  message: string;
}

const foundersData: Founder[] = [
  {
    title: 'Director',
    name: 'Dr. Preeti Mishra',
    image: '/founder.jpg',
    socials: {
      linkedin: 'http://www.linkedin.com/in/drpreetimishra',
    },
    message: 'With a deep passion for education and innovation, I have always believed that the right guidance can change the world. My journey as a founder has been driven by the desire to create a platform that not only educates but also empowers. Our vision is to revolutionize the way education is perceived, ensuring that every student can unlock their true potential. I am committed to leading our organization with integrity, dedication, and a relentless pursuit of excellence, ensuring that we make a lasting impact on the lives of our students and the broader community.',
  },
  {
    title: 'Director',
    name: 'Amritansh Mishra',
    image: '/amritansh.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/amritanshmsh',
    },
    message: 'In today’s rapidly changing world, it is essential to have a clear vision and a strong strategic approach to achieve success. As an architect of our company’s growth, my focus has always been on building a strong foundation that supports innovation, creativity, and sustainable development. My goal is to steer our organization towards long-term success by aligning our strategies with our mission and values. I believe that through collaboration, innovation, and a steadfast commitment to our goals, we can overcome any challenges and create a future where education is accessible, effective, and transformative for all.',
  },
];

const FoundersMessage: React.FC = () => {
  return (
    <div className="bg-[#010319] text-white min-h-screen flex flex-col items-center py-16 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        Meet Our <span className="text-purple">Directors ✨</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-7xl px-4">
        {foundersData.map((founder, index) => (
          <div key={index} className="bg-purple-800 shadow-xl rounded-xl overflow-hidden p-6 transform transition-all hover:scale-105 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[45%] xl:max-w-[40%] text-center border-2 border-purple-500 flex flex-col h-full">
            <img 
              src={founder.image} 
              alt={founder.name} 
              className="w-full h-72 object-cover rounded-t-xl border-b-4 border-purple-500"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{founder.name}</h2>
              <p className="text-md md:text-lg text-gray-300 mb-4">{founder.title}</p>
              <p className="text-white text-sm md:text-base leading-relaxed mb-6 flex-grow">{founder.message}</p>
              <div className="mt-auto">
                <a 
                  href={founder.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex justify-center items-center text-white hover:text-gray-300 transition text-md md:text-lg font-semibold"
                >
                  <AiFillLinkedin size={28} className="mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundersMessage;

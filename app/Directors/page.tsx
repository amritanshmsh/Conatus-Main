'use client';

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
    message: 'In today&rsquo;s rapidly changing world, it is essential to have a clear vision and a strong strategic approach to achieve success. As an architect of our company&rsquo;s growth, my focus has always been on building a strong foundation that supports innovation, creativity, and sustainable development. My goal is to steer our organization towards long-term success by aligning our strategies with our mission and values. I believe that through collaboration, innovation, and a steadfast commitment to our goals, we can overcome any challenges and create a future where education is accessible, effective, and transformative for all.',
  },
];

const FoundersMessage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
       Director's Message
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {foundersData.map((founder, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={founder.image} 
              alt={founder.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl text-black font-bold mb-2">{founder.name}</h2>
              <p className="text-gray-600 mb-2">{founder.title}</p>
              <p className="text-gray-700 mb-4">{founder.message}</p>
              <a 
                href={founder.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-blue-500 hover:underline"
              >
                <AiFillLinkedin size={24} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoundersMessage;
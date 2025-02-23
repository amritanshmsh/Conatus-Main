'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What does Conatus Bharat offer?",
    answer: "Conatus Bharat provides innovative solutions for both schools and students, empowering learners to discover their potential, cultivate essential skills, and explore diverse career paths.",
  },
  {
    question: "How is Conatus Bharat different from other ed-tech companies?",
    answer: "We take a holistic approach to education, going beyond traditional academics, and we are here to provide a one-step solution for schools as well as students, determined to make a revolution.",
  },
  {
    question: "How does Conatus Bharat involve parents and teachers in the learning process?",
    answer: "We believe in collaboration! Our platform provides tools for parents and teachers to track progress, offer support, and work together to create the most effective learning environment for each child.",
  },
  {
    question: "What is Wonder?",
    answer: "It is a platform developed by Conatus Bharat which is an adaptive learning assessment tool. You can visit the website at <a href='https://iamwonder.in' class='text-purple-400 hover:underline' target='_blank' rel='noopener noreferrer'>iamwonder.in</a>.",
  },
  {
    question: "How do we help schools?",
    answer: "We provide a comprehensive range of services, including Social Media Marketing (SMM) to enhance your school's online presence, and our ERP solutions tailored to streamline administrative processes, improve communication, and support efficient school management.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.utils.toArray('.faq-item').forEach((item: any) => {
      gsap.fromTo(item, { opacity: 0, y: 20 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 0.2,
        },
      });
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    faqRefs.current.forEach((faq, index) => {
      if (faq) {
        const content = faq.querySelector('.faq-content') as HTMLDivElement;
        if (index === openIndex) {
          gsap.to(content, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
        } else {
          gsap.to(content, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
        }
      }
    });
  }, [openIndex]);

  return (
    <div className="relative z-[50] w-full bg-[#010319] py-14 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10">
        Frequently Asked <span className="text-purple">Questions </span> 
      </h2>
      <div className="max-w-4xl mx-auto space-y-5">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            ref={(el) => (faqRefs.current[index] = el)}
            className="faq-item p-5 md:p-6 rounded-xl bg-[#0d0d22] shadow-lg border border-[#1c1c3c] transition-all duration-300 hover:bg-[#161636]"
          >
            <button 
              onClick={() => toggleFaq(index)} 
              className="w-full text-left flex justify-between items-center font-semibold text-lg md:text-xl text-white transition-colors duration-300"
            >
              {faq.question}
              <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                ➜
              </span>
            </button>
            <div className="faq-content overflow-hidden mt-2 text-gray-400 h-0 opacity-0">
              <p className="pt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
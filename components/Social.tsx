'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const socials = [
  { id: 1, icon: FaInstagram, label: 'Instagram', link: 'https://www.instagram.com/conatusbharat/' },
  { id: 2, icon: FaXTwitter, label: 'Twitter', link: 'https://x.com/ConatusBharat' },
  { id: 3, icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/company/conatusbharat' },
  { id: 4, icon: FaFacebook, label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61562931242268' },
  { id: 5, icon: FaYoutube, label: 'YouTube', link: 'https://www.youtube.com/@ConatusBharat' },
];

const Socials: React.FC = () => {
  useEffect(() => {
    // GSAP animation setup for social media icons with ScrollTrigger
    socials.forEach((social) => {
      const iconId = `social-icon-${social.id}`; // Unique ID for each social media icon
      gsap.fromTo(
        `#${iconId}`, // Select each icon by its unique ID
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `#${iconId}`,
            start: 'top 80%', // Animation starts when the top of the icon is 80% in view
            end: 'bottom 60%', // Animation ends when the bottom of the icon is 60% in view
            scrub: true, // Smoothly updates the animation while scrolling
            toggleActions: 'play none none reverse', // Play animation when entering view, reverse when leaving
          },
        }
      );
    });
  }, []);

  return (
    <div id='socials' className="flex flex-col items-center pt-5 md:pt-5 pb-10 bg-[#010319] ">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10">
        Our <span className="text-purple">Socials </span> 
        </h2>
      <div className="flex gap-6">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
              id={`social-icon-${social.id}`} 
            >
              <Icon className="text-white  text-4xl lg:text-5xl transition-transform transform hover:scale-110" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
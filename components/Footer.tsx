import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative z-[20] overflow-clip bg-[#010319]">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-6 md:px-16 lg:px-24 text-center md:text-left">
  {/* Copyright */}
  <p className="text-sm md:text-base font-light md:font-normal">
    Copyright © 2025 Conatus Bharat
  </p>

  {/* Social Media Icons */}
  <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-0">
    {socialMedia.map((info) => (
      <div
        key={info.id}
        className="w-10 h-10 cursor-pointer flex justify-center items-center 
        backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
        bg-black-200 rounded-lg border border-black-300 transition hover:scale-110"
      >
        <a href={info.link} target="_blank" rel="noopener noreferrer">
          <img src={info.img} alt={info.name} width={20} height={20} />
        </a>
      </div>
    ))}
  </div>
</div>

{/* Privacy Policy & Terms and Conditions */}
<div className="flex flex-wrap justify-center items-center text-sm mt-6 gap-2 md:gap-4 px-6 md:px-16 lg:px-24">
  <a href="/PrivacyPolicy" className="hover:underline">
    Privacy Policy
  </a>
  <span className=" md:inline">|</span>
  <a href="/T&C" className="hover:underline">
    Terms and Conditions
  </a>
</div>
    </footer>
  );
};

export default Footer;
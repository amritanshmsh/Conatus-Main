import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";

const Connect = () => {
  return (
    <div className="w-full pt-20 pb-10 relative z-[20]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span> 
          school to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          reach your best potential
        </p>
        <a
  href={`mailto:conatusbharat@gmail.com?subject=Inquiry about Conatus Bharat Solutions&body=Hello Team Conatus Bharat,%0D%0A%0D%0AI am interested in learning more about your services for schools. Here are some details about my institution:%0D%0A%0D%0A- Name of the Institution: %0D%0A- Name of the Person: %0D%0A- Position in the Institution: %0D%0A- Email: %0D%0A- Contact Number: %0D%0A%0D%0APlease get back to me at your earliest convenience.%0D%0A%0D%0AThank you!`}
>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Connect;
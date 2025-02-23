'use client';
import mentorsData from '@/data/mentors.json';
import NextImage from "next/image"; // Alias import
import { AiFillLinkedin} from 'react-icons/ai'; 

function Mentor() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4 md:px-0 max-w-7xl">
      {/* Mentor Section */}
      <div className="flex justify-center mt-12 bg-black py-8">
        <div id="mentor" className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Our Mentors ✨
          </h1>
        </div>
      </div>

      <div className="flex justify-center bg-black">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {mentorsData.map((mentor, index) => (
            <div 
              key={index} 
              className="max-w-xs w-full group/card rounded-md shadow-xl p-4 bg-black text-white mx-auto border border-gray-600 group-hover/card:border-blue-400 transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-row items-center space-x-4 z-10">
                <NextImage
                  height="80"
                  width="80"
                  alt="Avatar"
                  src={mentor.image}
                  className="h-30 w-30 rounded-full border-2 border-white object-cover aspect-square"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-white relative z-10">
                    {mentor.name}
                  </p>
                  <p className="text-sm text-gray-400">{mentor.post}</p>
                </div>
              </div>
              <div className="text content mt-4">
                <p className="font-normal text-sm text-gray-300 relative z-10 my-4">
                  {mentor.about}
                </p>
              </div>
              <div className="flex mt-2 space-x-4">
                {mentor.socials.linkedin && (
                  <a 
                    href={mentor.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <AiFillLinkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentor;
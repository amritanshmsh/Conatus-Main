'use client';
import { PinContainer } from "@/components/ui/Tdpin";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'; 
import { FaXTwitter } from "react-icons/fa6"; // Import Twitter icon
import teamData from '@/data/team.json';

function Team() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4 md:px-0 max-w-7xl">
      {/* Team Section */}
      <div id="team" className="text-center mt-12 mb-8">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
          Meet the Team ✨
        </h1>
      </div>

      <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
        {teamData.map((member, index) => (
          <PinContainer key={index} title={member.title}>
            <div className="flex basis-full flex-col p-2 md:p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[18rem] mx-auto">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm md:text-base text-slate-100">
                {member.name}
              </h3>
              <div className="text-sm md:text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {member.description}
                </span>
              </div>
              <div className="relative flex flex-1 w-full rounded-lg mt-4">
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '0.5rem' }}
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="flex mt-2 space-x-2">
                {member.socials.github && (
                  <a 
                    href={member.socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-400"
                  >
                    <AiFillGithub size={20} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a 
                    href={member.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-400"
                  >
                    <AiFillLinkedin size={20} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a 
                    href={member.socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-400"
                  >
                    <FaXTwitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}

export default Team;
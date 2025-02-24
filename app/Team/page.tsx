"use client";
import { PinContainer } from "@/components/ui/Tdpin";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import teamData from "@/data/team.json";

function Team() {
  return (
    <div className="bg-[#010319] text-white py-16 px-6 md:px-12 mb-10 flex flex-col items-center max-height: auto;">
      {/* Team Section Title with Extra Spacing */}
      <div id="team" className="text-center mt-20 mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10">
        Meet the <span className="text-purple">Team ✨ </span> 
      </h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 md:gap-20 justify-center">
        {teamData.map((member, index) => (
          <PinContainer key={index} title={member.title}>
            <div className="relative flex flex-col items-center rounded-xl shadow-lg transform transition-all hover:scale-105 w-[16rem] md:w-[18rem] mx-auto">
              {/* Member Image */}
              <div className="relative w-44 h-44 md:w-52 md:h-52 overflow-hidden rounded-full border-2 border-blue-500 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Member Name & Role */}
              <h3 className="mt-5 text-lg md:text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400 text-center px-4">{member.description}</p>

              {/* Social Icons */}
              <div className="flex mt-4 space-x-4">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <AiFillGithub size={26} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <AiFillLinkedin size={26} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <FaXTwitter size={26} />
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
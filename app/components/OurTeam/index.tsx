/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialMedia: {
    twitter: string;
    linkedin: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      role: "CEO",
      image: "/images/pex.jpg",
      socialMedia: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    {
      name: "Jane Smith",
      role: "Designer",
      image: "/images/pex.jpg",
      socialMedia: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
    {
        name: "Jane Smith",
        role: "Designer",
        image: "/images/pex.jpg",
        socialMedia: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
        },
      },
      {
        name: "Jane Smith",
        role: "Designer",
        image: "/images/pex.jpg",
        socialMedia: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
        },
      },
  ];

  return (
    <div className="py-20 bg-forest">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 items-center md:w-2/3 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-black md:text-4xl">
            Tailus blocks leadership
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tailus prides itself not only on award-winning technology but also on the talent of its
            people—some of the brightest minds and most experienced executives in business.
          </p>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative rounded-3xl space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={member.image}
                alt={member.name}
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-green translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{member.name}</h4>
                  <span className="block text-sm text-gray-500">{member.role}</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

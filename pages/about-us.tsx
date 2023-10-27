/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import OurTeam from '../app/components/OurTeam'
import DonateUsbtn2 from '../app/components/DonateUsbtn2'

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className=" relative mt-11">

        <div
          className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/aboutus/Azam1.jpg")',

            backgroundSize: 'cover',
          }} />
        <div className="absolute bottom-4 right-4 text-white text-opacity-80 text-sm md:text-base">
          Photo by <a href="photographer-profile-link" className="text-gradient">Abid Ali Bhat</a>
        </div>

        <div className="container mx-auto pt-16 pb-32 px-4 relative z-1">
          <div
            className="w-full bg-green py-10 p-8 mt-4 mb-8 rounded-lg shadow-lg text-center"
            // style={{
            //   backgroundImage: `url('/images/aboutus/Azam57.jpg')`,
            //   backgroundSize: 'cover',
            // }}
          >
            <h2 className="lg:text-2xl font-semibold sm:text-1xl text-white">
              Embrace the beauty of nature with us
            </h2>
            <p className="text-l mt-4 lg:text-lg text-white">
              Nature enthusiasts and conservationists as we embark on a journey to protect and preserve the natural wonders of Kashmir.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:flex">

            <div className="md:w-1/2 text-white mt-3">
              <h1 className="text-3xl font-semibold text-center text-green">About Us</h1>
              <p className="mt-11  text-white text-lg">
                At the council, we are on a mission to champion the cause of our planet and foster a harmonious relationship between humanity and the natural world. Our environmental organization is driven by a shared commitment to sustainability, conservation, and the preservation of Earth's beauty.
              </p>
              <p className="mt-11 text-lg">
                With a focus on three core pillars — tree planting, environmental cleanups, and waste reduction — we are actively working to mitigate the impact of climate change, restore ecosystems, and reduce pollution. Our dedicated team, along with the support of passionate volunteers and donors, is at the forefront of positive environmental change.
              </p>

            </div>

            <div className="md:w-1/2 mt-7 md:ml-4 ">

              <img
                className="hidden md:block w-full mt-11 h-auto sm:mt-4 rounded-lg shadow-lg ml-6 "
                src="/images/aboutus/ser.jpg"
                alt="About Us Image"
              />
            </div>
          </div>

        </div>
        <div className="flex    opacity-80 flex-col rounded-md shadow-lg lg:flex-row" >
          <img src="images/aboutus/land.jpeg" alt="" className="h-80 rounded-lg shadow-lg mt-6 dark:bg-gray-500 aspect-video" />

          <div className="flex flex-col justify-center   flex-1 p-6 ">

            <h3 className="text-lg  text-white mt-4">We invite you to be part of this transformative journey. Together, we can create a brighter, more sustainable future. Join us as we take meaningful steps towards a world where nature thrives, communities flourish, and the environment is cherished for generations to come.</h3>

            <p className="my-6 dark:text-white text-lg"> Through our tree planting initiatives, we seek to breathe life back into the Earth, one sapling at a time. Our cleanup efforts go beyond the removal of waste; they rejuvenate landscapes and inspire community engagement. Our waste reduction programs promote responsible consumption and waste management, contributing to a healthier planet.</p>
            <button
              type="button"
              className="self-start text-white bg-forest px-4 py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Take Action with us
            </button>

          </div>

        </div>
      </div>


      <OurTeam />
      <DonateUsbtn2 />
    </>
  );
};

export default About;


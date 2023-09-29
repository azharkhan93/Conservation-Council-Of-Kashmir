"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {ScrollAnimation,getScrollAnimation}  from "../Animations/ScrollAnimation";

const Donateus = () => {
  const [animationVariants, setAnimationVariants] = useState<any>(null);

  useEffect(() => {
    const variants = getScrollAnimation();
    setAnimationVariants(variants);
  }, []);
  return (
    <>
    {animationVariants && (
        <ScrollAnimation variants={animationVariants}>
      <div
        className="bg-cover bg-center bg-no-repeat py-24 md:py-32"
        style={{
          backgroundImage: `url('/images/sunset.jpg')`,
         
        }}
      >
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-green mb-6">
              Donate Now..
            </h2>
            <p className="text-lg md:text-xl text-white">
              Your support can make a difference. Help us in our mission to protect
              and preserve nature. Every little contribution counts!
            </p>
            <a className="mb-2  text-white bg-green inline-block  mt-7 rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Donate Now</a>
            {/* <button className= "bg-green hover:bg-blue  mt-8 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
            Donate Now
          </button> */}
                
            
          </div>
        </div>
      </div>
      </ScrollAnimation>
      )}
    </>
  );
};

export default Donateus;
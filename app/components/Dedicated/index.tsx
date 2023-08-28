"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {ScrollAnimation,getScrollAnimation}  from "../Animations/ScrollAnimation";
// import getScrollAnimation from "../Animations/getScrollAnimation"; 

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
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-green mb-6">
              Donate Now..
            </h2>
            <p className="text-lg md:text-xl text-white">
              Your support can make a difference. Help us in our mission to protect
              and preserve nature. Every little contribution counts!
            </p>
            <button
                  className="mt-8 bg-green text-white text-lg py-4 px-10 rounded-md hover:bg-blue-600 focus:outline-none transform transition-transform duration-300 hover:scale-105"
                >
                  Donate
                </button>
          </div>
        </div>
      </div>
      </ScrollAnimation>
      )}
    </>
  );
};

export default Donateus;

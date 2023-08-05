import React from "react";
import Image from "next/image";

const Donateus = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat py-24 md:py-32"
        style={{
          backgroundImage: `url('/images/sunset.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Donate Now
            </h2>
            <p className="text-lg md:text-xl text-white">
              Your support can make a difference. Help us in our mission to protect
              and preserve nature. Every little contribution counts!
            </p>
            <button className="mt-8 bg-blue-500 bg-black text-white text-lg py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none">
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donateus;

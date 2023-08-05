'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React, { useRef, useEffect } from "react";

const Total = () => {
  const counterRef = useRef(null);

  const animateCounter = (target: { innerText: string; }, start: number, end: number, duration: number) => {
    const range = end - start;
    const startTime = Date.now();

    const updateCounter = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(start + progress * range);
      target.innerText = value.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  };

  const handleScroll = (entries: [any]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      const counters = counterRef.current.querySelectorAll(".counter-value");
      counters.forEach((counter: { dataset: { value: string; }; }) => {
        const endValue = parseInt(counter.dataset.value, 10);
        animateCounter(counter, 0, endValue, 1000);
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed for better timing
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className="xl:px-20 px-2 py-20 xl:mx-auto xl:container"
    >
      <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
        More Than 10 Years We Provide Service
        <br className="md:block hidden" />
        in Real State Industry
      </h1>
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="world map image"
          className="w-full xl:h-full h-96 object-cover  sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="mobile-image"
          className="sm:hidden -mt-10 block w-full h-96 object-cover absolute z-0"
        />
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative  sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40">
          <p className="text-3xl font-semibold text-gray-800 counter-value" data-value={20000}>
            0
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Trees Planted By Us</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto bg-white sm:absolute relative   mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p className="text-3xl font-semibold text-gray-800 counter-value" data-value={8000}>
            0
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Animals Saved By Us</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative  md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56sm:mr-24">
          <p className="text-3xl font-semibold text-gray-800 counter-value" data-value={15000}>
            0
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Saved Animals</p>
        </div>
      </div>
    </div>
  );
};

export default Total;
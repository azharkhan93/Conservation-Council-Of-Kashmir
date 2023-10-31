/* eslint-disable react-hooks/exhaustive-deps */
'use strict';
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";

const Total = () => {
  const counterRef = useRef<HTMLDivElement | null>(null);

  const animateCounter = (target: HTMLDivElement, start: number, end: number, duration: number) => {
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
  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      const counters = counterRef.current?.querySelectorAll(".counter-value");
      counters?.forEach((counter) => {
        const endValue = parseInt((counter as HTMLElement)?.dataset.value || "0", 10); // Type assertion to HTMLElement
        if (!isNaN(endValue)) { // Check if endValue is a valid number
          animateCounter(counter as HTMLDivElement, 0, endValue, 1000); // Type assertion to HTMLDivElement
        }
      });
    }
  };
  

  // const handleScroll = (entries: IntersectionObserverEntry[]) => {
  //   const [entry] = entries;
  //   if (entry.isIntersecting) {
  //     const counters = counterRef.current?.querySelectorAll(".counter-value");
  //     counters?.forEach((counter) => {
  //       const endValue = parseInt(counter?.dataset.value || "0", 10); // Use optional chaining
  //       if (!isNaN(endValue)) { 
  //         animateCounter(counter as HTMLDivElement, 0, endValue, 1000); // Type assertion
  //       }
  //     });
  //   }
  // };
  
  
  

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
      <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-green sm:mb-0 mb-12">
    Environmental Impact Dashboard
    
    <span className="block mt-4 text-2xl text-gray-600">Achieving Remarkable Results in Less Than a Year</span>
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
          <p className="text-3xl font-semibold text-gray-800 counter-value text-gradient" data-value={500}>
            0
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-green ">Trees Planted By Us</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 w-full sm:w-auto bg-white sm:absolute relative   mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p className="text-3xl font-semibold text-gradient counter-value " data-value={5}>
            0
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-green">Cleanups Conducted By Us</p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative  md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56sm:mr-24">
          <p className="text-3xl font-semibold text-gray-800 counter-value text-gradient" data-value={6}>
            0
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-green">Volunteers Engaged With us</p>
        </div>
      </div>
    </div>
   
  );
};

export default Total;


/* eslint-disable @next/next/no-img-element */

// import React from 'react'


// const Banner = () => {
//   return (
//     <div className="relative w-full h-full bg-gray-200 overflow-hidden">

      
//       <div className="absolute w-full h-full bg-black">
//         <img src="https://fancytailwind.com/static/d38369764db9945c335175de244c268f/2e8d7/portrait1.webp" alt="" className="absolute -right-28 w-full h-full object-cover" />
//       </div>

     
//       <div className="relative py-10 xl:py-20 px-5 w-full sm:w-2/3 h-full flex flex-col justify-center items-center bg-white bg-opacity-90">

       
//         <h2 className="mt-14 text-center text-base sm:text-lg text-gray-800 font-newsreader font-medium uppercase tracking-extra"><span className="text-3xl">T</span>his is how <span className="text-3xl">F</span>ancy <span className="text-3xl">T</span>ailwind</h2>

        
//         <div className="pb-7 sm:pb-14 xl:pb-20 max-w-sm sm:max-w-xl xl:max-w-2xl w-full flex flex-col items-center overflow-hidden" style={{ textShadow: "2px 2px 5px rgba(86,90,88,0.85)" }}>

          
//           <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
//             <span className="z-10">W</span>
//             <span>O</span>
           
//             <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform -translate-x-full animate-linethrough" />
            
//             <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
//             <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
//           </span>

          
//           <span className="relative w-full text-7xl sm:text-8xl md:text-9xl xl:text-10xl font-semibold flex justify-around">
//             <span>R</span>
//             <span className="z-10">K</span>
           
//             <span className="absolute top-1/2 w-5/6 h-3 md:h-6 bg-yellow-700 bg-opacity-80 shadow-lg transform translate-x-full animate-linethrough" />
            
//             <span className="absolute hidden md:block -bottom-8 left-40 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
//             <span className="absolute hidden md:block -bottom-8 right-10 w-16 md:w-32 h-32 bg-gray-800 bg-opacity-20 filter blur-xl" />
//           </span>
        
//         </div>

        
//         <div className="w-3/4 flex flex-col md:flex-row">
          
//           <h3 className="sm:px-5 text-center md:text-right text-lg text-gray-800 font-newsreader font-normal uppercase tracking-widest"><span className="text-3xl">O</span>ur <span className="text-3xl">A</span>pproach</h3>
         
//           <p className="sm:px-5 text-center md:text-left font-light leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente tempore placeat. Maxime officia itaque ipsa similique exercitationem veniam. Provident quibusdam recusandae accusamus temporibus dolorem reiciendis optio.</p>
//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default Banner;



'use client'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const Banner = () => {
  const images = ["/images/ser.jpg", "/images/pex.jpg", "/images/home.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="relative h-100 ">
      <Slider {...settings}>
        
        <div
          className="relative h-screen bg-cover"
          style={{
            backgroundImage: `url('${images[0]}')`,
            zIndex: currentIndex === 0 ? 1 : 0,
          }}
        >

        
          <div className="relative h-screen bg-cover " style={{ backgroundImage: "url('/images/pex.jpg')" }}>
          <div className="container h-full  mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="flex h-full items-start md:items-center " style={{ marginTop: '8rem' }}>
              <div className="md:w-1/2 mt-8 md:mt-0 sm:mt-9">
                <h1 className="text-6xl mt-3  md:text-6xl lg:text-7xl font-bold text-green  text-opacity-80" >
                  Plant Trees, Save Nature
                </h1>
                <p className="text-white text-lg md:text-xl opacity-80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  tristique euismod sapien, eget semper arcu congue sit amet.
                  Phasellus eget eros a neque pellentesque volutpat. Sed nec purus
                  eu justo varius ultrices. Quisque eget vestibulum risus.
                </p>
                <button className="mt-8 bg-green text-white text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
          className="relative h-screen bg-cover"
          style={{
            backgroundImage: `url('${images[0]}')`,
            zIndex: currentIndex === 0 ? 1 : 0,
        
          }}
        >

        
          <div className="relative h-screen bg-cover " style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="container h-full opacity-50 mx-auto px-4 py-16 md:py-24 lg:py-32">
            {/* Content */}
            <div className="flex h-full items-start md:items-center" style={{ marginTop: '8rem' }}>
              <div className="md:w-1/2 sm:mt-9">
                <h1 className="text-6xl mt-3 md:text-6xl lg:text-7xl font-bold text-green mb-4 text-opacity-80">
                  Plant Trees, Save Nature
                </h1>
                <p className="text-white text-lg md:text-xl opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  tristique euismod sapien, eget semper arcu congue sit amet.
                  Phasellus eget eros a neque pellentesque volutpat. Sed nec purus
                  eu justo varius ultrices. Quisque eget vestibulum risus.
                </p>
                <button className="mt-8 bg-white text-green-500 text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div
          className="relative h-screen bg-cover"
          style={{
            backgroundImage: `url('${images[0]}')`,
            zIndex: currentIndex === 0 ? 1 : 0,
           
          }}
        >

        
          <div className="relative h-screen bg-cover " style={{ backgroundImage: "url('/images/ser.jpg')" }}>
          <div className="container h-full  mx-auto px-4 py-16 md:py-24 lg:py-32">
           
            <div className="flex h-full items-start md:items-center" style={{ marginTop: '8rem' }}>
              <div className="md:w-1/2 sm:mt-9">
                <h1 className="text-6xl mt-3 md:text-6xl lg:text-7xl font-bold text-green mb-4 text-opacity-80">
                  Plant Trees, Save Nature
                </h1>
                <p className="text-white text-lg md:text-xl opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  tristique euismod sapien, eget semper arcu congue sit amet.
                  Phasellus eget eros a neque pellentesque volutpat. Sed nec purus
                  eu justo varius ultrices. Quisque eget vestibulum risus.
                </p>
                <button className="mt-8 bg-white text-green-500 text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </Slider>
      </div>
  );
};

export default Banner;

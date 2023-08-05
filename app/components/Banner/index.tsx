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
    <div className="relative h-screen">
      <Slider {...settings}>
        
        <div
          className="relative h-screen bg-cover"
          style={{
            backgroundImage: `url('${images[0]}')`,
            zIndex: currentIndex === 0 ? 1 : 0,
            opacity: currentIndex === 0 ? 1 : 0,
             transition: "opacity 1s ease-in-out",
          }}
        >

        
          <div className="relative h-screen bg-cover " style={{ backgroundImage: "url('/images/pex.jpg')" }}>
          <div className="container h-full  mx-auto px-4 py-16 md:py-24 lg:py-32">
            {/* Content */}
            <div className="flex h-full items-start md:items-center">
              <div className="md:w-1/2">
                <h1 className="text-6xl mt-3 md:text-6xl lg:text-7xl font-bold text-white mb-4 text-opacity-80">
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
            opacity: currentIndex === 0 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >

        
          <div className="relative h-screen bg-cover " style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="container h-full opacity-50 mx-auto px-4 py-16 md:py-24 lg:py-32">
            {/* Content */}
            <div className="flex h-full items-start md:items-center">
              <div className="md:w-1/2">
                <h1 className="text-6xl mt-3 md:text-6xl lg:text-7xl font-bold text-white mb-4 text-opacity-80">
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
            opacity: currentIndex === 0 ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >

        
          <div className="relative h-screen bg-cover " style={{ backgroundImage: "url('/images/ser.jpg')" }}>
          <div className="container h-full  mx-auto px-4 py-16 md:py-24 lg:py-32">
            {/* Content */}
            <div className="flex h-full items-start md:items-center">
              <div className="md:w-1/2">
                <h1 className="text-6xl mt-3 md:text-6xl lg:text-7xl font-bold text-white mb-4 text-opacity-80">
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

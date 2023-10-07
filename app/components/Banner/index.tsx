/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
'use client'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";

const Banner = () => {
  const images = ["/images/Azam15.jpg", "/images/Azam8.jpg", "/images/Azam11.jpg"];

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
          <div className="relative h-screen bg-cover" style={{ backgroundImage: "url('/images/Azam15.jpg')" }}>
            <div className="container h-full mx-auto px-4 py-16 md:py-24 lg:py-32">
              <div className="flex h-full items-start md:items-center" style={{ marginTop: '8rem' }}>
                <div className="md:w-1/2 mt-8 md:mt-0 sm:mt-9 text-center sm:text-left">
                  <h1 className="text-2xl mt-6 md:text-6xl lg:text-5xl font-bold text-green text-opacity-80 lg:text-left">
                    A Cleaner World Begins With Better Waste Management.
                  </h1>
                  <p className="text-white mt-6 text-l md:text-xl opacity-80 lg:text-left sm:text-center sm:text-sm">
                    Effective Waste Management Isn't Just About disposing of trash; it's a holistic approach that involves reducing waste at its source, reusing materials when possible, and recycling what we can. It's about conscious consumption and mindful disposal.
                  </p>
                  <Link href="/instructions">
        <button className="mt-8 bg-green text-white text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                    Learn More
                  </button>
      </Link>
                  {/* <button className="mt-8 bg-green text-white text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-opacity-80 text-sm md:text-base">
              Photo by <a href="https://www.instagram.com/aabidrebel/?igshid=MzRlODBiNWFlZA%3D%3D" className="text-green-500">Abid Ali Bhat</a>
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
          <div className="relative h-screen t bg-cover " style={{ backgroundImage: "url('/images/Azam8.jpg')" }}>
            <div className="container h-full opacity-80 mx-auto px-4 py-16 md:py-24 lg:py-32">
              <div className="flex h-full items-start md:items-center sm:center" style={{ marginTop: '8rem' }}>
                <div className="md:w-1/2 sm:mt-9 text-center sm:text-left">
                  <h1 className="text-4xl mt-8 md:text-6xl lg:text-5xl font-bold text-white mb-6 text-opacity-80 sm:text-center lg:text-left">
                    Planting Tree, One At a Time
                  </h1>
                  <p className="text-white text-lg mt-6 md:text-xl text-opacity-80 sm:text-center lg:text-left">
                    In a world facing environmental challenges, it's the small acts that add up to make a big difference. Our commitment is simple yet powerful: planting tree, one at a time.
                  </p>
                  <button className="mt-8 bg-green text-white text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-white text-opacity-80 text-sm md:text-base">
              Photo by <a href="https://www.instagram.com/aabidrebel/?igshid=MzRlODBiNWFlZA%3D%3D" className="text-green-500">Abid Ali Bhat</a>
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
          <div className="relative h-screen t bg-cover " style={{ backgroundImage: "url('/images/Azam11.jpg')" }}>
            <div className="container h-full opacity-80 mx-auto px-4 py-16 md:py-24 lg:py-32">
              <div className="flex h-full items-start md:items-center sm:center" style={{ marginTop: '8rem' }}>
                <div className="md:w-1/2 sm:mt-9 text-center sm:text-left">
                  <h1 className="text-2xl mt-8 md:text-6xl lg:text-5xl font-bold text-white mb-6 text-opacity-80 sm:text-center lg:text-left">
                  Safeguarding Waterstreams
                  </h1>
                  <p className="text-white text-lg mt-6 md:text-xl text-opacity-80 sm:text-center lg:text-left">
                  Safeguarding waterstreams means protecting the source of life itself. It involves responsible water usage, pollution prevention, and conservation efforts to ensure that these lifelines remain crystal clear and teeming with biodiversity.
                  </p>
                  <button className="mt-8 bg-green text-white text-lg py-3 px-6 rounded-md font-medium hover:bg-green-50 hover:text-green-600 focus:outline-none focus:bg-green-50">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-white text-opacity-80 text-sm md:text-base">
              Photo by <a href="https://www.instagram.com/aabidrebel/?igshid=MzRlODBiNWFlZA%3D%3D" className="text-green-500">Abid Ali Bhat</a>
            </div>
          </div>
          </div>
        </Slider>
    </div>
  );
};

export default Banner;

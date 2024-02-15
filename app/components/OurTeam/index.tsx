/* eslint-disable @next/next/no-img-element */
// 'use client'
 import Slider from "react-slick";
 import { FaLinkedin } from 'react-icons/fa';

const LeadershipSlider = () => {
  const settings = {
    
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    
    <div className="bg-gray-50 dark:bg-gray-800 py-20 mt-4">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
      
        <div className="mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gradient md:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
          Get to know the amazing individuals behind our projects. Each member brings unique skills and creativity to the team, making it a fantastic blend of talents.
          </p>
        </div>

        <Slider {...settings}>
        <div className="space-y-4 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
              src="/images/team/Azm1.jpeg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-lacoste">Zaid Qadri</h4>
              <span className="block text-1xl text-gradient font-bold mt-2">Treasurer</span>
              <a href="https://www.linkedin.com/in/inamgani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue  -mt-26 ml-40 z-6 mt-4 hover:text-blue" />
              </a>
            </div>
          </div>
          
          
          <div className="space-y-4 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
              src="/images/team/fahad.jpeg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
            
              <h4 className="text-2xl text-gray-700 dark:text-lacoste">Fahad Javaid</h4>
              <span className="block text-1.5xl text-gradient font-bold mt-2">Founder</span>
              <a href="https://www.linkedin.com/in/inamgani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue  -mt-26 ml-40 z-6 mt-4 hover:text-blue" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
              src="/images/team/Tabin.jpeg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-lacoste mt-2">Inam Gani</h4>
              <span className="block text-1xl text-gradient font-bold">General Secretary</span>
              <a href="https://www.linkedin.com/in/inamgani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue  -mt-26 ml-40 z-6 mt-4 hover:text-blue" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
              src="/images/team/Zaid.jpeg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-lacoste">Zaid Qadri</h4>
              <span className="block text-1xl text-gradient font-bold mt-2">Treasurer</span>
              <a href="https://www.linkedin.com/in/inamgani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue  -mt-26 ml-40 z-6 mt-4 hover:text-blue" />
              </a>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
              src="/images/team/gani.jpg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-lacoste mt-2">Inam Gani</h4>
              <span className="block text-1xl text-gradient font-bold">General Secretary</span>
              <a href="https://www.linkedin.com/in/inamgani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue  -mt-26 ml-40 z-6 mt-4 hover:text-blue" />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LeadershipSlider;

// https://www.linkedin.com/in/azamiftikhar/


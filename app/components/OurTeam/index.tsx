/* eslint-disable @next/next/no-img-element */
'use client'
 import React from "react";
import Slider from "react-slick";
import Image from "next/image";


interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Founder",
    name: "Fahad Javaid",
    imgSrc: "/images/wework/Tabin.jpeg",
  },
  {
    profession: "Co-founder",
    name: "Tabin Tariq",
    imgSrc: "/images/wework/Tabin.jpeg",
  },
  {
    profession: "Co-founder",
    name: "Zaid Qadri",
    imgSrc: "/images/wework/Tabin.jpeg",
  },
  {
    profession: "Co-founder",
    name: "Azam Iftikhar",
    imgSrc: "/images/wework/Tabin.jpeg",
  },
  {
    profession: "Co-founder",
    name: "King Khan",
    imgSrc: "/images/wework/Tabin.jpeg",
  },
  
];



const Team: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-wework overflow-hidden py-20">
      <div className=" lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl sm:text-6xl font-bold text-gradient">
            Meet Our Team.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-gradient opacity-50 lg:mr-48 my-2">
            We work in several verticals.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-gradient opacity-25 lg:-mr-32 my-2">
            We work in several verticals.
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {postData.map((items, i) => (
          <div key={i}>
            <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
              <div className="relative border-green">
              
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={150}
                  height={100}
                  className="inline-block border-lg m-auto rounded-full"
                />
                <Image
                  src={"/images/wework/linkedin.svg"}
                  alt="greenbg"
                  width={100}
                  height={100}
                  className=" absolute inline-block position-linkedin"
                />
              </div>
              
              <h4 className="text-4xl font-bold pt-14 text text-gradient">{items.name}</h4>
              <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50 text-gradient">
                {items.profession}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;


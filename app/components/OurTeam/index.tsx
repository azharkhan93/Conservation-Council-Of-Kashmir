/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";


interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  linkedin: string;
}

const postData: DataType[] = [
  {
    profession: "Founder",
    name: "Fahad Javaid",
    imgSrc: "/images/team/fahad.jpeg",
    linkedin: "https://www.linkedin.com/in/fahadjavaid/",
  },
  {
    profession: "Media Secretary",
    name: "Tabin Tariq",
    imgSrc: "/images/team/Tabin.jpeg",
    linkedin: "https://www.linkedin.com/in/tabintariq/",
  },
  {
    profession: "Treasurer",
    name: "Zaid Mushtaq",
    imgSrc: "/images/team/Zaid.jpeg",
    linkedin: "https://www.linkedin.com/in/zaidmushtaq/",
  },
  {
    profession: "General Secretary",
    name: "Inam Gani",
    imgSrc: "/images/team/gani.jpg",
    linkedin: "https://www.linkedin.com/in/inamgani/",
  },
  {
    profession: "Co-founder",
    name: "Azam Iftikhar",
    imgSrc: "/images/team/Azm1.png",
    linkedin: "https://www.linkedin.com/in/azamiftikhar/",
  },
  // Add LinkedIn links for other team members
];



const Team: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1500,
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
          <h3 className="text-4xl sm:text-6xl font-bold text-gradient opacity-50 lg:-mr-32 my-2">
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
                  alt="team image"
                  width={150}
                  height={100}
                  className="inline-block border-lg m-auto rounded-full"
                />
                <a
                  href={items.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <Image
                    src={"/images/team/linkedin.svg"}
                    alt="linkdin"
                    width={100}
                    height={100}
                    className=" absolute inline-block position-linkedin cursor-pointer mr-10"
                  />
                </a>
              </div>

              <h4 className="text-4xl font-bold pt-14 text text-gradient">{items.name}</h4>
              <h3 className="text-2xl font-normal pt-4 pb-2  text-gradient">
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

// https://www.linkedin.com/in/azamiftikhar/


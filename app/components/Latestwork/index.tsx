"use client"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

interface DataType {
  heading: string;
  heading2: string;
  date: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    heading: "Cleanup drive",
    heading2: "Dara, Srinagar",
    name: "Removal of litter, debris and installation of bins.",
    date: "October 15, 2023",
    imgSrc: "/images/latestwork/Azam35.jpg",
  },
  {
    heading: "Cleanup drive",
    heading2: "Yusmarg, Budgam",
    name: "Removal of litter and debris. ",
    date: "October 29, 2023",
    imgSrc: "/images/latestwork/Azam7.jpg",
  },
  {
    heading: "Plastic bad reduction drive",
    heading2: "Harwan, Srinagar",
    name: "Distribution of reusable bags.Distribution of ",
    date: "November 5, 2023",
    imgSrc: "/images/latestwork/plastic.jpeg",
  },/*
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon uuiuhdhshj",
    date: "August 19, 2021",
    imgSrc: "/images/latestwork/pex.jpg",
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Published on Startupon uuiuhdhshj",
    date: "August 19, 2021",
    imgSrc: "/images/latestwork/pex.jpg",
  },*/
  
];

const MultipleItems: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-lightgrey py-20 ">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl text-green sm:text-5xl font-bold mb-2">
            Our upcoming initiatives..
          </h3>
        </div>
        {/* @ts-ignore */}
        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={389}
                  height={262}
                  className="inline-block rounded-lg m-auto"
                />
                <Link href="/">
                  
                </Link>
                <h4 className="text-2xl font-bold pt-6 text-green">
                  {items.heading}
                </h4>
                <h4 className="text-2xl font-bold pt-1 text-green">
                  {items.heading2}
                </h4>
                <div>
                  <h3 className="text-base font-normal pt-6 pb-2 opacity-75">
                    {items.name}
                  </h3>
                  <h3 className="text-base font-normal pb-1 opacity-75">
                    {items.date}
                  </h3>
                </div>
              </div>
            </div>
          ))} as ReactNode
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;


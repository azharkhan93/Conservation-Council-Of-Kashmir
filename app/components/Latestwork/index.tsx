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
    date: "Completed",
    imgSrc: "/images/latestwork/Azam35.jpg",
  },
  {
    heading: "Cleanup drive",
    heading2: "Yusmarg, Budgam",
    name: "Removal of litter and debris. ",
    date: "Completed",
    imgSrc: "/images/latestwork/Azam7.jpg",
  },
  // {
  //   heading: "Planting trees to make the world greener",
  //   heading2: "Srinagr, Srinagar",
  //   name: "Plantation Of Trees",
  //   date: "August 19, 2021",
  //   imgSrc: "/images/latestwork/pex.jpg",
  // },
  {
    heading: "Plastic bag reduction drive",
    heading2: "Harwan, Srinagar",
    name: "Distribution of reusable bags ",
    date: "Completed",
    imgSrc: "/images/latestwork/plastic.jpeg",
  },
  {
    heading: "Tree Plantation Drive",
    heading2: "Darbal, Bemina",
    name: "Join Us In Planting Trees",
    date: "March 5, 2024 Onwards",
    imgSrc: "/images/aboutus/slider8.jpg",
  },
  /*
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
    <div className="bg-gray-200 py-20 ">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl text-gradient  sm:text-5xl font-bold mb-2">
          our upcoming & completed initiatives
          </h3>
        </div>
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
          ))} 
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;


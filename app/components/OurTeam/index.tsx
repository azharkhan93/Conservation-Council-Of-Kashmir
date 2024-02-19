/* eslint-disable @next/next/no-img-element */
// 'use client'
// import React from "react";
 import Slider from "react-slick";
 import { FaLinkedin } from 'react-icons/fa';



// interface DataType {
//   profession: string;
//   name: string;
//   imgSrc: string;
//   linkedin: string;
// }

// const postData: DataType[] = [
//   {
//     profession: "Founder",
//     name: "Fahad Javaid",
//     imgSrc: "/images/team/fahad.jpeg",
//     linkedin: "https://www.linkedin.com/in/fahadjavaid/",
//   },
//   {
//     profession: "Media Secretary",
//     name: "Tabin Tariq",
//     imgSrc: "/images/team/Tabin.jpeg",
//     linkedin: "https://www.linkedin.com/in/tabintariq/",
//   },
//   {
//     profession: "Treasurer",
//     name: "Zaid Mushtaq",
//     imgSrc: "/images/team/Zaid.jpeg",
//     linkedin: "https://www.linkedin.com/in/zaidmushtaq/",
//   },
//   {
//     profession: "General Secretary",
//     name: "Inam Gani",
//     imgSrc: "/images/team/gani.jpg",
//     linkedin: "https://www.linkedin.com/in/inamgani/",
//   },
//   {
//     profession: "Co-founder",
//     name: "Azam Iftikhar",
//     imgSrc: "/images/team/Azm1.png",
//     linkedin: "https://www.linkedin.com/in/azamiftikhar/",
//   },
//   // Add LinkedIn links for other team members
// ];



// const Team: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 1500,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 450,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//     ],
//   };


//   return (
//     <div className="bg-wework overflow-hidden py-20">
//       <div className=" lg:max-w-7xl sm:py-4 lg:px-8">
//         <div className="text-center">
//           <h3 className="text-3xl sm:text-6xl font-bold text-gradient">
//             Meet Our Team.
//           </h3>
//           <h3 className="text-4xl sm:text-6xl font-bold text-gradient opacity-50 lg:mr-48 my-2">
//             We work in several verticals.
//           </h3>
//           <h3 className="text-4xl sm:text-6xl font-bold text-gradient opacity-50 lg:-mr-32 my-2">
//             We work in several verticals.
//           </h3>
//         </div>
//       </div>
//       <Slider {...settings}>
//         {postData.map((items, i) => (
//           <div key={i}>
//             <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
//               <div className="relative border-green">

//                 <Image
//                   src={items.imgSrc}
//                   alt="team image"
//                   width={150}
//                   height={100}
//                   className="inline-block border-lg m-auto rounded-full"
//                 />
//                 <a
//                   href={items.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
                  
//                 >
//                   <Image
//                     src={"/images/team/linkedin.svg"}
//                     alt="linkdin"
//                     width={100}
//                     height={100}
//                     className=" absolute inline-block position-linkedin cursor-pointer mr-10"
//                   />
//                 </a>
//               </div>

//               <h4 className="text-4xl font-bold pt-14 text text-gradient">{items.name}</h4>
//               <h3 className="text-2xl font-normal pt-4 pb-2  text-gradient">
//                 {items.profession}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </Slider>

//     </div>
//   );
// };

// export default Team;
const LeadershipSlider = () => {
  const settings = {
    
      // dots: true,
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
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
              src="/images/team/Azm1.png"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            
            <div>
            
              <h4 className="text-2xl text-gray-700 dark:text-lacoste">Azam Iftikhar</h4>
              <span className="block text-1xl font-bold text-gradient mt-2">Co-founder</span>
              <a href="https://www.linkedin.com/in/azamiftikhar/" target="_blank" rel="noopener noreferrer">
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
          
          
          {/* <div className="space-y-4 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
              src="/images/team/Tabin.jpeg"
              alt="tabin"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              
              <h4 className="text-2xl text-gray-700 dark:text-lacoste">Tabin Tariq</h4>
              <span className="block text-1xl text-gradient font-bold mt-2">Media Secretary</span>
              <a href="https://www.linkedin.com/in/inamgani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-blue  -mt-26 ml-40 z-6 mt-4 hover:text-blue" />
              </a>
              
            </div>
          </div> */}
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
              <h4 className="text-2xl text-gray-700 dark:text-lacoste">Tabin Tariq</h4>
              <span className="block text-1xl text-gradient font-bold mt-2">Media Secretary</span>
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
              <h4 className="text-2xl text-gray-700 text-lacoste mt-2">Inam Gani</h4>
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


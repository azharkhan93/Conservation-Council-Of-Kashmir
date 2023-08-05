/* eslint-disable @next/next/no-img-element */
import React from "react";

const  Contact1=() => {
    return (
        <>
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    More Than 10 Years We Provide Service <br className="md:block hidden" />
                    in Real State Industry
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-gray-800">20K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Property Listed</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4  sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">8K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">15K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact1;
 
//   export default Contact1

// import React from 'react';
// import { DeviceMobileIcon, LocationMarkerIcon, MailIcon };



// const Contact1 = () => {
//   return (
//     <div className="relative mx-auto py-10 px-4 w-full max-w-7xl bg-gray-50">
//       <div className="mx-auto max-w-5xl">

//         {/* :DOTS BACKGROUND */}
//         <div>
//           {/* ::Dots 1 */}
//           <span className="absolute top-0 left-0 hidden md:block opacity-10">
//             <svg width={250} height={600} fill="none" viewBox="0 0 250 600" aria-hidden="true">
//               <pattern id="pattern-rectangles" x={0} y={0} width={40} height={40} patternUnits="userSpaceOnUse">
//                 <rect x={0} y={0} width={10} height={10} className="text-green-500" fill="currentColor" />
//               </pattern>
//               <rect width={250} height={600} fill="url(#pattern-rectangles)" />
//             </svg>
//           </span>
//           {/* ::Dots 2 */}
//           <span className="absolute bottom-0 right-0 opacity-20">
//             <svg width={300} height={300} fill="none" viewBox="0 0 300 300" aria-hidden="true">
//               <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
//                 <circle id="pattern-circle" cx="10" cy="10" r="5" className="fill-current text-green-500" />
//               </pattern>
//               <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
//             </svg>
//           </span>
//         </div>
        


//         {/* :MAIN CONTAINER */}
//         <div className="relative space-y-5">

//           {/* ::Title */}
//           <h2 className="text-center text-5xl text-green-500 font-light">Contact Us</h2>

//           {/* ::Some Text */}
//           <p className="mx-auto py-5 max-w-3xl text-center text-base text-gray-600">Atque sint nemo vero sequi veniam, numquam fugiat aperiam doloremque, itaque officia exercitationem! Excepturi deleniti accusantium minus quibusdam dolores doloremque natus fugit!</p>

//           {/* ::Infos Container */}
//           <div className="flex flex-wrap justify-between items-center text-base">
//             {/* :::Address */}
//             <div className="m-2.5 inline-flex items-center">
//               <LocationMarkerIcon className="mr-2 w-6 h-6 text-green-500" />
//               <p className="text-gray-600 font-semibold">18 avenue des Champs-Élysées, 75008 Paris</p>
//             </div>
//             {/* :::Phone */}
//             <div className="m-2.5 inline-flex items-center">
//               <DeviceMobileIcon className="mr-2 w-6 h-6 text-green-500" />
//               <p className="text-gray-600 font-semibold">357-233-9644</p>
//             </div>
//             {/* :::Address */}
//             <div className="m-2.5 inline-flex items-center">
//               <MailIcon className="mr-2 w-6 h-6 text-green-500" />
//               <p className="text-gray-600 font-semibold">my-email@fancymail.com</p>
//             </div>
//           </div>

//         </div>



//         {/* :MAP CONTAINER */}
//         <div className="relative mt-16 rounded border-2 border-gray-200">
//           {/* Embed Google map */}
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8827.330741966553!2d2.308756110118289!3d48.87000842543867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47407434935db!2s18%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1635492407441!5m2!1sfr!2sfr" 
//           title="map" scrolling="no" frameBorder="0"
//           width="100%" height="450" 
//           className="" 
//           loading="lazy" />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Contact1


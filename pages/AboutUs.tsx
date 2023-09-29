/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
 import OurTeam from '../app/components/OurTeam'
/* eslint-disable @next/next/no-img-element */
import React from 'react';
 import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
    <div className=" relative">

      <div
        className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/pex.jpg")',

          backgroundSize: 'cover',
        }} />

      <div className="container mx-auto pt-16 pb-32 px-4 relative z-1">
      <div
          className="w-full bg-white py-10 p-8 mt-8 mb-8 rounded-lg shadow-lg text-center"
          style={{
            backgroundImage: `url('/images/pex.jpg')`,
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }}
        >
          <h2 className="lg:text-2xl font-semibold   sm:text-1xl text-green">Welcome to Our Company</h2>
          <p className="mt-4 text-lg ">
            We are a dedicated team of professionals committed to providing the
            best services to our customers. Learn more about our story below.
          </p>

        </div>

       



        <div className="mt-10 md:mt-0 md:flex">

          <div className="md:w-1/2 text-white mt-3">
            <h1 className="text-3xl font-semibold text-center">About Us</h1>
            <p className="mt-6 text-lg">
              Your about us content goes here. Describe your company or
              organization in this section. Provide information about your
              mission, values, and history.
            </p>
            <p className="mt-4 text-lg">
              Your about us content goes here. Describe your company or
              organization in this section. Provide information about your
              mission, values, and history.
            </p>
            <p className="mt-4 text-lg">
              Your about us content goes here. Describe your company or
              organization in this section. Provide information about your
              mission, values, and history.
            </p>
            <p className="mt-4 text-lg">
              Your about us content goes here. Describe your company or
              organization in this section. Provide information about your
              mission, values, and history.
            </p>
            <p className="mt-4 text-lg">
              Your about us content goes here. Describe your company or
              organization in this section. Provide information about your
              mission, values, and history.
            </p>
          </div>

          <div className="md:w-1/2 mt-7 md:ml-4">
  {/* Hide the image on smaller screens (md and below) */}
  <img
    className="hidden md:block w-full h-auto sm:mt-4 rounded-lg shadow-lg"
    src="/images/home.jpg"
    alt="About Us Image"
  />
</div>
        </div>
        
      </div>
      <div className="flex    opacity-80 flex-col rounded-md shadow-lg lg:flex-row" >
               <img src="images/pex.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
             
                 <div className="flex flex-col justify-center flex-1 p-6 ">
                  <span className="text-xs uppercase dark:text-white">Join, it's free</span>
                   <h3 className="text-3xl font-bold text-white">We're not reinventing the wheel</h3>
                   <p className="my-6 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                   <button type="button" className="self-start">Action</button>
                 </div>
              
             </div>
    </div>
    {/* <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
               <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
             
                 <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                   <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                   <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                   <button type="button" className="self-start">Action</button>
                 </div>
              
             </div> */}
    <OurTeam />
    </>
  );
};

export default About;
// import React from 'react';

// const About = () => {
//   return (
    
//     <div className="bg-gray-800 relative">

//       <div
//         className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("/images/pex.jpg")',

//           backgroundSize: 'cover',
//         }} />

//       <div className="container mx-auto pt-16 pb-32 px-4 relative z-1">

//         <div
//           className="w-full bg-white p-8 mt-8 mb-8 rounded-lg shadow-lg text-center"
//           style={{
//             backgroundImage: `url('/images/pex.jpg')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <h2 className="text-2xl font-semibold text-green">Welcome to Our Company</h2>
//           <p className="mt-4 text-lg">
//             We are a dedicated team of professionals committed to providing the
//             best services to our customers. Learn more about our story below.
//           </p>

//         </div>




//         <div className="mt-10 md:mt-0 md:flex">
//           <div className="hidden md:block bg-blue-600 h-full w-1/2 absolute inset-y-0 left-0">
//             <div className="md:w-1/2 text-white">
//               <h1 className="text-3xl font-semibold underline text-green hover:text-green  transition-colors duration-300">About Us</h1>
//               <p className="mt-4 text-lg">
//                 Your about us content goes here. Describe your company or organization in this section. Provide information about your mission, values, and history.
//               </p>
//               <p className="mt-4 text-lg">
//                 Your about us content goes here. Describe your company or organization in this section. Provide information about your mission, values, and history.
//               </p>
//               <p className="mt-4 text-lg">
//                 Your about us content goes here. Describe your company or organization in this section. Provide information about your mission, values, and history.
//               </p>
//               <p className="mt-4 text-lg">
//                 Your about us content goes here. Describe your company or organization in this section. Provide information about your mission, values, and history.
//               </p>
//               <p className="mt-4 text-lg">
//                 Your about us content goes here. Describe your company or organization in this section. Provide information about your mission, values, and history.
//               </p>
//             </div>
//             <div className="md:w-1/2 md:ml-4">
//               <img
//                 className="w-full h-auto mt-8 rounded-lg shadow-lg"
//                 src="/images/home.jpg"
//                 alt="About Us Image" />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
    
   
    
//   );
// };

//  export default About;
// import React from "react";
// import { motion } from 'framer-motion';


// const About2 = () => {
 
//   return (
//     <>
//       <section className=" mt-11 p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 ">
//       <div className="bg-blue-600  mt-3 py-20 text-green text-center relative">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('/images/pex.jpg')`, 
//           }}
//         ></div>
//         <h1 className="text-3xl md:text-4xl font-bold relative ">Our Community</h1>
//         <h1 className="text-2xl md:text-4xl font-small relative ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 .</h1>
        
//       </div>
//         <div className="text-black text-center mt-4 mb-3">
//       <h1>About Us</h1>
//   <p>We are interested in planting trees. We're not reinventing the wheel.</p>
//   </div>
//         <div className="container mt-5  mx-auto space-y-12">
          
            //  <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            //    <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
             
            //      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            //       <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
            //        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
            //        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
            //        <button type="button" className="self-start">Action</button>
            //      </div>
              
            //  </div>
          
//           <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
//             <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
//             <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
//               <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
//               <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
//               <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
//               <button type="button" className="self-start">Action</button>
//             </div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
          
//           >


//             <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">

//               <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
             
//               >
//                 <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
//                   <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
//                   <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
//                   <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
//                   <button type="button" className="self-start">Action</button>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <div className="py-20">
//         <div className="xl:container mx-auto px-6 md:px-12">
//           <div className="mb-16 items-center md:w-2/3 lg:w-1/2">
//             <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-black md:text-4xl">
//               Tailus blocks leadership
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               Tailus prides itself not only on award-winning technology, but also on the talent of its
//               people of some of the brightest minds and most experienced executives in business.
//             </p>
//           </div>
//           <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
//               <img
//                 className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                 src="/images/gent.webp"
//                 alt="woman"
//                 loading="lazy"
//                 width="640"
//                 height="805"
//               />
//               <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-green translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
//                 <div>
//                   <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
//                   <span className="block text-sm text-gray-500">CEO-Founder</span>
//                 </div>
//                 <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
//               </div>

//             </div>
//             <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
//               <img
//                 className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                 src="/images/gent.webp"
//                 alt="woman"
//                 loading="lazy"
//                 width="640"
//                 height="805"
//               />
//               <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-green translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
//                 <div>
//                   <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Gani</h4>
//                   <span className="block text-sm text-gray-500">CEO-Founder</span>
//                 </div>
//                 <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
//               </div>

//             </div>
//             <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
//               <img
//                 className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                 src="/images/gent.webp"
//                 alt="woman"
//                 loading="lazy"
//                 width="640"
//                 height="805"
//               />
//               <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-green translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
//                 <div>
//                   <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Gani</h4>
//                   <span className="block text-sm text-gray-500">CEO-Founder</span>
//                 </div>
//                 <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
//               </div>

//             </div>
           
//             <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
//               <img
//                 className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
//                 src="/images/gent.webp"
//                 alt="woman"
//                 loading="lazy"
//                 width="640"
//                 height="805"
//               />
//               <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-green translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
//                 <div>
//                   <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
//                   <span className="block text-sm text-gray-500">CEO-Founder</span>
//                 </div>
//                 <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default About2;

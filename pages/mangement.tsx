/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import React from 'react';
// import '../app/swiper.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io5';
//  import { IonIcon } from '@ionic/react';
//  import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// // import { IonIcon } from '@ionic/react';

// // import Azam2 from '/public/images/Azam2.jpg';
// // import Azam4 from '/public/images/Azam4.jpg';
// // import Azam5 from '/public/images/Azam5.jpg';
// // import Azam7 from '/public/images/Azam7.jpg';
// // import Azam11 from '/public/images/Azam11.jpg';
// // import Azam30 from '/public/images/Azam30.jpg';
// // import Azam34 from '/public/images/Azam34.jpg';

// function Gallery() {
//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//         <img src={'/images/Azam2.jpg'} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={'/images/Azam4.jpg'} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={'/public/images/Azam7.jpg'} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={'/public/images/Azam7.jpg'} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={'/public/images/Azam7.jpg'} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={'/public/images/Azam7.jpg'} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={'/public/images/Azam7.jpg'} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
          
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//           <IoIosArrowBack size={32} />
//           </div>
//           <div className="swiper-button-next slider-arrow">
//           <IoIosArrowForward size={32} />

//             {/* <IonIcon icon="arrow-forward-outline" /> */}
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default Gallery;

// components/BankTransferDetails.js

import Image from 'next/image';  // Import Image from Next.js

const BankTransferDetails = () => {
  return (
  <div className='bg-gradient-to-b from-forest to-gradient py-20'>
    <div className="relative max-w-md mx-auto bg-gradient p-8 border rounded shadow-lg mt-20 sm:mt-18">
      

      <h2 className="text-2xl font-semibold mb-4 text-white">Online Bank Transfer Details</h2>

      <div className="mb-4">
        <p className="text-black font-medium">Name of the Account Holder:</p>
        <p className="text-black font-bold">Conservation Council Of Kashmir</p>
      </div>

      <div className="mb-4">
        <p className="text-black font-medium">Account Number:</p>
        <p className="text-black font-bold">923020059048567</p>
      </div>

      <div className="mb-4">
        <p className="text-black font-medium">IFSC Code:</p>
        <p className="text-black font-bold">UTIB0004849</p>
      </div>

      <div className="mb-4">
        <p className="text-black font-medium">Bank Name:</p>
        <p className="text-black font-bold">Axis Bank</p>
      </div>

      <div className="mb-4">
        <p className="text-black font-medium">Bank Branch:</p>
        <p className="text-black font-bold">Baghat Srinagar Jammu & Kashmir</p>
      </div>
    </div>
    </div>
  );
};

export default BankTransferDetails;




// import React from 'react';

// function WasteManagementComponent() {
//   return (
    
//     <>
    
//     <div className="  p-4 md:p-8 lg:p-12">
//         <h2 className="text-3xl mt-11 font-bold mb-4">Waste Management</h2>
//         <div className="space-y-4">
//           <p className="text-xl  font-semibold">Step 1: Reduce</p>
//           <p className='mt-4 text-lg shadow-lg'>
//             The first and most important step in waste management is to reduce waste at its source.
//             This can be achieved by:
//           </p>
//           <div className=" mt-8 mb-4 ml-24 ">


//             <ul className="list-disc list-inside">
//               <li>Using reusable products instead of disposable ones.</li>
//               <li>Buying products with minimal packaging.</li>
//               <li>Avoiding single-use plastics.</li>
//               <li>Being mindful of food waste and only purchasing what you can consume.</li>
//             </ul>
//           </div>

//           <div className="mb-4">
//             <p className="text-xl font-semibold">Step 2: Reuse</p>
//             <p>
//               Reusing items is another effective way to control waste. Instead of throwing things away after a single use,
//               consider:
//             </p>
//             <ul className="list-disc list-inside">
//               <li>Repairing items when they break instead of replacing them.</li>
//               <li>Donating or selling items you no longer need.</li>
//               <li>Using containers and bags that can be reused for shopping and storage.</li>
//             </ul>
//           </div>
//           <div className="mb-4">
//             <p className="text-xl font-semibold">Step 2: Reuse</p>
//             <p>
//               Reusing items is another effective way to control waste. Instead of throwing things away after a single use,
//               consider:
//             </p>
//             <ul className="list-disc list-inside">
//               <li>Repairing items when they break instead of replacing them.</li>
//               <li>Donating or selling items you no longer need.</li>
//               <li>Using containers and bags that can be reused for shopping and storage.</li>
//             </ul>
//           </div>
//           <div className="mb-4">
//             <p className="text-xl font-semibold">Step 2: Reuse</p>
//             <p>
//               Reusing items is another effective way to control waste. Instead of throwing things away after a single use,
//               consider:
//             </p>
//             <ul className="list-disc list-inside">
//               <li>Repairing items when they break instead of replacing them.</li>
//               <li>Donating or selling items you no longer need.</li>
//               <li>Using containers and bags that can be reused for shopping and storage.</li>
//             </ul>
//           </div>



//         </div>
//       </div></>            
//   );
// }

// export default WasteManagementComponent;

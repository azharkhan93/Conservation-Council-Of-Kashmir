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




import React from 'react';

function WasteManagementComponent() {
  return (
    
    <>
    
    <div className="  p-4 md:p-8 lg:p-12">
        <h2 className="text-3xl mt-11 font-bold mb-4">Waste Management</h2>
        <div className="space-y-4">
          <p className="text-xl  font-semibold">Step 1: Reduce</p>
          <p className='mt-4 text-lg shadow-lg'>
            The first and most important step in waste management is to reduce waste at its source.
            This can be achieved by:
          </p>
          <div className=" mt-8 mb-4 ml-24 ">


            <ul className="list-disc list-inside">
              <li>Using reusable products instead of disposable ones.</li>
              <li>Buying products with minimal packaging.</li>
              <li>Avoiding single-use plastics.</li>
              <li>Being mindful of food waste and only purchasing what you can consume.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="text-xl font-semibold">Step 2: Reuse</p>
            <p>
              Reusing items is another effective way to control waste. Instead of throwing things away after a single use,
              consider:
            </p>
            <ul className="list-disc list-inside">
              <li>Repairing items when they break instead of replacing them.</li>
              <li>Donating or selling items you no longer need.</li>
              <li>Using containers and bags that can be reused for shopping and storage.</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Step 2: Reuse</p>
            <p>
              Reusing items is another effective way to control waste. Instead of throwing things away after a single use,
              consider:
            </p>
            <ul className="list-disc list-inside">
              <li>Repairing items when they break instead of replacing them.</li>
              <li>Donating or selling items you no longer need.</li>
              <li>Using containers and bags that can be reused for shopping and storage.</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Step 2: Reuse</p>
            <p>
              Reusing items is another effective way to control waste. Instead of throwing things away after a single use,
              consider:
            </p>
            <ul className="list-disc list-inside">
              <li>Repairing items when they break instead of replacing them.</li>
              <li>Donating or selling items you no longer need.</li>
              <li>Using containers and bags that can be reused for shopping and storage.</li>
            </ul>
          </div>



        </div>
      </div></>
//     <div className="flex min-h-screen">
//     <section className="grid grid-cols-3 text-gray-900  sm:grid-cols-2">
//         <div className=" z-10 h-full col-span-2 sm:col-span-1 place-self-end">
//             <div className="flex items-center w-full h-full">
//                 <div className="max-w-xs p-4 text-sm text-right sm:max-w-xl sm:p-10 sm:text-base lg:max-w-2xl">
//                     <h1 className="mb-10 -mr-12 text-2xl font-bold leading-tight text-green sm:-mr-20 sm:text-3xl md:text-4xl lg:text-5xl">
//                         We Deliver at your<br />
//                         Doorstep.
//                     </h1>
//                     <p className="mb-10 lg:pl-32">
//                         With our award-winning delivery service, our personnel delivers food directly to your doorstep. With your safety in mind, all deliveries are tracked and recorded.
//                     </p>
//                     <a href="#" className="px-1 pb-1 font-semibold uppercase transition-colors duration-500 border-b-4 border-lacoste text-md hover:border-green hover:text-forest">Learn more</a>
//                 </div>
//             </div>
//         </div>
//         <div className="min-h-full">
//             <img  className="object-cover w-full h-96 mt-24 sm:h-80 lg:h-96"
//                 src="/images/Azam4.jpg"
//                 alt="Saving trees" />
//         </div>
//     </section>
// </div>
  );
}

export default WasteManagementComponent;

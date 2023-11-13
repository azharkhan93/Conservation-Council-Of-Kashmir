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
    
    <><header className="bg-gray-100 lg:bg-transparent">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:py-20 xl:py-32 items-start">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="relative  flex w-64 mx-auto overflow-hidden md:w-80 lg:w-auto rounded-lg border-x-green ml-10">
            <img alt="" src="/images/Azam4.jpg" decoding="async" data-nimg="future" className="object-cover w-full h-1/3" />
            </div>
        </div>
        <div className="relative order-first px-4 sm:px-6 lg:col-span-7 lg:pl-0 lg:pb-14 lg:pr-16 xl:pr-20 bg-lacoste rounded-lg">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-gray-200"></div>
          <figure className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left">
            <div className="flex justify-center text-black lg:justify-start">
              {/* <div className="flex gap-1">
                <ion-icon class="w-5 h-5 fill-current md hydrated" name="star" role="img" aria-label="star"></ion-icon>
                <ion-icon class="w-5 h-5 fill-current md hydrated" name="star" role="img" aria-label="star"></ion-icon>
                <ion-icon class="w-5 h-5 fill-current md hydrated" name="star" role="img" aria-label="star"></ion-icon>
                <ion-icon class="w-5 h-5 fill-current md hydrated" name="star" role="img" aria-label="star"></ion-icon>
                <ion-icon class="w-5 h-5 fill-current md hydrated" name="star" role="img" aria-label="star"></ion-icon>
              </div> */}
            </div>
            <blockquote className="mt-2">
              <p className="text-xl font-medium text-black">
                “Here you can write a nice testimonial for your product!”
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-black">
              <strong className="font-semibold text-black before:content-['—_']">Michael Andreuzza</strong>, Batman
            </figcaption>
          </figure>
        </div>
        <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pr-16 xl:pr-20">
          <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="max-w-xl text-center lg:text-left">
              <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                I am a short heading
              </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Use this paragraph to share information about your company or products. Make
                  it engaging and interesting, and showcase your brand's personality. Thanks for
                  visiting our website!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a href="#" className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                  Button
                </a>
                <a href="#" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                  Learn more &nbsp; →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header><div className="  p-4 md:p-8 lg:p-12">
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

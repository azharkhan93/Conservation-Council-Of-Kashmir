'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { ScrollAnimation, getScrollAnimation } from "../Animations/ScrollAnimation";

 const LatestArticles: React.FC = () => {
//   const [animationVariants, setAnimationVariants] = useState<any>(null);

//   useEffect(() => {
//     const variants = getScrollAnimation();
//     setAnimationVariants(variants);
//   }, []);

  return (
    <>
    
<div className="min-h-screen  mt-10 py-20">
        <h1 className="text-5xl font-bold text-center pb-10"><span className="text-blue-700">How</span> We work</h1>

        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-5">
            <div className="flex flex-col md:flex-row bg-white   rounded-xl md:bg-transparent shadow-lg shadow-black/20 md:shadow-none gap-10">
                <div className="flex justify-center md:justify-end">
                    <div className="w-[120px] h-[120px] bg-white  shadow-lg rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-md p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 className="font-bold text-xl pb-4">1. Collect Requirements </h1>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rationeim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white  md:bg-transparent  rounded-xl gap-10">
                <div className="w-full md:w-[500px] flex justify-center md:justify-end">
                    <div className="w-[120px] h-[120px]  shadow-lg bg-white   md: rounded-xl md:p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                    </div>
                </div>
                <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient hover:from-green hover:to-forest">
                    <h1 className="font-bold text-xl">2. Analyze the requirements  </h1>
                    <p >
                        Lorem ipsum dolor sit amet   facere nemo enim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white md:bg-transparent   rounded-xl  gap-10">
                <div className="w-full md:w-[750px] flex justify-center md:justify-end">
                    <div className="w-[120px]   shadow-lg h-[120px] bg-white  md: rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className=" bg-white   shadow-lg rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 className="font-bold text-xl">3. Sort out possible solutions </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque cum  sunt  similique omnis adipisci tempore placeat ad.</p>                        
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
                <div className="w-full md:w-[500px] flex justify-center md:justify-end">
                    <div className="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 className="font-bold text-xl">4. Implement the best solution. </h1>
                    <p>Lorem ipsum dolor sit amet facere nemo enim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.</p>                        
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white   md:bg-transparent rounded-xl gap-10">
                <div className="flex justify-center md:justify-end">
                    <div className="w-[120px]  h-[120px] bg-white   shadow-lg  rounded-xl p-4 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </div>
                </div>
                <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 className="font-bold text-xl">5. Submit and wait for feedback. </h1>
                    <p>Lorem ipsum dolor sit amet facere nemo enim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.</p>                        
                </div>
            </div>
            
        </div>
    </div>
    <div className="flex flex-col md:flex-row bg-white mb-8  md:bg-transparent rounded-xl gap-10">
                <div className="w-full md:w-[500px] flex justify-center md:justify-end">
                    <div className="shadow-lg w-[120px] h-[120px] bg-white   rounded-xl p-4 flex justify-center items-center">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                            <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                        </svg> */}
                        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-14 h-14 text-blue-950"
>
  {/* Your tree SVG content goes here */}
  <path
    fill="green"
    d="M8.175 1.357l1.712 6.449 6.812-.018c.451-.001.827.298 1.076.722.25.425.356.967.293 1.492a1.79 1.79 0 0 1-.34 1.112c-.48.58-1.124.93-1.827.931l-.034-.005-4.246.011 1.207 5.86 3.907-.007c.774-.001 1.439.461 1.754 1.16.316.698.202 1.512-.296 2.159-.57.764-1.664 1.156-2.932 1.156l-.127-.004-6.86.018a1.067 1.067 0 0 1-.987-.724c-.11-.307-.08-.628.055-.912l1.206-5.859L2.96 14.652c-.458.582-1.076.93-1.751.931a1.794 1.794 0 0 1-1.38-.606c-.526-.64-.715-1.469-.546-2.306.169-.837.712-1.6 1.48-2.12l7.109-.019L5.27 2.68a1.076 1.076 0 0 1-.029-1.212c.237-.332.57-.544.956-.602.37-.057.674.095.964.32l3.35 2.647 3.35-2.646c.39-.225.707-.376 1.078-.318.385.057.719.27.955.602.197.274.312.602.332.956v.014z"
  />
</svg>

                    </div>
                </div>
                <div className=" bg-white  shadow-lg  rounded-xl p-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-sky-50">
                    <h1 className="font-bold text-xl">4. Implement the best solution. </h1>
                    <p>Lorem ipsum dolor sit amet facere nemo enim. Repellendus hic quas facere. Consequatur sint ut quidem saepe! Soluta assumenda nisi rerum quaerat commodi hic aperiam.</p>                        
                </div>
            </div>
    {/* <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        
            <h2 className="mb-16 text-center text-2xl font-bold">Exploring the Beauty of Trees</h2>
          
         <div className="mb-16 flex flex-wrap">
         
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg" className="w-full" alt="Louvre" />
              <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
                

              </a>
            </div>
           
            </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <h3 className="mb-4 text-xl font-bold">Embracing the Enigmatic Elegance of Trees An Ode to Nature's Majestic Arboreal Wonders</h3>
           
            {animationVariants && (
          <ScrollAnimation variants={animationVariants}>
            <p className="mb-6 mt-6 text-green dark:text-neutral-300">
            In the quiet embrace of the forest, where the earth's heartbeat resonates through the towering sentinels of wood, we find ourselves entranced by the symphony of leaves whispering secrets to the wind. This ode celebrates the splendor of trees, those silent poets of the land, whose branches reach for the heavens while their roots cradle the Earth. Join us on a journey through the enchanting world of arboreal wonders, where we'll uncover their wisdom, resilience, and enduring beauty.
            </p>
            <p className="text-gradient mt-2 dark:text-neutral-300">
            Trees, the unsung heroes of our planet, play a pivotal role in our ecosystem. They provide us with oxygen, filter pollutants from the air, and offer shelter to countless species. These majestic arboreal wonders combat climate change by absorbing carbon dioxide and stabilizing our climate.  
            </p>
            </ScrollAnimation>
        )}
          </div>
        </div>
      </section>

      <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
      {animationVariants && (
          <ScrollAnimation variants={animationVariants}>
        <div
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
        </ScrollAnimation>
        )}
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
        <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="mr-2 h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          Art
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Published <u>12.01.2022</u> by
          <a href="#!">Anna Doe</a>
        </p>
        {animationVariants && (
          <ScrollAnimation variants={animationVariants}>
        <p className="text-neutral-500 dark:text-neutral-300">
          Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
          dui, sit amet rutrum enim massa in ante. Curabitur in justo at
          lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
          vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
          vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
          tortor finibus, a eleifend lectus dictum. Cras tempor convallis
          magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
          imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
          at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
          felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
          iaculis est vehicula ut.
        </p>
        </ScrollAnimation>
        )}
      </div>
    </div>

      <div className="flex flex-wrap">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
      {animationVariants && (
          <ScrollAnimation variants={animationVariants}>
        <div
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg" className="w-full" alt="Louvre" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            </div>
          </a>
        </div>
        </ScrollAnimation>
        )}
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 className="mb-4 text-2xl font-bold">Stock market boom</h3>
        
        <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="mr-2 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          Business
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Published <u>10.01.2022</u> by
          <a href="#!">Joe Svan</a>
        </p>
        {animationVariants && (
          <ScrollAnimation variants={animationVariants}>
        <p className="text-neutral-500 dark:text-neutral-300">
          Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
          tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
          Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
          augue ornare. Proin ac dui vel lectus eleifend vestibulum et
          lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue
          sem finibus eleifend egestas eu metus. Sed ut dolor id magna
          rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut
          pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
          dignissim malesuada, lacus lorem commodo leo, tristique blandit
          ante mi id metus. Integer et vehicula leo, vitae interdum lectus.
          Praesent nulla purus, commodo at euismod nec, blandit ultrices
          erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae
          justo. Nulla condimentum hendrerit leo, in feugiat ipsum
          condimentum ac. Maecenas sed blandit dolor.
        </p>
        </ScrollAnimation>
        )}
      </div>
      </div>
    </div> */}
    </>
  );
}

export default LatestArticles;



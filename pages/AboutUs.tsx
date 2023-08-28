/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from 'framer-motion'; 
// import { useInView } from "react-intersection-observer";

const About2 = () => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2, // Adjust the threshold as needed
  // });
    return (
        <>
        <section className=" mt-24 p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    // className="w-full xl:w-5/12 lg:w-6/12"
                >
                  <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    // className="w-full xl:w-5/12 lg:w-6/12"
                >
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
      </motion.div>
		</div>
    </motion.div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    // className="w-full xl:w-5/12 lg:w-6/12"
                >
    

		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
      
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
      <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    // className="w-full xl:w-5/12 lg:w-6/12"
                >
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
      </motion.div>
		</div>
    </motion.div>
	</div>
</section>

      <div className="py-20">
  <div className="xl:container mx-auto px-6 md:px-12">
    <div className="mb-16 md:w-2/3 lg:w-1/2">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Tailus blocks leadership
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Tailus prides itself not only on award-winning technology, but also on the talent of its
        people of some of the brightest minds and most experienced executives in business.
      </p>
    </div>
    <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src="/images/gent.webp"
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
            <span className="block text-sm text-gray-500">CEO-Founder</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
        </div>
        
      </div>
      <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src="/images/gent.webp"
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
            <span className="block text-sm text-gray-500">CEO-Founder</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
        </div>
        
      </div>
      <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src="/images/gent.webp"
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
            <span className="block text-sm text-gray-500">CEO-Founder</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
        </div>
        
      </div>
      <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src="/images/gent.webp"
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
            <span className="block text-sm text-gray-500">CEO-Founder</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
        </div>
        
      </div>
    </div>
  </div>
</div>
                                    
      </>
    );
};

export default About2;

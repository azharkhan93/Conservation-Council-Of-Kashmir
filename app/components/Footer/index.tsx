'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (

    <div>
      <footer className="w-full py-5 sm:py-10 px-6    relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("images/footer/footer.jpg")',
          }}
        ></div>



        <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">

          <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">

            <Link href="/">
              <Image className='mt-5  sm:mt-0' src="/images/footer/project logo.png"
                alt="Conservation Council Logo" width={350} height={350} priority
                style={{ margin: '0' }} />
            </Link>
            <div className="mt-auto  ml-4 flex flex-col items-center">
              <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">

                <a href="#link" className="text-white">
                  <span className="sr-only">Facebook</span>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#link" className="ml-3 text-white">
                  <span className="sr-only">Twitter</span>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>

                <a href="#link" className="ml-3 text-white">
                  <span className="sr-only">Instagram</span>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>

                <a href="#link" className="ml-3 text-white">
                  <span className="sr-only">Linkedin</span>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
              

              <span className="py-4 lg:text-l mt-3 text-white text-sm ">&copy;2023, Conservation Council Of Kashmir All Rights Reserved.</span>
            </div>
            <span className="sm:hidden absolute bg-black  -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-5 text-gray-400">
            <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
              <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-white font-bold tracking-wide opacity-80">Navigation</h3>
              <nav className="flex justify-around md:flex-col font-medium list-none">
                <li><Link href="/" className="hover:text-gradient text-white opacity-80">Home</Link></li>
                <li><Link href="/about-us" className="hover:text-gradient text-white opacity-80 ">AboutUs</Link></li>
                <li><Link href="/contact-us" className="hover:text-gradient text-white opacity-80" >ContactUs</Link></li>
                <li><Link href="/our-work" className="hover:text-gradient text-white opacity-80">Ourwork</Link></li>
              </nav>
            </div>
            <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
              <h3 className="py-1.5 md:py-4 text-xl  text-white text-gray-500 font-bold tracking-wide opacity-80">Address</h3>
              <p className="md:w-48 text-center text-white sm:text-left text-lg md:text-xl font-medium opacity-80">Rawalpora, Srinagar, Kashmir, 190005</p>
            </div>
            <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
              <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide opacity-80">Email:</h3>
              <p className="inline-flex justify-center sm:justify-start text-l text-white font-medium opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:conservationcouncilkashmir@gmail.com">conservationcouncilofkashmir@gmail.com</a>
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start ml-4 ">
              <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide opacity-80">Phone contact</h3>
              <p className="inline-flex justify-center sm:justify-start text-l text-white font-bold opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919541349079">(+91) 9541 349 079</a>
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={scrollToTop}
          className={` bg-gradient fixed bottom-4 right-4 h-14 w-14 cursor-pointer shadow-lg shadow-[#671AE4]/40 rounded-full bg-gradient-to-b  text-white font-bold from-[#52c234] to-[#671AE4] mx-auto flex justify-center items-center ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-opacity duration-300`}
        >
          UP
        </div>
      </footer>
    </div>

  )
};

export default Footer;

// bg-gradient-to-r from-[#051a11] via-[#3e433d] to-[#2c5045]
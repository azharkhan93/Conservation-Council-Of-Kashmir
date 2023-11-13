/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-red-300 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-white">
        <div className="w-full lg:w-1/2 lg:mt-32 mx-8 mt-32">
          <div className="text-7xl text-green-500 font-dark font-extrabold lg:mb-6 mt-4 ">404</div>

          <p className="text-2xl md:text-3xl font-light leading-normal mt-4 mb-8">
            Sorry, we couldn't find the page you're looking for
          </p>

          <Link href="/">
            <span className="px-5 mt-4 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green active:bg-red-600 hover:bg-red-700">
              Back to homepage
            </span>
          </Link>
        </div>
        <div className="w-full lg:flex lg:mt-32 lg:justify-end lg:w-1/2 mx-5 my-12 ">
          <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" alt="Page not found" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;


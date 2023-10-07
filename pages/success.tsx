import React from 'react';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className=" py-32 bg-grey ">
      <svg viewBox="0 0 24 24" className="text-gradient w-16 h-16 mx-auto mt-32 my-8">
        <path
       
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <div className="text-center mb-8">
        <h3 className="md:text-2xl lg:text-4xl mt-8 text-white font-semibold text-center text-2xl">Payment Done!</h3>
        <p className="text-white my-4 lg:text-4xl mt-6 text-2xl">Thank you for completing your secure online payment.</p>
        <p className="text-white lg:text-3xl mt-4 text-2xl">Have a great day !</p>
        <div className="py-10 text-center">
          <Link href="/">
            <span className="px-12 bg-gradient hover:bg-indigo-500 text-white font-semibold py-3">
              GO BACK
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;


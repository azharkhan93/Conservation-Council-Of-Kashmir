"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';


import Image from 'next/image';  // Import Image from Next.js

const BankTransferDetails = () => {
  const [showUPIID, setShowUPIID] = useState(false);

  const handleMouseEnter = () => {
    setShowUPIID(true);
  };

  const handleMouseLeave = () => {
    setShowUPIID(false);
  };
  return (
  <div className='bg-gradient-to-b from-forest to-gradient py-20'>
  <div className="flex flex-col sm:flex-row justify-between">
    <div className="sm:w-1/2  relative max-w-md mx-auto bg-gradient p-8 border rounded shadow-lg mt-20 sm:mt-18">
      

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
    <div className="relative max-w-md mx-auto mt-20 sm:mt-18">
    <Image
      src="/scanner.jpg"
      alt="Image Description"
      width={300} // Set your desired width
      height={200} // Set your desired height
      className="rounded"
    />
  </div>
    </div>
    </div>
  );
};

export default BankTransferDetails;


'use client'
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { ScrollAnimation, getScrollAnimation } from "../Animations/ScrollAnimation";
import ModalForm from '../ModalForm/index'

const Donateus = () => {
  const [animationVariants, setAnimationVariants] = useState<any>(null);

  useEffect(() => {
    const variants = getScrollAnimation();
    setAnimationVariants(variants);
  }, []);

  useEffect(() => {
    // Load the Razorpay script here
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleDonateClick = () => {
    const options = {
      key: "process.env.RAZORPAY_API_KEY", // Replace with your Razorpay key
      amount: 1000, // Replace with the donation amount
      name: "Your Donation",
      description: "Donation for a cause",
      image: "/path-to-your-image.png", // Replace with your image URL
      handler: function (response: { razorpay_payment_id: any; }) {
        if (response.razorpay_payment_id) {
          // Payment was successful, redirect to the success page
          router.push("/success"); // Use router.push to redirect to the success page
        } else {
          // Payment failed, redirect to the error page
          router.push("/error-page"); // Use router.push to redirect to the error page
        }
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "1234567890",
      },
      theme: {
        color: "#009688", // Change to your preferred color
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      {animationVariants && (
        <ScrollAnimation variants={animationVariants}>
          <div
            className="bg-cover bg-center bg-no-repeat py-24 md:py-32 relative"
            style={{
              backgroundImage: `url('/images/donate/Azam3.jpg')`,
            }}
          >
            <div className="container mx-auto py-12 px-4">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-green mb-6">
                  Give Generously, <span className="italic">Donate Now</span>
                </h2>
                <p className="text-lg md:text-xl text-white">
                  Your support can make a difference. Help us in our mission to protect and preserve nature. Every little contribution counts!
                </p>
                
                  {/* </p> */}
                <Link href="/mangement">
                <button
                  // onClick={handleDonateClick}
                  className="mb-2 text-white bg-gradient-to-b from-forest to-gradient inline-block mt-7 rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                >
                  Donate Now
                </button>
                </Link>

                <div className="absolute bottom-4 right-4 text-white text-opacity-80 text-sm md:text-base">
                  Photo by <a href="photographer-profile-link" className="text-green-500">Abid Ali Bhat</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      )}
    </>
  );
};

export default Donateus;



{/* <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
import ModalForm from '../ModalForm/index'
onClick={openModal}


const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  }; */}
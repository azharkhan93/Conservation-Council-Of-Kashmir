import Link from "next/link";
import React, { useState } from "react";
import ModalForm from "../ModalForm/index";

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-15 shadow-lg bg-forest lg:py-8">
        <div className="container">
          <div
            className={`relative z-1 overflow-hidden rounded bg-primary py-12 px-8 md:p-20`}
          >
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <h2 className="mb-6 lg:text-2xl w-full text-2xl text-center text-white sm:mb-8 lg:mb-0">
                  Join us in our mission to make the world a greener place !
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex  justify-center flex-wrap space-x-4 lg:justify-end">
                  <Link href='/mangement'>
                  <span
                    className={`my-1 cursor-pointer inline-block rounded bg-white py-4 px-6 text-base font-medium text-gradient transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9 mx-auto sm:mx-0 sm:block`}
                    role="button"
                    // onClick={openModal}
                  >
                    Donate A Tree
                  </span>
                  </Link>
                  

                </div>
                <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width={189}
                  height={162}
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx={16}
                    cy="-16.5"
                    rx={173}
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1={-157}
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width={191}
                  height={208}
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx={173}
                    cy="178.5"
                    rx={173}
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;

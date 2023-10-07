"use client"

import React, { useState } from "react";
 import ModalForm from "../ModalForm/index";

 const Contactusform = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };
    

    return (
        <>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                
                <div className='hidden lg:block'>
                    <button type="button" className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>
                        Donate Us
                    </button>
                    <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
                    </div>
                
                </div>
            {/* </div> */}

            
        </>
    )
}

export default Contactusform;

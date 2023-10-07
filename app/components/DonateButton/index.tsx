import React, { useState } from 'react'; 
import ModalForm from '../ModalForm/index'

const Donatebtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    
      <div>
      
      <div className="  mt-4 bg-gradient-to-b from-forest to-gradient py-20 px-6 text-center dark:bg-neutral-900">
        <h1 className="mt-2 mb-10 text-2xl font-bold tracking-tight md:text-5xl lg:text-5xl text-gradient">
        Make a Difference with Your Donations <br /><span className="text-primary ">for a Better World..</span>
        </h1>
        <a className="mb-2  bg-gradient-to-b from-green to-forest inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
          data-te-ripple-init data-te-ripple-color="light"  role="button"onClick={openModal}  >Plant A Tree</a>
        <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
      </div>
      
    </div>
  );
};

export default Donatebtn;


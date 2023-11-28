'use client'
import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";
import ModalForm from '../ModalForm/index'
import { useState } from "react";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'AboutUs', href: '/about-us', current: false },
    { name: 'ContactUs', href: '/contact-us', current: false },
    { name: 'OurWork', href: '/our-work', current: false },
   
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const handleButtonClicked = (e: { stopPropagation: () => void; }) => {
        // Prevent closing the menu when the button is clicked
        e.stopPropagation();
        openModal();
      }
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-6 ">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-white text-purple' : 'text-black hover:bg-gradient hover:text-white',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <Link href={'/mangement'}>
                        <button className="bg-green w-full hover:text-white text-white border border-white font-medium py-2 px-4 rounded-lg" onClick={handleButtonClicked}>
                            Donate Us
                        </button>
                        </Link>
                        {/* <ModalForm isOpen={isModalOpen} closeModal={closeModal} /> */}
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;

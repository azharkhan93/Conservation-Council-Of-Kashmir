/* eslint-disable @next/next/no-img-element */
"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [

    { name: 'Home', href: '/', current: false },
    { name: 'AboutUs', href: '/about-us', current: false },
    { name: 'ContactUs', href: '/contact-us', current: false },
    { name: 'OurWork', href: '/our-work', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {



    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">

            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-14 sm:h-15 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">



                            <div className="flex items-center  lg:justify-start border-right sm:justify-start ">
                                <Link href="/">
                                    <Image

                                        src="/images/Logo.png"
                                        alt="Conservation Council Logo"
                                        width={230}
                                        height={10}
                                        priority

                                    />
                                </Link>
                            </div>
                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-lacoste' : 'navlinks hover:text-green',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>


                            <Contactusform />


                        </div>
                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-8 w-8 cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>

    )
}

export default Navbar;

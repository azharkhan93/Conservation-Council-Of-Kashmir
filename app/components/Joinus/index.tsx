'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Join = () => {
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            console.log('User credentials:', { PhoneNumber, email });
            const response = await axios.post('/api/routes/join', { PhoneNumber, email });
            console.log(response.data.message);
            toast.success('Successfully joined! Thank you for joining.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            setPhoneNumber('');
            setEmail('');
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    return (
        <div className="bg-joinus bg-forest py-14">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-white text-lg font-normal tracking-widest">JOIN US..</h3>
                    <h2 className=" text-gradient text-4xl sm:text-6xl font-bold my-6 leading-10"> Join Hands for a Greener, Cleaner World.</h2>
                    <p className="text-white text-base font-normal">At the Council, we believe in the power of unity and collective action. Our mission is simple yet profound: to create a greener, cleaner world for ourselves and future generations</p>
                </div>

                <div className="mx-auto max-w-4xl mt-5 pt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl  shadow-lg justify-between bg-lightgrey sm:rounded-full">
                            
                            <input
                                type="tel"
                                value={PhoneNumber}
                                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                                placeholder=" Phone Number"
                                autoComplete="off"
                                inputMode="numeric"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />


                            <div>
                                <input type="email" value={email} className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="sm:mr-3">
                                <button type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-green hover:bg-green">
                                    Join!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Join;

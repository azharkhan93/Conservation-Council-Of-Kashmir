'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            console.log('User credentials:', { name, email });
            const response = await axios.post('http://localhost:3001/api/join', { name, email });
            console.log(response.data.message); 
            toast.success('Successfully joined! Thank you for joining.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    return (
        <div className="bg-joinus  py-14">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-green text-lg font-normal tracking-widest">JOIN US..</h3>
                    <h2 className=" text-green text-4xl sm:text-6xl font-bold my-6 leading-10"> Be A Part Of Our Journey<br /> To The New Level.</h2>
                    <p className="text-lightblack text-base font-normal">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead <br /> historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                <form onSubmit={handleSubmit}>
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl  shadow-lg justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="name" value= {name} className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="Your name" autoComplete="off" onChange={(e) => setName(e.target.value)} />
                        </div>
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

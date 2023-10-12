/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import DonateButton from '../app/components/DonateButton'

const Contact1 = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: (
                <a href="mailto:conservationcouncilofkashmir@gmail.com">
                  conservationcouncilofkashmir@gmail.com
                </a>
              ),
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: (
                <a href="tel:+919541349079">(+91) 9541 349 079</a>
              ),
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Rawlpora, Srinagar,  Kashmir, 190005"
        },
    ]
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();


        const formData = {
            fullName,
            email,
            PhoneNumber,
            message,
        };
        console.log('FormData:', formData);

        try {
            const response = await axios.post('/api/routes/contact', formData);
            console.log(response.data.message); 
            toast.success('Thanks for contacting us, someone from our team will get back to you.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setFullName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show an error message to the user, etc.
        }
    };

    return (
        <>
            <div className="py-14 mt-24">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                        <div className="max-w-lg space-y-3">
                            <h3 className="text-green  text-2xl font-semibold">
                                Contact Us..
                            </h3>
                            <p className="text-green text-3xl font-semibold sm:text-4xl">
                                Let us know how we can help
                            </p>
                            <p className='text-green '>
                                We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                            </p>
                            <div>
                                <ul className="mt-6 flex  text-green flex-wrap gap-x-10 gap-y-6 items-center">
                                    {contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-green text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 sm:max-w-lg lg:max-w-md sm:mt-0 mt-4">
                            <form
                                onSubmit={handleSubmit}

                                className="space-y-5"
                            >
                                <div>
                                    <label className="font-medium text-green">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full mt-2 px-3 py-2 text-green bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                                </div>
                                <div>
                                    <label className="font-medium text-green">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full mt-2 px-3 py-2 text-green bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                                </div>
                                <div>
                                    <label className="font-medium text-green">
                                        Phone Number
                                    </label>
                                    <input
                                        type="numeric"
                                        required
                                        value={PhoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full mt-2 px-3 py-2 text-green bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                                </div>
                                <div>
                                    <label className="font-medium text-green">
                                        Message
                                    </label>
                                    <textarea required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} className="w-full  bg-green mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white font-medium bg-green hover:bg-green active:bg-green rounded-lg duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <DonateButton />
                <div className="w-full h-96 " style={{ marginBottom: "-5rem" }}>
                
                    <iframe
                        title="Google Map"
                        className="w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13226.115166344602!2d74.79220879999998!3d34.03030435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696159123830!5m2!1sen!2sin"

                    >

                    </iframe>
                </div>

            </div>
        </>

    )
}

export default Contact1;





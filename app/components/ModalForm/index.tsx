import React, { useState } from 'react';
import getStripe from '../../../utils/stripe';
import axios from 'axios';

interface AuthenticationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AuthenticationModal: React.FC<AuthenticationModalProps> = ({ isOpen, closeModal }) => {
  const [amount, setAmount] = useState<number | undefined>(0);

  const handlePayment = async () => {
    if (!amount || isNaN(parseFloat(amount.toString()))) {
      console.error('Invalid amount');
      return;
    }

    const numericAmount = parseFloat(amount.toString()); // Convert the amount to a numeric value

    try {
      const payload = { amount: numericAmount }; // Send the numeric amount
      console.log('Sending payload:', payload);

      const stripe = await getStripe();
      const response = await axios.post('/api/stripe/payment', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      console.log(data);

      const { error } = await (stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      }) ?? {}); 
      
      if (error) {
        console.error(error);
      }
      

      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-forest"
                data-modal-hide="authentication-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 bg h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-lacoste dark:text-green">
                  Enter Your Details
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-green dark:text-gradient"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-forest border border-green text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="amount"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-green"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                      placeholder="Enter the amount"
                      className="bg-forest border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handlePayment}
                    className="  w-70 text-green bg-forest hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Proceed with payment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthenticationModal;


/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
const Beliefs = () => {
  return (
    <>
    {/* <div className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center text-transparent text-3xl sm:text-l font-bold tracking-wide antialiased" style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}>
        Text Effect 3
      </div> */}
    {/* <div className=  "text-gray-200  hidden sm:flex  text-4xl py-8 lg:font-bold uppercase flex flex-col items-center justify-around mt-9 -mb-11 ">
      <div className="flex items-center"> 
        <span>Make</span>
        <div className="overflow-hidden h-14">
          <div className="animate-slide"><span className="inline-block text-green py-1 px-3 mt-1 mb-11 bg-blue-500">Plant Trees </span></div>
          <div><span className="inline-block py-1 px-3 mb-11 text-green">Go Greener!</span></div>
          <div><span className="inline-block text-green py-1 px-3  bg-red-500">Everything</span></div>
        </div>
        <span className='mr-4'>AweSoMe!</span>
      </div>
      </div> */}
    <div className=" p-4 md:p-6 lg:p-8  shadow-lg flex flex-col items-center justify-center">
    <div className=" mt-4 mb-3 flex flex-col justify-center items-center bg-cover bg-clip-text bg-center text-transparent lg:text-3xl sm:text-2xl  sm:font-bold font-bold text-2xl tracking-wide antialiased" 
    style={{ backgroundImage: "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)" }}>
    What Is Conservation Council Of Kashmir!? 
      </div>
      {/* <div className=" lg:text-gradient lg:text-3xl text-green text-2xl">
  This text is red and has a larger font size on small screens,
  and blue with a larger font size on large screens
</div> */}

        {/* <h2 className="lg:text-2xl font-bold mb-3 mt-6 text-forest sm:font-bold sm:text-left text-2xl">
          What is Conservation Council Of Kashmir?
        </h2> */}
        <p className="lg:text-base mt-1 mb-4 w-full">At the <span className="text-l text-gradient">Conservation Council Of Kashmir,</span> we are passionately dedicated to championing the cause of our planet and nurturing a profound and harmonious relationship between humanity and the wondrous natural world that surrounds us. Our esteemed environmental organization is united by a resolute commitment to sustainability.</p>
        <p className="text-base mb-4 w-full">Unwavering dedication to conservation, and an unbreakable vow to safeguard and celebrate the exquisite beauty that graces our beloved Earth. Together, we stand as guardians of the environment, working tirelessly to ensure that future generations inherit a world brimming with life, wonder, and the timeless majesty of nature.</p>
        <p className="text-base w-full mb-4">Our mission is clear: to preserve the delicate balance of our ecosystem, protect endangered species, and educate individuals about the importance of environmental stewardship. Through our collective efforts, we strive to create a sustainable future where nature and humanity coexist harmoniously.</p>
        <div className=" hidden sm:flex px-4 py-16  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1">
          <div className="flex flex-col  overflow-hidden bg-green border rounded shadow-sm lg:flex-row sm:mx-auto w-full">
            <div className="relative lg:w-full">
              <img
                src="images/beliefs/pine3.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full" />
              <svg
                className="absolute top-0 right-0 hidden h-full text-green lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="flex flex-col justify-center p-8 bg-green lg:p-16 lg:pl-10 lg:w-full">
              <div>
                <p className="inline-block text-xs lg:px-3 py-px mb-4 lg:text-l font-semibold tracking-wider text-white uppercase rounded-full bg-gradient">
                  Conservation council Of Kashmir
                </p>
              </div>
              <h5 className="mb-3 lg:text-l font-bold  leading-none sm:text-xl">
                Planting Trees, Waste Management, Safeguarding Waterstreams
              </h5>
              <p className="mb-5 text-gray">
                We are committed to a critical mission safeguarding the guardians of our planet, the trees. Trees are the lifelines of our ecosystem
              </p>
              <div className="flex items-center">
                <Link href="/our-work">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-green transition duration-200 rounded shadow-md bg-lacoste hover:bg-white focus:shadow-outline focus:outline-none"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:hidden md:hidden mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="images/beliefs/pine3.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="" />
        </div>

        {/* <div className=" lg:hidden md:hidden sm:flex justify-center items-center">
      <img
        src="images/beliefs/pine3.jpeg"
        alt="Motive Image"
        className="max-w-full h-96 w-5/4 border-white rounded-lg"
      />
    </div> */}

        <p className="text-l mt-4 w-full hidden md:block"> We are dedicated to our multifaceted mission, which extends beyond preserving the delicate balance of our ecosystem and protecting endangered species. In addition, we are actively engaged in waste management, striving to keep our environment clean and free from pollution. Moreover, we work tirelessly to rescue and safeguard the lives of animals in need. Our commitment to these causes drives us to create a sustainable future where nature and humanity coexist harmoniously while addressing critical challenges such as waste management and animal welfare</p>
        <p className="text-base mt-4 w-full">At our NGO, we are committed to a critical mission: safeguarding the guardians of our planet, the trees. Trees are the lifelines of our ecosystem, providing oxygen, purifying the air, and offering refuge to countless species. They are the silent heroes in the battle against climate change. By protecting and nurturing trees, we are not just preserving nature; we are ensuring a sustainable future for generations to come.</p>
      </div></>
  );
};

export default Beliefs;


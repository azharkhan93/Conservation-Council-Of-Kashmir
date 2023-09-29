/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
// import React from 'react';

// const About = () => {
//   return (
//     <div className="bg-gray-800 relative">
      
//       <div
//         className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("/images/pex.jpg")',
         
//           backgroundSize: 'cover',
//         }}
//       />

//       <div className="container mx-auto pt-16 pb-32 px-4 relative z-1">
      
//         <div className="w-full bg-white p-8 mb-8 rounded-lg shadow-lg text-center">
//           <h2 className="text-2xl font-semibold">Welcome to Our Company</h2>
//           <p className="mt-4 text-lg">
//             We are a dedicated team of professionals committed to providing the
//             best services to our customers. Learn more about our story below.
//           </p>
          
//         </div>

    

//         <div className="mt-10 md:mt-0 md:flex">
          
//           <div className="md:w-1/2 text-white">
//             <h1 className="text-3xl font-semibold">About Us</h1>
//             <p className="mt-4 text-lg">
//               Your about us content goes here. Describe your company or
//               organization in this section. Provide information about your
//               mission, values, and history.
//             </p>
//           </div>

          
//           <div className="md:w-1/2 md:ml-4">
//             <img
//               className="w-full h-auto rounded-lg shadow-lg"
//               src="/images/home.jpg"
//               alt="About Us Image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
// import React from 'react';

// const Blog = () => {
//   // Sample blog data (you can fetch this from an API)
//   const blogs = [
//     {
//       id: 1,
//       title: 'The Importance of Tree Planting',
//       date: 'September 15, 2023',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed urna at sapien tincidunt vestibulum.',
//     },
//     {
//       id: 2,
//       title: 'How to Care for Your Newly Planted Trees',
//       date: 'September 20, 2023',
//       content:
//         'Vivamus sit amet turpis eu odio vestibulum vehicula. In auctor risus eget ultrices.',
//     },
//     {
//       id: 3,
//       title: 'How to Care for Your Newly Planted Trees',
//       date: 'September 20, 2023',
//       content:
//         'Vivamus sit amet turpis eu odio vestibulum vehicula. In auctor risus eget ultrices.',
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold mb-8">Blog</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//             >
//               <img
//                 src="/blog-image.jpg"
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
//                 <p className="text-sm text-gray-500">{blog.date}</p>
//                 <p className="text-gray-700 mt-2">{blog.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




// import React from 'react';

// const TreeAwareness = () => {
//   return (
//     <section className="bg-green w-full py-8 md:py-16">
//       <div className="container mx-auto px-4">
//         <div className="md:flex items-center">
          
//           <div className="md:w-1/2 pr-4"> 
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white sm:text-xl">
//               Tree Awareness Matters
//             </h2>
//             <p className="text-lg md:text-xl text-white leading-relaxed">
//               Trees are the lungs of our planet, providing us with clean air and
//               shelter to countless species. Join us in raising awareness about
//               the importance of preserving and planting trees for a sustainable future.
//             </p>
//           </div>

//           <div className="md:w-1/2">
//             <img
//               src="/images/pex.jpg"
//               alt="Tree Awareness"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TreeAwareness;

// import React from 'react';

// const PlantCareInstructions = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
//       <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold mb-4 text-green-800">
//           Planting and Care Instructions
//         </h2>
//         <p className="text-lg text-gray-700 mb-6">
//           Here are some steps to help you plant a sapling and take care of it:
//         </p>
//         <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
//           <li className="relative">
//             {/* Image */}
//             <div className="mb-2">
//               <img
//                 src="/images/planting-image.jpg" // Replace with your image path
//                 alt="Planting"
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </div>
//             {/* Instruction */}
//             <div className="mb-2">
//               <p className="text-base text-gray-600">
//                 Dig a suitable hole for planting.
//               </p>
//             </div>
//             {/* Additional Instructions */}
//             <div className="absolute left-0 bottom-0 bg-white p-2 text-sm text-gray-500">
//               <p>1. Choose a suitable location for planting.</p>
//               <p>2. Prepare the soil and dig a hole.</p>
//               <p>3. Plant the sapling gently.</p>
//               <p>4. Water the sapling regularly.</p>
//               <p>5. Provide sunlight and proper care.</p>
//             </div>
//           </li>
//           <li>
//             {/* Other list items */}
           
//           </li>
//         </ul>
//         <button
//           className="bg-green-500 text-white text-lg py-3 px-6 rounded-md font-medium hover:bg-green-600 focus:outline-none"
         
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlantCareInstructions;

// import React from "react";

// const OurWork: React.FC = () => {
//   return (
//     <div className="py-16 bg-gradient-to-b from-lacoste to-forest">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl  text-white font-semibold text-center mb-8">
//           Our Work
//         </h2>

//         {/* First Section */}
//         <div className="mb-12 md:mb-0 md:flex justify-between items-center">
//           <div className="md:w-1/2 p-4">
//             <img
//               src="/images/pex.jpg" // Replace with your image URL
//               alt="Tree Planting"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//           <div className="md:w-1/2 p-4">
//             <h3 className="text-2xl text-white font-semibold mb-4">
//               Tree Planting Campaign
//             </h3>
//             <p className="text-gray-200">
//               Join us in our mission to plant trees and combat climate change.
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//           </div>
//         </div>

//         {/* Second Section */}
//         <div className="mb-12 md:mb-0 md:flex justify-between items-center">
//           <div className="md:w-1/2 p-4">
//             <h3 className="text-2xl text-white font-semibold mb-4">
//               Reforestation Projects
//             </h3>
//             <p className="text-gray-200">

//               We're restoring natural habitats and protecting biodiversity.
//               Nullam id sagittis turpis. Suspendisse consequat ultrices
//               vestibulum.
//             </p>
//           </div>
//           <div className="md:w-1/2 mt-7 md:ml-4 ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
//   <img
//     className="w-full h-auto rounded-lg shadow-lg"
//     src="/images/home.jpg"
//     alt="About Us Image"
//   />
//   <a href="#!">
//     <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//   </a>
// </div>

//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default OurWork;
//         {animationVariants && (
    //         <ScrollAnimation variants={animationVariants}>
    //           <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
    //             <img src="/images/TitleA.jpg" className="w-full" alt="Louvre" />
    //             <a href="#!">
    //               <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    //             </a>
    //           </div>
    //           </ScrollAnimation>



    //  <div className="container bg-lightgrey   my-20 mx-auto md:px-6">
    //   <section className="mb-32">
        
    //   <h2 className="text-3xl py-4 text-green font-semibold text-center mb-2">
    //   What We Do...
    //     </h2>
        
    //       {/* <h2 className="mb-3 text-center text-2xl font-extrbold text-green">What We Do...</h2> */}
    //       <p className="mb-8 text-center text-lg text-neutral-500 dark:text-neutral-400">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque felis a diam facilisis, sed facilisis libero laoreet. Praesent euismod, ipsum vitae scelerisque dignissim, velit ex convallis mi, a vehicula justo ipsum at purus.
    //   </p>
    //       <div className="mb-16 flex flex-wrap">
          
    //         <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6 " >
            
    //         {animationVariants && (
    //         <ScrollAnimation variants={animationVariants}>
    //           <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
    //             <img src="/images/TitleA.jpg" className="w-full" alt="Louvre" />
    //             <a href="#!">
    //               <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    //             </a>
    //           </div>
    //           </ScrollAnimation>
    //           )}
              

              

    //         </div>
            
      
           

    //         <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            
            
    //           <h3 className="mb-4 text-2xl font-bold text-green">That's the news!</h3>
              
    //             <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
    //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-5 w-5">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
    //               </svg>
    //               Travels
    //             </div>
    //             {animationVariants && (
    //         <ScrollAnimation variants={animationVariants}>
                
              
    //           <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
    //             Published <u>14.01.2022</u> by <a href="#!">Lisa McCartney</a>
    //           </p>
    //           <p className="mb-6 text-neutral-500 dark:text-neutral-300">
    //             Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
    //           </p>
    //           <p className="text-neutral-500 dark:text-neutral-300">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?
    //           </p>
    //           </ScrollAnimation>
    //           )}

          
          
    //         </div>
            
    //       </div>
    //       {/* Article 2 */}
    //       <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
    //         <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
            
    //         {/* <ScrollAnimation> */}
    //           <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
    //             <img src="/images/TitleB.jpg" className="w-full" alt="Louvre" />
    //             <a href="#!">
    //               <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    //             </a>
    //           </div>
    //           {/* </ScrollAnimation> */}
    //         </div>

    //         <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6 " >
            
    //         {/* <ScrollAnimation>  */}
    //           <h3 className="mb-4 text-2xl font-bold text-green">Exhibition in Paris</h3>
    //           <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-4 w-4">
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    //             </svg>
    //             Art
    //           </div>
    //           <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
    //             Published <u>12.01.2022</u> by <a href="#!">Anna Doe</a>
    //           </p>
    //           <p className="text-neutral-500 dark:text-neutral-300">
    //             Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.
    //           </p>
    //          {/* </ScrollAnimation> */}
          

    //         </div>
    //       </div>

    //       {/* Article 3 */}
    //       <div className="flex flex-wrap">
    //         <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            
    //           <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
    //             <img src="/images/TitleC.jpg" className="w-full" alt="Louvre" />
    //             <a href="#!">
    //               <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    //             </a>
    //           </div>
              
    //         </div>

    //         <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6" >
            
    //           <h3 className="mb-4 text-2xl font-bold text-green">Stock market boom</h3>
    //           <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-5 w-5">
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    //             </svg>
    //             Business
    //           </div>
    //           <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
    //             Published <u>10.01.2022</u> by <a href="#!">Joe Svan</a>
    //           </p>
    //           <p className="text-neutral-500 dark:text-neutral-300">
    //             Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue sem finibus eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus. Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum ac. Maecenas sed blandit dolor.
    //           </p>
    //         </div>

    //       </div>
    //     </section>
      
    // </div>

   
    import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Jumbotron */}
      <div className="bg-gradient py-20 px-6 text-center dark:bg-neutral-900">
        <h1 className="mt-2 mb-10 text-5xl font-bold tracking-tight md:text-5xl xl:text-5xl">
        Make a Difference with Your Donations <br /><span className="text-primary">for a Better World..</span>
        </h1>
        <a className="mb-2  bg-darkblue inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-green shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
        {/* <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a> */}
      </div>
      {/* Jumbotron */}
    </div>
  );
};

export default HomePage;


// const Beliefs = () => {
//     return (
//       <div className="mx-auto  mt-8 py-8 px-10 w-full  dark:bg-custom-gradient max-w-7xl ">
//       <h3 className="text-xxl text-gradient font-medium">What Is Conservation Council Of kashmir.</h3>
//       <p className="mt-3  text-medium text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias id quis hic tempora explicabo provident, iure quae praesentium accusantium laborum ab expedita, veniam error, nemo eius! Officiis, cum reiciendis.</p>
//     </div>
    
//     )
// }

// export default Beliefs;

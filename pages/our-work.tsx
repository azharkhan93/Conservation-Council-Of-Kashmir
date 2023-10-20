/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Gallery from '../app/components/Gallery';
import DonateButton2 from '../app/components/DonateUsbtn2'
import { ScrollAnimation, getScrollAnimation } from "../app/components/Animations/ScrollAnimation";
import { useEffect, useState } from 'react';
const Blog = ()=>{
// 	const [animationVariants, setAnimationVariants] = useState<any>(null);

//   useEffect(() => {
//     const variants = getScrollAnimation();
//     setAnimationVariants(variants);
//   }, []);
    return (
		<>
		
		<section className="dark:bg-gray-800 mt-24 dark:text-gray-100">
		<div className="text-center">
          <h2 className="text-3xl md:text-4xl  font-semibold text-gradient mb-4">
            What is Our Mission
          </h2>
          <p className="text-lg text-green mb-8">
		  At the Council, we're on a mission to preserve the natural beauty of Kashmir and beyond. Through tree planting, waste reduction, cleanups, water stream protection, and education, 
		  we're shaping a greener future. Join us in safeguarding our pristine paradise. contributing to the long-term sustainability of our work.
          </p>
        </div>
			<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
			
				<span rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
					<img src="images/ourwork/Azam37.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
					<div className="p-6 space-y-2 lg:col-span-5">
						<h3 className=" text-gradient text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Tree Plantation</h3>
						<span className="text-xs dark:text-gray-400">October 9,2023</span>
						<p>In Kashmir, we actively contribute to tree plantation initiatives, striving to plant thousands of trees each year. We're committed to combating deforestation, enhancing sustainability, and preserving the region's natural beauty. Our dedicated efforts involve engaging with local communities, educating the youth about environmental conservation, and collaborating with like-minded organizations to ensure a greener and more prosperous future for Kashmir and its inhabitants.</p>
					</div>
				</span>
				
				<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam40.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">Waste Reduction</h3>
							<span className="text-xs dark:text-gray-400">January 21, 2021</span>
							<p>Our focus lies in waste reduction. We educate communities on responsible consumption and recycling practices, working to safeguard the pristine surroundings of this region.</p>
						</div>
					</a>
					
				<span rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam44.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">Cleanup of Natural Sites</h3>
							<span className="text-xs dark:text-gray-400">January 22, 2021</span>
							<p>Kashmir's natural sites are precious. Our volunteers work diligently to clean up local parks, lakeshores, and forests, ensuring they remain unspoiled for generations.</p>
						</div>
					</span>
					
					<span rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam46.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">Preservation of Water Streams</h3>
							<span className="text-xs dark:text-gray-400">January 23, 2021</span>
							<p>We strive to preserve water streams in Kashmir, preventing pollution and advocating responsible water usage to protect this vital ecosystem.</p>
						</div>
					</span>
					<span rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam22.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">Educational Campaigns</h3>
							<span className="text-xs dark:text-gray-400">January 24, 2021</span>
							<p>Education is central to our mission. We organize workshops and awareness campaigns in Kashmir to empower communities with knowledge about environmental stewardship.</p>
						</div>
					</span>
					
					<span  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam20.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">Research and Data Collection</h3>
							<span className="text-xs dark:text-gray-400">January 25, 2021</span>
							<p>We are dedicated to conducting essential research to inform and enhance our conservation efforts. Our research ensures that our initiatives remain effective and adaptable, </p>
						</div>
					</span>
					<span className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam19.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">Biodiversity Conservation</h3>
							<span className="text-xs dark:text-gray-400">January 26, 2021</span>
							<p>We are committed to the conservation of biodiversity. We strive to protect the diverse array of flora and fauna that call this region home.</p>
						</div>
					</span>
				</div>
				<div className="flex justify-center">
					<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-green dark:text-gray-400">Load more posts...</button>
				</div>
			</div>
		</section>
		
			<Gallery />
			<DonateButton2 />

			</>

    )
}
export default Blog;
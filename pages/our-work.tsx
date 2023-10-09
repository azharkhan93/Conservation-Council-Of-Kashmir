/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Gallery from '../app/components/Gallery';
import DonateButton2 from '../app/components/DonateUsbtn2'
import { ScrollAnimation, getScrollAnimation } from "../app/components/Animations/ScrollAnimation";
import { useEffect, useState } from 'react';
const Blog = ()=>{
	const [animationVariants, setAnimationVariants] = useState<any>(null);

  useEffect(() => {
    const variants = getScrollAnimation();
    setAnimationVariants(variants);
  }, []);
    return (
		<>
		
		<section className="dark:bg-gray-800 mt-24 dark:text-gray-100">
		<div className="text-center">
          <h2 className="text-3xl md:text-4xl  font-semibold text-green-800 mb-4">
            What is Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tristique euismod sapien, eget semper arcu congue sit amet.
            Phasellus eget eros a neque pellentesque volutpat.
          </p>
        </div>
			<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
			{animationVariants && (
          <ScrollAnimation variants={animationVariants}>
				<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
					<img src="images/ourwork/Azam37.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
					<div className="p-6 space-y-2 lg:col-span-5">
						<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
						<span className="text-xs dark:text-gray-400">February 19, 2021</span>
						<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id. Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
					</div>
				</a>
				</ScrollAnimation>
                )}
				<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{animationVariants && (
          <ScrollAnimation variants={animationVariants}>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam40.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs dark:text-gray-400">January 21, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					 </ScrollAnimation>
                )}
				<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam44.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs dark:text-gray-400">January 22, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam46.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs dark:text-gray-400">January 23, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam22.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs dark:text-gray-400">January 24, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam20.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs dark:text-gray-400">January 25, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
					<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
						<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="images/ourwork/Azam19.jpg" />
						<div className="p-6 space-y-2">
							<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
							<span className="text-xs dark:text-gray-400">January 26, 2021</span>
							<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
						</div>
					</a>
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
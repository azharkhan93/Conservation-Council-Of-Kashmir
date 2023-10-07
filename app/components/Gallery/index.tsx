/* eslint-disable @next/next/no-img-element */
const Gallery = () => {
	return (
		<section className="py-6 dark:bg-gray-800 dark:text-gray-50">
			<h1 className="font-bold text-forest text-center mb-4 text-4xl ">Our Gallery</h1>
			<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
				<img src="images/Azam2.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam14.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam13.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam12.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam8.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam27.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam28.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam31.jpg" />
				<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="images/Azam32.jpg" />
				<img
					src="images/Azam10.jpg"
					alt=""
					className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
				/>
				</div>
		</section>
	);
};
export default Gallery;
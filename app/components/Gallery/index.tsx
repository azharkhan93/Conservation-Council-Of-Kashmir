/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <h1 className="font-bold text-forest text-center mb-4 text-4xl">Our Gallery</h1>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
	  <Image
          src="/images/Azam2.jpg"
          alt=""
          width={800} // Set the width to match your image's actual width
          height={600} // Set the height to match your image's actual height
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="/images/gallery/Azam14.jpg"
		  alt=""
		  width={800}
		  height={600}
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
		<Image
          src="/images/gallery/Azam13.jpg"
		  alt=""
		  width={800}
		  height={600}
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
        {/* <Image
          alt=""
          src="/images/gallery/Azam13.jpg"
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        /> */}
		<Image
          src="/images/gallery/Azam12.jpg"
		  alt=""
		  width={800}
		  height={600}
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
        {/* <Image
          alt=""
          src="/images/gallery/Azam12.jpg"
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        /> */}
		<Image
          src="/images/gallery/Azam9.jpg"
		  alt=""
		  width={800}
		  height={600}
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
        
		<Image
          src="/images/gallery/Azam27.jpg"
		  alt=""
		  width={800}
		  height={600}
        //   className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
        
		<Image
          src="/images/gallery/Azam28.jpg"
		  alt=""
		  width={800}
		  height={600}
        //   className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
        
		<Image
          src="/images/gallery/Azam31.jpg"
		  alt=""
		  width={800}
		  height={600}
          className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
		<Image
          src="/images/gallery/Azam32.jpg"
		  alt=""
		  width={800}
		  height={600}
           className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square"
        />
        
        {/* <Image
          src="/images/gallery/Azam10.jpg"
		  alt=""
		  width={800}
		  height={600}
           className="w-full h-full rounded shadow-sm min-h-48 dark-bg-gray-500 aspect-square felex align-center"
        /> */}
          
      </div>
    </section>
  );
};

export default Gallery;

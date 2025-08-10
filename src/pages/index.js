import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.png';

const Homepage = () => {
 return (
  <section className="bg-white text-gray-900">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center sm:py-24 sm:px-8 lg:px-20 xl:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
          The Blog You Were Looking For. <br className="hidden sm:block" />
          <span className="text-blue-600">Zwinish Delivers.</span>
        </h1>
                 <div className="flex flex-col sm:flex-row justify-center mt-8 gap-3">
           <Link href="/Posts" className="px-6 py-3 text-sm sm:text-base font-semibold rounded bg-gray-600 text-white hover:bg-gray-700 transition duration-300">
             Start reading
           </Link>
           <Link href="/learn-more" className="px-6 py-3 cursor-pointer text-sm sm:text-base font-semibold rounded border border-gray-300 text-gray-800 hover:bg-gray-100 transition duration-300">
             Learn More
           </Link>
         </div>
      </div>
    </section>
  );
};
export default Homepage;
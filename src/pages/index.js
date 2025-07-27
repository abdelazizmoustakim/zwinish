import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.png';
const Homepage = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl flex items-center justify-center gap-4">
          <span>Welcome to</span>
          <Image src={Logo} alt="Zwinish Logo" width={150} height={80} />
        </h1>
        {/* <p className="mt-6 text-lg">
          Zwinish is your go-to modern blogging platform for fresh insights, helpful guides,
          and bold takes — from Moroccan gems to worldwide trends. No fluff, just fire content.
        </p> */}
        <div className="flex flex-wrap justify-center mt-10">
          <Link href="/Posts" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-black text-white hover:bg-gray-600 transition">
            Explore Blogs
          </Link>
          <Link href="/Faq" className="px-8 py-3 m-2 text-lg font-semibold rounded border border-gray-400 hover:bg-gray-100 transition">
            FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
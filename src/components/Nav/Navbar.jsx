import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="ml-20">
          <Link href="/">
            <Image
              src={img1}
              alt="Zwinish Logo"
              className="hover:opacity-80 transition-opacity duration-300"
              width={169} // You can adjust this
              height={120}  // ...and this to fit your logo size
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex gap-6 mt-4 sm:mt-0">
          <li>
            <Link
              href="/"
              className="text-sm font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Posts"
              className="text-sm font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/Faq"
              className="text-sm font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
            >
              Faq
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

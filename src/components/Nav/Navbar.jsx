import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0">
        
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:ml-20">
          <Link href="/">
            <Image
              src={img1}
              alt="Zwinish Logo"
              className="hover:opacity-80 transition-opacity duration-300"
              width={169}
              height={120}
              priority
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-2 rounded-md text-stone-600 hover:text-stone-800 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex gap-6">
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
            <li>
              <Link
                href="/Zwinish+"
                className="text-sm font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
              >
                Zwinish +
              </Link>
            </li>
          </ul>
          
          {/* User Icon */}
          <div className="ml-4">
            <Link href="/profile" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              <AiOutlineUser className="w-5 h-5 text-stone-600" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-stone-600 hover:text-stone-800 hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            {/* Sidebar Navigation */}
            <div className="p-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-stone-600 hover:text-stone-800 transition-colors py-3 border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Posts"
                    className="block text-lg font-medium text-stone-600 hover:text-stone-800 transition-colors py-3 border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Faq"
                    className="block text-lg font-medium text-stone-600 hover:text-stone-800 transition-colors py-3 border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Zwinish+"
                    className="block text-lg font-medium text-stone-600 hover:text-stone-800 transition-colors py-3 border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    Zwinish +
                  </Link>
                </li>
              </ul>
              
              {/* User Icon in Sidebar */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  href="/profile" 
                  className="flex items-center gap-3 text-lg font-medium text-stone-600 hover:text-stone-800 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                    <AiOutlineUser className="w-5 h-5" />
                  </div>
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

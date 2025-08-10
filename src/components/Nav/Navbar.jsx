import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, signOut } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const closeUserDropdown = () => {
    setIsUserDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="py-2">
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0">
        
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:ml-8">
          <Link href="/">
            <Image
              src={img1}
              alt="Zwinish Logo"
              className="hover:opacity-80 transition-opacity duration-300"
              width={140}
              height={99}
              priority
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-1.5 rounded-md text-stone-600 hover:text-stone-800 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <FiMenu className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <ul className="flex gap-4">
            
            <li>
              <Link
                href="/Posts"
                className="text-xs font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
              >
                Posts
              </Link>
            </li>
           
            <li>
              <Link
                href="/Zwinish+"
                className="text-xs font-medium uppercase text-stone-500 hover:text-stone-800 transition-colors"
              >
                Zwinish +
              </Link>
            </li>
          </ul>
          
          {/* User Icon / Account Dropdown */}
          <div className="ml-3 relative" ref={dropdownRef}>
            <button
              onClick={toggleUserDropdown}
              className="flex items-center gap-2 rounded-full px-3 h-8 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <AiOutlineUser className="w-4 h-4 text-stone-600" />
              {user ? (
                <span className="text-xs font-medium text-stone-700 max-w-[120px] truncate">{user.name || user.email}</span>
              ) : (
                <span className="text-xs font-medium text-stone-700">Account</span>
              )}
              <FiChevronDown className="w-4 h-4 text-stone-500" />
            </button>

            {/* Dropdown Menu */}
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  {user ? (
                    <>
                      <div className="px-4 py-2 text-xs text-stone-500">Signed in as</div>
                      <div className="px-4 pb-2 text-xs font-semibold text-stone-800 truncate">{user.name}</div>
                      <div className="my-1 border-t border-gray-100" />
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-xs text-stone-600 hover:bg-gray-50 hover:text-stone-800 transition-colors"
                        onClick={closeUserDropdown}
                      >
                        Profile
                      </Link>
                      <button
                        className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors"
                        onClick={() => {
                          signOut();
                          closeUserDropdown();
                        }}
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-xs text-stone-600 hover:bg-gray-50 hover:text-stone-800 transition-colors"
                        onClick={closeUserDropdown}
                      >
                        Sign Up
                      </Link>
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-xs text-stone-600 hover:bg-gray-50 hover:text-stone-800 transition-colors"
                        onClick={closeUserDropdown}
                      >
                        Log In
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
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
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-base font-semibold text-stone-800">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-1.5 rounded-md text-stone-600 hover:text-stone-800 hover:bg-gray-100 transition-colors"
                aria-label="Close mobile menu"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            {/* Sidebar Navigation */}
            <div className="p-4">
              <ul className="space-y-3">
          <li>
            <Link
              href="/"
                    className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2 border-b border-gray-100"
                    onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Posts"
                    className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2 border-b border-gray-100"
                    onClick={closeMobileMenu}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/Faq"
                    className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2 border-b border-gray-100"
                    onClick={closeMobileMenu}
            >
              Faq
            </Link>
          </li>
          <li>
            <Link
                    href="/Zwinish+"
                    className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2 border-b border-gray-100"
                    onClick={closeMobileMenu}
            >
                    Zwinish +
            </Link>
          </li>
        </ul>
              
               {/* User Options in Sidebar */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                 <div className="space-y-2">
                   {user ? (
                     <>
                       <div className="text-sm text-stone-500">Signed in as</div>
                       <div className="text-base font-semibold text-stone-800 truncate">{user.name || user.email}</div>
                       <div className="my-2 border-t border-gray-100" />
                       <Link 
                         href="/profile" 
                         className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2"
                         onClick={closeMobileMenu}
                       >
                         Profile
                       </Link>
                       <button
                         className="w-full text-left text-base font-medium text-red-600 hover:text-red-700 transition-colors py-2"
                         onClick={() => {
                           signOut();
                           closeMobileMenu();
                         }}
                       >
                         Sign out
                       </button>
                     </>
                   ) : (
                     <>
                       <Link 
                         href="/signup" 
                         className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2"
                         onClick={closeMobileMenu}
                       >
                         Sign Up
                       </Link>
                       <Link 
                         href="/login" 
                         className="block text-base font-medium text-stone-600 hover:text-stone-800 transition-colors py-2"
                         onClick={closeMobileMenu}
                       >
                         Log In
                       </Link>
                     </>
                   )}
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, loading, signOut } = useAuth();

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

  // Don't render user-dependent content until auth is initialized
  const renderUserContent = () => {
    if (loading) {
      return (
        <div className="flex items-center gap-2 rounded-full px-3 h-8 bg-gray-100">
          <AiOutlineUser className="w-4 h-4 text-stone-600" />
          <span className="text-xs font-medium text-stone-700">Loading...</span>
        </div>
      );
    }

    return (
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
    );
  };

  const renderDropdownMenu = () => {
    if (loading || !isUserDropdownOpen) return null;

    return (
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
    );
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Zwinish Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">Zwinish</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/Posts"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Posts
              </Link>
              <Link
                href="/learn-more"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/Zwinish+"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Zwinish +
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            {renderUserContent()}
            {renderDropdownMenu()}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/Posts"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Posts
            </Link>
            <Link
              href="/learn-more"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Learn More
            </Link>
            <Link
              href="/Zwinish+"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Zwinish +
            </Link>
            
            {/* Mobile User Menu */}
            <div className="pt-4 border-t border-gray-200">
              {user ? (
                <div className="px-3 py-2">
                  <div className="text-sm text-gray-500">Signed in as</div>
                  <div className="text-sm font-semibold text-gray-800">{user.name || user.email}</div>
                  <div className="mt-2 space-y-1">
                    <Link
                      href="/profile"
                      className="block text-sm text-gray-700 hover:text-gray-900 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Profile
                    </Link>
                    <button
                      className="block w-full text-left text-sm text-red-600 hover:text-red-800 transition-colors"
                      onClick={() => {
                        signOut();
                        closeMobileMenu();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="px-3 py-2 space-y-1">
                  <Link
                    href="/signup"
                    className="block text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="block text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Log In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

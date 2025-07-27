'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-100 text-gray-700">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        {/* Logo + Legal Links */}
        <div className="flex flex-row pr-3 space-x-6 sm:space-x-8 items-center">
          <div className="flex items-center justify-center w-12 h-12">
            <Image src={logo} alt="Zwinish Logo" width={40} height={40} />
          </div>
          <ul className="flex gap-4 text-sm font-medium">
            <li>
              <Link href="/terms" className="hover:text-cyan-600 transition">Terms of Use</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-cyan-600 transition">Privacy</Link>
            </li>
          </ul>
        </div>
        {/* Social Links */}
        <ul className="flex gap-4 text-sm font-medium pl-3">
          <li>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">Instagram</Link>
          </li>
          <li>
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition">Facebook</Link>
          </li>
          <li>
            <Link href="https://twitter.com" target="_blank" className="hover:text-sky-500 transition">Twitter</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

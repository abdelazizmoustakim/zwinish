'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-100 text-gray-700">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        {/* Logo + Legal Links */}
        <div className="flex flex-row pr-3 space-x-6 sm:space-x-8 items-center">
          <div className="flex items-center justify-center w-12 h-12">
            <Image src="/logo.png" alt="Zwinish Logo" width={60} height={60} />
          </div>
          <ul className="flex gap-4 text-sm font-medium">
            <li>
              <Link href="/terms-of-use" className="hover:text-cyan-600 transition">Terms of Use</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-cyan-600 transition">Privacy</Link>
            </li>
          </ul>
        </div>
       
        
      </div>
    </footer>
  );
}

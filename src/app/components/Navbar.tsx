"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 w-full">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          Synthex Studio
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/features" className="text-white/80 hover:text-white">
          Home
        </Link>
        <Link href="/pricing" className="text-white/80 hover:text-white">
          FAQ
        </Link>
        <Link href="/docs" className="text-white/80 hover:text-white">
          Create With AI
        </Link>
      </div>
      
      {/* Sign Up Button */}
      <div className="hidden md:block">
        <Link 
          href="/signup" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all"
        >
          Sign Up Free
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-purple-900/95 p-4 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/features" className="text-white hover:text-white/80 py-2">
              Features
            </Link>
            <Link href="/pricing" className="text-white hover:text-white/80 py-2">
              Pricing
            </Link>
            <Link href="/docs" className="text-white hover:text-white/80 py-2">
              Documentation
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80 py-2">
              Contact
            </Link>
            <Link 
              href="/signup" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full text-center"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
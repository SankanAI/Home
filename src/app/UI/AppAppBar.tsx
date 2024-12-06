"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function AppAppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header style={{width:window.innerWidth>1023?"60%":"90%", marginLeft:window.innerWidth>1023?"20%":"5%", zIndex:2, borderRadius:'40px'}} className="relative top-8 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between bg-white/40 backdrop-blur-lg rounded-full p-3 pl-5 pr-6 shadow-sm">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Sankan AI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Link
                href="/signin"
                className="text-sm text-gray-600 hover:text-black px-3 py-2 rounded-md"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-24 bg-white z-40 md:hidden">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-lg text-gray-600 hover:text-black"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t pt-4 space-y-4">
                  <Link
                    href="/signin"
                    onClick={toggleMenu}
                    className="block text-lg text-gray-600 hover:text-black"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={toggleMenu}
                    className="block text-lg bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[66px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/f8-icon.png"
                alt="F8 Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </Link>

          {/* Brand Name - Hidden on mobile */}
          <Link href="/" className="hidden md:block ml-4 text-xl font-semibold text-gray-800">
            Học Lập Trình Để Đi Làm
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/signup" 
              className="hidden sm:block px-4 py-2 text-gray-700 hover:text-orange-500 font-medium"
            >
              Đăng ký
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 font-medium"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
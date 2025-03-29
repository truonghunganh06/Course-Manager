'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiHome } from 'react-icons/hi';
import { HiNewspaper } from 'react-icons/hi2';
import { FaRoad } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: 'Trang chủ',
      href: '/',
      icon: HiHome
    },
    {
      name: 'Lộ trình',
      href: '/lo-trinh',
      icon: FaRoad
    },
    {
      name: 'Bài viết',
      href: '/bai-viet',
      icon: HiNewspaper
    }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-orange-500 text-white rounded-full shadow-lg"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-[66px] h-[calc(100vh-66px)] w-[96px] bg-white dark:bg-[#0a0a0a] 
        border-r border-gray-200 dark:border-gray-800 z-40
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col items-center py-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full flex flex-col items-center py-4 text-sm transition-colors
                  ${isActive 
                    ? 'text-orange-500 bg-orange-50 dark:bg-gray-800' 
                    : 'text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500'
                  }`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

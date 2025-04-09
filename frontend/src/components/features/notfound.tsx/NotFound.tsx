import React from 'react';
import Link from 'next/link';
import { Home, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="text-center p-12 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-5">404 - Không tìm thấy trang</h1>
      <p className="text-lg text-gray-600 mb-8">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <div className="flex justify-center gap-5">
        <Link href="/" passHref>
          <button className="px-5 py-2 flex items-center gap-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
            <Home size={20} className="text-white" />
            Quay về trang chủ
          </button>
        </Link>
        <Link href="/contact" passHref>
          <button className="px-5 py-2 flex items-center gap-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
            <Mail size={20} className="text-white" />
            Liên hệ hỗ trợ
          </button>
        </Link>
      </div>
    </div>
  );
}


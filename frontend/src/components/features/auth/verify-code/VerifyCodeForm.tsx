'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const VerifyCodeForm = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  const [canResend, setCanResend] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple digits
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      // TODO: Implement verification logic
      console.log('Verifying code:', fullCode);
      setIsVerified(true);
    }
  };

  const handleResendCode = () => {
    // TODO: Implement resend code logic
    console.log('Resending code...');
    setTimeLeft(60);
    setCanResend(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 sm:space-y-8 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
              <Image
                src="/f8-icon.png"
                alt="F8 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Xác minh mã code
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 px-4 sm:px-0">
            {isVerified
              ? 'Xác minh thành công! Vui lòng kiểm tra email của bạn.'
              : 'Vui lòng nhập mã xác minh đã được gửi đến email của bạn'}
          </p>
        </div>

        {!isVerified ? (
          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mã xác minh
              </label>
              <div className="flex justify-center space-x-2 sm:space-x-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={code.join('').length !== 6}
                className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Xác minh
              </button>
            </div>

            <div className="text-center">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="text-sm font-medium text-orange-500 hover:text-orange-600"
                >
                  Gửi lại mã
                </button>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gửi lại mã sau {timeLeft} giây
                </p>
              )}
            </div>
          </form>
        ) : (
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700 dark:text-green-200">
                    Xác minh thành công! Vui lòng kiểm tra email của bạn để tiếp tục.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4 sm:mt-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Quay lại {' '}
            <Link
              href="/login"
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodeForm; 
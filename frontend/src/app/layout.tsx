import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quản lý khóa học trực tuyến",
  description: "Phần mềm quản lý khóa học trực tuyến là một nền tảng giúp tổ chức, quản lý và cung cấp các khóa học trên môi trường số. Hệ thống hỗ trợ giảng viên, học viên và quản trị viên trong việc tạo, theo dõi và đánh giá quá trình học tập.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

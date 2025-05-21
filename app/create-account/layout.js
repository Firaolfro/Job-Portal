"use client";

import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <section>
      {/* <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-4 py-4 sm:py-6"> */}
      {/* Logo section */}
      <Link href="/" className="mb-2 block">
        <Image
          src="/logo.png"
          alt="MyJob Logo"
          width={80}
          height={80}
          priority
          className="mx-auto   "
        />
      </Link>

      {/* Main auth content */}
      {/* <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8"></div> */}
      {/* </div> */}
      {children}
    </section>
  );
}

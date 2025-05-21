// export default function ComingSoonPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Coming Soon</h1>
//       <p className="text-gray-600 text-lg">
//         We’re working hard to bring you this feature. Stay tuned!
//       </p>
//     </div>
//   );
// }

"use client";

import { TfiEmail } from "react-icons/tfi";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const UnderConstruction = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col justify-between min-h-screen bg-white`}
    >
      {/* Header */}
      <header className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center">
          <Image
            src="/images/logo.png" // Make sure you move your logo image to public/logo.png
            alt=""
            width={30}
            height={30}
            className="mr-2"
          />
          <span className="text-xl font-semibold text-gray-800">MyJob</span>
        </div>
      </header>

      {/* Content and Image Side by Side */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 text-left px-6 pt-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our website is under construction
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            In ac turpis mi, Donec quis semper noque. Nulla cursus gravida
            intendum. Curabitur luctus sapien.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 mb-12">
            {/* Input with Icon */}
            <div className="relative w-full sm:w-auto">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                <TfiEmail />
              </span>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subscribe Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 flex items-center">
              Subscribe
              <span className="ml-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/robot2.png"
            alt="robot"
            width={500}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-gray-500 text-xs px-6 pb-6 mt-auto">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left side - Follow Us */}
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-medium pb-2">Follow us</h3>
            <div className="flex space-x-4">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-700 rounded hover:bg-white hover:border hover:border-blue-500 transition cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-700 rounded hover:bg-white hover:border hover:border-blue-500 transition cursor-pointer">
                <FaTwitter />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-700 rounded hover:bg-white hover:border hover:border-blue-500 transition cursor-pointer">
                <FaInstagram />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-700 rounded hover:bg-white hover:border hover:border-blue-500 transition cursor-pointer">
                <FaYoutube />
              </span>
            </div>
          </div>

          {/* Right side - Copyright */}
          <div className="text-right">
            <p className="text-xs">
              <span className="font-semibold">@ 2025 MyJob</span> - Job Portal.
              All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UnderConstruction;

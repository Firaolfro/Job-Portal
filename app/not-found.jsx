"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center justify-center min-h-screen bg-white px-6`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Text Section */}
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-800">
            Oops! Page not found
          </h1>
          <p className="text-lg text-gray-600">
            Something went wrong. It looks like the link is broken or the page
            is removed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-2 pt-4">
            {/* Home Button */}
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center gap-2 px-10 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Home <FaArrowRight />
            </button>

            {/* Go Back Button */}
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-gray-300 text-blue-700 font-medium rounded hover:bg-gray-100 transition"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/robot.png"
            alt="Robot Image"
            width={500}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

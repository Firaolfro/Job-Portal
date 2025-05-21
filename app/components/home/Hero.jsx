"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false); // NEW

  const handleSearch = () => {
    if (!keyword && !location) return;
    setLoading(true);
    router.push(`/search?keyword=${keyword}&location=${location}`);
  };

  const tags = [
    "Designer",
    "Programming",
    "Digital Marketing",

    "Video",

    "Animation",
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 leading-tight mb-4">
            Find a job that suits your interest & skills.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Discover opportunities that align with your passion and skills.
            Start your journey today.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-md shadow-md p-4 sm:p-3 flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-2 w-full max-w-xl mx-auto lg:mx-0">
            {/* Keyword Input */}
            <div className="relative sm:flex-1 w-full">
              <label htmlFor="keyword-input" className="sr-only">
                Job Keyword
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  title="Search Icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                id="keyword-input"
                aria-label="Job Keyword"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 text-sm"
                placeholder="Job title, Keyword..."
              />
            </div>

            {/* Location Input */}
            <div className="relative sm:flex-1 w-full">
              <label htmlFor="location-input" className="sr-only">
                Location
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  title="Location Icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  />
                </svg>
              </div>
              <input
                id="location-input"
                aria-label="Location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 text-sm"
                placeholder="Your Location"
              />
            </div>

            {/* Button with Loading Spinner */}
            <button
              aria-label="Search Jobs"
              onClick={handleSearch}
              disabled={loading}
              className={`bg-blue-600 text-white py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 text-sm whitespace-nowrap sm:w-auto w-full transition-all duration-200 ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-4 w-4 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Search Jobs"
              )}
            </button>
          </div>

          {/* Suggested Tags */}
          <div className="mt-5 text-sm text-gray-500 text-center lg:text-left">
            Suggestion:
            {tags.map((tag, index) => (
              <Link
                key={tag}
                href={`/search?category=${tag.toLowerCase()}`}
                className="text-blue-600 hover:underline ml-1"
              >
                {tag}
                {index !== tags.length - 1 ? "," : ""}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <Image
            src="/images/hero-illustration.png"
            alt="Job Search Illustration"
            width={600}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

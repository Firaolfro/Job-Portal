"use client";

import { CalendarDays, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";

const categories = [
  "Graphics & Design",
  "Code & Programming",
  "Digital Marketing",
  "Video & Animation",
  "Music & Audio",
  "Finance & Accounting",
  "Health & Care",
  "Data Science",
];

const tags = [
  "Design",
  "Programming",
  "Health & Care",
  "Motion Design",
  "Photography",
  "Politics",
];

// Dynamic blog titles
const blogTitles = [
  "Proin sit amet massa eget odio consectetur ultricies.",
  "Praesent tristique sagittis malesuada. Nulla vulputate pretium",
  "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
  "Praesent hendrerit diam ac metus finibus, id vehicula velit suscipit.",
  "Nullam et est vel eros sodales sollicitudin.",
  "Pellentesque lobortis diam in dictum maximus.",
  "Class aptent taciti sociosqu ad litora torquent per.",
  "Curabitur feugiat urna quis ante aliquet, nec tincidunt sem mollis.",
];

const Blog = () => {
  // State for toggling "Category" content
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  const [activePage, setActivePage] = useState(1);

  const [visibleButtons, setVisibleButtons] = useState([1, 2, 3, 4, 5]);

  const handleNext = () => {
    if (visibleButtons[4] < 10) {
      setVisibleButtons((prev) => prev.map((num) => num + 1));
    }
  };

  const handlePrevious = () => {
    if (visibleButtons[0] > 1) {
      setVisibleButtons((prev) => prev.map((num) => num - 1));
    }
  };

  return (
    <div>
      <div className="flex justify-end bg-gray-300 px-6 py-4">
        <p className="text-sm text-gray-700">
          <Link href="/" className="hover:font-bold">
            Home
          </Link>{" "}
          /
          <Link href="/blog" className="hover:font-bold">
            {" "}
            Blog
          </Link>
        </p>
      </div>
      <div className="flex flex-col px-50 mx-auto w-full lg:flex-row p-6 gap-8 ">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-6">
          <div className="border p-2 rounded border-gray-300">
            <div>
              <h2 className="font-semibold text-lg mb-2">Search</h2>
              <div className="relative flex items-center">
                {/* Search Icon */}
                <FiSearch className="absolute left-3 w-5 h-5 text-blue-400" />

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-10 py-2 border rounded border-gray-300"
                />
              </div>
            </div>
            <div>
              {/* Category Section */}
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg mb-2">Category</h2>
                <button
                  onClick={() => setIsCategoryVisible(!isCategoryVisible)}
                  className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {isCategoryVisible ? (
                    <FiChevronUp className="w-5 h-5" /> // Up arrow for expanded
                  ) : (
                    <FiChevronDown className="w-5 h-5" /> // Down arrow for collapsed
                  )}
                </button>
              </div>
              {isCategoryVisible && (
                <div className="space-y-2">
                  {categories.map((cat, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <input type="checkbox" id={`cat-${i}`} />
                      <label htmlFor={`cat-${i}`}>{cat}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="border rounded border-gray-300 p-2">
            <h2 className="font-semibold text-lg mb-2">Recent Post</h2>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mb-3">
                <div className="bg-gray-300 w-12 h-12 rounded" />
                <div>
                  <p className="text-sm">Nov 12, 2021 • 25 Comments</p>
                  <p className="font-semibold text-sm">
                    Integer volutpat fringilla ipsum...
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded border-gray-300 p-2">
            <h2 className="font-semibold text-lg mb-2">Gallery</h2>
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-gray-400 h-12 rounded" />
              ))}
            </div>
          </div>

          <div className="border rounded border-gray-300 p-2">
            <h2 className="font-semibold text-lg mb-2">Popular Tag</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <button
                  key={i}
                  className="px-2 py-1 text-sm bg-gray-200 rounded  hover:bg-blue-600 hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Blog Posts */}
        <main className="w-full lg:w-3/4 space-y-6">
          {blogTitles.map((title, i) => (
            <Link key={i} href={`/blog/${i}`} className="block">
              <div className="flex flex-col md:flex-row gap-4 p-4 border rounded border-gray-300 shadow bg-white hover:bg-gray-50 transition cursor-pointer">
                <div className="bg-gray-500 rounded w-full md:w-40 h-40" />
                <div className="flex-1">
                  <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} /> Nov 12, 2021
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} /> 25 Comments
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 hover:text-blue-600 transition">
                    {title}
                  </h3>

                  {/* Optionally keep ReadMore or remove it to use dynamic content */}
                  <ReadMore />
                </div>
              </div>
            </Link>
          ))}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              className="p-1 text-blue-500 text-2xl font-bold hover:rounded-full hover:h-10 hover:w-10  hover:bg-blue-100"
              onClick={handlePrevious}
            >
              ←
            </button>
            {visibleButtons.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`p-2 w-10 h-10 text-xs font-bold rounded-full ${
                  activePage === page ? "bg-gray-200" : "bg-none text-gray-500"
                } hover:bg-blue-500 hover:text-white`}
              >
                {page}
              </button>
            ))}
            <button
              className="p-1 text-blue-500 text-2xl font-bold hover:rounded-full hover:h-10 hover:w-10 hover:bg-blue-100"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

// Component for "Read More" functionality
const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <p className="text-sm text-gray-600 mb-2">
        {isExpanded
          ? "Integer imperdiet mauris eget nisl ultricies, quis hendrerit est consequat. Vivamus et volutpat odio. Maecenas porta erat sed massa bibendum pellentesque."
          : "Integer imperdiet mauris eget nisl ultricies..."}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 text-sm p-0 font-semibold"
      >
        {isExpanded ? "Read Less ←" : "Read More →"}
      </button>
    </>
  );
};

export default Blog;

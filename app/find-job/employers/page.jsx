"use client";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
  MapPin,
  MoreHorizontal,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const companies = [
  {
    name: "Dribbble",
    location: "United States",

    jobs: 3,
    logo: "/logos/dribble.png",
  },
  {
    name: "Udemy",
    location: "China",
    jobs: 3,
    logo: "/logos/udemy.png",
  },
  {
    name: "Figma",
    location: "United States",
    jobs: 3,
    logo: "/logos/figma.png",
  },
  {
    name: "Google",
    location: "Australia",
    jobs: 3,
    logo: "/logos/google.png",
  },
  {
    name: "Microsoft",
    location: "Australia",
    jobs: 3,
    logo: "/logos/microsoft.png",
  },

  {
    name: "Twitter",
    location: "India",
    jobs: 3,
    logo: "/logos/twitter.png",
  },
  {
    name: "Instagram",
    location: "United States",
    jobs: 3,
    logo: "/logos/instagram.png",
  },
  {
    name: "Youtube",
    location: "Canada",
    jobs: 3,
    logo: "/logos/youtube.png",
  },
  {
    name: "Apple",
    location: "United States",
    jobs: 3,
    logo: "/logos/apple.png",
  },
  {
    name: "Slack",
    location: "Germany",
    jobs: 3,
    logo: "/logos/slack.png",
  },
  {
    name: "Reddit",
    location: "India",
    jobs: 3,
    logo: "/logos/reddit.png",
  },
  {
    name: "Upwork",
    location: "United States",
    jobs: 3,
    logo: "/logos/upwork.png",
  },
];

export default function JobSearch() {
  const [radius, setRadius] = useState(32);
  const [orgType, setOrgType] = useState("");
  const [showRadius, setShowRadius] = useState(false);
  const [showOrgType, setShowOrgType] = useState(false);
  const [perPage, setPerPage] = useState(12);
  const [showPage, setShowPage] = useState(false);
  const [sortBy, setSortBy] = useState("Latest");
  const [showSortBy, setShowSortBy] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const orgTypes = [
    "Government",
    "Semi Government",
    "NGO",
    "Private Company",
    "International Agencies",
    "Others",
  ];

  const sortOptions = ["Latest", "Oldest"];
  const pageOptions = Array.from({ length: 14 }, (_, i) => i + 1);

  // Calculate pagination
  const totalJobs = companies.length;
  const totalPages = Math.ceil(totalJobs / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalJobs);
  const currentJobs = companies.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (num) => {
    setPerPage(num);
    setCurrentPage(1); // Reset to first page when changing items per page
    setShowPage(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-10 font-Poppins-300">
      {/* Top Filter Bar */}
      <div className="flex justify-between items-center mb-8">
        <button className="flex  h-6 items-center gap-2 px-4 py-2  bg-blue-400  shadow-sm hover:shadow-md transition-all">
          <SlidersHorizontal className="w-5 h-5 text-white" />
          <span className="text-lg font-medium text-white">Filter</span>
        </button>
        <div className="flex items-center gap-6">
          {/* Sort By Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-600"
              onClick={() => setShowSortBy(!showSortBy)}
              onBlur={() => setTimeout(() => setShowSortBy(false), 200)}
            >
              <span>{sortBy}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showSortBy && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10 border border-gray-200">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      sortBy === option
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}
                    onClick={() => {
                      setSortBy(option);
                      setShowSortBy(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Per Page Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-600"
              onClick={() => setShowPage(!showPage)}
              onBlur={() => setTimeout(() => setShowPage(false), 200)}
            >
              <span>{perPage} per page</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showPage && (
              <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md z-10 border border-gray-200">
                {pageOptions.map((num) => (
                  <button
                    key={num}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      perPage === num
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}
                    onClick={() => handlePerPageChange(num)}
                  >
                    {num} page
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* View Mode Toggles */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-md">
            <button
              className={`p-2 rounded ${
                viewMode === "grid" ? "bg-blue-500" : "text-blue-500"
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              className={`p-2 rounded ${
                viewMode === "list" ? "bg-blue-500" : "text-500"
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="w-full md:w-72 bg-white shadow-md rounded-xl p-4 h-fit">
          {/* Location Radius */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowRadius(!showRadius)}
            >
              <h2 className="font-medium text-gray-700">Location Radius:</h2>
              <div className="flex items-center text-blue-600 font-medium">
                {radius} miles{" "}
                {showRadius ? (
                  <ChevronUp className="w-4 h-4 ml-1" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-1" />
                )}
              </div>
            </div>

            {showRadius && (
              <input
                type="range"
                min={0}
                max={100}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full mt-3 accent-blue-500 cursor-pointer"
              />
            )}
          </div>

          <hr className="border-t border-gray-200 my-4" />

          {/* Organization Type */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowOrgType(!showOrgType)}
            >
              <h2 className="font-medium text-gray-700">Organization Type</h2>
              {showOrgType ? (
                <ChevronUp className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              )}
            </div>

            {showOrgType && (
              <div className="mt-3 space-y-2">
                {orgTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-2 cursor-pointer text-gray-600"
                  >
                    <input
                      type="radio"
                      name="orgType"
                      value={type}
                      checked={orgType === type}
                      onChange={() => setOrgType(type)}
                      className="form-radio text-blue-500"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="flex-1">
          <div className="space-y-3">
            {currentJobs.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Left Info - UPDATED IMAGE COMPONENT */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center relative">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback.png"; // Create this in public folder
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-800">
                      {company.name}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {company.location}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {company.jobs} open jobs
                      </p>
                    </div>
                  </div>
                </div>
                {/* Open Position Button */}
                <button className="px-4 py-2 text-sm bg-blue-50 text-blue-800 rounded-md hover:bg-blue-100 transition flex items-center gap-1.5">
                  Open Position <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              className="p-2 rounded-full bg-gray-200 hover:bg-blue-200"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
              const page =
                currentPage <= 2
                  ? i + 1
                  : currentPage >= totalPages - 1
                  ? totalPages - 2 + i
                  : currentPage - 1 + i;
              return (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            })}

            {totalPages > 3 && currentPage < totalPages - 1 && (
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            )}

            {totalPages > 3 && currentPage < totalPages && (
              <button
                className={`w-8 h-8 rounded-full ${
                  currentPage === totalPages
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            )}

            <button
              className="p-2 rounded-full bg-gray-200 hover:bg-blue-200"
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

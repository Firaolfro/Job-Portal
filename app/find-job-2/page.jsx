// app/find-job/page.js
"use client";

import { Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiGrid,
  FiHeart,
  FiList,
  FiMapPin,
  FiSearch,
  FiStar,
  FiX,
} from "react-icons/fi";

const jobs = [
  {
    company: "Reddit",
    logo: "/logos/reddit.png",
    location: "United Kingdom of Great Britain",
    title: "Marketing Officer",
    type: "Full Time",
    salary: "$30K-$35K",
    featured: false,
  },
  {
    company: "Dribble",
    logo: "/logos/Dribble.png",
    location: "Canada",
    title: "Visual Designer",
    type: "Full Time",
    salary: "$10K-$15K",
    featured: true,
  },
  {
    company: "freepik",
    logo: "/logos/freepik.png",
    location: "United States",
    title: "UI/UX Designer",
    type: "Full Time",
    salary: "$50K-$70K",
    featured: false,
  },
  {
    company: "figma",
    logo: "/logos/figma.png",
    location: "Canada",
    title: "Junior Graphic Designer",
    type: "Temporary",
    salary: "$35K-$40K",
    featured: false,
  },
  {
    company: "Microsoft",
    logo: "/logos/microsoft.png",
    location: "Australia",
    title: "Senior UI/UX Designer",
    type: "Internship",
    salary: "$50K-$80K",
    featured: false,
  },
  {
    company: "twitter",
    logo: "/logos/twitter.png",
    location: "France",
    title: "Product Designer",
    type: "Full Time",
    salary: "$40K-$50K",
    featured: true,
  },
  {
    company: "Slack",
    logo: "/logos/slack.png",
    location: "Germany",
    title: "Technical Support Specialist",
    type: "Full Time",
    salary: "$35K-$40K",
    featured: false,
  },
  {
    company: "Instagram",
    logo: "/logos/instagram.png",
    location: "Australia",
    title: "Networking Engineer",
    type: "Remote",
    salary: "$50K-$30K",
    featured: false,
  },
  {
    company: "Facebook",
    logo: "/logos/facebook.png",
    location: "United Kingdom of Great Britain",
    title: "Front End Developer",
    type: "Contract Base",
    salary: "$50K-$80K",
    featured: false,
  },
  {
    company: "YouTube",
    logo: "/logos/youtube.png",
    location: "Germany",
    title: "Software Engineer",
    type: "Part Time",
    salary: "$15K-$20K",
    featured: false,
  },
  {
    company: "upwork",
    logo: "/logos/upwork.png",
    location: "California",
    title: "Interaction Designer",
    type: "Full Time",
    salary: "$20K-$25K",
    featured: false,
  },
  {
    company: "youtube",
    logo: "/logos/youtube.png",
    location: "New York",
    title: "Senior LIX Designer",
    type: "Full Time",
    salary: "$50K-$60K/month",
    featured: true,
  },
];

export default function FindJobPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("latest");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);

  // Filter states
  const [experienceFilter, setExperienceFilter] = useState([]);
  const [salaryFilter, setSalaryFilter] = useState([]);
  const [jobTypeFilter, setJobTypeFilter] = useState([]);
  const [educationFilter, setEducationFilter] = useState([]);
  const [jobLevelFilter, setJobLevelFilter] = useState([]);

  // Toggle filter values
  const toggleFilter = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter((item) => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
  };

  // Toggle favorite status
  const toggleFavorite = (jobId) => {
    if (favorites.includes(jobId)) {
      setFavorites(favorites.filter((id) => id !== jobId));
    } else {
      setFavorites([...favorites, jobId]);
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gray-200 py-6 pt-10 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl text-black font-bold">Find Job</h1>
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="flex items-center hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Find job</span>
            </div>
          </div>

          <div className="flex flex-col p-4 rounded text-gray-600 bg-white md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
              <input
                type="text"
                placeholder="Job title, Keyword..."
                className="w-full pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="relative flex-grow">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border-l border-gray-300 focus:outline-none focus:ring-1 "
              />
            </div>

            <div className="relative flex items-center space-x-2 px-3 py-2 w-fit">
              <Layers className="text-blue-600 w-4 h-4" />
              <select className="outline-none bg-transparent focus:ring-1 ">
                <option>Select Category</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="relative flex items-center space-x-2 px-3 py-2 w-fit">
              <button
                onClick={() => setShowAdvancedFilter(true)}
                className="outline-none bg-transparent focus:ring-1 flex items-center"
              >
                Advanced filter
              </button>
            </div>

            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Find Job
            </button>
          </div>
        </div>
      </div>

      {showAdvancedFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold text-gray-800">
                Advanced Filters
              </h2>
              <button
                onClick={() => setShowAdvancedFilter(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-4 p-4">
              {/* Experience Filter */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-700">
                  Experience
                </h3>
                <div className="space-y-1">
                  {[
                    "Freelance",
                    "1-2Y",
                    "2-4Y",
                    "4-6Y",
                    "6-8Y",
                    "9-10Y",
                    "10-15Y",
                    "15+Y",
                  ].map((exp) => (
                    <div key={exp} className="flex items-center">
                      <input
                        type="radio"
                        name="experience"
                        id={`exp-${exp}`}
                        checked={experienceFilter.includes(exp)}
                        onChange={() => setExperienceFilter([exp])}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`exp-${exp}`}
                        className="ml-2 text-xs text-gray-600"
                      >
                        {exp}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary Filter */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-700">Salary</h3>
                <div className="space-y-1">
                  {[
                    "$50-$1K",
                    "$1K-$2K",
                    "$3K-$4K",
                    "$4K-$6K",
                    "$6K-$8K",
                    "$8K-$10K",
                    "$10K-$15K",
                    "$15K+",
                  ].map((salary) => (
                    <div key={salary} className="flex items-center">
                      <input
                        type="radio"
                        name="salary"
                        id={`salary-${salary}`}
                        checked={salaryFilter.includes(salary)}
                        onChange={() => setSalaryFilter([salary])}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`salary-${salary}`}
                        className="ml-2 text-xs text-gray-600"
                      >
                        {salary}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-700">Job Type</h3>
                <div className="space-y-1">
                  {[
                    "All",
                    "Full Time",
                    "Part Time",
                    "Internship",
                    "Remote",
                    "Temp",
                    "Contract",
                  ].map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="jobType"
                        id={`type-${type}`}
                        checked={jobTypeFilter.includes(type)}
                        onChange={() => setJobTypeFilter([type])}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="ml-2 text-xs text-gray-600"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Filter */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-700">Education</h3>
                <div className="space-y-1">
                  {[
                    "All",
                    "High School",
                    "Intermediate",
                    "Graduation",
                    "Master's",
                    "Bachelor's",
                  ].map((edu) => (
                    <div key={edu} className="flex items-center">
                      <input
                        type="radio"
                        name="education"
                        id={`edu-${edu}`}
                        checked={educationFilter.includes(edu)}
                        onChange={() => setEducationFilter([edu])}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`edu-${edu}`}
                        className="ml-2 text-xs text-gray-600"
                      >
                        {edu}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Level Filter */}
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-700">Job Level</h3>
                <div className="space-y-1">
                  {["Entry", "Mid", "Expert"].map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="jobLevel"
                        id={`level-${level}`}
                        checked={jobLevelFilter.includes(level)}
                        onChange={() => setJobLevelFilter([level])}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={`level-${level}`}
                        className="ml-2 text-xs text-gray-600"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 p-4 border-t">
              <button
                onClick={() => {
                  setExperienceFilter([]);
                  setSalaryFilter([]);
                  setJobTypeFilter([]);
                  setEducationFilter([]);
                  setJobLevelFilter([]);
                }}
                className="px-4 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowAdvancedFilter(false)}
                className="px-4 py-1.5 bg-blue-600 text-xs text-white rounded hover:bg-blue-700 transition font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div className="px-30 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 border rounded-md bg-white text-sm text-gray-600 focus:outline-none"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="appearance-none pl-3 pr-8 py-2 border rounded-md bg-white text-gray-600 text-sm focus:outline-none"
                >
                  <option value={6}>6 per page</option>
                  <option value={12}>12 per page</option>
                  <option value={18}>18 per page</option>
                  <option value={24}>24 per page</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex border rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 px-3 ${
                  viewMode === "grid"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-white text-gray-600"
                }`}
              >
                <FiGrid className="text-lg" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 px-3 ${
                  viewMode === "list"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-white text-gray-600"
                }`}
              >
                <FiList className="text-lg" />
              </button>
            </div>
          </div>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {currentJobs.map((job, index) => (
                <div
                  key={index}
                  className={`border border-gray-300 rounded-lg p-1.5 bg-white hover:border-blue-400 w-full max-w-[280px] mx-auto ${
                    job.featured ? "border-blue-400" : ""
                  }`}
                >
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200 mt-0.5 mr-1.5">
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={24}
                        height={24}
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline">
                        <h3 className="font-medium text-xs text-black truncate mr-1">
                          {job.company}
                        </h3>
                        {job.featured && (
                          <span className="text-yellow-500 text-[0.6rem] flex items-center">
                            <FiStar className="w-2 h-2 mr-0.5" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[0.6rem] text-gray-500 flex items-center truncate mt-0.5">
                        <FiMapPin className="w-2 h-2 mr-0.5 flex-shrink-0" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-xs font-semibold text-gray-600 mt-1 truncate">
                    {job.title}
                  </h2>
                  <div className="flex items-center mt-1 space-x-1">
                    <span className="flex items-center text-[0.6rem] text-gray-500">
                      <FiClock className="w-2 h-2 mr-0.5" />
                      {job.type}
                    </span>
                    <span className="text-gray-300 text-[0.6rem]">•</span>
                    <span className="text-[0.6rem] text-gray-500">
                      {job.salary}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {currentJobs.map((job, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-6 bg-white ${
                    job.featured ? "border-blue-500" : "border-gray-100"
                  } relative`}
                >
                  {/* Favorite icon in top-right corner */}
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <FiHeart
                      className={`w-5 h-5 ${
                        favorites.includes(index)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }`}
                    />
                  </button>

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden">
                        <Image
                          src={job.logo}
                          alt={job.company}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-black text-lg">
                            {job.company}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {job.location}
                          </p>
                        </div>
                        {job.featured && (
                          <div className="flex items-center text-yellow-500 text-xs">
                            <FiStar className="mr-1" />
                            <span>Featured</span>
                          </div>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-gray-800 mb-3">
                        {job.title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="flex items-center text-sm text-gray-600">
                          <FiClock className="mr-1" /> {job.type}
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="text-sm text-gray-600">
                          {job.salary}
                        </span>
                        <span className="text-gray-400">|</span>
                        <span className="text-sm text-gray-600">
                          4 Days Remaining
                        </span>
                      </div>
                    </div>

                    <div className="md:self-center">
                      <button className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition whitespace-nowrap">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center space-x-2 mt-8">
            <button
              className="p-2 border rounded-md hover:bg-blue-400 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <FiChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="p-2 border rounded-md hover:bg-blue-400 "
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { PiListLight, PiSquaresFourLight } from "react-icons/pi";
// import { Button } from "@/components/ui/button"; // Assuming these exist
// import { Input } from "@/components/ui/input";   // Assuming these exist
// import { cn } from "@/lib/utils";       // Assuming these exist
// Data for job listings
const jobsData = [
  {
    id: 1,
    company: "Reddit",
    logo: "/logos/reddit.png",
    location: "United Kingdom of Great Britain",
    title: "Marketing Officer",
    type: "Full Time",
    salary: "$30K-$35K",
    featured: true,
    category: "Marketing",
    experience: "1-2 Years", // Added
    education: "Graduation", // Added
    jobLevel: "Mid Level", // Added
  },
  {
    id: 2,
    company: "Dribbble",
    logo: "/logos/dribbble.png",
    location: "California",
    title: "Senior UX Designer.",
    type: "Full-Time",
    salary: "$50K-80K/month",
    featured: true,
    category: "Design",
    experience: "4-6 Years", // Added
    education: "Master Degree", // Added
    jobLevel: "Mid Level", // Added
  },
  {
    id: 3,
    company: "Freepik",
    logo: "/logos/freepik.png",
    location: "China",
    title: "Visual Designer",
    type: "Full Time",
    salary: "$10K-$15K",
    featured: true,
    category: "Design",
    experience: "Freshers", // Added
    education: "High School", // Added
    jobLevel: "Entry Level", // Added
  },
  {
    id: 4,
    company: "Figma",
    logo: "/logos/figma.png",
    location: "Canada",
    title: "UI/UX Designer",
    type: "Full Time",
    salary: "$50K-$70K",
    featured: true,
    category: "Design",
    experience: "2-4 Years", // Added
    education: "Graduation", // Added
    jobLevel: "Mid Level", // Added
  },
  {
    id: 5,
    company: "Dribbble",
    logo: "/logos/dribbble.png",
    location: "United States",
    title: "Junior Graphic Designer",
    type: "Temporary",
    salary: "$35K-$40K",
    category: "Design",
    experience: "1-2 Years", // Added
    education: "Graduation", // Added
    jobLevel: "Entry Level", // Added
  },
  {
    id: 6,
    company: "Twitter",
    logo: "/logos/twitter.png",
    location: "Canada",
    title: "Senior UX Designer",
    type: "Internship",
    salary: "$50K-$60K",
    category: "Design",
    experience: "4-6 Years", // Added
    education: "Master Degree", // Added
    jobLevel: "Mid Level", // Added
  },
  {
    id: 7,
    company: "Microsoft",
    logo: "/logos/microsoft.png",
    location: "Australia",
    title: "Product Designer",
    type: "Full Time",
    salary: "$40K-$50K",
    category: "Design",
    experience: "3-5 Years", // Added
    education: "Graduation", // Added
    jobLevel: "Mid Level", // Added
  },
  {
    id: 8,
    company: "Upwork",
    logo: "/logos/upwork.png",
    location: "France",
    title: "Technical Support Specialist",
    type: "Full Time",
    salary: "$35K-$40K",
    category: "Technical Support",
    experience: "2-4 Years", // Added
    education: "Bachelor Degree", // Added
    jobLevel: "Entry Level", // Added
  },
  {
    id: 9,
    company: "Slack",
    logo: "/logos/slack.png",
    location: "Germany",
    title: "Networking Engineer",
    type: "Remote",
    salary: "$50K-$90K",
    category: "Engineering",
    experience: "5-7 Years", // Added
    education: "Master Degree", // Added
    jobLevel: "Expert Level", // Added
  },
];

// --- Search Header Section ---
function SearchHeader({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [isAdvancedFilterVisible, setIsAdvancedFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    salaryRange: "",
    experience: "", // Added
    education: "", // Added
    jobLevel: "", // Added
  });

  const handleBasicSearch = () => {
    onSearch({
      searchTerm,
      locationTerm,
      categoryTerm,
      filters,
      isAdvancedFilterVisible,
    });
  };

  const toggleAdvancedFilter = () => {
    setIsAdvancedFilterVisible(!isAdvancedFilterVisible);
  };

  const handleAdvancedFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto bg-gray-100 shadow-md mt-0 top-0 z-50 w-full">
      <div className="container px-6 py-4  mx-auto top-0 z-50 w-full">
        <div className=" flex justify-between py-2 ">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Find Job</h2>
          <div className=" mt-2 mb-2 text-sm text-gray-500">
            <span className="mr-2">Home</span> /{" "}
            <span className="font-semibold">Find Job</span>
          </div>
        </div>
        <div className="container">
          <div className="container bg-white rounded-md shadow-sm flex items-center py-4 px-6">
            <div className="flex gap-2 flex-1 border-r">
              <FiSearch className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title, Keyword..."
                className="w-full outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1 border-r pr-4">
              <IoLocationOutline className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none"
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1 border-r pr-4">
              <BsFilter className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Select Category"
                className="w-full outline-none"
                value={categoryTerm}
                onChange={(e) => setCategoryTerm(e.target.value)}
              />
              <svg
                className="text-gray-400 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <button
              className="text-blue-600 hover:text-blue-700 text-sm ml-2"
              onClick={toggleAdvancedFilter}
            >
              Advanced Filter
            </button>

            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleBasicSearch}
            >
              Find Job
            </button>
          </div>

          {isAdvancedFilterVisible && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-sm">
              <h3 className="font-semibold mb-2">Advanced Filters</h3>
              <div className="flex gap-4 flex-wrap">
                {/* Job Type Filter */}
                <div className="min-w-[200px]">
                  <label
                    htmlFor="type"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Job Type:
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleAdvancedFilterChange}
                    value={filters.type}
                  >
                    <option value="">Any</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                {/* Salary Range Filter */}
                <div className="min-w-[200px]">
                  <label
                    htmlFor="salaryRange"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Salary Range (K):
                  </label>
                  <select
                    id="salaryRange"
                    name="salaryRange"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleAdvancedFilterChange}
                    value={filters.salaryRange}
                  >
                    <option value="">Any</option>
                    <option value="10-30">10 - 30</option>
                    <option value="30-50">30 - 50</option>
                    <option value="50-70">50 - 70</option>
                    <option value="70-90">70 - 90</option>
                  </select>
                </div>

                {/* Experience Filter */}
                <div className="min-w-[200px]">
                  <label
                    htmlFor="experience"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Experience:
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleAdvancedFilterChange}
                    value={filters.experience}
                  >
                    <option value="">Any</option>
                    <option value="Freshers">Freshers</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="2-4 Years">2-4 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="4-6 Years">4-6 Years</option>
                    <option value="5-7 Years">5-7 Years</option>
                  </select>
                </div>

                {/* Education Filter */}
                <div className="min-w-[200px]">
                  <label
                    htmlFor="education"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Education:
                  </label>
                  <select
                    id="education"
                    name="education"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleAdvancedFilterChange}
                    value={filters.education}
                  >
                    <option value="">Any</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor Degree">Bachelor Degree</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Master Degree">Master Degree</option>
                  </select>
                </div>

                {/* Job Level Filter */}
                <div className="min-w-[200px]">
                  <label
                    htmlFor="jobLevel"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Job Level:
                  </label>
                  <select
                    id="jobLevel"
                    name="jobLevel"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleAdvancedFilterChange}
                    value={filters.jobLevel}
                  >
                    <option value="">Any</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Expert Level">Expert Level</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Job Listings Section ---
function JobListings({ jobs }) {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("latest");
  const [perPage, setPerPage] = useState(12);

  const sortedAndFilteredJobs = [...jobs].sort((a, b) => {
    if (sortBy === "latest") {
      return b.id - a.id;
    } else {
      return a.id - b.id;
    }
  });

  // Basic pagination (for demo purposes)
  const paginatedJobs = sortedAndFilteredJobs.slice(0, perPage);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <button
            className={`${view === "grid" ? "text-blue-600" : "text-gray-600"}`}
            onClick={() => setView("grid")}
          >
            <PiSquaresFourLight size={22} />
          </button>
          <button
            className={`${view === "list" ? "text-blue-600" : "text-gray-600"}`}
            onClick={() => setView("list")}
          >
            <PiListLight size={22} />
          </button>
        </div>
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className={`grid ${view === "grid" ? "grid-cols-3 gap-6" : "list"}`}>
        {paginatedJobs.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow-md">
            <div className="flex gap-4 items-center">
              <img src={job.logo} alt={job.company} className="h-12" />
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-xs text-gray-500">{job.location}</p>
              </div>
            </div>
            <p className="mt-4">{job.salary}</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Apply Now
              </button>
              <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md">
                Save Job
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination - for demo */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPerPage(perPage + 12)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [jobs, setJobs] = useState(jobsData);

  const handleSearch = (searchFilters) => {
    // Destructure the filters for easier use
    const { searchTerm, locationTerm, categoryTerm, filters } = searchFilters;

    // Apply filters to the jobsData
    let filteredJobs = jobsData.filter((job) => {
      let match = true;

      // Basic Search Filters
      if (
        searchTerm &&
        !job.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        match = false;
      }
      if (
        locationTerm &&
        !job.location.toLowerCase().includes(locationTerm.toLowerCase())
      ) {
        match = false;
      }
      if (
        categoryTerm &&
        !job.category.toLowerCase().includes(categoryTerm.toLowerCase())
      ) {
        match = false;
      }

      // Advanced Filters
      if (filters.type && job.type !== filters.type) {
        match = false;
      }

      if (filters.salaryRange) {
        const salaryRanges = {
          "10-30": [10000, 30000],
          "30-50": [30000, 50000],
          "50-70": [50000, 70000],
          "70-90": [70000, 90000],
        };
        const range = salaryRanges[filters.salaryRange];
        if (range) {
          // Extract numerical salary from job.salary (e.g., "$30K-$35K"  -> 30000 and 35000)
          const jobSalaryMin =
            parseInt(job.salary.split("-")[0].replace(/[^0-9]/g, "")) * 1000;
          const jobSalaryMax =
            parseInt(job.salary.split("-")[1].replace(/[^0-9]/g, "")) * 1000;

          if (!(jobSalaryMin >= range[0] && jobSalaryMax <= range[1])) {
            match = false;
          }
        }
      }
      if (filters.experience && job.experience !== filters.experience) {
        match = false;
      }

      if (filters.education && job.education !== filters.education) {
        match = false;
      }

      if (filters.jobLevel && job.jobLevel !== filters.jobLevel) {
        match = false;
      }

      return match;
    });

    setJobs(filteredJobs);
  };

  return (
    <div>
      <SearchHeader onSearch={handleSearch} />
      <JobListings jobs={jobs} />
    </div>
  );
}

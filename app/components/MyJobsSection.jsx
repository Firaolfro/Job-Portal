"use client";

import { CheckCircle, Eye, MoreHorizontal, XCircle } from "lucide-react";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { PiUsersLight } from "react-icons/pi";

// Helper to get a formatted date for active jobs
const getFutureDate = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Initial Jobs data (moved here)
const initialJobs = [
  {
    title: "UI/UX Designer",
    type: "Full Time",
    status: "Active",
    daysRemaining: 27,
    applications: 798,
    expiryDate: getFutureDate(27),
  },
  {
    title: "Senior UX Designer",
    type: "Internship",
    status: "Active",
    daysRemaining: 8,
    applications: 185,
    expiryDate: getFutureDate(8),
  },
  {
    title: "Technical Support Specialist",
    type: "Part Time",
    status: "Active",
    daysRemaining: 4,
    applications: 556,
    expiryDate: getFutureDate(4),
  },
  {
    title: "Junior Graphic Designer",
    type: "Full Time",
    status: "Active",
    daysRemaining: 24,
    applications: 583,
    expiryDate: getFutureDate(24),
  },
  {
    title: "Front End Developer",
    type: "Full Time",
    status: "Expire",
    daysRemaining: 0,
    applications: 740,
    expiryDate: "Dec 7, 2019", // As per design example
  },
  {
    title: "Interaction Designer",
    type: "Contract Base",
    status: "Expire",
    daysRemaining: 0,
    applications: 2426,
    expiryDate: "July 2, 2019", // As per design example (assuming 'Fely' was a typo for 'July')
  },
  {
    title: "Software Engineer",
    type: "Temporary",
    status: "Active",
    daysRemaining: 9,
    applications: 922,
    expiryDate: getFutureDate(9),
  },
  {
    title: "Product Designer",
    type: "Full Time",
    status: "Active",
    daysRemaining: 7,
    applications: 2994,
    expiryDate: getFutureDate(7),
  },
  {
    title: "Project Manager",
    type: "Full Time",
    status: "Expire",
    daysRemaining: 0,
    applications: 196,
    expiryDate: "Dec 4, 2019", // As per design example
  },
  {
    title: "Marketing Manager",
    type: "Full Time",
    status: "Active",
    daysRemaining: 4,
    applications: 2492,
    expiryDate: getFutureDate(4),
  },
];

export default function MyJobsSection() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [jobList, setJobList] = useState(initialJobs);
  const [jobStatusFilter, setJobStatusFilter] = useState("All");
  const [jobTypeFilter, setJobTypeFilter] = useState("All");

  // Filtered jobs based on selected filters
  const filteredJobs = jobList.filter((job) => {
    const statusMatch =
      jobStatusFilter === "All" || job.status === jobStatusFilter;
    const typeMatch = jobTypeFilter === "All" || job.type === jobTypeFilter;
    return statusMatch && typeMatch;
  });

  // Handlers for job actions dropdown
  const toggleDropdown = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const handlePromote = (index) => {
    console.log(`Promoting job: ${jobList[index].title}`);
    alert(`Promoted: ${jobList[index].title}`);
    setShowDropdown(null);
  };

  const handleViewDetail = (index) => {
    console.log(`Viewing details for: ${jobList[index].title}`);
    alert(`Viewing detail of: ${jobList[index].title}`);
    setShowDropdown(null);
  };

  const handleMarkExpired = (index) => {
    const updatedJobs = [...jobList];
    updatedJobs[index].status = "Expire";
    updatedJobs[index].daysRemaining = 0;
    updatedJobs[index].expiryDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setJobList(updatedJobs);
    setShowDropdown(null);
  };

  return (
    <div className="bg-white rounded shadow-sm p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          My Jobs ({filteredJobs.length})
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Job Status Filter */}
          <div className="relative w-full sm:w-auto">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm"
              value={jobStatusFilter}
              onChange={(e) => setJobStatusFilter(e.target.value)}
            >
              <option value="All">Job status</option>
              <option value="Active">Active</option>
              <option value="Expire">Expire</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {/* All Jobs/Job Type Filter */}
          <div className="relative w-full sm:w-auto">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm"
              value={jobTypeFilter}
              onChange={(e) => setJobTypeFilter(e.target.value)}
            >
              <option value="All">All Jobs</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract Base">Contract Base</option>
              <option value="Temporary">Temporary</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table Header (Hidden on small screens, shown on large screens) */}
      <div className="hidden lg:grid grid-cols-my-jobs-table gap-4 items-center py-3 px-4 bg-gray-50 text-sm font-semibold text-gray-600 border-b border-gray-200 rounded-t-md">
        <div>JOBS</div>
        <div>STATUS</div>
        <div>APPLICATIONS</div>
        <div className="text-center">ACTIONS</div>
      </div>

      {/* Job List */}
      <div className="divide-y divide-gray-100">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => (
            <div
              key={job.title + idx}
              className="grid grid-cols-1 lg:grid-cols-my-jobs-table gap-4 items-center py-4 px-4 transition-colors duration-200 hover:bg-gray-50"
            >
              {/* Job Title & Type */}
              <div className="flex flex-col">
                <p className="font-medium text-sm text-gray-900">{job.title}</p>
                <p className="text-xs text-gray-500">
                  {job.type} •{" "}
                  {job.status === "Expire"
                    ? job.expiryDate || "No date"
                    : `${job.daysRemaining} days remaining`}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-sm font-medium">
                {job.status === "Active" ? (
                  <CheckCircle className="text-green-500 h-4 w-4" />
                ) : (
                  <XCircle className="text-red-500 h-4 w-4" />
                )}
                <span
                  className={`${
                    job.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              {/* Applications */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <PiUsersLight className="h-4 w-4" />
                <span>{job.applications} Applications</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col lg:flex-row items-center justify-center relative gap-2 lg:gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors w-full lg:w-auto">
                  View Applications
                </button>
                <div className="relative">
                  <button
                    className="text-gray-500 hover:bg-gray-200 hover:text-black p-1 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      toggleDropdown(idx);
                    }}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                  {showDropdown === idx && (
                    <ul className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded shadow-md z-10 py-1">
                      <li
                        className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                        onClick={() => handlePromote(idx)}
                      >
                        <CiCirclePlus className="h-4 w-4 text-blue-600" />
                        Promote Job
                      </li>
                      <li
                        className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                        onClick={() => handleViewDetail(idx)}
                      >
                        <Eye className="h-4 w-4 text-gray-700" />
                        View Detail
                      </li>
                      <li
                        className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                        onClick={() => handleMarkExpired(idx)}
                      >
                        <XCircle className="h-4 w-4 text-red-500" />
                        Mark as expired
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No jobs found matching the criteria.
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-end items-center gap-2 text-sm">
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          01
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          02
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          03
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          04
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          05
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

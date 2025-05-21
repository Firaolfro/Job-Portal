// "use client";

// import JobFilter from "../components/jobs/JobFilter";
// import JobList from "../components/jobs/JobList";

// export default function FindJobPage() {
//   return (
//     <section className="max-w-7xl mx-auto p-6">
//       <h1 className="text-3xl font-semibold mb-6">Find Your Dream Job</h1>
//       <JobFilter />
//       <JobList />
//     </section>
//   );
// }

// page
"use client";

import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const jobs = [
  {
    company: "Reddit",
    country: "United Kingdom of Great Britain",
    title: "Marketing Officer",
    type: "Full Time",
    salary: "$30K-$35K",
    featured: true,
  },
  {
    company: "Figma",
    country: "Canada",
    title: "UI/UX Designer",
    type: "Full Time",
    salary: "$50K-$70K",
    featured: true,
  },
  {
    company: "Microsoft",
    country: "Australia",
    title: "Product Designer",
    type: "Full Time",
    salary: "$40K-$50K",
  },
  {
    company: "Instagram",
    country: "Australia",
    title: "Front End Developer",
    type: "Contract Base",
    salary: "$50K-$80K",
  },
  {
    company: "Dribbble",
    country: "United States",
    title: "Junior Graphic Designer",
    type: "Temporary",
    salary: "$35K-$40K",
  },
  {
    company: "Upwork",
    country: "France",
    title: "Techical Support Specialist",
    type: "Full Time",
    salary: "$35K-$40K",
  },
  {
    company: "Facebook",
    country: "United Kingdom of Great Britain",
    title: "Software Engineer",
    type: "Part Time",
    salary: "$15K-$20K",
  },
  {
    company: "Twitter",
    country: "Canada",
    title: "Senior UX Designer",
    type: "Internship",
    salary: "$50K-$60K",
  },
  {
    company: "Slack",
    country: "Germany",
    title: "Networking Engineer",
    type: "Remote",
    salary: "$50K-$90K",
  },
  {
    company: "Freepik",
    country: "China",
    title: "Visual Designer",
    type: "Full Time",
    salary: "$10K-$15K",
    featured: true,
  },
  {
    company: "Youtube",
    country: "Germany",
    title: "Interaction Designer",
    type: "Full Time",
    salary: "$20K-$25K",
  },
  {
    company: "Dribbble",
    country: "California",
    title: "Sunior UX Designer.",
    type: "Full-Time",
    salary: "$50K-$80K",
    featured: true,
  },
];

export default function FindJobPage() {
  const [search, setSearch] = useState("");

  return (
    // <div className="bg-white shadow-md top-0 z-50 w-full">
    <div className=" px-6 py-8 max-w-7xl mx-auto">
      {/* // <div className="px-6 py-8  mx-auto flex items-center"> */}
      {/* Breadcrumbs */}

      <div className="text-sm text-gray-600 mb-6">
        <span className="text-blue-600 font-medium">Home</span> / Find Job
      </div>

      {/* Search Form */}
      <div className="bg-white p-6 rounded-md shadow flex flex-col md:flex-row items-center gap-4 mb-10">
        <div className="flex items-center gap-2 w-full md:w-1/3 border p-2 rounded">
          <IoIosSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Job title, Keyword..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-1/3 border p-2 rounded">
          <FaMapMarkerAlt className="text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-1/3 border p-2 rounded">
          <select className="w-full outline-none bg-transparent text-gray-600">
            <option>Select Category</option>
            <option>Design</option>
            <option>Development</option>
            <option>Marketing</option>
          </select>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium">
          Find Job
        </button>
        <button className="flex items-center text-sm text-gray-500 hover:text-blue-600">
          <FiFilter className="mr-1" />
          Advance Filter
        </button>
      </div>

      {/* Job Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow border rounded-lg p-5 space-y-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-md font-semibold text-gray-800">
                {job.company}
              </h3>
              {job.featured && (
                <span className="text-xs text-white bg-green-500 px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{job.country}</p>
            <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{job.type}</span>
              <span className="text-blue-600 font-medium">{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

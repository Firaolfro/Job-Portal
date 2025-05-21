"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    logo: "/logos/upwork.png",
    title: "Senior UX Designer",
    type: "Contract Base",
    location: "Addis Ababa",
    salary: "Br 100,000 - 120,000",
    timeLeft: "4 Days Remaining",
    badgeColor: "bg-blue-200 text-blue-700",
  },
  {
    id: 2,
    logo: "/logos/apple.png",
    title: "Software Engineer",
    type: "Full Time",
    location: "Bahir Dar",
    salary: "Br 20,000 - 30,000",
    timeLeft: "4 Days Remaining",
  },
  {
    id: 3,
    logo: "/logos/figma.png",
    title: "Junior Graphic Designer",
    type: "Full Time",
    location: "Mekelle",
    salary: "Br 25,000 - 35,000",
    timeLeft: "4 Days Remaining",
  },
  {
    id: 4,
    logo: "/logos/producthunt.png",
    title: "Product Designer",
    type: "Full Time",
    location: "Addis Ababa",
    salary: "Br 40,000 - 50,000",
    timeLeft: "4 Days Remaining",
  },
  {
    id: 5,
    logo: "/logos/facebook.png",
    title: "Marketing Officer",
    type: "Internship",
    location: "Dire Dawa",
    salary: "Br 10,000 - 15,000",
    timeLeft: "4 Days Remaining",
    badgeColor: "bg-green-200 text-green-700",
  },
  {
    id: 6,
    logo: "/logos/google.png",
    title: "Interaction Designer",
    type: "Freelance",
    location: "Hawassa",
    salary: "Br 7,000 - 10,000",
    timeLeft: "4 Days Remaining",
  },
];

const FeaturedJobs = () => {
  const [bookmarked, setBookmarked] = useState([]);
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(3);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id]
    );
  };

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.type === filter);

  const visibleJobs = filteredJobs.slice(0, visible);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold">Featured Jobs</h2>

          {/* Filter Dropdown */}
          <select
            onChange={(e) => {
              setFilter(e.target.value);
              setVisible(3); // Reset pagination on filter
            }}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
            aria-label="Filter jobs by type"
          >
            <option value="All">All Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract Base">Contract</option>
          </select>
        </div>

        {/* Job Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {visibleJobs.map((job) => (
            <div
              key={job.id}
              className={`flex justify-between items-center bg-white border ${
                job.isActive ? "border-blue-500 shadow-md" : "border-gray-200"
              } rounded-md p-4 hover:shadow-md transition-all`}
            >
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <Image
                  src={job.logo}
                  alt={`${job.title} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div>
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                    {job.title}
                    <span
                      className={`ml-2 text-xs font-medium px-2 py-1 rounded ${
                        job.badgeColor || "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {job.type}
                    </span>
                  </h3>
                  <div className="text-sm text-gray-500 flex gap-2 mt-1 flex-wrap">
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                    <span>{job.timeLeft}</span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleBookmark(job.id)}
                  aria-label="Toggle bookmark"
                  className={`${
                    bookmarked.includes(job.id)
                      ? "text-blue-600"
                      : "text-gray-400"
                  } hover:text-blue-600 transition`}
                >
                  {bookmarked.includes(job.id) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M5 3a2 2 0 012-2h10a2 2 0 012 2v18l-7-4-7 4V3z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.25v13.5L12 15l6.75 3.75V5.25A1.5 1.5 0 0017.25 3H6.75a1.5 1.5 0 00-1.5 1.5z"
                      />
                    </svg>
                  )}
                </button>

                <button
                  className="flex items-center bg-blue-600 text-white px-3 py-1.5 text-sm rounded hover:bg-blue-700 transition"
                  aria-label="Apply now"
                >
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visible < filteredJobs.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisible((prev) => prev + 3)}
              className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
            >
              Load More Jobs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;

"use client";
import { CheckCircle, Eye, MoreHorizontal, XCircle } from "lucide-react";
import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { PiBagBold, PiUsersLight } from "react-icons/pi";

const initialJobs = [
  {
    title: "UI/UX Designer",
    type: "Full Time",
    status: "Active",
    daysRemaining: 27,
    applications: 798,
  },
  {
    title: "Senior UX Designer",
    type: "Internship",
    status: "Active",
    daysRemaining: 8,
    applications: 185,
  },
  {
    title: "Technical Support Specialist",
    type: "Part Time",
    status: "Active",
    daysRemaining: 4,
    applications: 556,
  },
  {
    title: "Junior Graphic Designer",
    type: "Full Time",
    status: "Active",
    daysRemaining: 24,
    applications: 583,
  },
  {
    title: "Front End Developer",
    type: "Full Time",
    status: "Expire",
    daysRemaining: 0,
    applications: 740,
  },
];

export default function DashboardPage() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [jobList, setJobList] = useState(initialJobs);

  const toggleDropdown = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const handlePromote = (index) => {
    alert(`Promoted: ${jobList[index].title}`);
    setShowDropdown(null);
  };

  const handleViewDetail = (index) => {
    alert(`Viewing detail of: ${jobList[index].title}`);
    setShowDropdown(null);
  };

  const handleMarkExpired = (index) => {
    const updatedJobs = [...jobList];
    updatedJobs[index].status = "Expire";
    setJobList(updatedJobs);
    setShowDropdown(null);
  };

  return (
    <main className="p-8 font-Poppins-300 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Hello, Instagram</h2>
        <p className="text-sm text-gray-500">
          Here is your daily activities and applications
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-6 mb-10">
        <div className="flex items-center p-5 bg-blue-100 rounded shadow w-full">
          <div>
            <p className="text-lg font-bold">589</p>
            <p className="text-sm text-gray-500">Open Jobs</p>
          </div>
          <div className="ml-auto p-2 bg-white">
            <span className="text-blue-500">
              <PiBagBold />
            </span>
          </div>
        </div>
        <div className="flex items-center p-5 bg-orange-100 rounded shadow w-full">
          <div>
            <p className="text-lg font-bold">2,517</p>
            <p className="text-sm text-gray-500">Saved Candidates</p>
          </div>
          <div className="ml-auto p-2 bg-white">
            <span className="text-yellow-500">
              <BiSolidUserDetail />
            </span>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        {jobList.map((job, idx) => (
          // <div
          //   key={idx}
          //   className={`group flex items-center justify-between py-6 px-4 relative transition ${
          //     idx !== jobList.length - 1 ? "border-b border-gray-100" : ""
          //   } hover:bg-gray-50`}
          // >

          <div
            key={idx}
            className={`group flex items-center justify-between py-6 relative transition px-4 ${
              idx !== jobList.length - 1 ? "border-b border-white" : ""
            } hover:bg-white hover:border hover:border-blue-800 hover:rounded-lg`}
          >
            <div className="flex flex-col">
              <p className="font-medium text-sm">{job.title}</p>
              <p className="text-xs text-gray-500">
                {job.type} •{" "}
                {job.status === "Expire"
                  ? "Expired"
                  : `${job.daysRemaining} days remaining`}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 min-w-[90px]">
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

            <div className="text-sm text-gray-500 min-w-[140px] flex items-center gap-2 justify-center">
              <PiUsersLight /> {job.applications} Applications
            </div>

            <button className="bg-gray-100 text-blue-800 px-5 py-2.5 rounded shadow text-sm hover:bg-blue-500 hover:text-white transition">
              View Applications
            </button>

            <div className="relative">
              <button
                onClick={() => toggleDropdown(idx)}
                className="text-gray-500 ml-2 p-1 rounded hover:bg-gray-200"
              >
                <MoreHorizontal className="h-5 w-5" />
              </button>
              {showDropdown === idx && (
                <ul className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-md z-10">
                  <li
                    onClick={() => handlePromote(idx)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                  >
                    <CiCirclePlus className="h-4 w-4 text-blue-600" />
                    Promote Job
                  </li>
                  <li
                    onClick={() => handleViewDetail(idx)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                  >
                    <Eye className="h-4 w-4 text-gray-700" />
                    View Detail
                  </li>
                  <li
                    onClick={() => handleMarkExpired(idx)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                  >
                    <XCircle className="h-4 w-4 text-red-500" />
                    Mark as expired
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

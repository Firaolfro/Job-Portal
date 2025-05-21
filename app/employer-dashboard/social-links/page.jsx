"use client";
import {
  Bookmark,
  Briefcase,
  CheckCircle,
  CreditCard,
  Eye,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  PlusCircle,
  Settings, // This is the Lucide icon
  UserCircle,
  Users,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { PiBagBold, PiUsersLight } from "react-icons/pi";

// ---------------------------------------------------------
// CORRECTED IMPORTS START HERE:
// Uncomment and ensure correct component names and paths.

import AllCompanies from "./AllCompanies"; // Ensure this file exists and exports a component named AllCompanies
import EmployerProfile from "./EmployerProfile"; // Ensure this file exists and exports a component named EmployerProfile
import MyJobs from "./MyJobs"; // Ensure this file exists and exports a component named MyJobs
import PlansBilling from "./PlansBilling"; // Ensure this file exists and exports a component named PlansBilling
import SavedCandidate from "./SavedCandidate"; // Ensure this file exists and exports a component named SavedCandidate

// Corrected import for "Post a Job". Assuming postjob-pricing.jsx exports a component named PostJob.
import PostJob from "./postjob-pricing"; // Ensure this file exists and exports a component named PostJob

import SettingsComponent from "./SettingsComponent"; // Renamed to avoid conflict with lucide-react 'Settings' icon. Ensure this file exists and exports a component named SettingsComponent
// CORRECTED IMPORTS END HERE
// ---------------------------------------------------------

const menuItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Employers Profile", icon: UserCircle },
  { name: "Post a Job", icon: PlusCircle },
  { name: "My Jobs", icon: Briefcase },
  { name: "Saved Candidate", icon: Bookmark },
  { name: "Plans & Billing", icon: CreditCard },
  { name: "All Companies", icon: Users },
  { name: "Settings", icon: Settings }, // Refers to the Lucide icon
];

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
  const [active, setActive] = useState("Overview"); // State to track active menu item
  const [showDropdown, setShowDropdown] = useState(null);
  const [jobList, setJobList] = useState(initialJobs);

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
    setJobList(updatedJobs);
    setShowDropdown(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-Poppins-300 px-20">
      <aside className="w-64 border-r bg-white px-6 py-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xs font-semibold text-gray-400 mb-4 px-3">
            EMPLOYERS DASHBOARD
          </h2>
          <nav>
            {menuItems.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActive(name)} // Updates the active state
                className={`flex items-center w-full text-sm font-medium px-4 py-2.5 rounded-md transition-all ${
                  active === name
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4 mr-3" />
                {name}
              </button>
            ))}
          </nav>
        </div>
        <button className="flex items-center text-sm text-gray-500 hover:text-red-500 transition px-4 py-2">
          <LogOut className="h-4 w-4 mr-2" />
          Log-out
        </button>
      </aside>

      <main className="flex-1 p-8">
        {/* CONDITIONAL RENDERING STARTS HERE */}
        {active === "Overview" && (
          <>
            <div className="mb-8 px-2">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Hello, Instagram</h2>
                <p className="text-sm text-gray-500">
                  Here is your daily activities and applications
                </p>
              </div>
              <div className="flex gap-6 px-2">
                {/* ... Existing Overview Content (Job and Candidate Cards) ... */}
                <div className="flex items-center p-5  bg-blue-100 rounded shadow">
                  <div>
                    <p className="text-lg font-bold">589</p>
                    <p className="text-sm text-gray-500">Open Jobs</p>
                  </div>
                  <div className="ml-20 p-2 bg-white ">
                    <span className="text-blue-500">
                      <PiBagBold />
                    </span>
                  </div>
                </div>
                <div className="flex items-center p-5  bg-orange-100 rounded shadow">
                  <div>
                    <p className="text-lg font-bold">2,517</p>
                    <p className="text-sm text-gray-500">Saved Candidates</p>
                  </div>
                  <div className="ml-3 p-2 bg-white ">
                    <span className="text-yellow-500">
                      <BiSolidUserDetail />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 mt-6 p-6 rounded-xl shadow-sm">
              {/* ... Existing Job List ... */}
              {jobList.map((job, idx) => (
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
                        ? "Dec 7, 2019"
                        : `${job.daysRemaining} days remaining`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 min-w-[90px] px-2">
                    {job.status === "Active" ? (
                      <CheckCircle className="text-green-500 h-4 w-4" />
                    ) : (
                      <XCircle className="text-red-500 h-4 w-4" />
                    )}
                    <span
                      className={`${
                        job.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 min-w-[140px] flex items-center gap-2 justify-center px-2">
                    <PiUsersLight /> {job.applications} Applications
                  </div>

                  <div className="px-2">
                    <button className="bg-gray-100 group-hover:bg-blue-500 group-hover:text-white text-blue-800 text-sm px-5 py-2.5 rounded shadow transition-colors">
                      View Applications
                    </button>
                  </div>

                  <div className="relative px-2">
                    <button
                      className="text-gray-500 group-hover:bg-gray-200 group-hover:text-black ml-2 p-1 rounded transition-colors"
                      onClick={() => toggleDropdown(idx)}
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                    {showDropdown === idx && (
                      <ul className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-md z-10">
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
              ))}
            </div>
          </>
        )}
        {/* --------------------------------------------------------- */}
        {/* UPDATED RENDERING FOR CUSTOM COMPONENTS: */}
        {active === "Employers Profile" && <EmployerProfile />}
        {active === "Post a Job" && <PostJob />}{" "}
        {/* Now uses the imported PostJob */}
        {active === "My Jobs" && <MyJobs />}
        {active === "Saved Candidate" && <SavedCandidate />}
        {active === "Plans & Billing" && <PlansBilling />}
        {active === "All Companies" && <AllCompanies />}
        {active === "Settings" && <SettingsComponent />}{" "}
        {/* Uses SettingsComponent */}
        {/* END OF UPDATED RENDERING */}
        {/* --------------------------------------------------------- */}
        <div className="text-center text-gray-400 text-xs mt-12 px-4">
          © 2025 MyJob - Job Portal. All rights reserved
        </div>
      </main>
    </div>
  );
}

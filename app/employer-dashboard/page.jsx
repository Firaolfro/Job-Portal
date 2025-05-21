// employer-dashboard-2/page.jsx
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
  Settings,
  UserCircle,
  Users,
  XCircle,
} from "lucide-react";

import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { PiBagBold, PiUsersLight } from "react-icons/pi";

// Import your components for the Post a Job flow
import CheckoutContent from "./PostJobContent/CheckoutContent";
import PostJobContentPricing from "./PostJobContent/PostJobContent";

import PostJobForm from "./PostJobContent/post-a-job/page";

import JobApplicationsPage from "./myJobs/[jobId]/applications/page";

// Import the PromoteJobModal component
// import PromoteJobModal from "../../components/PromoteJobModal"; // ADJUST PATH if your PromoteJobModal.jsx is elsewhere
import PromoteJobModal from "../employer-dashboard/myJobs/PromoteJobModal";

// ADJUST PATH if your PromoteJobModal.jsx is elsewhere

const menuItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Employers Profile", icon: UserCircle },
  { name: "Post a Job", icon: PlusCircle },
  { name: "My Jobs", icon: Briefcase },
  { name: "Saved Candidate", icon: Bookmark },
  { name: "Plans & Billing", icon: CreditCard },
  { name: "All Companies", icon: Users },
  { name: "Settings", icon: Settings },
];

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

// UPDATED initialJobs array with expiryDate
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

export default function DashboardPage() {
  const [active, setActive] = useState("Overview");
  const [showDropdown, setShowDropdown] = useState(null);
  const [jobList, setJobList] = useState(initialJobs);

  // NEW STATES for My Jobs filters
  const [jobStatusFilter, setJobStatusFilter] = useState("All"); // e.g., "All", "Active", "Expire"
  const [jobTypeFilter, setJobTypeFilter] = useState("All"); // e.g., "All", "Full Time", "Internship", etc.

  const [viewingApplicationsForJobId, setViewingApplicationsForJobId] =
    useState(null);
  const [viewingApplicationsJobTitle, setViewingApplicationsJobTitle] =
    useState(null);

  // Filtered jobs based on selected filters
  const filteredJobs = jobList.filter((job) => {
    const statusMatch =
      jobStatusFilter === "All" || job.status === jobStatusFilter;
    const typeMatch = jobTypeFilter === "All" || job.type === jobTypeFilter;
    return statusMatch && typeMatch;
  });

  // NEW STATE: To manage the stages within the "Post a Job" flow
  const [postJobFlowStage, setPostJobFlowStage] = useState("pricing"); // 'pricing', 'checkout', 'form'

  // NEW STATES for Promote Job Modal
  const [isPromoteModalOpen, setIsPromoteModalOpen] = useState(false);
  const [currentJobTitle, setCurrentJobTitle] = useState("");

  // Handlers for the Post a Job flow
  const handlePaymentSuccess = () => {
    setPostJobFlowStage("form"); // Move to the job posting form after successful payment
  };

  const toggleDropdown = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  // UPDATED handlePromote: to open the PromoteJobModal
  const handlePromote = (index) => {
    setCurrentJobTitle(jobList[index].title); // Set the job title for the modal
    setIsPromoteModalOpen(true); // Open the modal
    setShowDropdown(null); // Close the dropdown
  };

  const handleViewDetail = (index) => {
    console.log(`Viewing details for: ${jobList[index].title}`);
    alert(`Viewing detail of: ${jobList[index].title}`); // For demonstration
    setShowDropdown(null);
  };

  // UPDATED handleMarkExpired
  const handleMarkExpired = (index) => {
    const updatedJobs = [...jobList];
    updatedJobs[index].status = "Expire";
    updatedJobs[index].daysRemaining = 0;
    updatedJobs[index].expiryDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }); // Set current date as expiry date
    setJobList(updatedJobs);
    setShowDropdown(null);
  };

  // Handler to close the Promote Job Modal
  const handleClosePromoteModal = () => {
    setIsPromoteModalOpen(false);

    setCurrentJobTitle(""); // Clear job title on close
  };

  // MODIFIED FUNCTION: Update state to show applications

  const handleViewApplications = (jobId, jobTitle) => {
    console.log("handleViewApplications triggered:", { jobId, jobTitle });
    setViewingApplicationsForJobId(jobId);
    setViewingApplicationsJobTitle(jobTitle);
    console.log("New state:", {
      viewingApplicationsForJobId,
      viewingApplicationsJobTitle,
    });
  };

  // Function to go back to the My Jobs list
  const handleBackToMyJobs = () => {
    setViewingApplicationsForJobId(null);
    setViewingApplicationsJobTitle(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-Poppins-300 px-20">
      <aside className="w-64 border-r bg-white px-6 py-6 flex flex-col justify-between sticky top-0 h-screen">
        <div>
          <h2 className="text-xs font-semibold text-gray-400 mb-4 px-3">
            EMPLOYERS DASHBOARD
          </h2>

          <nav>
            {menuItems.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => {
                  setActive(name);
                  if (name === "Post a Job") {
                    setPostJobFlowStage("pricing");
                  }
                }}
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
                <div className="flex items-center p-5 bg-blue-100 rounded shadow">
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
                <div className="flex items-center p-5 bg-orange-100 rounded shadow">
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
              {jobList.map((job, idx) => (
                <div
                  key={idx} // Using index as key, ideally use a unique ID from job object if available
                  className={`group flex items-center justify-between py-6 relative transition px-4 ${
                    idx !== jobList.length - 1 ? "border-b border-white" : ""
                  } hover:bg-white hover:border hover:border-blue-800 hover:rounded-lg`}
                >
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">{job.title}</p>
                    <p className="text-xs text-gray-500">
                      {job.type} •{" "}
                      {job.status === "Expire"
                        ? job.expiryDate || "No date"
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

        {active === "Post a Job" && (
          <>
            {/* Conditional rendering based on postJobFlowStage */}
            {postJobFlowStage === "pricing" && (
              <PostJobContentPricing onPaymentSuccess={handlePaymentSuccess} />
            )}
            {postJobFlowStage === "checkout" && (
              <CheckoutContent onPaymentSuccess={handlePaymentSuccess} />
            )}
            {postJobFlowStage === "form" && <PostJobForm />}
          </>
        )}

        {active === "Employers Profile" && (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Employers Profile</h2>
            <p className="text-gray-600">
              Content for Employers Profile will go here. (Component not yet
              imported)
            </p>
          </div>
        )}

        {/* My Jobs Section Content (NEWLY ADDED/REPLACED) */}
        {active === "My Jobs" && (
          <>
            {viewingApplicationsForJobId ? (
              <div className="bg-white rounded shadow-sm p-6">
                <button
                  onClick={handleBackToMyJobs}
                  className="mb-4 text-blue-500 hover:underline"
                >
                  Back to My Jobs
                </button>
                <JobApplicationsPage
                  jobId={viewingApplicationsForJobId}
                  jobTitle={viewingApplicationsJobTitle}
                />
              </div>
            ) : (
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
                  <div>ACTIONS</div>
                </div>

                {/* Job List */}
                <div className="divide-y divide-gray-100">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                      <div
                        key={job.title + idx} // More unique key
                        className="grid grid-cols-1 lg:grid-cols-my-jobs-table gap-4 items-center py-4 px-4 transition-colors duration-200 hover:bg-gray-50"
                      >
                        {/* Job Title & Type */}
                        <div className="flex flex-col">
                          <p className="font-medium text-sm text-gray-900">
                            {job.title}
                          </p>
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
                              job.status === "Active"
                                ? "text-green-600"
                                : "text-red-600"
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
                          <button
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors w-full lg:w-auto"
                            onClick={() =>
                              handleViewApplications(job.title, `job${idx + 1}`)
                            } // Assuming a jobId - replace with actual ID

                            // onClick={() =>

                            //   handleViewApplications(job.title, job.id)
                            // } // Use job.id here
                          >
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
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      No jobs found matching your filters.
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Conditionally render the JobApplicationsPage  */}
        {console.log(
          "Value of viewingApplicationsForJobId before render:",
          viewingApplicationsForJobId
        )}

        {/* {viewingApplicationsForJobId && (
          <div className="bg-white rounded shadow-sm p-6">
            <button
              onClick={handleBackToMyJobs}
              className="mb-4 text-blue-500 hover:underline"
            >
              Back to My Jobs
            </button>
            <JobApplicationsPage
              jobId={viewingApplicationsForJobId}
              jobTitle={viewingApplicationsJobTitle}
            />
          </div>
        )} */}

        {active === "Saved Candidate" && (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Saved Candidate</h2>
            <p className="text-gray-600">
              Content for Saved Candidate will go here. (Component not yet
              imported)
            </p>
          </div>
        )}

        {active === "Plans & Billing" && (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Plans & Billing</h2>
            <p className="text-gray-600">
              Content for Plans & Billing will go here. (Component not yet
              imported)
            </p>
          </div>
        )}

        {active === "All Companies" && (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">All Companies</h2>
            <p className="text-gray-600">
              Content for All Companies will go here. (Component not yet
              imported)
            </p>
          </div>
        )}

        {active === "Settings" && (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p className="text-gray-600">
              Content for Settings will go here. (Component not yet imported)
            </p>
          </div>
        )}

        {/* Promote Job Modal */}
        <PromoteJobModal
          isOpen={isPromoteModalOpen}
          onClose={handleClosePromoteModal}
          jobTitle={currentJobTitle}
        />
      </main>
    </div>
  );
}

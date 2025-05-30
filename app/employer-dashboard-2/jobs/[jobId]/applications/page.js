// "use client";

// import { Download, Edit2, Trash2 } from "lucide-react"; // Icons for actions
// import { useParams, useRouter, useSearchParams } from "next/navigation"; // Import hooks
// import { useEffect, useState } from "react";
// import { PiUsersLight } from "react-icons/pi";
// // Mock data for applications - replace with your actual API call
// const mockApplications = {
//   job1: [
//     {
//       id: "app1",
//       name: "Ronald Richards",
//       position: "UI/UX Designer",
//       experience: "7 Years Experience",
//       education: "Master Degree",
//       appliedDate: "Jan 23, 2022",
//       isShortlisted: false,
//       cvDownloadUrl: "/mock-cv/ronald-richards-cv.pdf",
//     },
//     {
//       id: "app2",
//       name: "Darrell Steward",
//       position: "UI/UX Designer",
//       experience: "7 Years Experience",
//       education: "Intermediate Degree",
//       appliedDate: "Jan 23, 2022",
//       isShortlisted: true,
//       cvDownloadUrl: "/mock-cv/darrell-steward-cv.pdf",
//     },
//     {
//       id: "app3",
//       name: "Theresa Webb",
//       position: "Product Designer",
//       experience: "7 Years Experience",
//       education: "High School Degree",
//       appliedDate: "Jan 23, 2022",
//       isShortlisted: false,
//       cvDownloadUrl: "/mock-cv/theresa-webb-cv.pdf",
//     },
//     {
//       id: "app4",

//       name: "Jenny Wilson",
//       position: "UI Designer",
//       experience: "7 Years Experience",
//       education: "Bachelor Degree",
//       appliedDate: "Jan 23, 2022",
//       isShortlisted: true,
//       cvDownloadUrl: "/mock-cv/jenny-wilson-cv.pdf",
//     },
//     {
//       id: "app5",
//       name: "Devon Lane",
//       position: "User Experience Designer",
//       experience: "7 Years Experience",
//       education: "Master Degree",
//       appliedDate: "Jan 23, 2022",
//       isShortlisted: false,
//       cvDownloadUrl: "/mock-cv/devon-lane-cv.pdf",
//     },
//     {
//       id: "app6",
//       name: "Kathryn Murphy",
//       position: "UI/UX Designer",
//       experience: "5 Years Experience",
//       education: "Master Degree",
//       appliedDate: "Jan 20, 2022",
//       isShortlisted: false,
//       cvDownloadUrl: "/mock-cv/kathryn-murphy-cv.pdf",
//     },
//   ],
//   // Add mock data for other job IDs if needed
//   job2: [
//     // Add applications for Senior UX Designer (jobId: "job2") here
//     {
//       id: "app7",
//       name: "Alice Smith",
//       position: "Senior UX Designer",
//       experience: "10 Years Experience",
//       education: "PhD",
//       appliedDate: "Feb 15, 2022",
//       isShortlisted: true,
//       cvDownloadUrl: "/mock-cv/alice-smith-cv.pdf",
//     },
//     {
//       id: "app8",
//       name: "Bob Johnson",
//       position: "Senior UX Designer",
//       experience: "8 Years Experience",
//       education: "Master Degree",
//       appliedDate: "Feb 20, 2022",
//       isShortlisted: false,
//       cvDownloadUrl: "/mock-cv/bob-johnson-cv.pdf",
//     },
//     // ... more applications for job2
//   ],
// };
// export default function JobApplicationsPage() {
//   const { jobId } = useParams(); // Get jobId from the route parameters
//   const searchParams = useSearchParams(); // Hook to access query parameters
//   const jobTitle = searchParams.get("jobTitle"); // Get jobTitle from query params
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [filterStatus, setFilterStatus] = useState("All"); // 'All' or 'Shortlisted'
//   const [sortOrder, setSortOrder] = useState("Newest"); // 'Newest' or 'Oldest'
//   const router = useRouter();

//   useEffect(() => {
//     const fetchApplications = async () => {
//       setLoading(true);

//       setError(null);
//       try {
//         const data = mockApplications[jobId] || [];
//         console.log("Data fetched:", data); // <--- THIS LOG
//         setApplications(data);
//       } catch (err) {
//         setError("Failed to load applications. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (jobId) {
//       fetchApplications();
//     }
//   }, [jobId]);

//   const filteredApplications = applications.filter((app) => {
//     if (filterStatus === "All") return true;
//     if (filterStatus === "Shortlisted") return app.isShortlisted;
//     return true;
//   });

//   const sortedApplications = [...filteredApplications].sort((a, b) => {
//     const dateA = new Date(a.appliedDate);
//     const dateB = new Date(b.appliedDate);
//     if (sortOrder === "Newest") {
//       return dateB.getTime() - dateA.getTime();
//     } else {
//       // Oldest
//       return dateA.getTime() - dateB.getTime();
//     }
//   });

//   // const handleDownloadCv = (cvUrl) => {
//   //   if (cvUrl) {
//   //     window.open(cvUrl, "_blank");
//   //   } else {
//   //     alert("CV download URL not available.");
//   //   }
//   // };

//   const handleDownloadCv = (cvUrl) => {
//     const link = document.createElement("a");
//     link.href = cvUrl;
//     link.setAttribute("download", ""); // Optional: set filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleEditColumn = (applicantId) => {
//     alert(`Editing column for applicant ID: ${applicantId}`);
//     // Implement actual edit functionality (e.g., open a modal)
//   };

//   const handleDeleteApplication = (applicantId) => {
//     if (
//       confirm(`Are you sure you want to delete application ID: ${applicantId}?`)
//     ) {
//       // Implement actual delete functionality (e.g., make an API call)
//       alert(`Deleting applicant ID: ${applicantId}`);
//       setApplications((prevApps) =>
//         prevApps.filter((app) => app.id !== applicantId)
//       );
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-8 text-gray-500">
//         Loading applications...
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="bg-white rounded shadow-sm p-6">
//       <div className="mb-6">
//         <button
//           onClick={() => router.back()}
//           className="text-sm text-blue-600 hover:underline mb-4"
//         >
//           ← Back to My Jobs
//         </button>
//         <h1 className="text-2xl font-bold text-gray-800">
//           Job Applications for {jobTitle}
//         </h1>

//         <p className="text-gray-500">Home / Job / {jobTitle} / Applications</p>
//       </div>

//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//         <div className="flex gap-2">
//           <button
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               filterStatus === "All"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilterStatus("All")}
//           >
//             All Application ({applications.length})
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               filterStatus === "Shortlisted"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilterStatus("Shortlisted")}
//           >
//             Shortlisted (
//             {applications.filter((app) => app.isShortlisted).length})
//           </button>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//           {/* Filter Sort */}
//           <div className="relative w-full sm:w-auto">
//             <select
//               className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm"
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//             >
//               <option value="Newest">Newest</option>
//               <option value="Oldest">Oldest</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg
//                 className="fill-current h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors w-full sm:w-auto flex items-center justify-center gap-1">
//             <PiUsersLight className="h-4 w-4" />
//             Create Application
//           </button>
//         </div>
//       </div>

//       {/* Application List Header */}
//       <div className="hidden lg:grid grid-cols-applications-table gap-4 items-center py-3 px-4 bg-gray-50 text-sm font-semibold text-gray-600 border-b border-gray-200 rounded-t-md">
//         <div>APPLICANT</div>
//         <div>POSITION</div>
//         <div>EXPERIENCE</div>
//         <div>EDUCATION</div>
//         <div>APPLIED DATE</div>
//         <div className="text-center">ACTIONS</div>
//       </div>

//       {/* Application List */}
//       <div className="divide-y divide-gray-100">
//         {sortedApplications.length > 0 ? (
//           sortedApplications.map((applicant) => (
//             <div
//               key={applicant.id}
//               className="grid grid-cols-1 lg:grid-cols-applications-table gap-4 items-center py-4 px-4 transition-colors duration-200 hover:bg-gray-50"
//             >
//               {/* Applicant Details */}
//               <div className="flex flex-col">
//                 <p className="font-medium text-sm text-gray-900">
//                   {applicant.name}
//                 </p>
//                 <p className="text-xs text-gray-500">{applicant.position}</p>
//               </div>
//               <div className="text-sm text-gray-700">{applicant.position}</div>
//               <div className="text-sm text-gray-700">
//                 {applicant.experience}
//               </div>
//               <div className="text-sm text-gray-700">{applicant.education}</div>
//               <div className="text-sm text-gray-700">
//                 {applicant.appliedDate}
//               </div>

//               {/* Actions */}
//               <div className="flex flex-col lg:flex-row items-center justify-center relative gap-2 lg:gap-4">
//                 <button
//                   className="text-blue-600 hover:underline text-sm flex items-center gap-1"
//                   onClick={() => handleDownloadCv(applicant.cvDownloadUrl)}
//                 >
//                   <Download className="h-4 w-4" /> Download Cv
//                 </button>
//                 <button
//                   className="text-gray-500 hover:text-black p-1 rounded-full transition-colors"
//                   onClick={() => handleEditColumn(applicant.id)}
//                   title="Edit Column"
//                 >
//                   <Edit2 className="h-5 w-5" />
//                 </button>
//                 <button
//                   className="text-red-500 hover:text-red-700 p-1 rounded-full transition-colors"
//                   onClick={() => handleDeleteApplication(applicant.id)}
//                   title="Delete"
//                 >
//                   <Trash2 className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center py-8 text-gray-500">
//             No applications found for this job.
//           </div>
//         )}
//       </div>

//       {/* Pagination (Optional - you can implement this based on your needs) */}
//       {/* <div className="mt-6 flex justify-end items-center gap-2 text-sm">
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//           Previous
//         </button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//           Next
//         </button>
//       </div> */}
//     </div>
//   );
// }

"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const allApplications = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "UI/UX Designer",
    experience: 7,
    education: "Master Degree",
    date: "2022-01-23",
    image: "/pp1.jpg",
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Product Designer",
    experience: 7,
    education: "High School Degree",
    date: "2022-01-23",
    image: "/pp2.jpg",
  },
  {
    id: 3,
    name: "Devon Lane",
    role: "User Experience Designer",
    experience: 7,
    education: "Master Degree",
    date: "2022-01-23",
    image: "/pp3.jpg",
  },
  {
    id: 4,
    name: "Kathryn Murphy",
    role: "UI/UX Designer",
    experience: 7,
    education: "Master Degree",
    date: "2022-01-18",
    image: "/pp4.jpg",
  },
];

const shortlisted = [
  {
    id: 5,
    name: "Darlene Robertson",
    role: "UI/UX Designer",
    experience: 7,
    education: "Intermediate Degree",
    date: "2022-01-23",
    image: "/pp5.jpg",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    role: "UI Designer",
    experience: 7,
    education: "Bachelor Degree",
    date: "2022-01-23",
    image: "/pp6.jpg",
  },
];

function ApplicationCard({ app, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [columnName, setColumnName] = useState("");

  const handleEditClick = () => {
    setShowEditModal(true);
    setMenuOpen(false);
    setColumnName("");
  };

  return (
    <>
      <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white mb-4 relative">
        <div className="flex items-start justify-between border-b border-gray-300 pb-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              {app.image && (
                <Image
                  src={app.image}
                  alt={app.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div>
              <h2 className="font-semibold text-lg">{app.name}</h2>
              <p className="text-sm text-gray-600">{app.role}</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-black"
            >
              <BsThreeDotsVertical />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded shadow z-20">
                <div className="flex items-center pl-1 font-semibold text-gray-500">
                  <RiEdit2Line className="w-5 h-5" />
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={handleEditClick}
                  >
                    Edit Column
                  </button>
                </div>
                <div className="flex items-center text-red-500 pl-1 font-semibold">
                  <RiDeleteBinLine className="w-5 h-5" />
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      if (onDelete) onDelete();
                      setMenuOpen(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <ul className="text-sm mt-2 space-y-1 text-gray-700">
          <li>• {app.experience} Years Experience</li>
          <li>• Education: {app.education}</li>
          <li>
            • Applied:{" "}
            {new Date(app.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </li>
        </ul>
        <a
          href="#"
          className="text-blue-600 text-sm mt-2 inline-flex items-center gap-1"
        >
          <MdOutlineFileDownload className="w-4 h-4" />
          Download CV
        </a>
      </div>
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-3 right-4 text-xl text-gray-600 hover:text-red-600"
              onClick={() => setShowEditModal(false)}
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">Add New Column</h2>
            <label className="flex pb-2">Column Name</label>
            <input
              type="text"
              placeholder=""
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
            <div className="flex font-semibold text-sm justify-between gap-2">
              <button
                className="bg-gray-100 text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => {
                  setShowEditModal(false);
                }}
              >
                Add Column
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [sortOrder, setSortOrder] = useState("Newest");
  const [showSortPopup, setShowSortPopup] = useState(false);
  const [allApps, setAllApps] = useState(allApplications);
  const [shortlistedApps, setShortlistedApps] = useState(shortlisted);

  const handleSortChange = (order) => {
    setSortOrder(order);
    setShowSortPopup(false);
  };

  const handleDeleteAll = (id) => {
    setAllApps((prev) => prev.filter((app) => app.id !== id));
  };

  const handleDeleteShortlisted = (id) => {
    setShortlistedApps((prev) => prev.filter((app) => app.id !== id));
  };

  const sortedApps = [...allApps].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="min-h-screen p-6">
      <Head>
        <title>Job Applications</title>
      </Head>
      <nav className="text-sm text-gray-600 mb-4">
        Home / Job / Senior UI/UX Designer /{" "}
        <span className="font-semibold text-gray-800">Applications</span>
      </nav>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Job Applications</h1>
        <div className="flex items-start gap-2 relative">
          <button className="text-black px-4 py-2 rounded">Filter</button>
          <div className="relative">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setShowSortPopup(!showSortPopup)}
            >
              Sort
            </button>
            {showSortPopup && (
              <div className="absolute -left-36 top-full mt-2 w-52 bg-white border border-gray-300 rounded shadow-md p-4 z-10">
                <p className="text-sm font-medium mb-2">Sort Application</p>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="sort"
                      value="Newest"
                      checked={sortOrder === "Newest"}
                      onChange={() => handleSortChange("Newest")}
                    />
                    <span>Newest</span>
                  </label>
                </div>
                <div className="mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="sort"
                      value="Oldest"
                      checked={sortOrder === "Oldest"}
                      onChange={() => handleSortChange("Oldest")}
                    />
                    <span>Oldest</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              All Applications ({allApps.length})
            </h2>
            {sortedApps.map((app) => (
              <ApplicationCard
                key={app.id}
                app={app}
                onDelete={() => handleDeleteAll(app.id)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              Shortlisted ({shortlistedApps.length})
            </h2>
            {shortlistedApps.map((app) => (
              <ApplicationCard
                key={app.id}
                app={app}
                onDelete={() => handleDeleteShortlisted(app.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

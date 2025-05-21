// app/employer-dashboard/saved-candidates/page.jsx
"use client";

import Link from "next/link";
import { FiBookmark, FiCalendar, FiEye, FiMail, FiUser } from "react-icons/fi";

export default function SavedCandidatesPage() {
  // Mock data - replace with actual API call
  const candidates = [
    {
      id: 1,
      name: "Guy Hawkins",
      position: "Technical Support Specialist",
      lastActive: "2 days ago",
      email: "guy.hawkins@example.com",
      savedDate: "Mar 20, 2024",
    },
    {
      id: 2,
      name: "Jacob Jones",
      position: "Product Designer",
      lastActive: "1 week ago",
      email: "jacob.jones@example.com",
      savedDate: "Mar 15, 2024",
    },
    // ... other candidates from the PDF
    {
      id: 10,
      name: "Theresa Webb",
      position: "Software Engineer",
      lastActive: "Just now",
      email: "theresa.webb@example.com",
      savedDate: "Mar 22, 2024",
    },
  ];

  const expiryDate = "March 24, 2024"; // From the PDF

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Saved Candidates</h1>
          <p className="text-sm text-gray-500 mt-1">
            All candidates are visible until {expiryDate}
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              placeholder="Search candidates..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap">
            <FiBookmark className="h-4 w-4" />
            Save New
          </button>
        </div>
      </div>

      {/* Candidates List */}
      <div className="space-y-4">
        {candidates.length > 0 ? (
          candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 rounded-full p-3">
                    <FiUser className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {candidate.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {candidate.position}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                      <FiCalendar className="h-3 w-3" />
                      <span>Saved on {candidate.savedDate}</span>
                      <span>•</span>
                      <span>Last active {candidate.lastActive}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/employer-dashboard/candidates/${candidate.id}`}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm"
                  >
                    <FiEye className="h-4 w-4" />
                    View Profile
                  </Link>
                  <a
                    href={`mailto:${candidate.email}`}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm"
                  >
                    <FiMail className="h-4 w-4" />
                    Contact
                  </a>
                  <button className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1.5 rounded-md text-sm">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <FiBookmark className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No saved candidates
            </h3>
            <p className="mt-1 text-gray-500">
              You haven't saved any candidates yet. Start by browsing
              applicants.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              Browse Candidates
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-end items-center gap-2 text-sm">
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          1
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 flex items-center gap-1">
          Next
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
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// // app/employer-dashboard/saved-candidates/page.jsx
// "use client";

// import { FiUser, FiEye, FiMail, FiBookmark, FiSearch } from 'react-icons/fi';
// import Link from 'next/link';

// export default function SavedCandidatesPage() {
//   // Mock data - replace with actual API call
//   const candidates = [
//     {
//       id: 1,
//       name: "Guy Hawkins",
//       position: "Technical Support Specialist",
//       lastActive: "2 days ago",
//       email: "guy.hawkins@example.com",
//       savedDate: "Mar 20, 2024"
//     },
//     {
//       id: 2,
//       name: "Jacob Jones",
//       position: "Product Designer",
//       lastActive: "1 week ago",
//       email: "jacob.jones@example.com",
//       savedDate: "Mar 15, 2024"
//     },
//     {
//       id: 3,
//       name: "Cameron Williamson",
//       position: "Marketing Officer",
//       lastActive: "3 days ago",
//       email: "cameron.w@example.com",
//       savedDate: "Mar 18, 2024"
//     },
//     // ... other candidates from the image
//     {
//       id: 10,
//       name: "Theresa Webb",
//       position: "Software Engineer",
//       lastActive: "Just now",
//       email: "theresa.webb@example.com",
//       savedDate: "Mar 22, 2024"
//     }
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       {/* Header with Search */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div>
//           <h1 className="text-2xl font-semibold">Saved Candidates</h1>
//           <p className="text-sm text-gray-500 mt-1">
//             {candidates.length} candidates saved
//           </p>
//         </div>

//         <div className="flex gap-3 w-full md:w-auto">
//           <div className="relative flex-1 md:w-64">
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search candidates..."
//               className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap">
//             <FiBookmark className="h-4 w-4" />
//             Save New
//           </button>
//         </div>
//       </div>

//       {/* Candidates Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {candidates.map((candidate) => (
//           <div key={candidate.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//             <div className="flex items-start gap-4 mb-4">
//               <div className="bg-gray-100 rounded-full p-3">
//                 <FiUser className="h-6 w-6 text-gray-600" />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-900">{candidate.name}</h3>
//                 <p className="text-sm text-gray-500">{candidate.position}</p>
//                 <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
//                   <span>Saved on {candidate.savedDate}</span>
//                   <span>•</span>
//                   <span>Active {candidate.lastActive}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
//               <Link
//                 href={`/employer-dashboard/candidates/${candidate.id}`}
//                 className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm"
//               >
//                 <FiEye className="h-4 w-4" />
//                 View Profile
//               </Link>
//               <a
//                 href={`mailto:${candidate.email}`}
//                 className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm"
//               >
//                 <FiMail className="h-4 w-4" />
//                 Contact
//               </a>
//               <button className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1.5 rounded-md text-sm ml-auto">
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {candidates.length === 0 && (
//         <div className="text-center py-12">
//           <FiBookmark className="mx-auto h-12 w-12 text-gray-400" />
//           <h3 className="mt-2 text-lg font-medium text-gray-900">No saved candidates</h3>
//           <p className="mt-1 text-gray-500">
//             You haven't saved any candidates yet. Start by browsing applicants.
//           </p>
//           <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
//             Browse Candidates
//           </button>
//         </div>
//       )}

//       {/* Pagination */}
//       <div className="mt-6 flex justify-center items-center gap-2 text-sm">
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//           1
//         </button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//           2
//         </button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
//           3
//         </button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 flex items-center gap-1">
//           Next
//           <svg
//             className="h-4 w-4"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

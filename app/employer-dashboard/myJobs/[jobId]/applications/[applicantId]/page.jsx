// app/employer-dashboard/myJobs/[jobId]/applications/[applicantId]/page.jsx
// This is a hypothetical page for a single application view.
// It assumes you have a way to fetch single application data
// based on the applicantId.

"use client";

import { Download } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Mock data for a single application - replace with your actual API call
const mockSingleApplication = {
  app7: {
    id: "app7",
    name: "Alice Smith",
    position: "Senior UX Designer",
    experience: "10 Years Experience",
    education: "PhD",
    appliedDate: "Feb 15, 2022",
    isShortlisted: true,
    cvDownloadUrl: "/mock-cv/alice-smith-cv.pdf",
    contact: {
      phone: "+1-202-555-0141",
      secondaryPhone: "+1-202-555-0189",
      email: "alice.smith@email.com",
      website: "www.alicesmithportfolio.com",
      location: "Tech Hub, California",
    },
    biography:
      "A highly experienced UX designer with a passion for creating intuitive and user-centered digital experiences. Proven ability to lead design projects from concept to launch.",
    coverLetter:
      "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Senior UX Designer position at your company...",
    socialMedia: {
      linkedin: "linkedin.com/in/alicesmith",
      twitter: "twitter.com/alicesmithux",
    },
  },
  app8: {
    id: "app8",
    name: "Bob Johnson",
    position: "Senior UX Designer",
    experience: "8 Years Experience",
    education: "Master Degree",
    appliedDate: "Feb 20, 2022",
    isShortlisted: false,
    cvDownloadUrl: "/mock-cv/bob-johnson-cv.pdf",
    contact: {
      phone: "+1-202-555-0142",
      email: "bob.johnson@email.com",
      location: "Design City, Oregon",
    },
    biography:
      "Results-oriented UX designer with a strong understanding of user research and usability principles. Adept at translating user needs into effective design solutions.",
    coverLetter:
      "Dear [Hiring Manager Name],\n\nI am very interested in the Senior UX Designer opening...",
    socialMedia: {
      linkedin: "linkedin.com/in/bobjohnson",
    },
  },
  // ... more applicant data
};

export default function SingleApplicationPage() {
  const { applicantId } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would fetch data from an API
    // using the applicantId.
    setLoading(true);
    setError(null);
    try {
      const data = mockSingleApplication[applicantId];
      if (data) {
        setApplication(data);
      } else {
        setError("Application not found.");
      }
    } catch (err) {
      console.error("Failed to fetch application:", err);
      setError("Failed to load application details.");
    } finally {
      setLoading(false);
    }
  }, [applicantId]);

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading application details...
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  if (!application) {
    return null; // Or a "not found" component
  }

  return (
    <div className="bg-white rounded shadow-sm p-6">
      <button
        onClick={() => router.back()}
        className="text-blue-500 hover:underline mb-4"
      >
        Back to Applications
      </button>

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {application.name}
      </h1>
      <h2 className="text-lg text-gray-700 mb-2">{application.position}</h2>

      <div className="mb-4 border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2">
          Contact Information
        </h3>
        {application.contact?.phone && (
          <p>Phone: {application.contact.phone}</p>
        )}
        {application.contact?.secondaryPhone && (
          <p>Secondary Phone: {application.contact.secondaryPhone}</p>
        )}
        {application.contact?.email && (
          <p>Email: {application.contact.email}</p>
        )}
        {application.contact?.website && (
          <p>
            Website:{" "}
            <a
              href={application.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {application.contact.website}
            </a>
          </p>
        )}
        {application.contact?.location && (
          <p>Location: {application.contact.location}</p>
        )}
      </div>

      {application.biography && (
        <div className="mb-4 border-b pb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Biography</h3>
          <p className="text-gray-600">{application.biography}</p>
        </div>
      )}

      <div className="mb-4 border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Details</h3>
        {application.experience && <p>Experience: {application.experience}</p>}
        {application.education && <p>Education: {application.education}</p>}
        {application.appliedDate && (
          <p>Applied Date: {application.appliedDate}</p>
        )}
        {application.socialMedia?.linkedin && (
          <p>
            LinkedIn:{" "}
            <a
              href={`https://${application.socialMedia.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {application.socialMedia.linkedin}
            </a>
          </p>
        )}
        {application.socialMedia?.twitter && (
          <p>
            Twitter:{" "}
            <a
              href={`https://${application.socialMedia.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {application.socialMedia.twitter}
            </a>
          </p>
        )}
        {/* Add other details as needed based on your data */}
      </div>

      {application.coverLetter && (
        <div className="mb-4 border-b pb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Cover Letter</h3>
          <p className="text-gray-600 whitespace-pre-line">
            {application.coverLetter}
          </p>
        </div>
      )}

      <div className="mt-4">
        {application.cvDownloadUrl && (
          <a
            href={application.cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        )}
      </div>
    </div>
  );
}

// // app/employer-dashboard/myJobs/[jobId]/applications/[applicantId]/page.jsx
// "use client";

// import { useState } from 'react';
// import { FiDownload, FiMail, FiPhone, FiGlobe, FiUser } from 'react-icons/fi';
// import Link from 'next/link';

// export default function ApplicantDetailPage({ params }) {
//   // Mock data - replace with actual API call using params.applicantId
//   const applicant = {
//     name: "Esther Howard",
//     position: "Wealth Design™ (UI/UX)",
//     bio: `The team positioned about 5.9 billion design and digital art from an early stage...`,
//     coverLetter: `Dear Sir,\nI am writing to operate my interactive live front grade instructional podcast...`,
//     contact: {
//       website: "https://www.estherhoward.com",
//       portfolio: "www.estherhoward.com",
//       phone: ["+7 028 566 0000", "+12 029 556 0000"],
//       address: "Microsoft Live LLC, 9172 Spring Avenue, Portland",
//       rate: "$100/hr"
//     },
//     documents: [
//       { name: "Resume.pdf", url: "#" },
//       { name: "Portfolio.pdf", url: "#" }
//     ]
//   };

//   const [activeTab, setActiveTab] = useState('profile');

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       {/* Breadcrumb Navigation */}
//       <nav className="flex text-sm text-gray-500 mb-6">
//         <Link href="/employer-dashboard" className="hover:text-blue-500">
//           Home
//         </Link>
//         <span className="mx-2">/</span>
//         <Link href="/employer-dashboard/myJobs" className="hover:text-blue-500">
//           Jobs
//         </Link>
//         <span className="mx-2">/</span>
//         <Link
//           href={`/employer-dashboard/myJobs/${params.jobId}/applications`}
//           className="hover:text-blue-500"
//         >
//           Applications
//         </Link>
//         <span className="mx-2">/</span>
//         <span className="text-gray-700">{applicant.name}</span>
//       </nav>

//       {/* Applicant Header */}
//       <div className="flex flex-col md:flex-row gap-6 mb-8">
//         <div className="flex items-center gap-4">
//           <div className="bg-gray-100 rounded-full p-4">
//             <FiUser className="h-8 w-8 text-gray-600" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-semibold">{applicant.name}</h1>
//             <p className="text-gray-600">{applicant.position}</p>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-3 md:ml-auto">
//           <a
//             href={`tel:${applicant.contact.phone[0]}`}
//             className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm"
//           >
//             <FiPhone className="h-4 w-4" />
//             Contact
//           </a>
//           <a
//             href={`mailto:info@${applicant.contact.website.replace('https://www.', '')}`}
//             className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm"
//           >
//             <FiMail className="h-4 w-4" />
//             Email
//           </a>
//           {applicant.documents.map((doc, index) => (
//             <a
//               key={index}
//               href={doc.url}
//               className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
//             >
//               <FiDownload className="h-4 w-4" />
//               Download {doc.name.split('.')[0]}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b border-gray-200 mb-6">
//         <button
//           className={`px-4 py-2 font-medium text-sm ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('profile')}
//         >
//           Profile
//         </button>
//         <button
//           className={`px-4 py-2 font-medium text-sm ${activeTab === 'coverLetter' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('coverLetter')}
//         >
//           Cover Letter
//         </button>
//         <button
//           className={`px-4 py-2 font-medium text-sm ${activeTab === 'documents' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//           onClick={() => setActiveTab('documents')}
//         >
//           Documents
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="mb-8">
//         {activeTab === 'profile' && (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Professional Profile</h2>
//             <div className="prose max-w-none text-gray-700 whitespace-pre-line">
//               {applicant.bio}
//             </div>

//             <h2 className="text-lg font-semibold mt-8 mb-4">Contact Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-center gap-2">
//                 <FiGlobe className="h-5 w-5 text-gray-400" />
//                 <a href={applicant.contact.website} className="text-blue-500 hover:underline">
//                   {applicant.contact.website}
//                 </a>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FiGlobe className="h-5 w-5 text-gray-400" />
//                 <span>{applicant.contact.portfolio}</span>
//               </div>
//               {applicant.contact.phone.map((phone, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <FiPhone className="h-5 w-5 text-gray-400" />
//                   <a href={`tel:${phone}`} className="text-gray-700 hover:text-blue-500">
//                     {phone}
//                   </a>
//                 </div>
//               ))}
//               <div className="flex items-start gap-2">
//                 <FiMail className="h-5 w-5 text-gray-400 mt-1" />
//                 <span>{applicant.contact.address}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="font-medium">Rate:</span>
//                 <span>{applicant.contact.rate}</span>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'coverLetter' && (
//           <div className="prose max-w-none text-gray-700 whitespace-pre-line">
//             <h2 className="text-lg font-semibold mb-4">Cover Letter</h2>
//             {applicant.coverLetter}
//           </div>
//         )}

//         {activeTab === 'documents' && (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">Documents</h2>
//             <div className="space-y-3">
//               {applicant.documents.map((doc, index) => (
//                 <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
//                   <span className="font-medium">{doc.name}</span>
//                   <a
//                     href={doc.url}
//                     className="flex items-center gap-2 text-blue-500 hover:text-blue-700 text-sm font-medium"
//                   >
//                     <FiDownload className="h-4 w-4" />
//                     Download
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6">
//         <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
//           Shortlist Candidate
//         </button>
//         <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
//           Schedule Interview
//         </button>
//         <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md">
//           Send Message
//         </button>
//         <button className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-md ml-auto">
//           Reject Application
//         </button>
//       </div>
//     </div>
//   );
// }

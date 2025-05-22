"use client";

import { Download, Edit2, Trash2 } from "lucide-react"; // Icons for actions
import { useParams, useRouter, useSearchParams } from "next/navigation"; // Import hooks
import { useEffect, useState } from "react";
import { PiUsersLight } from "react-icons/pi";
// Mock data for applications - replace with your actual API call
const mockApplications = {
  job1: [
    {
      id: "app1",
      name: "Ronald Richards",
      position: "UI/UX Designer",
      experience: "7 Years Experience",
      education: "Master Degree",
      appliedDate: "Jan 23, 2022",
      isShortlisted: false,
      cvDownloadUrl: "/mock-cv/ronald-richards-cv.pdf",
    },
    {
      id: "app2",
      name: "Darrell Steward",
      position: "UI/UX Designer",
      experience: "7 Years Experience",
      education: "Intermediate Degree",
      appliedDate: "Jan 23, 2022",
      isShortlisted: true,
      cvDownloadUrl: "/mock-cv/darrell-steward-cv.pdf",
    },
    {
      id: "app3",
      name: "Theresa Webb",
      position: "Product Designer",
      experience: "7 Years Experience",
      education: "High School Degree",
      appliedDate: "Jan 23, 2022",
      isShortlisted: false,
      cvDownloadUrl: "/mock-cv/theresa-webb-cv.pdf",
    },
    {
      id: "app4",

      name: "Jenny Wilson",
      position: "UI Designer",
      experience: "7 Years Experience",
      education: "Bachelor Degree",
      appliedDate: "Jan 23, 2022",
      isShortlisted: true,
      cvDownloadUrl: "/mock-cv/jenny-wilson-cv.pdf",
    },
    {
      id: "app5",
      name: "Devon Lane",
      position: "User Experience Designer",
      experience: "7 Years Experience",
      education: "Master Degree",
      appliedDate: "Jan 23, 2022",
      isShortlisted: false,
      cvDownloadUrl: "/mock-cv/devon-lane-cv.pdf",
    },
    {
      id: "app6",
      name: "Kathryn Murphy",
      position: "UI/UX Designer",
      experience: "5 Years Experience",
      education: "Master Degree",
      appliedDate: "Jan 20, 2022",
      isShortlisted: false,
      cvDownloadUrl: "/mock-cv/kathryn-murphy-cv.pdf",
    },
  ],
  // Add mock data for other job IDs if needed
  job2: [
    // Add applications for Senior UX Designer (jobId: "job2") here
    {
      id: "app7",
      name: "Alice Smith",
      position: "Senior UX Designer",
      experience: "10 Years Experience",
      education: "PhD",
      appliedDate: "Feb 15, 2022",
      isShortlisted: true,
      cvDownloadUrl: "/mock-cv/alice-smith-cv.pdf",
    },
    {
      id: "app8",
      name: "Bob Johnson",
      position: "Senior UX Designer",
      experience: "8 Years Experience",
      education: "Master Degree",
      appliedDate: "Feb 20, 2022",
      isShortlisted: false,
      cvDownloadUrl: "/mock-cv/bob-johnson-cv.pdf",
    },
    // ... more applications for job2
  ],
};
export default function JobApplicationsPage() {
  const { jobId } = useParams(); // Get jobId from the route parameters
  const searchParams = useSearchParams(); // Hook to access query parameters
  const jobTitle = searchParams.get("jobTitle"); // Get jobTitle from query params
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filterStatus, setFilterStatus] = useState("All"); // 'All' or 'Shortlisted'
  const [sortOrder, setSortOrder] = useState("Newest"); // 'Newest' or 'Oldest'
  const router = useRouter();

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);

      setError(null);
      try {
        const data = mockApplications[jobId] || [];
        console.log("Data fetched:", data); // <--- THIS LOG
        setApplications(data);
      } catch (err) {
        setError("Failed to load applications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchApplications();
    }
  }, [jobId]);

  const filteredApplications = applications.filter((app) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Shortlisted") return app.isShortlisted;
    return true;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    const dateA = new Date(a.appliedDate);
    const dateB = new Date(b.appliedDate);
    if (sortOrder === "Newest") {
      return dateB.getTime() - dateA.getTime();
    } else {
      // Oldest
      return dateA.getTime() - dateB.getTime();
    }
  });

  // const handleDownloadCv = (cvUrl) => {
  //   if (cvUrl) {
  //     window.open(cvUrl, "_blank");
  //   } else {
  //     alert("CV download URL not available.");
  //   }
  // };

  const handleDownloadCv = (cvUrl) => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", ""); // Optional: set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEditColumn = (applicantId) => {
    alert(`Editing column for applicant ID: ${applicantId}`);
    // Implement actual edit functionality (e.g., open a modal)
  };

  const handleDeleteApplication = (applicantId) => {
    if (
      confirm(`Are you sure you want to delete application ID: ${applicantId}?`)
    ) {
      // Implement actual delete functionality (e.g., make an API call)
      alert(`Deleting applicant ID: ${applicantId}`);
      setApplications((prevApps) =>
        prevApps.filter((app) => app.id !== applicantId)
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading applications...
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded shadow-sm p-6">
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-600 hover:underline mb-4"
        >
          ← Back to My Jobs
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          Job Applications for {jobTitle}
        </h1>

        <p className="text-gray-500">Home / Job / {jobTitle} / Applications</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filterStatus === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilterStatus("All")}
          >
            All Application ({applications.length})
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filterStatus === "Shortlisted"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilterStatus("Shortlisted")}
          >
            Shortlisted (
            {applications.filter((app) => app.isShortlisted).length})
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Filter Sort */}
          <div className="relative w-full sm:w-auto">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors w-full sm:w-auto flex items-center justify-center gap-1">
            <PiUsersLight className="h-4 w-4" />
            Create Application
          </button>
        </div>
      </div>

      {/* Application List Header */}
      <div className="hidden lg:grid grid-cols-applications-table gap-4 items-center py-3 px-4 bg-gray-50 text-sm font-semibold text-gray-600 border-b border-gray-200 rounded-t-md">
        <div>APPLICANT</div>
        <div>POSITION</div>
        <div>EXPERIENCE</div>
        <div>EDUCATION</div>
        <div>APPLIED DATE</div>
        <div className="text-center">ACTIONS</div>
      </div>

      {/* Application List */}
      <div className="divide-y divide-gray-100">
        {sortedApplications.length > 0 ? (
          sortedApplications.map((applicant) => (
            <div
              key={applicant.id}
              className="grid grid-cols-1 lg:grid-cols-applications-table gap-4 items-center py-4 px-4 transition-colors duration-200 hover:bg-gray-50"
            >
              {/* Applicant Details */}
              <div className="flex flex-col">
                <p className="font-medium text-sm text-gray-900">
                  {applicant.name}
                </p>
                <p className="text-xs text-gray-500">{applicant.position}</p>
              </div>
              <div className="text-sm text-gray-700">{applicant.position}</div>
              <div className="text-sm text-gray-700">
                {applicant.experience}
              </div>
              <div className="text-sm text-gray-700">{applicant.education}</div>
              <div className="text-sm text-gray-700">
                {applicant.appliedDate}
              </div>

              {/* Actions */}
              <div className="flex flex-col lg:flex-row items-center justify-center relative gap-2 lg:gap-4">
                <button
                  className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                  onClick={() => handleDownloadCv(applicant.cvDownloadUrl)}
                >
                  <Download className="h-4 w-4" /> Download Cv
                </button>
                <button
                  className="text-gray-500 hover:text-black p-1 rounded-full transition-colors"
                  onClick={() => handleEditColumn(applicant.id)}
                  title="Edit Column"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 p-1 rounded-full transition-colors"
                  onClick={() => handleDeleteApplication(applicant.id)}
                  title="Delete"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No applications found for this job.
          </div>
        )}
      </div>

      {/* Pagination (Optional - you can implement this based on your needs) */}
      {/* <div className="mt-6 flex justify-end items-center gap-2 text-sm">
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          Previous
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
          Next
        </button>
      </div> */}
    </div>
  );
}

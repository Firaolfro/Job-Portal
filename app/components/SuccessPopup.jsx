// components/SuccessPopup.jsx
"use client"; // Necessary for Client Components in Next.js App Router if using hooks like useRouter
import { useRouter } from "next/navigation"; // Use 'next/navigation' for App Router

export default function SuccessPopup({ isOpen, onClose, jobRole }) {
  const router = useRouter();

  if (!isOpen) return null; // Don't render anything if the popup is not open

  // Handlers for the buttons in the popup
  const handleViewPostedJobs = () => {
    onClose(); // Close the popup
    router.push("/employer-dashboard/posted-jobs"); // Navigate to view posted jobs
  };

  const handleSkipNow = () => {
    onClose(); // Just close the popup
  };

  const handlePromoteJob = () => {
    onClose(); // Close the popup
    router.push("/employer-dashboard/promote-job"); // Navigate to promote job page
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        {/* Success Icon */}
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>

        {/* Success Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Job Post Successfully!
        </h2>
        {jobRole && (
          <p className="text-gray-600 mt-2">
            Your job for "
            <span className="font-bold text-blue-600">{jobRole}</span>" has been
            posted.
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleViewPostedJobs}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Posted Jobs
          </button>
          <button
            onClick={handlePromoteJob}
            className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Promote Job
          </button>
          <button
            onClick={handleSkipNow}
            className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            Skip Now
          </button>
        </div>
      </div>
    </div>
  );
}

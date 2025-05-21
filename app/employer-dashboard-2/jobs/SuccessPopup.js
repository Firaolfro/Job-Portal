"use client"; // Necessary for Client Components in Next.js App Router if using hooks like useRouter
import { useRouter } from "next/navigation"; // Use 'next/navigation' for App Router
import { useState } from "react"; // Import useState for local state management

export default function SuccessPopup({ isOpen, onClose, jobRole }) {
  const router = useRouter();
  const [selectedPromotion, setSelectedPromotion] = useState(null); // State for selected promotion type

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
    // In a real application, you would send the selectedPromotion data to your backend
    console.log("Promote Job clicked. Selected Promotion:", selectedPromotion);
    router.push("/employer-dashboard/promote-job"); // Navigate to promote job page or a checkout page
  };

  return (
    // <div className="fixed inset-0 bg-gray-50 bg-opacity-50 flex  items-center justify-center z-50 p-4">

    // <div className="fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">

    <div
      className="fixed inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full relative overflow-hidden">
        {" "}
        {/* Increased max-w-sm to max-w-md for more space */}
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        {/* Success Message Section */}
        <div className="text-center mb-6">
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
            Congratulations, Your Job is successfully posted!
          </h2>
          <p className="text-gray-600 mt-2">
            You can manage your form my-jobs section in your dashboard
          </p>

          {/* View Jobs Button for the success message part */}
          <button
            onClick={handleViewPostedJobs}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center mx-auto"
          >
            View Jobs <span className="ml-2">→</span>
          </button>
        </div>
        {/* Promote Job Section */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Promote Job: {jobRole || "UI/UX Designer"}{" "}
            {/* Use jobRole or a placeholder */}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fusce commodo, sem non tempor convallis, sapien turpis bibendum
            turpis, non pharetra nisi velit pulvinar lectus. Suspendisse varius
            at nisi aliquam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Your Job Option */}
            <label
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
                selectedPromotion === "featured"
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  ALWAYS ON THE TOP
                </span>{" "}
                <div className="bg-gray-100 h-16 w-full rounded mb-2 flex items-center justify-center">
                  {/* Placeholder for image/layout as shown in screenshot */}
                  <div className="w-3/4 h-4 bg-blue-500 rounded-sm"></div>
                </div>
                <input
                  type="radio"
                  id="featuredJob"
                  name="promotionType"
                  value="featured"
                  checked={selectedPromotion === "featured"}
                  onChange={() => setSelectedPromotion("featured")}
                  className="form-radio h-4 w-4 text-blue-600"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Featured Your Job
              </h3>
              <p className="text-xs text-gray-500 leading-snug">
                Sed neque diam, lacinia nec dolor et, euismod bibendum turpis.
                Sed feugiat faucibus.
              </p>
            </label>

            {/* Highlight Your Job Option */}
            <label
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
                selectedPromotion === "highlight"
                  ? "border-orange-500 ring-2 ring-orange-200"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="text-sm text-gray-500 uppercase font-bold mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  HIGHLIGHT JOB WITH COLOR
                </span>
                <div className="bg-gray-100 h-16 w-full rounded mb-2 flex items-center justify-center">
                  {/* Placeholder for image/layout as shown in screenshot */}
                  <div className="w-3/4 h-4 bg-orange-400 rounded-sm"></div>
                </div>
                <input
                  type="radio"
                  id="highlightJob"
                  name="promotionType"
                  value="highlight"
                  checked={selectedPromotion === "highlight"}
                  onChange={() => setSelectedPromotion("highlight")}
                  className="form-radio h-4 w-4 text-orange-600"
                />
              </div>

              <h3 className="font-semibold text-gray-800 mb-1">
                Highlight Your Job
              </h3>
              <p className="text-xs text-gray-500 leading-snug">
                Sed neque quam, lacinia nec dolor et, euismod bibendum turpis.
                Sed feugiat fauc.
              </p>
            </label>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleSkipNow}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Skip Now
          </button>
          <button
            onClick={handlePromoteJob}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
            disabled={!selectedPromotion} // Disable until a promotion is selected
          >
            PROMOTE JOB →
          </button>
        </div>
      </div>
    </div>
  );
}

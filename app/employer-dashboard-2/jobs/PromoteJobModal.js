import { useState } from "react";
const PromoteJobModal = ({ isOpen, onClose, jobTitle = "UI/UX Designer" }) => {
  const [selectedPromotion, setSelectedPromotion] = useState("featured"); // 'featured' or 'highlight'

  if (!isOpen) return null;

  return (
    // Modal Overlay

    <div
      className="fixed inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-lg shadow-xl max-w-xl w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing modal
      >
        {/* Close Button */}
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

        {/* Modal Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Promote Job: {jobTitle}
          </h2>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            Fusce commodo, sem non tempor convallis, sapien turpis bibendum
            turpis, non pharetra nisi velit pulvinar lectus. Suspendisse varius
            at nisl aliquam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Your Job Card */}
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
                </span>
                <input
                  type="radio"
                  name="promotionType"
                  value="featured"
                  checked={selectedPromotion === "featured"}
                  onChange={() => setSelectedPromotion("featured")}
                  className="form-radio h-4 w-4 text-blue-600"
                />
              </div>
              <div className="bg-gray-100 p-4 rounded flex items-center justify-center h-24 mb-4">
                {/* Placeholder for visual representation */}
                <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Featured Your Job
              </h3>
              <p className="text-xs text-gray-500 leading-snug">
                Sed neque quam, lacinia nec dolor et, euismod bibendum turpis.
                Sed feugiat fauc.
              </p>
            </label>

            {/* Highlight Your Job Card */}
            <label
              className={`flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
                selectedPromotion === "highlight"
                  ? "border-orange-500 ring-2 ring-orange-200"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  HIGHLIGHT JOB WITH COLOR
                </span>
                <input
                  type="radio"
                  name="promotionType"
                  value="highlight"
                  checked={selectedPromotion === "highlight"}
                  onChange={() => setSelectedPromotion("highlight")}
                  className="form-radio h-4 w-4 text-orange-600"
                />
              </div>

              <div className="bg-gray-100 p-4 rounded flex items-center justify-center h-24 mb-4">
                {/* Placeholder for visual representation */}
                <div className="w-1/2 h-3 bg-orange-300 rounded"></div>
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

        {/* Modal Footer */}
        <div className="p-6 flex justify-end space-x-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Handle promotion logic here based on `selectedPromotion`
              console.log("Promote job:", selectedPromotion);
              onClose(); // Close after action
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2"
          >
            <span>PROMOTE JOB</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoteJobModal;

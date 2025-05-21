// employer-dashboard-2/settings/company-info/page.js

"use client";
import { useState } from "react";
import { FiImage, FiUpload } from "react-icons/fi";

export default function CompanyInfoPage() {
  const [logo, setLogo] = useState({ name: "Logo", size: "3.5 MB" });
  const [banner, setBanner] = useState({
    name: "Banner Image",
    size: "4.3 MB",
  });
  const [companyName, setCompanyName] = useState("");
  const [aboutUs, setAboutUs] = useState(
    "Write down about your company here..."
  );

  const handleFileChange = (type) => (e) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const size = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      type === "logo"
        ? setLogo({ name: file.name, size })
        : setBanner({ name: file.name, size });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <h1 className="text-xl font-bold">Logo & Banner Image</h1>

      {/* Upload Sections Grid - Reduced gap from gap-8 to gap-4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Logo Upload - Narrower Width */}
        <div className="w-64 space-y-2">
          <h2 className="font-medium">Upload Logo</h2>
          <div className="border-2 border-gray-300 bg-gray-500 rounded-lg p-4 h-40 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <FiImage className="w-12 h-12" />
            </div>
            <FiUpload
              className="absolute top-3 right-3 text-gray-400"
              onClick={() => document.getElementById("logo-upload").click()}
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{logo.size}</span>
            <div className="space-x-3">
              <button
                type="button"
                onClick={() => document.getElementById("logo-upload").click()}
                className="text-blue-600 hover:underline"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={() => setLogo({ name: "Logo", size: "0 MB" })}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
              <input
                id="logo-upload"
                type="file"
                onChange={handleFileChange("logo")}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* Banner Upload - Wider Width */}
        <div className="w-full space-y-2">
          <h2 className="font-medium">Banner Image</h2>
          <div className="border-2 border-gray-300 bg-gray-500 rounded-lg p-4 h-40 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <FiImage className="w-16 h-16" />
            </div>
            <FiUpload
              className="absolute top-3 right-3 text-gray-400"
              onClick={() => document.getElementById("banner-upload").click()}
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{banner.size}</span>
            <div className="space-x-3">
              <button
                type="button"
                onClick={() => document.getElementById("banner-upload").click()}
                className="text-blue-600 hover:underline"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={() =>
                  setBanner({ name: "Banner Image", size: "0 MB" })
                }
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
              <input
                id="banner-upload"
                type="file"
                onChange={handleFileChange("banner")}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Name Input Field - Added this section */}
      <div className="space-y-2 pt-4">
        <h2 className="font-medium">Company name</h2>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Enter your company name"
        />
      </div>

      {/* About Us */}
      <div className="space-y-2 pt-4">
        <h2 className="font-medium">About us</h2>
        <textarea
          value={aboutUs}
          onChange={(e) => setAboutUs(e.target.value)}
          className="w-full h-40 p-3 border border-gray-300 rounded-md"
          placeholder="Write down about your company here. Let the candidate know who we are..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between pt-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
          Save Change
        </button>
      </div>
    </div>
  );
}

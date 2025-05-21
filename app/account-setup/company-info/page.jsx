"use client";

// import { Button } from "@/components/ui/button"; // optional if you're using custom Button component
import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function CompanyInfoPage() {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [aboutUs, setAboutUs] = useState("");

  const handleFileChange = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (type === "logo") setLogo(file);
    else setBanner(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-32 text-gray-800 font-sans">
      <h2 className="text-2xl font-semibold mb-8">Logo & Banner Image</h2>

      {/* Upload Sections */}
      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        {/* Logo */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-md font-medium mb-2">Upload document</h3>
          <label className="border-2 border-dashed border-gray-300 rounded-md h-64 w-full flex flex-col items-center justify-center text-sm text-gray-500 cursor-pointer">
            <UploadCloud className="w-6 h-6 mb-2" />
            <p className="text-center">
              Browse photo
              <br />
              or drop here
            </p>
            <p className="text-xs mt-2">Min 400px. Max 5MB.</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "logo")}
            />
          </label>
        </div>

        {/* Banner */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-md font-medium mb-2">Banner Image</h3>
          <label className="border-2 border-dashed border-gray-300 rounded-md h-64 w-full flex flex-col items-center justify-center text-sm text-gray-500 cursor-pointer">
            <UploadCloud className="w-6 h-6 mb-2" />
            <p className="text-center">
              Browse photo
              <br />
              or drop here
            </p>
            <p className="text-xs mt-2">1520x400 JPEG/PNG. Max 5MB.</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "banner")}
            />
          </label>
        </div>
      </div>

      {/* Company Info Form */}
      <div className="space-y-6 mb-10">
        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">About Us</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3"
            placeholder="Write down about your company here. Let the candidate know who we are..."
            value={aboutUs}
            onChange={(e) => setAboutUs(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        Save & Next
      </Button> */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
        Save & Next
      </button>

      {/* <footer className="text-xs text-gray-400 text-center mt-20">
        © 2024 MyJob - Job Portal. All rights reserved.
      </footer> */}
    </div>
  );
}

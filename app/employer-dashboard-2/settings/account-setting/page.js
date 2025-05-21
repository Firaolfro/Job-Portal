"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Using React Icons for eye icons

export default function AccountSettingPage() {
  // Use the interface for the state
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // State to toggle visibility for each field individually
  const [visibleFields, setVisibleFields] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const countries = [
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
    { code: "+254", name: "Kenya", flag: "🇰🇪" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
    { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
  ];

  // Handle password input changes
  // ✅ JSX
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // Toggle visibility for a specific field
  const toggleFieldVisibility = (field) => {
    setVisibleFields((prev) => ({
      ...prev,
      [field]: !prev[field], // Toggle visibility for the clicked field
    }));

    // Automatically hide password after 1 second
    setTimeout(() => {
      setVisibleFields((prev) => ({
        ...prev,
        [field]: false, // Revert visibility for the clicked field
      }));
    }, 500); // Adjust timeout as necessary
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Contact Information */}
      <section>
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <label className="flex mb-2">Map Location</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <label className="flex mb-2">Phone</label>
          <div className="flex items-center border rounded p-2 border-gray-300">
            <select
              className="mr-2 border-r-1 pr-1 border-gray-300 bg-transparent outline-none"
              defaultValue={"+880"}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Phone number.."
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <span className="mr-2">📧</span>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
      </section>

      <hr className="text-gray-300" />

      {/* Change Password */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["current", "new", "confirm"].map((type) => (
            <div key={type} className="relative">
              <input
                type={visibleFields[type] ? "text" : "password"} // Toggle only the clicked field
                name={type} // TypeScript ensures this matches the Passwords keys
                placeholder={
                  type === "current"
                    ? "Current Password"
                    : type === "new"
                    ? "New Password"
                    : "Confirm Password"
                }
                className="w-full border p-2 rounded border-gray-300"
                value={passwords[type]}
                // value={passwords[type as keyof Passwords]} // Use keyof for type-safe dynamic property access
                onChange={handlePasswordChange}
              />
              {/* Eye Icon Button */}
              <button
                type="button"
                onClick={() => toggleFieldVisibility(type)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {visibleFields[type] ? <FiEyeOff /> : <FiEye />}{" "}
                {/* Dynamic icons */}
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => alert(`New Password: ${passwords.new}`)}
        >
          Change Password
        </button>
      </section>

      <hr className="text-gray-300" />

      {/* Delete Company */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Delete Your Company</h2>
        <p className="text-sm text-gray-600 mb-4">
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of Jobpilot.com.
        </p>
        <button
          className="text-red-600 font-semibold flex items-center space-x-1 p-2 rounded hover:bg-gray-300"
          onClick={() => alert("Company deleted")}
        >
          <span>❌</span>
          <span>Close Account</span>
        </button>
      </section>
    </div>
  );
}

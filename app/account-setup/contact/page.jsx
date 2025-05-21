"use client";

import { useRouter } from "next/navigation"; // ⬅️ Add this import at the top
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

// Country data with name, code, and dial code
const countries = [
  { name: "Afghanistan", code: "AF", dialCode: "+93" },
  { name: "Albania", code: "AL", dialCode: "+355" },
  { name: "Algeria", code: "DZ", dialCode: "+213" },
  { name: "Bangladesh", code: "BD", dialCode: "+880" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "somalia", code: "so", dialCode: "+252" },
  { name: "Ethiopia", code: "et", dialCode: "+251" },
  // Add more countries as needed...
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    location: "",
    phone: "",
    email: "",
    countryCode: "+880", // Default to Bangladesh
    country: "BD", // Default country code
  });

  // inside your component:
  const router = useRouter();

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country) => {
    setFormData({
      ...formData,
      countryCode: country.dialCode,
      country: country.code,
    });
    setShowCountryDropdown(false);
  };

  // const handleFinish = () => {
  //   console.log("Submitted:", formData);
  // };

  const handleFinish = () => {
    console.log("Submitted:", formData);
    router.push("/account-setup/message");
  };

  const selectedCountry =
    countries.find((c) => c.code === formData.country) || countries[0];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        {/* Map Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Map Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          />
        </div>

        {/* Phone with Country Selector */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <div className="flex items-center space-x-2 relative">
            {/* Country Code Selector */}
            <div
              className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 cursor-pointer min-w-[120px]"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              <img
                src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                alt={`${selectedCountry.name} Flag`}
                className="w-5 h-4 object-cover mr-2 rounded-sm"
              />
              <span className="text-sm">{selectedCountry.dialCode}</span>
              <IoIosArrowDown className="ml-2 text-gray-500" />

              {/* Country Dropdown */}
              {showCountryDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCountrySelect(country)}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                        alt={`${country.name} Flag`}
                        className="w-5 h-4 object-cover mr-2 rounded-sm"
                      />
                      <span className="text-sm mr-2">{country.dialCode}</span>
                      <span className="text-sm text-gray-600">
                        {country.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Phone Input */}
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone number"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <TfiEmail />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center">
            <FaArrowLeft className="mr-2" />
            Previous
          </button>
          <button
            onClick={handleFinish}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center"
          >
            Finish Editing
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* <div className="text-center text-xs text-gray-400 mt-10 flex flex-col min-h-screen py-40">
          <p>© 2025 MyJob - Job Portal. All rights Reserved</p>
        </div> */}
      </div>
    </div>
  );
}

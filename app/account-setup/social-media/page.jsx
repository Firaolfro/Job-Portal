"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuCirclePlus } from "react-icons/lu";
export default function SocialLinks() {
  const [links, setLinks] = useState([{ platform: "Facebook", url: "" }]);

  const socialPlatforms = [
    { name: "Facebook", icon: FaFacebook },
    { name: "Twitter", icon: FaTwitter },
    { name: "Instagram", icon: FaInstagram },
    { name: "Youtube", icon: FaYoutube },
  ];

  const handleAddLink = () => {
    setLinks([...links, { platform: "Facebook", url: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updated = [...links];
    updated.splice(index, 1);
    setLinks(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...links];
    updated[index][field] = value;
    setLinks(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      {links.map((link, index) => {
        const IconComponent =
          socialPlatforms.find((p) => p.name === link.platform)?.icon ||
          FaFacebook;
        return (
          <div key={index} className="mb-2">
            <label className="block font-Poppins-300 text-gray-700 mb-1">
              Social Link {index + 1}
            </label>
            <div className="flex items-center gap-1">
              <span className="text-Poppins-300 text-blue-600">
                <IconComponent />
              </span>
              <select
                value={link.platform}
                onChange={(e) =>
                  handleChange(index, "platform", e.target.value)
                }
                className="w-40 p-2 border rounded"
              >
                {socialPlatforms.map((platform) => (
                  <option key={platform.name} value={platform.name}>
                    {platform.name}
                  </option>
                ))}
              </select>
              <input
                type="url"
                placeholder="Profile link/url..."
                value={link.url}
                onChange={(e) => handleChange(index, "url", e.target.value)}
                className="flex-grow p-2 border rounded"
              />
              <button
                onClick={() => handleRemoveLink(index)}
                className="bg-gray-200 text-gray-500 p-2 rounded hover:bg-gray-300 border border-gray-300"
              >
                <IoMdCloseCircleOutline />
              </button>
            </div>
          </div>
        );
      })}

      <div className="flex items-center gap-4 my-3">
        <div className="flex-grow border-t border-gray-300"></div>
        <button
          onClick={handleAddLink}
          className="flex items-center justify-center gap-1 text-gray-600 hover:text-gray-800 bg-gray-100 px-65 rounded flex-grow border-t border-gray-300 font-Poppins-300"
        >
          <span className="text-xl font-bold">
            <LuCirclePlus />
          </span>{" "}
          Add New Social Link
        </button>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex gap-2">
        <>
          <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Previous
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Save & Next →
          </button>
        </>
      </div>
      {/* <p className="text-center py-40 text-xs text-gray-400">
        © 2025 MyJob - Job Portal. All rights Reserved
      </p> */}
    </div>
  );
}

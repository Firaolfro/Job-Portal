"use client";

import {
  Facebook,
  Instagram,
  PlusCircle,
  Twitter,
  XCircle,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const platforms = [
  { label: "Facebook", icon: Facebook },
  { label: "Twitter", icon: Twitter },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
];

export default function SocialLinksPage() {
  const [links, setLinks] = useState(
    platforms.map((p, i) => ({ id: i + 1, platform: p.label, url: "" }))
  );

  const addNewLink = () => {
    setLinks([
      ...links,
      { id: links.length + 1, platform: platforms[0].label, url: "" },
    ]);
  };

  const removeLink = (index) => {
    const updated = [...links];
    updated.splice(index, 1);
    setLinks(updated);
  };

  const handlePlatformChange = (index, value) => {
    const updated = [...links];
    updated[index].platform = value;
    setLinks(updated);
  };

  const handleUrlChange = (index, value) => {
    const updated = [...links];
    updated[index].url = value;
    setLinks(updated);
  };

  return (
    // Removed page-level layout styling (px-[15%], bg-[#f5f7fc], min-h-screen, py-10).
    // These responsibilities should belong to a parent layout component (e.g., your dashboard or Settings page wrapper).
    <div className="space-y-6">
      {/* White card for Social Links */}
      <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Social Links
        </h2>
        {links.map((link, index) => {
          const Icon = platforms.find((p) => p.label === link.platform)?.icon;
          return (
            <div key={index} className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Social Link {index + 1}
              </label>
              <div className="flex gap-4 items-center">
                {Icon && <Icon className="h-5 w-5 text-blue-500" />}

                <select
                  value={link.platform}
                  onChange={(e) => handlePlatformChange(index, e.target.value)}
                  className="w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  {platforms.map((p) => (
                    <option key={p.label} value={p.label}>
                      {p.label}
                    </option>
                  ))}
                </select>

                <input
                  type="text" // Specify type for input
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-500 focus:border-blue-500 text-sm"
                  placeholder="Profile link/url..."
                  value={link.url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                />

                <button
                  className="text-gray-400 hover:text-red-500 p-1" // Added some padding for easier clicking
                  onClick={() => removeLink(index)}
                >
                  <XCircle size={20} />{" "}
                  {/* Increased size for better visibility */}
                </button>
              </div>
            </div>
          );
        })}
        <div className="text-center">
          <button
            onClick={addNewLink}
            className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <PlusCircle size={20} className="text-blue-500" /> Add New Social
            Link
          </button>
        </div>
      </div>

      {/* Save Changes button - now positioned as a sibling within the 'space-y-6' container */}
      <div>
        <button className="bg-[#4caf50] text-white py-2 px-4 rounded-md hover:bg-[#388e3c] transition-colors duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
}

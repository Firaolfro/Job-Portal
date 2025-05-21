"use client";

import { Link } from "lucide-react";
import { useState } from "react";

export default function FoundingInfoPage() {
  const [formData, setFormData] = useState({
    orgType: "",
    industry: "",
    teamSize: "",
    year: "",
    website: "",
    vision: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Organization Type
          </label>
          <select
            name="orgType"
            value={formData.orgType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm"
          >
            <option value="">Select...</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
            <option value="ngo">NGO</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Industry Types
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm"
          >
            <option value="">Select...</option>
            <option value="tech">Technology</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Team Size
          </label>
          <select
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm"
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="100+">100+</option>
          </select>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Year of Establishment
          </label>
          <input
            type="date"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Company Website
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Link className="w-4 h-4" />
            </span>
            <input
              type="url"
              name="website"
              placeholder="Website url..."
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md pl-10 py-3 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Company Vision */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Company Vision
        </label>
        <textarea
          name="vision"
          rows="5"
          placeholder="Tell us about your company vision..."
          value={formData.vision}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm"
        />
        {/* Simple formatting icons */}
        <div className="flex gap-4 mt-3 text-gray-500 text-sm">
          <button>B</button>
          <button>I</button>
          <button>U</button>
          <button>•</button>
          <button>1.</button>
          <button>🔗</button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between pt-6">
        <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md text-sm">
          Previous
        </button>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 flex items-center gap-2">
          Save & Next →
        </button>
      </div>
    </div>
  );
}

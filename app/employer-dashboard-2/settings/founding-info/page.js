// src/app/settings/founding-info/page.jsx
"use client";
import { useState } from "react";

export default function FoundingInfoPage() {
  const [formData, setFormData] = useState({
    organizationType: "",
    industryType: "",
    establishmentDate: "",
    website: "",
    vision: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    // <div className="space-y-8">
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <main className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-black mb-1">
              Organization Type
            </label>
            <select
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 text-sm text-black placeholder-gray-500 focus:outline-none"
            >
              <option value="" disabled className="text-gray-500">
                Select...
              </option>
              <option value="private" className="text-black">
                Private
              </option>
              <option value="public" className="text-black">
                Public
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Industry Types
            </label>
            <select
              name="industryType"
              value={formData.industryType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 text-sm text-black placeholder-gray-500 focus:outline-none"
            >
              <option value="" disabled className="text-gray-500">
                Select...
              </option>
              <option value="tech" className="text-black">
                Technology
              </option>
              <option value="finance" className="text-black">
                Finance
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Team Size</label>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 text-sm text-black placeholder-gray-500 focus:outline-none"
            >
              <option value="" disabled className="text-gray-500">
                Select...
              </option>
              <option value="1-10" className="text-black">
                1-10
              </option>
              <option value="11-50" className="text-black">
                11-50
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-black mb-1">
              Year of Establishment
            </label>
            <input
              type="date"
              name="establishmentDate"
              value={formData.establishmentDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-black mb-1">
              Company Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website url..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-black mb-1">
            Company Vision
          </label>
          <div className="border border-gray-300 rounded-lg p-2">
            <textarea
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              className="w-full min-h-[150px] p-2 focus:outline-none resize-y text-sm placeholder-gray-500"
              placeholder="Tell us what the vision of your company is..."
            />
            <div className="flex items-center gap-1 pt-1 border-t border-gray-200">
              <button
                type="button"
                onClick={() => applyFormatting("b")}
                className="px-2 py-1 hover:bg-gray-100 rounded font-bold text-sm"
                title="Bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => applyFormatting(i)}
                className="px-2 py-1 hover:bg-gray-100 rounded italic text-sm"
                title="Italic"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => applyFormatting("u")}
                className="px-2 py-1 hover:bg-gray-100 rounded underline text-sm"
                title="Underline"
              >
                U
              </button>
              <button
                type="button"
                onClick={() => applyFormatting("s")}
                className="px-2 py-1 hover:bg-gray-100 rounded line-through text-sm"
                title="Strikethrough"
              >
                S
              </button>
              <div className="h-4 w-px bg-gray-300 mx-1"></div>
              <button
                type="button"
                onClick={() => applyFormatting("ul")}
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm"
                title="Bullet List"
              >
                ••
              </button>
              <button
                type="button"
                onClick={() => applyFormatting("ol")}
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm"
                title="Numbered List"
              >
                1.
              </button>
              <div className="h-4 w-px bg-gray-300 mx-1"></div>
              <button
                type="button"
                onClick={() => applyFormatting("link")}
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm"
                title="Insert Link"
              >
                🔗
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Save Changes
        </button>
      </main>
    </div>
  );
}

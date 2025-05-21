'use client';

import React, { useState } from 'react';

export default function Page() {

  const [biography, setBiography] = useState('');
  const [formData, setFormData] = useState({
    experience: '',
    dateTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="w-1/2 pt-6">
        <div className="flex justify-between">
          <div>
            <label className="flex text-sm pb-2">Nationality</label>
            <select 
              name="experience" 
              className="w-63 border rounded-md p-2 mb-2 border-gray-300 text-gray-400" 
              value={formData.experience} 
              onChange={handleChange}
            >
              <option value="" disabled>Select...</option>
              <option value="ethiopian">Ethiopian</option>
              <option value="kenyan">Kenyan</option>
              <option value="nigerian">Nigerian</option>
            </select>
          </div>
          <div>
            <label className="flex text-sm pb-2">Date of Birth</label>
            <input
              type="datetime-local"
              name="dateTime"
              className="w-63 border rounded-md p-2 mb-2 border-gray-300 text-gray-400"
              value={formData.dateTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <label className="flex text-sm pb-2">Gender</label>
            <select 
              name="experience" 
              className="w-63 border rounded-md p-2 mb-2 border-gray-300 text-gray-400" 
              value={formData.experience} 
              onChange={handleChange}
            >
              <option value="" disabled>Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="flex text-sm pb-2">Marital Status</label>
            <select 
              name="experience" 
              className="w-63 border rounded-md p-2 mb-2 border-gray-300 text-gray-400" 
              value={formData.experience} 
              onChange={handleChange}
            >
              <option value="" disabled>Select...</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <label className="flex text-sm pb-2">Education</label>
            <select 
              name="experience" 
              className="w-63 border rounded-md p-2 mb-2 border-gray-300 text-gray-400" 
              value={formData.experience} 
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="associate Degree">Associate Degree</option>
              <option value="bachelor's Degree">Bachelor's Degree</option>
              <option value="master's Degree">Master's Degree</option>
            </select>
          </div>        
          <div>
            <label className="flex text-sm pb-2">Experience</label>
            <select 
              name="experience" 
              className="w-63 border rounded-md p-2 mb-2 border-gray-300 text-gray-400" 
              value={formData.experience} 
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="junior">Junior</option>
              <option value="mid-level">Mid-Level</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <label htmlFor="biography" className="text-sm font-bold">Biography</label>
        <div className="w-138 border rounded-md p-2">
          <textarea
            id="biography"
            className="w-full h-36 mt-2 p-2 text-gray-700 resize-none"
            placeholder="Write down your biography here. Let the employers know who you are..."
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
          <div className="flex space-x-2 mt-2 text-gray-400">
            <button className=" font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
            <button className="line-through">S</button>
            <button className="">1.</button>
            <button className=" italic">I</button>
          </div>
        </div>
        <button 
          className="bg-blue-500 text-white rounded-md p-2 mt-4" 
          onClick={() => alert("Changes Saved")}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { LuCloudUpload } from "react-icons/lu";

const ProfileUpdateForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [cvName, setCvName] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    headline: '',
    experience: '',
    education: '',
    website: '',
  });

  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB.');
        return;
      }
      setPdf(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold pb-3">Basic Information</h2>
      <div className="flex flex-row space-x-6 items-start">
        <div>
          <p className="pb-1 text-sm">Profile Picture</p>
          <label className="w-60 h-60 bg-gray-50 cursor-pointer border-3 border-dashed rounded-md p-4 flex flex-col items-center justify-center text-gray-400">
            {image ? (
              <img src={image} alt="Profile preview" className="w-32 h-32 mx-auto rounded-full object-cover" />
            ) : (
              <>
                <LuCloudUpload className="h-10 w-10" />
                <p className="font-bold text-sm text-black">
                  Browse photo <span className="font-semibold text-gray-600">or drop here</span>
                </p>
                <p className="text-sm">A photo larger than 400 pixels works best. Max photo size 5MB.</p>
              </>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <div className="w-1/2">
          <div className="flex justify-between pb-4">
            <div>
              <label className="flex text-sm pb-2">Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name" className="w-63 border rounded-md p-2 mb-2" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
              <label className="flex text-sm pb-2">Title/Headline</label>
              <input type="text" name="headline" placeholder="Enter your headline" className="w-63 border rounded-md p-2 mb-2" value={formData.headline} onChange={handleChange} />
            </div>
          </div>
          <div className="flex justify-between pb-4">
            <div>
              <label className="flex text-sm pb-2">Experience</label>
              <select name="experience" className="w-63 border rounded-md p-2 mb-2" value={formData.experience} onChange={handleChange}>
                <option value="">Select experience...</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-Level</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div>
              <label className="flex text-sm pb-2">Education</label>
              <select name="education" className="w-63 border rounded-md p-2 mb-2" value={formData.education} onChange={handleChange}>
                <option value="">Select education...</option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor’s Degree</option>
                <option value="master">Master’s Degree</option>
              </select>
            </div>
          </div>
          <div>
            <label className="flex text-sm pb-2">Personal Website</label>
            <input type="text" name="website" placeholder="Website URL..." className="w-full border rounded-md p-2 mb-2" value={formData.website} onChange={handleChange} />
          </div>
          <div className="pb-4">
            <button className="bg-blue-500 text-white rounded-md p-2 mt-4" onClick={() => alert("Changes Saved")}>
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="font-bold text-lg">Your CV/Resume</p>
        <div onClick={()=> setShowModal(true)} className="cursor-pointer">
          <label 
            className="w-64 bg-gray-50 cursor-pointer border-3 border-dashed rounded-md p-4 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-200 transition"
          >
            <p className="font-bold text-sm text-black">Add Cv/Resume</p>
            <p className="text-sm">Browse file or drop here. Only PDF</p>
          </label>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="bg-white p-6 rounded-md shadow-lg w-100 h-90 relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute border-1 border-black/50 top-0 right-0 bg-blue-100 text-blue-500 w-8 h-8 flex items-center justify-center hover:bg-red-600 hover:text-white"
              >
                ✕
              </button>
              <h2 className="font-bold">Add Cv/Resume</h2>
              <label className="flex text-sm pb-2">Cv/Resume Name</label>
              <input 
                type="text" 
                name="cvName" 
                value={cvName || (pdf ? pdf.name : '')}
                onChange={(e) => setCvName(e.target.value)}
                className="w-full border rounded-md p-2 mb-2"
              />    
              <p className="pb-1 text-sm">Upload your Cv/Resume</p>
              <label className="w-full h-32 bg-gray-50 cursor-pointer border-3 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-400">
                <LuCloudUpload className="h-10 w-10" />
                <p className="font-bold text-sm text-black">
                Browse File <span className="font-semibold text-gray-600">or drop here</span>
                </p>
                <p className="text-gray-500">Only PDF format available. Max file size 12 MB</p>
                <input 
                  type="file" 
                  accept="application/pdf" 
                  className="hidden"
                  onChange={handlePdfUpload}
                />
              </label>           
              <div className="flex justify-between items-center pt-4">
                <button 
                  onClick={() => {
                    setCvName('');
                    setPdf(null); 
                  }}
                  className="bg-blue-100 text-blue-500 p-2 px-4 rounded-md mt-4 hover:bg-blue-200 hover:text-blue-600"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => alert('CV Added Successfully!')}
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-green-600"
                >
                  Add Cv/Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
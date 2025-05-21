"use client"; // This directive is necessary for Client Components in Next.js App Router
import { useState } from "react";

import SuccessPopup from "./SuccessPopup"; // Adjust path accordingly

export default function PostJobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [tags, setTags] = useState("");
  const [jobRole, setJobRole] = useState("");

  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [education, setEducation] = useState("");
  const [vacancies, setVacancies] = useState("");

  const [experience, setExperience] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [applyJobOn, setApplyJobOn] = useState("On Jobpilot"); // Default selection
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  // State to control the visibility of the success popup
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend API
    const jobData = {
      jobTitle,
      tags,
      jobRole,
      minSalary,
      maxSalary,
      salaryType,
      education,
      vacancies,
      experience,
      expirationDate,
      jobType,
      jobLevel,
      applyJobOn,
      description,
      responsibilities,
    };
    console.log("Job Data Submitted:", jobData);
    // Replace alert with showing the success popup
    setShowSuccessPopup(true);
    // You might want to clear the form or redirect the user after submission
  };

  // Function to close the popup
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    // Optionally, you can reset the form fields here if you want them to clear after the popup closes
    // For example:
    // setJobTitle("");
    // setTags("");
    // setJobRole("");
    // setMinSalary("");
    // setMaxSalary("");
    // setSalaryType("");
    // setEducation("");
    // setVacancies("");
    // setExperience("");
    // setExpirationDate("");
    // setJobType("");
    // setJobLevel("");
    // setApplyJobOn("On Jobpilot");
    // setDescription("");
    // setResponsibilities("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto my-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title, Tags, Job Role */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add job title, role, vacancies etc"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Job keyword, tags etc...."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="jobRole"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Role
            </label>
            <select
              id="jobRole"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>
        </div>

        {/* Salary Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Salary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="minSalary"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Min Salary
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="minSalary"
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Minimum salary"
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  USD
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="maxSalary"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Max Salary
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="maxSalary"
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Maximum salary"
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  USD
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="salaryType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Salary Type
              </label>
              <select
                id="salaryType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option value="Annually">Annually</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Advance Information */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Advance Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Education
              </label>
              <select
                id="education"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Experience
              </label>
              <select
                id="experience"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="Entry Level">Entry Level</option>
                <option value="1-2 Years">1-2 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Type
              </label>
              <select
                id="jobType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="vacancies"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Vacancies
              </label>
              <input
                type="number"
                id="vacancies"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select..."
                value={vacancies}
                onChange={(e) => setVacancies(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="expirationDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expiration Date
              </label>
              <input
                type="date" // Using type="date" for a date picker
                id="expirationDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="jobLevel"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Level
              </label>
              <select
                id="jobLevel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={jobLevel}
                onChange={(e) => setJobLevel(e.target.value)}
              >
                <option value="">Select....</option>
                <option value="Junior">Junior</option>
                <option value="Mid-Level">Mid-Level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>
        </div>

        {/* Apply Job on */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Apply Job on:
          </h2>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name="applyJobOn"
                value="On Jobpilot"
                checked={applyJobOn === "On Jobpilot"}
                onChange={(e) => setApplyJobOn(e.target.value)}
                className="form-radio h-5 w-5 text-blue-600 mt-1"
              />
              <div>
                <span className="block text-md font-medium text-gray-700">
                  On Jobpilot
                </span>
                <p className="text-sm text-gray-500">
                  Candidate will apply job using Jobpilot & all application will
                  show on your dashboard.
                </p>
              </div>
            </label>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name="applyJobOn"
                value="External Platform"
                checked={applyJobOn === "External Platform"}
                onChange={(e) => setApplyJobOn(e.target.value)}
                className="form-radio h-5 w-5 text-blue-600 mt-1"
              />
              <div>
                <span className="block text-md font-medium text-gray-700">
                  External Platform
                </span>
                <p className="text-sm text-gray-500">
                  Candidate apply job on your website, all application on your
                  own website.
                </p>
              </div>
            </label>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name="applyJobOn"
                value="On Your Email"
                checked={applyJobOn === "On Your Email"}
                onChange={(e) => setApplyJobOn(e.target.value)}
                className="form-radio h-5 w-5 text-blue-600 mt-1"
              />
              <div>
                <span className="block text-md font-medium text-gray-700">
                  On Your Email.
                </span>
                <p className="text-sm text-gray-500">
                  Candidate apply job on your email address, and all application
                  in your email.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Description & Responsibility */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Description & Responsibility
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Add your job description...."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              {/* You can add rich text editor controls (BIUS) here if needed */}
            </div>
            <div>
              <label
                htmlFor="responsibilities"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Responsibilities
              </label>
              <textarea
                id="responsibilities"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32"
                placeholder="Add your job responsibilities...."
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
                required
              ></textarea>
              {/* You can add rich text editor controls (BIUS) here if needed */}
            </div>
          </div>
        </div>

        {/* Post Job Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Post Job →
          </button>
        </div>
      </form>

      {/* Success Popup Component */}
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={closeSuccessPopup}
        jobRole={jobRole} // Pass the dynamically selected job role to the popup
      />
    </div>
  );
}

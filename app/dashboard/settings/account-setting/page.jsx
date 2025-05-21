"use client";

import { Mail, MapPin } from "lucide-react";
import React from "react";

export default function AccountSettingsPage() {
  const [showPasswords, setShowPasswords] = React.useState({
    current: false,
    new: false,
    confirm: false,
  });

  const CustomCheckbox = ({ defaultChecked, disabled, children, ...props }) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    return (
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          disabled={disabled}
          {...props}
        />
        <span className="ml-2 text-sm">{children}</span>
      </label>
    );
  };

  const CustomSwitch = ({ defaultChecked, children, ...props }) => {
    const [isOn, setIsOn] = React.useState(defaultChecked || false);
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
          {...props}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        {children && (
          <span className="ml-3 text-sm font-medium text-gray-900">
            {children}
          </span>
        )}
      </label>
    );
  };

  return (
    // This outermost div ensures the component takes up the full available width
    // of its parent container, preventing it from being implicitly centered.
    // The light grey background is also applied here.
    <div className="w-full min-h-screen bg-[#f5f7fc] text-gray-800">
      {/* This container handles the max width and the top/horizontal padding
          for the main content area. With `mx-auto` removed, and the parent
          div taking `w-full`, this content should now align to the left. */}
      <div className="max-w-5xl pt-10 lg:pt-14 px-10 lg:px-14">
        {/* The "Settings" header and tabs are commented out in the provided
            snippet but are expected to be rendered here, aligning with this container. */}
        {/* Example of where the header and tabs would fit if they were part of this component: */}
        {/* <h1 className="text-3xl font-semibold text-gray-900 mb-10">Settings</h1>
        <div className="flex space-x-4 border-b border-gray-200 pb-4 mb-10">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200">
            Personal
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200">
            Profile
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors duration-200">
            Social Links
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            Account Setting
          </button>
        </div> */}

        {/* This div will contain all the individual setting sections/cards */}
        <div className="space-y-14">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 border">
            <div className="space-y-4">
              <label className="block font-medium text-sm">Map Location</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <MapPin className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pl-10"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block font-medium text-sm">Phone</label>
              <div className="flex gap-2">
                <div className="flex items-center px-3 bg-gray-100 rounded-md border text-sm">
                  +880
                </div>
                <input
                  type="text"
                  placeholder="Phone number.."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block font-medium text-sm">Email</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Mail className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm pl-10"
                />
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-[#007bff] hover:bg-[#006ae0] text-white py-2 px-4 rounded-md transition-colors duration-200">
                Save Changes
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-8 border">
            <h2 className="text-2xl font-semibold">Notification</h2>
            <div className="grid grid-cols-2 gap-4">
              <CustomCheckbox defaultChecked>
                Notify me when employers shortlisted me
              </CustomCheckbox>
              <CustomCheckbox>
                Notify me when employers saved my profile
              </CustomCheckbox>
              <CustomCheckbox disabled>
                Notify me when my applied jobs are expired
              </CustomCheckbox>
              <CustomCheckbox defaultChecked>
                Notify me when employers rejected me
              </CustomCheckbox>
              <CustomCheckbox defaultChecked>
                Notify me when I have up to 5 job alerts
              </CustomCheckbox>
            </div>
          </div>

          {/* Job Alert Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 border">
            <h2 className="text-2xl font-semibold">Job Alerts</h2>
            <div className="grid grid-cols-2 gap-[3%]">
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <input
                  type="text"
                  placeholder="Your job roles"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  placeholder="City, state, country name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-[#007bff] hover:bg-[#006ae0] text-white py-2 px-4 rounded-md transition-colors duration-200">
                Save Changes
              </button>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-10 border">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Profile Privacy</h3>
                {/* Removed 'border' class from the div below to remove its border */}
                <div className="flex items-center justify-between px-4 py-3 rounded-md">
                  <CustomSwitch defaultChecked />
                  <span>Your profile is public now</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Resume Privacy</h3>
                {/* Removed 'border' class from the div below to remove its border */}
                <div className="flex items-center justify-between px-4 py-3 rounded-md">
                  <CustomSwitch />
                  <span>Your resume is private now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 border">
            <h2 className="text-xl font-semibold text-gray-800">
              Change Password
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["current", "new", "confirm"].map((type) => (
                <div className="space-y-2" key={type}>
                  <label className="block text-sm text-gray-700">
                    {type === "current"
                      ? "Current Password"
                      : type === "new"
                      ? "New Password"
                      : "Confirm Password"}
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords[type] ? "text" : "password"}
                      placeholder="Password"
                      className="px-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <div
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                      onClick={() =>
                        setShowPasswords({
                          ...showPasswords,
                          [type]: !showPasswords[type],
                        })
                      }
                    >
                      {showPasswords[type] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.06 13.81A11.53 11.53 0 0 0 12 20c1.57 0 3.1-.29 4.53-.85M18.49 16.94A11.5 11.5 0 0 0 22 12c-2.77-5.42-8.14-9-14-9a10.5 10.5 0 0 0-2.06.23"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#006ae0] transition-colors duration-200">
              Save Changes
            </button>
          </div>

          {/* Delete Account */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4 border">
            <h2 className="text-xl font-semibold text-gray-800">
              Delete Your Account
            </h2>
            <p className="text-gray-500 max-w-2xl">
              If you delete your Jobpilot account, you will no longer be able to
              get information about matched jobs, followed employers, alerts,
              and more. You’ll be removed from all Jobpilot.com services.
            </p>
            <button className="flex items-center text-red-600 font-medium hover:underline">
              <span className="text-2xl mr-2">&#10006;</span> Close Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

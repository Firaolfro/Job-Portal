"use client";
import { useState } from "react";

export default function AccountSettingPage() {
  const [contactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleSaveChanges = () => {
    console.log("Saving contact info:", contactInfo);
    // Add your save logic here
  };

  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match");
      return;
    }
    console.log("Changing password:", passwords);
    // Add your password change logic here
  };

  const handleCloseAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to close your account? This action cannot be undone."
    );
    if (confirmed) {
      // Account deletion logic here
      console.log("Account closed");
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Phone"
            value={contactInfo.phone}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, phone: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleSaveChanges}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Change Password</h2>
        <div className="mt-4 space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            value={passwords.current}
            onChange={(e) =>
              setPasswords({ ...passwords, current: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="New Password"
            value={passwords.new}
            onChange={(e) =>
              setPasswords({ ...passwords, new: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwords.confirm}
            onChange={(e) =>
              setPasswords({ ...passwords, confirm: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleChangePassword}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-red-600">
          Delete Your Company
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, job alerts,
          and more.
        </p>
        <button
          onClick={handleCloseAccount}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Close Account
        </button>
      </div>
    </div>
  );
}

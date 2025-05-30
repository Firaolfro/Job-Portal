"use client";

import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function ResetPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const timeoutRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const togglePasswordVisibility = (type) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Toggle the requested password visibility
    if (type === "new") {
      setShowNewPassword(true);
      setShowConfirmPassword(false); // Ensure the other field is hidden
    } else {
      setShowConfirmPassword(true);
      setShowNewPassword(false); // Ensure the other field is hidden
    }

    // Set new timeout to hide both after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setShowNewPassword(false);
      setShowConfirmPassword(false);
    }, 5000);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 p-4 ${poppins.className}`}
    >
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Reset Password
          </h1>
          <p className="text-gray-600 text-sm">
            Secure your account by creating a new password.
            <br />
            Make sure it's strong and unique to protect your information.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-3">
            <div className="relative">
              <input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-700 placeholder-gray-400"
                placeholder="New Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => togglePasswordVisibility("new")}
              >
                {showNewPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>

            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-700 placeholder-gray-400"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => togglePasswordVisibility("confirm")}
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={16} />
                ) : (
                  <FiEye size={16} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 flex items-center justify-center"
          >
            Reset Password
            <FiArrowRight className="ml-2" size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

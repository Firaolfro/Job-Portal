"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // In a real application, you would send the new password
    // and a reset token (likely from the router query) to your
    // backend for verification and password update.

    console.log("Resetting password with:", {
      newPassword,
      token: router.query.token,
    });

    // Simulate successful password reset
    setTimeout(() => {
      console.log("Password reset successful!");
      router.push("/login"); // Redirect to login page after successful reset
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <div className="flex justify-center">
          <span className="font-bold text-xl text-gray-800">MyJob</span>
        </div> */}

        <Link href="/" className="mb-2 block">
          <Image
            src="/logo.png"
            alt="MyJob Logo"
            width={100}
            height={100}
            priority
            className="mx-auto   "
          />
        </Link>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-6">
          <div className="mb-6">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Reset Password
            </h2>

            <p className="text-gray-600 text-sm">
              Secure your account by creating a new password.
              <br />
              Make sure it's strong and unique to protect your information.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleResetPassword}>
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="new-password"
                  name="new-password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-2.018 8-6.292 8-4.274 0-8.065-3.943-9.34-8z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={confirmPasswordVisible ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-2.018 8-6.292 8-4.274 0-8.065-3.943-9.34-8z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      There were{" "}
                      {error.includes("do not match") ? "an issue" : "issues"}{" "}
                      with your submission
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Password
                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-4-4a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 00-1 1v2a1 1 0 001 1h3.586l-1.293 1.293a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

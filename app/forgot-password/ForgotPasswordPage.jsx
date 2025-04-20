"use client";

import Link from "next/link";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [resetStatus, setResetStatus] = useState(null); // Can be 'success', 'error', null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResetStatus(null);

    // Simulate sending a password reset email (replace with actual API call)
    setTimeout(() => {
      if (email) {
        setResetStatus("success");
        // In a real app, you'd likely show a message like "Check your email..."
      } else {
        setResetStatus("error");
      }
      setIsSubmitting(false);
    }, 1500);

    // In a real application, you would make a fetch request to your forgot password API endpoint:
    // try {
    //   const response = await fetch("/api/forgot-password", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });
    //   const data = await response.json();
    //   if (response.ok && data.success) {
    //     setResetStatus('success');
    //   } else {
    //     setResetStatus('error');
    //   }
    // } catch (error) {
    //   setResetStatus('error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full mx-auto my-8 p-6">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            {/* Replace with your logo component or image */}
            <svg
              className="w-6 h-6 mr-2 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-800">MyJob</h2>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Forget Password
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Go back to{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
            <br />
            Don't have account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {resetStatus === "error" && (
            <p className="text-red-500">
              There was an error sending the reset link.
            </p>
          )}
          {resetStatus === "success" && (
            <p className="text-green-500">
              If an account with that email exists, a reset link has been sent.
            </p>
          )}

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email address"
              className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Reset Password"}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </form>

        <div className="relative my-3">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-1 px-2 rounded flex items-center justify-center gap-1 text-sm">
            <img src="/logos/facebook.png" alt="Facebook" className="w-5 h-5" />
            Sign in with Facebook
          </button>
          <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-1 px-2 rounded flex items-center justify-center gap-1 text-sm">
            <img src="/logos/google.png" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

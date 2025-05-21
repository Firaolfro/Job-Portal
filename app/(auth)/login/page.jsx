"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "rememberMe") setRememberMe(checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        console.log("Login successful");
        // Redirect here
      } else {
        setLoginError("Invalid email or password.");
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full mx-auto my-4 p-2">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            {/* <svg
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
            </svg> */}
            {/* <h2 className="text-xl font-semibold text-gray-800">MyJob</h2> */}
            <Link href="/" className="mb-2 block">
              <Image
                src="/logo.png"
                alt="MyJob Logo"
                width={100}
                height={100}
                priority
                className="mx-auto   "
              />
            </Link>{" "}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign in</h3>
          <p className="text-gray-600 text-sm mb-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Create Account
            </Link>
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-600 text-sm">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleInputChange}
              />
              Remember Me
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot password
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center gap-2 focus:outline-none focus:shadow-outline"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
            {!isSubmitting && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            )}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        {/* Updated Social Buttons - Side by Side */}
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

export default LoginPage;

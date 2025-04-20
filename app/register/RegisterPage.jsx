"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    role: "Job Seeker",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setSignupError("Please agree to the Terms of Services.");
      return;
    }

    setIsSubmitting(true);
    setSignupError("");

    setTimeout(() => {
      router.push(`/verifyEmail?email=${formData.email}`);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6 relative">
        {/* Logo & Dropdown */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
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
                d="M21 13.255A16.305 16.305 0 0112 15c-2.343 0-4.487-.79-6.255-2.245M12 15l-4 4m5-14a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-800">MyJob</h2>
          </div>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="Job Seeker">Job Seeker</option>
            <option value="Employer">Employer</option>
          </select>
        </div>

        {/* Header */}
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Create account.
          </h3>
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {signupError && <p className="text-red-500">{signupError}</p>}

          {/* Full Name & Username */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <label className="text-sm text-gray-600">
              I've read and agree with our{" "}
              <Link href="/terms" className="text-blue-500 hover:underline">
                Terms of Services
              </Link>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
            <svg
              className="w-4 h-4"
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

        {/* Divider */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        {/* Social Buttons Grid */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1 px-2 rounded flex items-center justify-center gap-1 text-sm">
            <img src="/logos/facebook.png" alt="Facebook" className="w-5 h-5" />
            Sign up with Facebook
          </button>

          <button className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-1 px-2 rounded flex items-center justify-center gap-1 text-sm">
            <img src="/logos/google.png" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

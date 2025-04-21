"use client";

import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";

const EmailVerificationPage = ({ email }) => {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendError, setResendError] = useState("");
  const [resendSuccess, setResendSuccess] = useState("");

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setVerificationStatus("error");
      return;
    }

    setVerificationStatus(null);

    // Sample verification for testing purposes
    if (verificationCode === "123456") {
      setVerificationStatus("success");
      router.push("/login");
    } else {
      setVerificationStatus("error");
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    setResendError("");
    setResendSuccess(
      "Verification email resent successfully. Please check your inbox."
    );
    setTimeout(() => {
      setResendLoading(false);
    }, 2000);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="MyJob" className="h-10" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Email Verification
          </h2>

          {/* Instructions */}
          {email ? (
            <p className="text-gray-600 mb-4 text-center">
              We've sent a verification to{" "}
              <strong className="font-medium">{email}</strong> to verify your
              email address and activate your account.
            </p>
          ) : (
            <p className="text-gray-600 mb-4 text-center">
              Please check your email to verify your account.
            </p>
          )}

          {/* Input */}
          <div className="mb-4">
            <label
              htmlFor="verificationCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              autoFocus
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Verification Message */}
          {verificationStatus === "error" && (
            <p className="text-red-500 text-sm text-center mb-2">
              Invalid verification code.
            </p>
          )}
          {verificationStatus === "success" && (
            <p className="text-green-500 text-sm text-center mb-2">
              Email verified successfully!
            </p>
          )}

          {/* Verify Button */}
          <button
            onClick={handleVerifyCode}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-medium transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
            disabled={!verificationCode}
          >
            Verify My Account <span className="text-lg">→</span>
          </button>

          {/* Resend Link */}
          <div className="text-center mt-4">
            {resendSuccess && (
              <p className="text-green-500 text-sm">{resendSuccess}</p>
            )}
            {resendError && (
              <p className="text-red-500 text-sm">{resendError}</p>
            )}

            <p className="text-sm text-gray-600 mt-2">
              Didn’t receive any code?{" "}
              <button
                onClick={handleResendCode}
                className="text-blue-600 hover:underline disabled:opacity-50"
                disabled={resendLoading}
              >
                {resendLoading ? "Resending..." : "Resend"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default EmailVerificationPage;

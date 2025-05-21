// app/employer-dashboard/PostJobContent.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CheckoutContent from "./CheckoutContent";

// Pricing plans data (remains the same)
const plans = [
  {
    name: "BASIC",
    price: "$19",
    period: "/Monthly",
    features: [
      "Post 1 Job",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 5 Candidates",
      "10 Days Resume Visibility",
      "24/7 Critical Support",
    ],
    recommended: false,
  },
  {
    name: "STANDARD",
    price: "$39",
    period: "/Monthly",
    features: [
      "3 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 10 Candidates",
      "20 Days Resume Visibility",
      "24/7 Critical Support",
    ],
    recommended: true,
  },
  {
    name: "PREMIUM",
    price: "$59",
    period: "/Monthly",
    features: [
      "6 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 20 Candidates",
      "30 Days Resume Resume Visibility",
      "24/7 Critical Support",
    ],
    recommended: false,
  },
];

// Add onPaymentSuccess as a prop
export default function PostJobContent({ onPaymentSuccess }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // This function will be called by CheckoutContent when payment is successful
  const handlePaymentSuccess = () => {
    // You might want to do something with the selected plan here before
    // calling the external onPaymentSuccess
    onPaymentSuccess(); // Call the prop to advance the stage in page.jsx
  };

  if (selectedPlan) {
    // Pass the handlePaymentSuccess function to CheckoutContent
    return (
      <CheckoutContent
        selectedPlan={selectedPlan}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <>
      {/* Header */}
      <section className="mb-12 pt-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-xl font-semibold mb-2">
            Buy Premium Subscription to Post a Job
          </h2>
          <p className="text-gray-500 pt-5">
            Donec eu dui ut dolor commodo ornare. Sed arcu libero, malesuada
            quis justo sit amet, varius tempus neque. Quisque ultrices mi sed
            lorem condimentum, vel tempus lectus ultricies.
          </p>
        </div>

        <div className="w-60 md:w-80">
          <Image
            src="/images/image.png"
            alt="Job Posting Illustration"
            width={700}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </section>
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white border rounded-2xl shadow-sm p-6 flex flex-col relative ${
              plan.recommended ? "border-blue-600" : "border-gray-200"
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow">
                Recommendation
              </div>
            )}

            <h3 className="text-xl font-semibold mb-1 text-gray-800">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {plan.price}
              <span className="text-base text-gray-500 font-medium">
                {plan.period}
              </span>
            </p>

            {/* Horizontal Divider */}
            <hr className="my-4 border-t border-gray-200 w-full" />

            {/* Features */}
            <ul className="space-y-3 text-sm text-gray-700 pb-15">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 bg-gray-200 text-blue-600 rounded-full mr-2 text-xs font-bold">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => setSelectedPlan(plan)}
              className={`w-full rounded font-medium transition-all duration-200 flex justify-center items-center gap-2 mt-auto py-2.5 ${
                plan.recommended
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              Choose Plan <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

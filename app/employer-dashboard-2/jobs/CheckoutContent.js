// employer-dashboard-2/CheckoutContent.js

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // You might still need this for other reasons, but not for changing main dashboard content.

import { useState } from "react";
import { BiCreditCard } from "react-icons/bi"; // Import for card icon
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

export default function CheckoutContent({
  selectedPlan,
  onPaymentSuccess,
  onClose,
}) {
  // Ensure onClose is passed as a prop
  const router = useRouter(); // Initialize useRouter hook

  // State for form inputs
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'paypal'
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState("existing"); // 'existing' or 'new'

  // For demonstration, let's assume a Premium plan is selected if not provided
  const defaultSelectedPlan = selectedPlan || {
    name: "Premium",
    price: "$59",
    period: "/Monthly",
    features: [
      "6 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 20 Candidates",
      "30 Days Resume Visibility",
      "24/7 Critical Support",
    ],
  };

  // This handles both the form submission and the button clicks
  // It does not receive the event object (e) as it's often called directly via onClick
  const handlePaymentSubmit = () => {
    // Simulate payment processing
    console.log("Processing payment for:", selectedPlan);
    // In a real application, you'd make an API call here
    setTimeout(() => {
      console.log("Payment successful!");
      onPaymentSuccess(); // This will update the state in DashboardPage
      // If you intend to close the modal here, call onClose():
      if (onClose) {
        onClose();
      }
      // REMOVE or COMMENT OUT THE LINE BELOW if onPaymentSuccess handles navigation:
      // router.push("/employer-dashboard/PostJobContent/post-a-a-job");
    }, 2000);
  };

  return (
    // <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">

    // <div className="fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">

    <div
      className="fixed inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-auto overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Checkout</h2>
          <button
            onClick={onClose} // Call the onClose prop to close the modal
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Payment System */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Payment System
            </h3>
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`pb-3 px-4 font-medium transition-all duration-200 relative ${
                  paymentMethod === "card"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                Debit/Credit Card
              </button>
              <button
                className={`pb-3 px-4 font-medium transition-all duration-200 relative ${
                  paymentMethod === "paypal"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                Paypal
              </button>
            </div>

            {paymentMethod === "card" && (
              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                {/* Existing Card Section */}
                <label
                  htmlFor="existingCard"
                  className={`block border p-4 rounded-lg cursor-pointer ${
                    selectedPaymentOption === "existing"
                      ? "border-blue-600 ring-1 ring-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="existingCard"
                        name="paymentCardOption"
                        className="form-radio h-4 w-4 text-blue-600"
                        checked={selectedPaymentOption === "existing"}
                        onChange={() => setSelectedPaymentOption("existing")}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          {/* Assuming a small card logo can be here */}
                          <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png"
                            alt="Mastercard"
                            className="h-4"
                          />
                          <span className="font-medium text-gray-800">
                            Card Number
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          5847 **** **** ****
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">Name on Card</p>
                      <p className="text-sm text-gray-600">Esther Howard</p>
                    </div>
                  </div>
                </label>

                {/* New Payment Card Section */}
                <label
                  htmlFor="newCardOption"
                  className={`block border p-4 rounded-lg cursor-pointer ${
                    selectedPaymentOption === "new"
                      ? "border-blue-600 ring-1 ring-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="newCardOption"
                      name="paymentCardOption"
                      className="form-radio h-4 w-4 text-blue-600"
                      checked={selectedPaymentOption === "new"}
                      onChange={() => setSelectedPaymentOption("new")}
                    />
                    <span className="font-medium text-gray-800">
                      New payment card
                    </span>
                  </div>
                </label>

                {selectedPaymentOption === "new" && (
                  <div className="pl-7 space-y-4 mt-4">
                    {" "}
                    {/* Added pl-7 for indentation */}
                    <div>
                      <label
                        htmlFor="nameOnCard"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="nameOnCard"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                        placeholder="Name"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Credit Card
                      </label>
                      <div className="relative">
                        <BiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="cardNumber"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                          placeholder="Card number"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="expiryDate"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          MM/YY
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cvc"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                          placeholder="CVC"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}

            {paymentMethod === "paypal" && (
              <div className="text-center py-10 border border-gray-300 rounded-lg bg-gray-50">
                <p className="text-lg text-gray-700 mb-4">
                  You will be redirected to PayPal to complete your purchase.
                </p>
                <button
                  onClick={handlePaymentSubmit} // This button will also trigger redirection
                  className="bg-yellow-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center gap-2 mx-auto"
                >
                  Continue with PayPal <FaArrowRight />
                </button>
              </div>
            )}

            {/* Security message - kept outside form for general payment security */}
            <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
              <MdOutlineSecurity className="text-xl text-gray-600" /> Your
              payment information is secure.
            </p>
          </div>

          {/* Summary */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Summary
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Pricing Plans:</span>
                  <span className="font-medium text-gray-800">
                    {defaultSelectedPlan.name}
                  </span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl mb-4">
                  <span>Total:</span>
                  <span>{defaultSelectedPlan.price} USD</span>
                </div>
                <button
                  type="submit"
                  onClick={handlePaymentSubmit} // This button will also trigger redirection
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Choose Plan <FaArrowRight className="ml-1" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                This package will expire after one month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

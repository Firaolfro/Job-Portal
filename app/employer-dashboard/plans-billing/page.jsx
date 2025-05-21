// app/employer-dashboard/plans-billing/page.jsx
// This component displays the Plans & Billing information.

"use client";

import { useState, useEffect } from "react";
import { CreditCard, Calendar, Download } from "lucide-react"; // Assuming you have these icons

// Mock data based on the "37_Plans & Billing.pdf"
const mockBillingInfo = {
  currentPlan: "Premium",
  planBenefits: [
    "6 Active Jobs",
    "Highlights Job with Colors",
    "60 Days Resume Visibility",
    "9 Resume Access",
    "Urgents & Featured Jobs",
    "Access & Saved 20 Candidates",
    "24/7 Critical Support",
    "21 Days resume visibility", // Assuming this is a remaining benefit
    "4 Active Jobs", // Assuming this is a remaining count
  ],
  nextInvoice: {
    amount: 59.0,
    currency: "USD",
    dueDate: "Nov 28, 2021",
    packageStarted: "Jan 28, 2021",
  },
  paymentCard: {
    nameOnCard: "Esther Howard",
    type: "Mastercard",
    lastFourDigits: "**** **** **** 6714",
    expiryDate: "12/29",
  },
  latestInvoices: [
    {
      id: "#487441",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: 999.0,
    },
    {
      id: "#653518",
      date: "Dec 7, 2019 23:26",
      plan: "Standard",
      amount: 999.0,
    },
    {
      id: "#267400",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: 999.0,
    },
    {
      id: "#651535",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: 999.0,
    },
    {
      id: "#449003",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: 999.0,
    },
    {
      id: "#558612",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: 999.0,
    },
  ],
};

export default function PlansBillingPage() {
  const [billingInfo, setBillingInfo] = useState(mockBillingInfo);

  useEffect(() => {
    // In a real application, you would fetch billing information from an API
    // setBillingInfo(fetchBillingData());
  }, []);

  return (
    <div className="bg-white rounded shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Plans & Billing</h1>

      <div className="mb-6 border-b pb-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Current Plan
          </h2>
          <p className="text-lg text-blue-500 font-medium">
            {billingInfo.currentPlan}
          </p>
          <p className="text-gray-600 text-sm">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere.
          </p>
          <div className="mt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md mr-2 transition-colors">
              Change Plans
            </button>
            <button className="text-red-500 hover:underline text-sm">
              Cancel Plan
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Plan Benefits
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            {billingInfo.planBenefits.slice(0, 4).map((benefit) => (
              <li key={benefit} className="flex items-center">
                <span className="text-green-500 mr-1">✓</span> {benefit}
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
            {billingInfo.planBenefits.slice(4).map((benefit) => (
              <li key={benefit} className="flex items-center">
                {benefit.includes("Remaining") ||
                benefit.includes("Active Jobs") ? (
                  <span className="text-red-500 mr-1">ⓧ</span>
                ) : (
                  <span className="text-green-500 mr-1">✓</span>
                )}
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Next Invoice
        </h2>
        <p className="text-2xl text-blue-500 font-semibold">
          {billingInfo.nextInvoice.currency}
          {billingInfo.nextInvoice.amount}
        </p>
        <p className="text-gray-600 text-sm">
          Due on {billingInfo.nextInvoice.dueDate}
        </p>
        <p className="text-gray-600 text-sm">
          Package started: {billingInfo.nextInvoice.packageStarted}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          You have to pay this amount of money every month.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md transition-colors flex items-center gap-2">
          Pay Now →
        </button>
      </div>

      <div className="mb-6 border-b pb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Payment Card
        </h2>
        <div className="flex items-center">
          <CreditCard className="h-6 w-6 text-gray-500 mr-2" />
          <p className="text-lg text-gray-700 font-medium">
            {billingInfo.paymentCard.type}
          </p>
        </div>
        <p className="text-sm text-gray-600">
          Name on card: {billingInfo.paymentCard.nameOnCard}
        </p>
        <p className="text-sm text-gray-600">
          {billingInfo.paymentCard.lastFourDigits} - Expire date:{" "}
          {billingInfo.paymentCard.expiryDate}
        </p>
        <button className="text-blue-500 hover:underline text-sm mt-2 flex items-center gap-1">
          Edit Card
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Latest Invoices
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Download</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {billingInfo.latestInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.plan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {billingInfo.nextInvoice.currency}
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Download className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination (based on the image) */}
        <div className="mt-4 flex justify-center items-center space-x-2 text-sm text-gray-500">
          <button className="rounded-full border border-gray-300 px-2 py-1 hover:bg-gray-100">
            ←
          </button>
          <span className="font-semibold">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <button className="rounded-full border border-gray-300 px-2 py-1 hover:bg-gray-100">
            →
          </button>
        </div>
      </div>
    </div>
  );
}




// // app/employer-dashboard/plans-billing/page.jsx
// "use client";

// import { FiCreditCard, FiDownload, FiEdit2, FiX, FiCheck, FiZap } from 'react-icons/fi';
// import { FaCrown, FaStar, FaShieldAlt } from 'react-icons/fa';

// export default function PlansBillingPage() {
//   // Mock data - replace with actual API calls
//   const invoices = [
//     { id: '487441', date: 'Dec 7, 2019 23:26', plan: 'Premium', amount: '$999 USD' },
//     { id: '653518', date: 'Dec 7, 2019 23:26', plan: 'Standard', amount: '$999 USD' },
//     { id: '267400', date: 'Dec 7, 2019 23:26', plan: 'Premium', amount: '$999 USD' },
//     { id: '651535', date: 'Dec 7, 2019 23:26', plan: 'Premium', amount: '$999 USD' },
//     { id: '449003', date: 'Dec 7, 2019 23:26', plan: 'Premium', amount: '$999 USD' },
//   ];

//   const currentPlan = {
//     name: 'Premium',
//     description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
//     nextInvoice: {
//       amount: '$59.00 USD',
//       date: 'Nov 28, 2021',
//       startDate: 'Jan 28, 2021',
//       description: 'You have to pay this amount of money every month.'
//     },
//     benefits: [
//       { feature: '6 Active Jobs', available: true },
//       { feature: 'Urgents & Featured Jobs', available: true },
//       { feature: 'Highlights Job with Colors', available: true },
//       { feature: 'Access & Saved 20 Candidates', available: true },
//       { feature: '60 Days Resume Visibility', available: true },
//       { feature: '24/7 Critical Support', available: true }
//     ],
//     remaining: [
//       { label: 'Resume Access', value: '9', unit: '' },
//       { label: 'resume visibility', value: '21', unit: 'Days' },
//       { label: 'Active Jobs', value: '4', unit: '' }
//     ]
//   };

//   const paymentCard = {
//     name: 'Esther Howard',
//     expiry: '12/29',
//     number: '6714 **** **** ****'
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <h1 className="text-2xl font-semibold mb-6">Plans & Billing</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Current Plan Section */}
//         <div className="lg:col-span-2 space-y-6">
//           <div className="border border-gray-200 rounded-lg p-6">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h2 className="text-lg font-semibold">Current Plan</h2>
//                 <p className="text-blue-500 font-medium flex items-center gap-2">
//                   <FaCrown className="text-yellow-500" />
//                   {currentPlan.name}
//                 </p>
//                 <p className="text-gray-500 text-sm mt-1">{currentPlan.description}</p>
//               </div>
//               <div className="flex gap-3">
//                 <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm">
//                   Change Plans
//                 </button>
//                 <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm">
//                   Cancel Plan
//                 </button>
//               </div>
//             </div>

//             {/* Plan Benefits */}
//             <div className="mt-6">
//               <h3 className="font-medium mb-3">Plan Benefits</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {currentPlan.benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-2">
//                     {benefit.available ? (
//                       <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" />
//                     ) : (
//                       <FiX className="text-red-500 mt-0.5 flex-shrink-0" />
//                     )}
//                     <span className="text-gray-700">{benefit.feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Next Invoice */}
//           <div className="border border-gray-200 rounded-lg p-6">
//             <h2 className="text-lg font-semibold mb-4">Next Invoice</h2>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-2xl font-bold">{currentPlan.nextInvoice.amount}</p>
//                 <p className="text-gray-500">{currentPlan.nextInvoice.date}</p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Package started: {currentPlan.nextInvoice.startDate}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {currentPlan.nextInvoice.description}
//                 </p>
//               </div>
//               <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium">
//                 Pay Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="space-y-6">
//           {/* Remaining Features */}
//           <div className="border border-gray-200 rounded-lg p-6">
//             <h2 className="text-lg font-semibold mb-4">Remaining</h2>
//             <div className="space-y-4">
//               {currentPlan.remaining.map((item, index) => (
//                 <div key={index} className="flex justify-between items-center">
//                   <span className="text-gray-600">{item.label}</span>
//                   <span className="font-medium">
//                     {item.value} {item.unit && <span className="text-gray-500">{item.unit}</span>}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Payment Card */}
//           <div className="border border-gray-200 rounded-lg p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Payment Card</h2>
//               <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1 text-sm">
//                 <FiEdit2 className="h-4 w-4" />
//                 Edit Card
//               </button>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-lg">
//               <div className="flex items-center gap-3 mb-3">
//                 <FiCreditCard className="text-blue-500 h-6 w-6" />
//                 <span className="font-medium">VISA</span>
//               </div>
//               <div className="space-y-2">
//                 <div>
//                   <p className="text-xs text-gray-500">Name on card</p>
//                   <p className="font-medium">{paymentCard.name}</p>
//                 </div>
//                 <div className="flex gap-4">
//                   <div>
//                     <p className="text-xs text-gray-500">Expire date</p>
//                     <p className="font-medium">{paymentCard.expiry}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Card number</p>
//                     <p className="font-medium">{paymentCard.number}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Latest Invoices */}
//       <div className="mt-8">
//         <h2 className="text-lg font-semibold mb-4">Latest Invoices</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#ID</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PLAN</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {invoices.map((invoice) => (
//                 <tr key={invoice.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{invoice.id}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <span className="inline-flex items-center gap-1">
//                       {invoice.plan === 'Premium' ? (
//                         <FaCrown className="text-yellow-500" />
//                       ) : (
//                         <FaStar className="text-blue-500" />
//                       )}
//                       {invoice.plan}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.amount}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
//                       <FiDownload className="h-4 w-4" />
//                       Download
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="mt-6 flex justify-center items-center gap-2 text-sm">
//         {[1, 2, 3, 4, 5].map((page) => (
//           <button
//             key={page}
//             className={`px-3 py-1 border rounded-md ${page === 1 ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-100'}`}
//           >
//             {page}
//           </button>
//         ))}
//         <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-100 flex items-center gap-1">
//           Next
//           <svg
//             className="h-4 w-4"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }
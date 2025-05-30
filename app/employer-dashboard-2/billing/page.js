"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoCheckmarkDone } from "react-icons/io5";

function PlansAndBilling() {
  const invoices = [
    {
      id: "#487441",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#653518",
      date: "Dec 7, 2019 23:26",
      plan: "Standard",
      amount: "$999 USD",
    },
    {
      id: "#267400",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#651535",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#449003",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#558612",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
  ];

  const [visibleButtons, setVisibleButtons] = useState([1, 2, 3, 4, 5]);
  const [activePage, setActivePage] = useState(1);

  const handleNext = () => {
    if (visibleButtons[4] < 10) {
      setVisibleButtons((prev) => prev.map((num) => num + 1));
    }
  };

  const handlePrevious = () => {
    if (visibleButtons[0] > 1) {
      setVisibleButtons((prev) => prev.map((num) => num - 1));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-gray-300 p-3 rounded-lg h-50">
          <h3 className="font-semibold ">current plan</h3>
          <h1 className="text-3xl font-semibold">Premium</h1>
          <p className="text-gray-500 text-sm font-semibold">
            Vistibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere
          </p>
          <div className="flex items-center justify-between mt-8">
            <button className="hover:bg-gray-200 hover:text-blue-500 text-gray-500 text-sm font-semibold py-2 px-4 rounded">
              Change Plans
            </button>
            <button className="hover:bg-gray-200 hover:text-blue-500 text-gray-500 text-sm font-semibold py-2 px-4 rounded">
              Cancel Plans
            </button>
          </div>
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-xl mt-4">
          <h3 className="font-semibold pb-2">Plan Benefits</h3>
          <p className="text-gray-500 text-sm">
            Proin porta enim sit amet placerat finibus. Sed eget laoreet lorem.
          </p>
          <div className="text-gray-800 grid grid-cols-1 md:grid-cols-2 mt-4 border-b-2 border-gray-300 pb-4">
            {[
              "6 Active Jobs",
              "Urgents & Featured Jobs",
              "Highlights Job with colors",
              "Access & Saved 20 Candidates",
              "60 Days Resume Visibility",
              "24/7 Critical Support",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoCheckmarkDone className="w-5 h-5 text-blue-500" />
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
          <div>
            <h1 className="pt-2 text-gray-500">Remaining</h1>
            <div className="text-gray-800 grid grid-cols-1 md:grid-cols-2 mt-4">
              {[
                "9 Resume Access",
                "21 Days resume visibility",
                "4 Active Jobs",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FiXCircle className="w-5 h-5 text-red-500" />
                  <h3>{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-gray-300 p-4 rounded-xl mt-4">
          <h2 className="font-semibold pb-1">Next Inovices</h2>
          <h1 className="text-2xl font-semibold text-blue-600 pb-1">
            $59.00 USD
          </h1>
          <h2 className="font-semibold">Nov 28,20121</h2>
          <p className="text-gray-400 text-sm font-semibold">
            Package started: <span className="text-black">Jan 28, 2021</span>
          </p>
          <p className="text-gray-400 text-sm pb-4">
            You have to pay this amount of money every month.
          </p>
          <button className="bg-blue-700 text-white w-full p-1 rounded">
            Pay Now <span className="text-lg">→</span>
          </button>
        </div>
        <div className="max-w-sm border border-gray-300 rounded-xl p-4 shadow-sm bg-white space-y-4 mt-4">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-semibold text-gray-900">
              Payment Card
            </h3>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
              <HiOutlinePencilAlt className="w-4 h-4" />
              Edit Card
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/icons/mastercard.png"
              alt="Mastercard"
              width={40}
              height={40}
            />
            <div>
              <p className="text-xs text-gray-400">Name on card</p>
              <p className="text-sm font-medium text-gray-900">Esther Howard</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs text-gray-400">Expire date</p>
              <p className="text-sm font-medium text-gray-900">12/29</p>
            </div>
          </div>
          <hr className="text-gray-300" />
          <p className="text-lg tracking-widest font-mono text-gray-800">
            6714 **** **** ****
          </p>
        </div>
      </div>
      <div className="p-4 bg-white border-2 border-gray-300 shadow-lg rounded-xl mt-4">
        <h2 className="font-semibold mb-4">Latest Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left borderj-2 border-gray-300">
            <thead className="w-full bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">#ID</th>
                <th className="p-3">DATE</th>
                <th className="p-3">PLAN</th>
                <th className="p-3">AMOUNT</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-t hover:bg-gray-200">
                  <td className="p-3 font-medium text-black">{invoice.id}</td>
                  <td className="p-3">{invoice.date}</td>
                  <td className="p-3">{invoice.plan}</td>
                  <td className="p-3">{invoice.amount}</td>
                  <td className="p-3 text-right">
                    <Download className="h-4 w-4 text-gray-600 hover:text-green-400 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <button
            className="p-1 text-blue-500 text-2xl font-bold hover:rounded-full hover:h-10 hover:w-10  hover:bg-blue-100"
            onClick={handlePrevious}
          >
            ←
          </button>
          {visibleButtons.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`p-2 w-10 h-10 text-xs font-bold rounded-full ${
                activePage === page ? "bg-gray-200" : "bg-none text-gray-500"
              } hover:bg-blue-500 hover:text-white`}
            >
              {page}
            </button>
          ))}
          <button
            className="p-1 text-blue-500 text-2xl font-bold hover:rounded-full hover:h-10 hover:w-10 hover:bg-blue-100"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlansAndBilling;

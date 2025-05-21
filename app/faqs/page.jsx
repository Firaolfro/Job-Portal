"use client";

import { useState } from "react";

const AccountSections = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-5 font-poppins font-light">
      <h1 className="text-2xl font-bold mb-5">Your Account</h1>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="">
            Donec in ipsum sit amet mi tincidunt lacinia ut id risus.
          </p>
          <button className="text-xl">+</button>
        </div>

        <div>
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-blue-600">
              Donec in ipsum sit amet mi tincidunt lacinia ut id risus.
            </p>
            <button className="text-xl">×</button>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit
              mauris, venenatis vel posuere at, scelerisque sed eros.
            </p>
            <button className="text-xl"> </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600">
              Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.
            </p>
            <button className="text-xl">+</button>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-600">
              Morbi vitae neque eu sapien aliquet rhoncus.
            </p>
            <button className="text-xl">+</button>
          </div>
        </div>
      </div>

      {/* Employers and Jobs Section */}
      <div className="space-y-4 max-w-2xl mx-auto p-5">
        <h1 className="text-2xl font-bold text-gray-800">Employers and Jobs</h1>

        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-gray-600">
              {i === 0
                ? "Donec in ipsum sit amet mi tincidunt lacinia ut id risus."
                : i === 1
                ? "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique."
                : "Morbi vitae neque eu sapien aliquet rhoncus."}
            </p>
            <button className="text-gray-500 hover:text-gray-700 text-xl">
              +
            </button>
          </div>
        ))}
      </div>

      {/* Candidate & Resume Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Candidate & Resume</h1>

        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-gray-600">
              {i === 0
                ? "Donec in ipsum sit amet mi tincidunt lacinia ut id risus."
                : i === 1
                ? "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique."
                : "Morbi vitae neque eu sapien aliquet rhoncus."}
            </p>
            <button className="text-gray-500 hover:text-gray-700 text-xl">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSections;

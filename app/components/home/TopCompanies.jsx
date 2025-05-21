"use client";

import Image from "next/image";
import { useState } from "react";

const TopCompanies = () => {
  const [filterCity, setFilterCity] = useState("All");

  const companies = [
    {
      id: 1,
      logo: "/logos/ethiotelecom.png",
      name: "Ethio Telecom",
      location: "Addis Ababa",
      openPosition: "5 Open Positions",
    },
    {
      id: 2,

      logo: "/logos/Awashbank.png",
      name: "Awash Bank",
      location: "Addis Ababa",
      openPosition: "3 Open Positions",
    },
    {
      id: 3,
      logo: "/logos/Safaricom.png",
      name: "Safaricom Ethiopia",
      location: "Dire Dawa",
      openPosition: "2 Open Positions",
    },
    {
      id: 4,
      logo: "/logos/Dashenbank.png",
      name: "Dashen Bank",
      location: "Bahir Dar",
      openPosition: "1 Open Position",
    },
    {
      id: 5,
      logo: "/logos/Unilever.png",
      name: "Unilever Ethiopia",
      location: "Hawassa",
      openPosition: "2 Open Positions",
    },
    {
      id: 6,
      logo: "/logos/Ethiopianairlines1.png",
      name: "Ethiopian Airlines",
      location: "Addis Ababa",
      openPosition: "7 Open Positions",
    },
  ];

  const cities = ["All", "Addis Ababa", "Hawassa", "Bahir Dar", "Dire Dawa"];

  const filteredCompanies =
    filterCity === "All"
      ? companies
      : companies.filter((company) => company.location === filterCity);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Top Companies
        </h2>

        {/* Filter by city */}
        <div className="mb-6 flex flex-wrap gap-2">
          {cities.map((city) => (
            <button
              key={city}
              className={`py-1 px-3 rounded-full border ${
                filterCity === city
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setFilterCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className={`bg-white rounded-lg shadow p-4 flex flex-col items-center text-center transition-transform hover:scale-105 ${
                company.highlighted ? "border-2 border-blue-500 shadow-lg" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={48}
                  height={48}
                  className="object-contain rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {company.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">{company.location}</p>
              <span className="text-sm font-medium text-blue-600 mb-2">
                {company.openPosition}
              </span>
              <button className="bg-blue-100 text-blue-700 text-sm py-1.5 px-4 rounded-md hover:bg-blue-200">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;

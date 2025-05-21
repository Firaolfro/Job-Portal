"use client";

import Image from "next/image";
import { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const AppliedJobs = () => {
  const [activePage, setActivePage] = useState(null);
  const [visibleButtons, setVisibleButtons] = useState([1, 2, 3, 4, 5]);
  const handleNext = () => {
    if (visibleButtons[4] < 100) {
      setVisibleButtons((prev) => prev.map((num) => num + 1));
    }
  };

  const handlePrevious = () => {
    if (visibleButtons[0] > 1) {
      setVisibleButtons((prev) => prev.map((num) => num - 1));
    }
  };

  const jobs = [
    {
      title: "Networking Engineer",
      type: "Remote",
      location: "Washington",
      salary: "$50k-80k/month",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
      icon: "/icons/upwork.png",
    },
    {
      title: "Product Designer",
      type: "Full Time",
      location: "Dhaka",
      salary: "$50k-80k/month",
      dateApplied: "Dec 7, 2019 23:26",
      status: "Active",
      icon: "/icons/dribble.png",
    },
    {
      title: "Junior Graphic Designer",
      type: "Temporary",
      location: "Brazil",
      salary: "$50k-80k/month",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
      icon: "/icons/apple.png",
    },
    {
      title: "Visual Designer",
      type: "Contract Base",
      location: "Wiscosin",
      salary: "$50k-80k/month",
      dateApplied: "Dec 7, 2019 23:26",
      status: "Active",
      icon: "/icons/office.png",
    },
    {
      title: "Marketing Officer",
      type: "Full Time",
      location: "United State",
      salary: "$50k-80k/month",
      dateApplied: "Dec 4, 2019 21:42",
      status: "Active",
      icon: "/icons/twitter.png",
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "North Dakota",
      salary: "$50k-80k/month",
      dateApplied: "Dec 30, 2019 07:52",
      status: "Active",
      icon: "/icons/facebook.png",
    },
    {
      title: "Software Engineer",
      type: "Full Time",
      location: "New York",
      salary: "$50k-80k/month",
      dateApplied: "Dec 30, 2019 05:18",
      status: "Active",
      icon: "/icons/slack.png",
    },
    {
      title: "Front End Developer",
      type: "Full Time",
      location: "Michigan",
      salary: "$50k-80k/month",
      dateApplied: "Mar 20, 2019 23:14",
      status: "Active",
      icon: "/icons/reddit.png",
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <h3 className="font-semibold">
        Applied Jobs <span className="text-gray-500 font-normal">(589)</span>
      </h3>
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-lg text-xs font-semibold">
        <div className="flex-1 text-gray-700 text-left">JOBS</div>
        <div className="flex-1 text-gray-700 text-center">DATE APPLIED</div>
        <div className="flex-1 text-gray-700 text-center">STATUS</div>
        <div className="flex-1 text-gray-700 text-right">ACTION</div>
      </div>
      {jobs.map((job, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          <div className="flex items-center space-x-4 hover:border-2 hover:border-blue-500 hover:px-5 hover:rounded-md hover:py-1">
            <Image
              src={job.icon}
              alt={`${job.title} icon`}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">{job.title}</h3>
                <p className="text-sm text-blue-500 bg-blue-100 rounded-full px-3">
                  {job.type}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <GrLocation className="h-5 w-5 text-gray-300" />
                <p className="text-xs text-gray-500 pr-2 font-semibold">
                  {job.location}
                </p>
                <BsCurrencyDollar className="h-5 w-5 text-gray-300" />
                <p className="text-xs text-gray-500 font-semibold">
                  {job.salary}
                </p>
              </div>
            </div>
            <div className="flex-1 text-center text-gray-500 text-xs font-semibold">
              {job.dateApplied}
            </div>
            <div className="flex-1 text-center">
              <span className="font-semibold text-sm px-3 py-1 text-green-600 flex items-center justify-center space-x-2">
                <FiCheck className="h-5 w-5" />
                <span>{job.status}</span>
              </span>
            </div>
            <div className="flex-1 text-right">
              <button className="text-blue-500 font-bold bg-gray-200 p-3 rounded-md text-xs hover:bg-blue-500 hover:text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}

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
  );
};

export default AppliedJobs;

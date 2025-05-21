//app/dashboard/job-alert/page.jsx

"use client";

import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const JobAlert = () => {
  const [activePage, setActivePage] = useState(1);
  const [visibleButtons, setVisibleButtons] = useState([1, 2, 3, 4, 5]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState({});

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

  const toggleBookmark = (index) => {
    // Removed : number
    setBookmarkedJobs((prev) => ({
      ...prev,
      [index]: prev[index] ? false : true,
    }));
  };

  const jobs = [
    {
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Idaho, USA",
      salary: "$15k-$20k",
      status: "4 Days Remaining",
      icon: "/icons/google.png",
      button: "Apply Now →",
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Minnesota, USA",
      salary: "$10k-$15k",
      status: "4 Days Remaining",
      icon: "/icons/youtube.png",
      button: "Apply Now →",
    },
    {
      title: "Front End Developer",
      type: "Internship",
      location: "Mymensingh, Bangladish",
      salary: "$10k-$15k",
      status: "4 Days Remaining",
      icon: "/icons/reddit.png",
      button: "Apply Now →",
    },
    {
      title: "Marketing Officer",
      type: "Full Time",
      location: "Montana, USA",
      salary: "$50k-$60k",
      status: "4 Days Remaining",
      icon: "/icons/freepik.png",
      button: "Apply Now →",
    },
    {
      title: "Networking Engineer",
      type: "Full Time",
      location: "Michigan, USA",
      salary: "$5k-$10k",
      status: "4 Days Remaining",
      icon: "/icons/instagram.png",
      button: "Apply Now →",
    },
    {
      title: "Senior UX Designer",
      type: "Full Time",
      location: "United Kingdom of Great Britain",
      salary: "$30k-$35k",
      status: "4 Days Remaining",
      icon: "/icons/slack.png",
      button: "Apply Now →",
    },
    {
      title: "Junior Graphic Designer",
      type: "Full Time",
      location: "Mymensingh, Bangladish",
      salary: "$40k-$50k",
      status: "4 Days Remaining",
      icon: "/icons/facebook.png",
      button: "Apply Now →",
    },
    {
      title: "Product Designer",
      type: "Full Time",
      location: "Sivas, Turkey",
      salary: "$50k-$70k",
      status: "4 Days Remaining",
      icon: "/icons/twitter.png",
      button: "Apply Now →",
    },
    {
      title: "Project Manager",
      type: "Full Time",
      location: "Ohio, USA",
      salary: "$50k-$80k",
      status: "4 Days Remaining",
      icon: "/icons/udemy.png",
      button: "Apply Now →",
    },
    {
      title: "Marketing Manager",
      type: "Temporary",
      location: "Konya, Turkey",
      salary: "$20k-$25k",
      status: "4 Days Remaining",
      icon: "/icons/office.png",
      button: "Apply Now →",
    },
    {
      title: "Visual Designer",
      type: "Part Time",
      location: "Washington, USA",
      salary: "$10k-$15k",
      status: "4 Days Remaining",
      icon: "/icons/apple.png",
      button: "Apply Now →",
    },
    {
      title: "Interaction Designer",
      type: "Remote",
      location: "Penn, USA",
      salary: "$35k-$40k",
      status: "4 Days Remaining",
      icon: "/icons/figma.png",
      button: "Apply Now →",
    },
    {
      title: "Senior UX Designer",
      type: "Contract Base",
      location: "Sylhet, Bangladesh",
      salary: "$30k-$35k",
      status: "4 Days Remaining",
      icon: "/icons/upwork.png",
      button: "Apply Now →",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">
          Jobs Alerts{" "}
          <span className="text-gray-400 text-xs">(9 new jobs)</span>
        </h3>
        <div className="text-gray-600 flex justify-between items-center text-xs font-semibold">
          <BiEditAlt className="h-5 w-5" />
          <button className="hover:bg-gray-300 p-4 hover:rounded-md">
            Edit Job Alerts
          </button>
        </div>
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
              <div className="flex items-center">
                <h3 className="text-sm font-semibold pr-2">{job.title}</h3>
                <p className="text-xs text-blue-500 bg-blue-100 rounded-full px-3">
                  {job.type}
                </p>
              </div>
              <div className="flex items-center">
                <GrLocation className="h-5 w-5 text-gray-300 pr-1" />
                <p className="text-xs text-gray-500 pr-3 font-semibold">
                  {job.location}
                </p>
                <BsCurrencyDollar className="h-5 w-5 text-gray-300 pr-1" />
                <p className="text-xs text-gray-500 pr-3 font-semibold">
                  {job.salary}
                </p>
                <FiCalendar className="h-5 w-5 text-gray-300 pr-1" />
                <p className="text-xs text-gray-500 font-semibold">
                  {job.status}
                </p>
              </div>
            </div>
            <div className="text-right flex items-center space-x-4">
              <div className="text-right flex items-center space-x-4">
                <button onClick={() => toggleBookmark(index)}>
                  {bookmarkedJobs[index] ? (
                    <BookmarkIcon
                      fill="black"
                      stroke="black"
                      className="w-5 h-5"
                    />
                  ) : (
                    <BookmarkIcon className="w-5 h-5" />
                  )}
                </button>
                <button className="text-blue-600 font-bold bg-blue-100 p-3 rounded-md text-xs hover:bg-blue-500 hover:text-white">
                  {job.button}
                </button>
              </div>
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

export default JobAlert;

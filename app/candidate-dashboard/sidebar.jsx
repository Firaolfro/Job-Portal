"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLayers, FiSettings } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";
import { PiBriefcaseBold } from "react-icons/pi";

const Sidebar = () => {
  const activeState = usePathname();

  return (
    <div className="flex h-screen">
      <div className="text-xs ml-20 w-64 text-gray-500 flex flex-col border-r border-gray-500 justify-between">
        <div>
          <p className="p-4 text-xs font-semibold">CANDIDATE DASHBOARD</p>
          <ul className="font-semibold">
            <li
              className={`px-6 py-3 hover:bg-blue-100 flex items-center space-x-2 ${
                activeState === "/overview"
                  ? "border-l-3 border-blue-600 text-blue-500 bg-blue-100"
                  : ""
              }`}
            >
              <FiLayers className="h-5 w-5" />
              <Link href="./overview">Overview</Link>
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-100 flex items-center space-x-2 ${
                activeState === "/applied-jobs"
                  ? "border-l-3 border-blue-600 text-blue-500 bg-blue-100"
                  : ""
              }`}
            >
              <PiBriefcaseBold className="h-5 w-5" />
              <Link href="/applied-jobs">Applied Jobs</Link>
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-100 flex items-center space-x-2 ${
                activeState === "/favorite-jobs"
                  ? "border-l-3 border-blue-600 text-blue-500 bg-blue-100"
                  : ""
              }`}
            >
              <GoBookmark className="h-5 w-5" />
              <Link href="/favorite-jobs">Favorite Jobs</Link>
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-100 flex items-center space-x-2 ${
                activeState === "/job-alert"
                  ? "border-l-3 border-blue-600 text-blue-500 bg-blue-100"
                  : ""
              }`}
            >
              <HiOutlineBellAlert className="h-5 w-5" />
              <Link href="/job-alert" className="flex items-center w-full">
                Job Alert{" "}
                <span className="bg-blue-50 text-black text-xs rounded px-2 py-1 ml-auto font-bold">
                  09
                </span>
              </Link>
            </li>
            <li
              className={`px-6 py-3 hover:bg-blue-100 flex items-center space-x-2 ${
                activeState === "/settings"
                  ? "border-l-3 border-blue-600 text-blue-500 bg-blue-100"
                  : ""
              }`}
            >
              <FiSettings className="h-5 w-5" />
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </div>
        <div className="mb-20 px-6 py-3 hover:bg-blue-100 flex items-center space-x-2">
          <LuLogOut className="h-5 w-5" />
          <Link href="/logout" className="text-gray-500 font-semibold">
            Log-out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

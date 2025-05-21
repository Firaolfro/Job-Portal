"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { GoGear, GoPerson } from "react-icons/go";
import { TbWorld } from "react-icons/tb";

const header = () => {
  const activeState = usePathname();
  return (
    <div className="font-semibold text-lg border-b border-gray-300">
      <div className="pb-4">Setting</div>
      <div className="flex pl-2">
        <ul className="text-xs flex flex-wrap items-center text-gray-400 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 justify-center sm:justify-start">
          <li
            className={`flex items-center space-x-1.5 hover:bg-blue-100 hover:rounded-md p-2 ${
              activeState === "/dashboard/setting/personal"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            <GoPerson className="h-5 w-5" />
            <Link href="/dashboard/settings/personal">Personal</Link>
          </li>
          <li
            className={`flex items-center space-x-1.5 hover:bg-blue-100 hover:rounded-md p-2 ${
              activeState === "/dashboard/settings/profile"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            <FaRegCircleUser className="h-5 w-5" />
            <Link href="/dashboard/settings/profile">Profile</Link>
          </li>
          <li
            className={`flex items-center space-x-1.5 hover:bg-blue-100 hover:rounded-md p-2 ${
              activeState === "/dashboard/settings/social-links"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            <TbWorld className="h-5 w-5" />
            <Link href="/dashboard/settings/social-links">Social-Link</Link>
          </li>
          <li
            className={`flex items-center space-x-1.5 hover:bg-blue-100 hover:rounded-md p-2 ${
              activeState === "/dashboard/setting/account-setting"
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            <GoGear className="h-5 w-5" />
            <Link href="/dashboard/settings/account-setting">
              Account Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default header;

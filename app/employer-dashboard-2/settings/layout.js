//app/employer-dashboard-2/settings/layout.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

export default function SettingsLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="flex space-x-8 border-b border-gray-300 mb-6 text-sm">
        <Link
          href="/employer-dashboard-2/settings/company-info"
          className={`pb-2 flex items-center gap-2 ${
            pathname === "/employer-dashboard-2/settings/company-info"
              ? "text-blue-600 border-b-2 border-blue-600 font-medium"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <FaRegUser /> Company Info
        </Link>
        <Link
          href="/employer-dashboard-2/settings/founding-info"
          className={`pb-2 flex items-center gap-2 ${
            pathname === "/employer-dashboard-2/settings/founding-info"
              ? "text-blue-600 border-b-2 border-blue-600 font-medium"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <LuCircleUserRound /> Founding Info
        </Link>
        <Link
          href="/employer-dashboard-2/settings/social-media"
          className={`pb-2 flex items-center gap-2 ${
            pathname === "/employer-dashboard-2/settings/social-media"
              ? "text-blue-600 border-b-2 border-blue-600 font-medium"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <TbWorld /> Social Media
        </Link>
        <Link
          href="/employer-dashboard-2/settings/account-setting"
          className={`pb-2 flex items-center gap-2 ${
            pathname === "/employer-dashboard-2/settings/account-setting"
              ? "text-blue-600 border-b-2 border-blue-600 font-medium"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          <IoSettingsOutline />
          Account setting
        </Link>
      </div>
      {children}
      <footer className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500 text-center">
        © 2024 MyJob - Job Portal. All rights Reserved
      </footer>
    </div>
  );
}

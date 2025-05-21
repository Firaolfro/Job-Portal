// app/find-job/layout.jsx
// import Header from "@/components/Header";
// import { jobSeekerNav } from "@/components/layout/navLinks";

// export default function FindJobLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header menuLinks={jobSeekerNav} />
//         {children}
//       </body>
//     </html>
//   );
// }

// app/dashboard/layout.js
"use client"; // Keep this if your sidebar has interactive elements

import {
  Bell,
  Briefcase,
  Heart,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to determine active link

// NavItem component (can stay here or be in a separate components folder, e.g., components/dashboard/NavItem.jsx)
function NavItem({ icon, text, href }) {
  const pathname = usePathname();
  const active = pathname === href; // Determine if the current link is active

  const linkClasses = `flex items-center justify-between px-6 py-3 ${
    active
      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
      : "text-gray-600 hover:bg-gray-100"
  }`;

  return (
    <Link href={href} className={linkClasses}>
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span>{text}</span>
      </div>
      {/* You can re-add alertCount here if needed, passing it as a prop */}
      {/* {alertCount && (
        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {alertCount}
        </span>
      )} */}
    </Link>
  );
}

export default function DashboardLayoutOverview({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 p-20 pt-0">
      {/* <Header menuKey="jobSeeker" /> */}

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-gray-300">CANDIDATE DASHBOARD</h1>
        </div>
        <nav className="mt-3 flex-1">
          <NavItem
            icon={<LayoutDashboard size={18} />}
            text="Overview"
            href="/dashboard"
          />

          <NavItem
            icon={<Briefcase size={18} />}
            text="Applied Jobs"
            href="/dashboard/applied-jobs"
          />
          <NavItem
            icon={<Heart size={18} />}
            text="Favorite Jobs"
            href="/dashboard/favorite-jobs"
          />
          <NavItem
            icon={<Bell size={18} />}
            text="Job Alerts"
            href="/dashboard/job-alert"
          />
          <NavItem
            icon={<Settings size={18} />}
            text="Settings"
            href="/dashboard/settings"
          />
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="flex items-center w-full text-gray-600 hover:text-red-600 p-2 rounded-md transition-colors">
            <LogOut className="m-5" size={18} />
            <span>Log-out</span>
          </button>
        </div>
      </div>

      {/* Main Content - This is where your dashboard pages will be rendered */}
      <div className="flex-1 p-6">
        {children}{" "}
        {/* This is crucial! Your page.jsx content will render here. */}
      </div>
    </div>
  );
}

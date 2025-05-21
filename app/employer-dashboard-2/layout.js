// // app/browse-candidate/layout.jsx
// import Header from "@/components/Header";
// import { employerNav } from "@/components/layout/navLinks";

// export default function EmployerLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header menuLinks={employerNav} />
//         {children}
//       </body>
//     </html>
//   );
// }

// employer-dashboard-2/layout.js
"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  weight: "300", // This sets Poppins Light (300)
  subsets: ["latin"],
  display: "swap",

  variable: "--font-poppins",
});

import {
  Bookmark,
  Briefcase,
  FileText,
  Layers,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import Header from "../components/layouts/Header";

const navLinks = [
  {
    name: "Overview",
    href: "/employer-dashboard-2",
    icon: <Layers size={18} />,
  },
  {
    name: "Employers Profile",
    href: "/employer-dashboard-2/profile",
    icon: <FaRegUserCircle size={18} />,
  },
  {
    name: "Post a Job",
    href: "/employer-dashboard-2/jobs/post",
    icon: <IoIosAddCircleOutline size={18} />,
  },
  {
    name: "My Jobs",
    href: "/employer-dashboard-2/jobs",
    icon: <Briefcase size={18} />,
  },
  {
    name: "Saved Candidate",
    href: "/employer-dashboard-2/candidates/saved",
    icon: <Bookmark size={18} />,
  },
  {
    name: "Plans & Billing",
    href: "/employer-dashboard-2/billing",
    icon: <FileText size={18} />,
  },
  {
    name: "All Companies",
    href: "/employer-dashboard-2/companies",
    icon: <Users size={18} />,
  },
  {
    name: "Settings",
    href: "/employer-dashboard-2/settings",
    icon: <Settings size={18} />,
  },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    // <html lang="en">
    // <body className="antialiased px-20 bg-gray-50">

    <>
      <div>
        <Header menuKey="employer" />
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 px-4 lg:px-16 py-6 lg:py-10">
          <aside className="hidden md:flex w-64  bg-white flex-col justify-between sticky top-0 h-[calc(100vh-3rem)]">
            <div>
              <div className="p-2">
                <p className=" font-bold text-gray-600">EMPLOYERS DASHBOARD</p>
              </div>
              <nav className="space-y-1 px-2">
                {navLinks.map((link) => {
                  const isExactMatch = pathname === link.href;
                  const isSubMatch = pathname.startsWith(link.href + "/");
                  const isActive = isExactMatch || isSubMatch;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="p-6">
              <Link
                href="/logout"
                className="flex items-center text-sm text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <LogOut className="mr-2" size={18} />
                Log-out
              </Link>
            </div>
          </aside>
          <main className="flex-1 md:ml-6 bg-white rounded-lg shadow-sm p-4 md:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

// {/* </body> */}
// {/* </html> */}

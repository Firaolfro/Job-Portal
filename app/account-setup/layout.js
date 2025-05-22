"use client";

import { AtSign, Building2, Globe, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { name: "Company Info", href: "/account-setup/company-info", icon: User },
  {
    name: "Founding Info",
    href: "/account-setup/founding-info",
    icon: Building2,
  },
  {
    name: "Social Media Profile",
    href: "/account-setup/social-media",
    icon: Globe,
  },

  { name: "Contact", href: "/account-setup/contact", icon: AtSign },
];

export default function AccountSetupLayout({ children }) {
  const pathname = usePathname();

  // const currentStepIndex = steps.findIndex((step) =>
  //   pathname.includes(step.href)
  // );
  // const progressPercent = ((currentStepIndex + 0) / steps.length) * 100;

  const progressMap = {
    "/account-setup/company-info": 0,
    "/account-setup/founding-info": 25,
    "/account-setup/social-media": 50,
    "/account-setup/contact": 75,
    "/account-setup/message": 100,
  };

  const progressPercent = progressMap[pathname] ?? 0;

  // const currentStepIndex = steps.findIndex((step) =>
  //   pathname.startsWith(step.href)
  // );
  // const validIndex = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;
  // const progressPercent = (validIndex / steps.length) * 100;

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="flex items-center justify-between px-6 lg:px-32 py-6 border-b">
          {/* <div className="flex items-center gap-2 text-blue-600 text-2xl font-bold">
            <Briefcase className="w-6 h-6" />
            <span className="text-gray-700 text-xl">MyJob</span>
          </div> */}

          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/logo.png" // ← Replace this with your actual logo path or URL
              alt="MyJob Logo"
              className="w-20 h-20 object-contain"
            />
            {/* <span className="text-gray-700 text-xl font-bold">MyJob</span> */}
          </Link>

          {/* Setup Progress */}
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm text-gray-500">Setup Progress</span>
            <div className="w-40 h-2 mt-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-sm mt-1 text-blue-600">
              {Math.round(progressPercent)}% Completed
            </span>
          </div>
        </header>

        {/* Step Navigation */}
        <nav className="flex justify-center border-b">
          <ul className="flex gap-10 text-sm font-medium text-gray-500 py-4">
            {steps.map((step, index) => {
              const isActive = pathname === step.href;
              return (
                <li
                  key={step.name}
                  className="flex flex-col items-center relative group"
                >
                  <step.icon
                    className={`w-4 h-4 mb-1 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-blue-500"
                    }`}
                  />
                  <Link
                    href={step.href}
                    className={`${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-blue-500"
                    }`}
                  >
                    {step.name}
                  </Link>
                  {isActive && (
                    <div className="absolute -bottom-1 w-full h-0.5 bg-blue-500 rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="px-6 lg:px-32 py-10">{children}</main>
        {/* <footer className="text-xs text-gray-400 text-center mt-20">
        © 2024 MyJob - Job Portal. All rights reserved.
      </footer> */}
      </div>
    </>
  );
}

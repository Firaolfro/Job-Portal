// components/Header.jsx
"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";

const Header = ({ menuLinks = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [selectedCity, setSelectedCity] = useState("Addis Ababa");

  const pathname = usePathname();
  const mobileMenuRef = useRef(null);
  const languageMenuRef = useRef(null);
  const cityDropdownRef = useRef(null);

  const navLinkClass = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold underline"
      : "text-gray-600";

  const getLanguageFlag = () =>
    language === "am"
      ? "https://flagcdn.com/et.svg"
      : "https://flagcdn.com/us.svg";
  const getLanguageLabel = () => (language === "am" ? "አማርኛ" : "English");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!languageMenuRef.current?.contains(event.target))
        setLanguageMenuOpen(false);
      if (!mobileMenuRef.current?.contains(event.target))
        setMobileMenuOpen(false);
      if (!cityDropdownRef.current?.contains(event.target))
        setCityDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cities = [
    "Addis Ababa",
    "Hawassa",
    "Bahir Dar",
    "Mekelle",
    "Dire Dawa",
    "Jimma",
    "Adama",
    "Gondar",
    "Assosa",
    "Jijiga",
  ];

  return (
    <header className="bg-white shadow-md top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <nav className="hidden sm:flex items-center gap-6">
            {menuLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${navLinkClass(href)} hover:underline`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="text-gray-700 flex items-center gap-4 relative">
            <span className="hidden sm:inline">+251-911-22-33-44</span>
            <div ref={languageMenuRef}>
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1 text-gray-700"
              >
                <img
                  src={getLanguageFlag()}
                  alt={getLanguageLabel()}
                  className="w-5 h-4"
                />
                <span>{getLanguageLabel()}</span>
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {languageMenuOpen && (
                <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md border border-gray-300 z-50 w-40">
                  <button
                    onClick={() => setLanguage("en")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-gray-100"
                  >
                    <img src="https://flagcdn.com/us.svg" className="w-5 h-4" />{" "}
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("am")}
                    className="flex items-center gap-2 w-full p-2 hover:bg-gray-100"
                  >
                    <img src="https://flagcdn.com/et.svg" className="w-5 h-4" />{" "}
                    አማርኛ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full py-4 bg-white">
        <div className="container mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-gray-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Link
              href="/"
              className="flex items-center font-bold text-xl text-blue-600"
            >
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A16.305 16.305 0 0112 15c-2.343 0-4.487-.79-6.255-2.245M12 15l-4 4m5-14a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              MyJob
            </Link>
          </div>

          {/* Search Bar with City */}
          <div className="flex-1 relative z-40">
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm bg-white overflow-hidden">
              <div
                ref={cityDropdownRef}
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="relative flex items-center gap-1 px-3 py-2 border-r border-gray-300 cursor-pointer"
              >
                <img src="https://flagcdn.com/et.svg" className="w-5 h-4" />
                <span className="text-sm text-gray-700">{selectedCity}</span>
                <svg
                  className="w-4 h-4 text-gray-600 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {cityDropdownOpen && (
                  <ul className="absolute left-0 top-10 z-50 w-48 bg-white shadow-md border rounded-md text-sm text-gray-700">
                    {cities.map((city) => (
                      <li
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setCityDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex items-center px-3 w-full">
                <svg
                  className="w-5 h-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Job title, keyword, company"
                  className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
                />
              </div>
            </div>
          </div>

          {/* Auth */}
          <nav className="flex flex-col sm:flex-row gap-2">
            <Link
              href="/login"
              className="text-blue-600 border border-blue-600 py-2 px-4 rounded-md hover:bg-blue-50"
            >
              Sign In
            </Link>
            <Link
              href="/post-job"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Post a Job
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="sm:hidden fixed top-0 left-0 w-full h-[calc(100vh-100px)] bg-white shadow-md z-50"
        >
          <div className="p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-4">
            {menuLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${navLinkClass(href)} hover:underline`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// "use client";

// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
//   const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [selectedCity, setSelectedCity] = useState("Addis Ababa");

//   const pathname = usePathname();
//   const mobileMenuRef = useRef(null);
//   const languageMenuRef = useRef(null);
//   const cityDropdownRef = useRef(null);

//   const cities = [
//     "Addis Ababa",
//     "Hawassa",
//     "Bahir Dar",
//     "Mekelle",
//     "Dire Dawa",
//     "Jimma",
//     "Adama",
//     "Gondar",
//     "Assosa",
//     "Jijiga",
//   ];

//   const navLinkClass = (path) =>
//     pathname === path
//       ? "text-blue-600 font-semibold underline"
//       : "text-gray-600";

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setLanguageMenuOpen(false);
//   };

//   const getLanguageLabel = () => {
//     switch (language) {
//       case "am":
//         return "አማርኛ";
//       case "en":
//       default:
//         return "English";
//     }
//   };

//   const getLanguageFlag = () => {
//     switch (language) {
//       case "am":
//         return "https://flagcdn.com/et.svg";
//       case "en":
//       default:
//         return "https://flagcdn.com/us.svg";
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         languageMenuRef.current &&
//         !languageMenuRef.current.contains(event.target)
//       ) {
//         setLanguageMenuOpen(false);
//       }
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target)
//       ) {
//         setMobileMenuOpen(false);
//       }
//       if (
//         cityDropdownRef.current &&
//         !cityDropdownRef.current.contains(event.target)
//       ) {
//         setCityDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-white shadow-md top-0 z-50 w-full">
//       {/* Top Bar */}
//       <div className="bg-gray-100 py-2 text-sm">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <nav className="hidden sm:flex items-center gap-6">
//             <Link href="/" className={`${navLinkClass("/")} hover:underline`}>
//               Home
//             </Link>
//             <Link
//               href="/find-job"
//               className={`${navLinkClass("/find-job")} hover:underline`}
//             >
//               Find Job
//             </Link>
//             <Link
//               href="/find-job/employers"
//               className={`${navLinkClass(
//                 "/find-job/employers"
//               )} hover:underline`}
//             >
//               Employers
//             </Link>
//             <Link
//               href="/candidates"
//               className={`${navLinkClass("/candidates")} hover:underline`}
//             >
//               Candidates
//             </Link>
//             <Link
//               href="/pricing"
//               className={`${navLinkClass("/pricing")} hover:underline`}
//             >
//               Pricing Plans
//             </Link>
//             <Link
//               href="/support"
//               className={`${navLinkClass("/support")} hover:underline`}
//             >
//               Customer Supports
//             </Link>
//           </nav>

//           {/* Language Selector */}
//           <div className="text-gray-700 flex items-center gap-4 relative">
//             <span className="hidden sm:inline">+251-911-22-33-44</span>

//             <div ref={languageMenuRef}>
//               <button
//                 onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
//                 className="flex items-center gap-1 text-gray-700"
//               >
//                 <img
//                   src={getLanguageFlag()}
//                   alt={getLanguageLabel()}
//                   className="w-5 h-4"
//                 />
//                 <span>{getLanguageLabel()}</span>
//                 <svg
//                   className="w-4 h-4 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {languageMenuOpen && (
//                 <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md border border-gray-300 z-50 w-40">
//                   <button
//                     onClick={() => handleLanguageChange("en")}
//                     className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 text-gray-700"
//                   >
//                     <img
//                       src="https://flagcdn.com/us.svg"
//                       alt="English"
//                       className="w-5 h-4"
//                     />
//                     English
//                   </button>

//                   <button
//                     onClick={() => handleLanguageChange("am")}
//                     className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 text-gray-700"
//                   >
//                     <img
//                       src="https://flagcdn.com/et.svg"
//                       alt="Amharic"
//                       className="w-5 h-4"
//                     />
//                     አማርኛ
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="w-full py-4 bg-white">
//         <div className="container mx-auto px-6 flex items-center justify-between gap-4">
//           {/* Logo + Mobile Toggle */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="sm:hidden text-gray-600"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//             <Link
//               href="/"
//               className="flex items-center font-bold text-xl text-blue-600"
//             >
//               <svg
//                 className="w-6 h-6 mr-1 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 13.255A16.305 16.305 0 0112 15c-2.343 0-4.487-.79-6.255-2.245M12 15l-4 4m5-14a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               MyJob
//             </Link>
//           </div>

//           {/* Search Bar with City Dropdown */}
//           <div className="flex-1 min-w-[240px] sm:min-w-[320px] md:min-w-[400px] max-w-full relative z-40">
//             <div className="flex items-center border border-gray-300 rounded-md shadow-sm bg-white overflow-hidden">
//               <div
//                 ref={cityDropdownRef}
//                 className="relative flex items-center gap-1 px-3 py-2 border-r border-gray-300 cursor-pointer"
//                 onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
//               >
//                 <img
//                   src="https://flagcdn.com/et.svg"
//                   alt="Ethiopia"
//                   className="w-5 h-4"
//                 />
//                 <span className="text-sm text-gray-700">{selectedCity}</span>
//                 <svg
//                   className="w-4 h-4 text-gray-600 ml-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>

//                 {cityDropdownOpen && (
//                   <ul className="absolute left-0 top-10 z-50 w-48 bg-white shadow-md border rounded-md text-sm text-gray-700">
//                     {cities.map((city) => (
//                       <li
//                         key={city}
//                         onClick={() => {
//                           setSelectedCity(city);
//                           setCityDropdownOpen(false);
//                         }}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         {city}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               <div className="flex items-center px-3 w-full">
//                 <svg
//                   className="w-5 h-5 text-blue-600 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="Job title, keyword, company"
//                   className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Auth Buttons */}
//           <nav className="flex flex-col sm:flex-row gap-2">
//             <Link
//               href="/login"
//               className="text-blue-600 border border-blue-600 py-2 px-4 rounded-md hover:bg-blue-50"
//             >
//               Sign In
//             </Link>
//             <Link
//               href="/post-job"
//               className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-600"
//             >
//               Post a Job
//             </Link>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div
//           ref={mobileMenuRef}
//           className="sm:hidden fixed top-0 left-0 w-full h-[calc(100vh-100px)] bg-white shadow-md z-50"
//         >
//           <div className="p-4">
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-gray-600"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//           <nav className="flex flex-col p-4 gap-4">
//             <Link href="/" className={`${navLinkClass("/")} hover:underline`}>
//               Home
//             </Link>

//             <Link
//               href="/find-job"
//               className={`${navLinkClass("/find-job")} hover:underline`}
//             >
//               Find Job
//             </Link>
//             <Link
//               href="/find-job/employers"
//               className={`${navLinkClass(
//                 "/find-job/employers"
//               )} hover:underline`}
//             >
//               Employers
//             </Link>
//             <Link
//               href="/candidates"
//               className={`${navLinkClass("/candidates")} hover:underline`}
//             >
//               Candidates
//             </Link>
//             <Link
//               href="/pricing"
//               className={`${navLinkClass("/pricing")} hover:underline`}
//             >
//               Pricing Plans
//             </Link>
//             <Link
//               href="/support"
//               className={`${navLinkClass("/support")} hover:underline`}
//             >
//               Customer Supports
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

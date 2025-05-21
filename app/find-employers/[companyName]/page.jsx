"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLaptopCode,
  FaPhone,
  FaPinterest,
  FaRegBuilding,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

export default function SingleEmployerPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-end">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/find-employers" className="hover:text-blue-600">
                Find Employers
              </Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">Twitter</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Company Card */}
      <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 w-full max-w-3xl mx-auto mt-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Twitter</h2>
            <p className="text-sm text-blue-600">Information Technology (IT)</p>
          </div>
        </div>
        <Link
          href="/jobs/twitter"
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Open Position →
        </Link>
      </div>

      {/* Page Content */}
      <div className="bg-gray-50 py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Twitter is a leading global social media platform that empowers
                individuals to share thoughts, news, and real-time
                conversations...
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Company Benefits</h2>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Comprehensive health and wellness programs</li>
                <li>Remote and flexible work opportunities</li>
                <li>Generous paid time off and holidays</li>
                <li>Learning and development resources</li>
                <li>Inclusive, collaborative work environment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Company Vision</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our vision is to give everyone the power to create and share
                ideas instantly...
              </p>
            </section>

            <div className="flex items-center space-x-3 pt-4">
              <span className="text-sm font-medium text-gray-700">
                Share profile:
              </span>
              <FaFacebookF className="text-blue-600 cursor-pointer" />
              <FaTwitter className="text-blue-400 cursor-pointer" />
              <FaPinterest className="text-red-600 cursor-pointer" />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Company Information Grid */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <FaCalendarAlt className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Founded In</p>
                    <p>14 June, 2021</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaRegBuilding className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Organization Type
                    </p>
                    <p>Private Company</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaUsers className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Team Size</p>
                    <p>120–300 Candidates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaLaptopCode className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Industry</p>
                    <p>Technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a
                      href="https://www.estherhoward.com"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.estherhoward.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p>+1-202-555-0141</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Address</p>
                    <p>esther.howard@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-base font-semibold mb-4 text-gray-900">
                Follow us on:
              </h3>
              <div className="flex space-x-3 text-blue-600 text-lg">
                <FaFacebookF className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // app/find-employers/[companyName]/page.jsx

// "use client";
// import Image from "next/image";
// import Link from "next/link";

// import {
//   FaCalendarAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaGlobe,
//   FaInstagram,
//   FaLaptopCode,
//   FaPhone,
//   FaPinterest,
//   FaRegBuilding,
//   FaTwitter,
//   FaUsers,
//   FaYoutube,
// } from "react-icons/fa";
// import { companies } from "../page"; // Adjust the path if necessary

// export default function SingleEmployerPage({ params }) {
//   const { companyName } = params; // ✅ Direct access to params in Client Component

//   // const { companyName } = await params; // ✅ Await the params Promise

//   // const { companyName } = params;
//   // const { companyName } = React.use(params); // ✅ Unwrap the promise
//   // const { companyName } = use(params); // ✅ Correct usage

//   const company = companies.find(
//     (c) => c.name.toLowerCase() === companyName.toLowerCase()
//   );

//   if (!company) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         Company profile for "{companyName}" is not available.
//       </div>
//     );
//   }

//   //   Replace Hardcoded Data with JSON
//   // You can later import or fetch company data:
//   //   import companies from "@/data/companies.json";

//   //   const company = companies.find(
//   //     (c) => c.slug.toLowerCase() === companyName.toLowerCase()
//   //   );

//   //   if (!company) {
//   //     return <div>Company not found</div>;
//   //   }

//   return (
//     <div className="min-h-screen bg-gray-50 font-poppins">
//       {/* Breadcrumb Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-end">
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <Link href="/" className="hover:text-blue-600">
//                 Home
//               </Link>
//               <span>/</span>
//               <Link href="/find-employers" className="hover:text-blue-600">
//                 Find Employers
//               </Link>
//               <span>/</span>
//               <span className="text-gray-800 font-medium">{company.name}</span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Company Card */}
//       <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 w-full max-w-3xl mx-auto mt-8">
//         <div className="flex items-center space-x-4">
//           <div className="w-12 h-12 rounded-lg overflow-hidden">
//             {/* <Image
//               src="/twitter.png"
//               alt="Twitter"
//               width={48}
//               height={48}
//               className="object-cover"
//             /> */}

//             <Image
//               src={company.logo || "/fallback.png"} // Use company logo if available
//               alt={company.name}
//               fill
//               className="object-cover"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "/fallback.png";
//               }}
//             />
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">{company.name}</h2>
//             <h2 className="text-lg font-semibold">Twitter</h2>
//             {company.industry || "Information Technology (IT)"}{" "}
//             {/* Add industry to your data */}
//           </div>
//         </div>
//         <Link
//           href={`/jobs/${company.name.toLowerCase()}`} // Adjust if your job route is different
//           // href="/jobs/twitter"
//           className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           View Open Position →
//         </Link>
//       </div>

//       {/* Page Content */}
//       <div className="bg-gray-50 py-10 px-4 md:px-16">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {/* Left Content */}
//           <div className="md:col-span-2 space-y-8">
//             <section>
//               <h2 className="text-xl font-semibold mb-2">Description</h2>
//               {/* <p className="text-gray-700 text-sm leading-relaxed mb-3">
//                 Twitter is a leading global social media platform that empowers
//                 individuals to share thoughts, news, and real-time
//                 conversations...
//               </p> */}

//               <p className="text-gray-700 text-sm leading-relaxed mb-3">
//                 {company.description ||
//                   "Twitter is a leading global social media platform that empowersindividuals to share thoughts, news, and real-time conversations..."}{" "}
//                 {/* Add description to your data */}
//               </p>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold mb-2">Company Benefits</h2>
//               <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
//                 <li>Comprehensive health and wellness programs</li>
//                 <li>Remote and flexible work opportunities</li>
//                 <li>Generous paid time off and holidays</li>
//                 <li>Learning and development resources</li>
//                 <li>Inclusive, collaborative work environment</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-xl font-semibold mb-2">Company Vision</h2>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 Our vision is to give everyone the power to create and share
//                 ideas instantly...
//               </p>
//             </section>

//             <div className="flex items-center space-x-3 pt-4">
//               <span className="text-sm font-medium text-gray-700">
//                 Share profile:
//               </span>
//               <FaFacebookF className="text-blue-600 cursor-pointer" />
//               <FaTwitter className="text-blue-400 cursor-pointer" />
//               <FaPinterest className="text-red-600 cursor-pointer" />
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="space-y-6">
//             {/* Company Information Grid */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
//                 <div className="flex items-start space-x-3">
//                   <FaCalendarAlt className="text-blue-600 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Founded In</p>
//                     <p>14 June, 2021</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <FaRegBuilding className="text-blue-600 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       Organization Type
//                     </p>
//                     <p>Private Company</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <FaUsers className="text-blue-600 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Team Size</p>
//                     <p>120–300 Candidates</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <FaLaptopCode className="text-blue-600 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Industry</p>
//                     <p>Technology</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information Section */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-base font-semibold text-gray-900 mb-4">
//                 Contact Information
//               </h3>
//               <div className="space-y-4 text-sm text-gray-700">
//                 <div className="flex items-center space-x-3">
//                   <FaGlobe className="text-blue-600" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Website</p>
//                     <a
//                       href="https://www.estherhoward.com"
//                       className="text-blue-600 hover:underline"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       www.estherhoward.com
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <FaPhone className="text-blue-600" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Phone</p>
//                     <p>+1-202-555-0141</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <FaEnvelope className="text-blue-600" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Email Address</p>
//                     <p>esther.howard@gmail.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Socials */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-base font-semibold mb-4 text-gray-900">
//                 Follow us on:
//               </h3>
//               <div className="flex space-x-3 text-blue-600 text-lg">
//                 <FaFacebookF className="cursor-pointer" />
//                 <FaTwitter className="cursor-pointer" />
//                 <FaInstagram className="cursor-pointer" />
//                 <FaYoutube className="cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

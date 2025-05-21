"use client";

import { useRouter } from "next/navigation";

// Tailwind-compatible color maps
const bgColors = {
  white: "bg-white",
  "gray-100": "bg-gray-100",
  "blue-600": "bg-blue-600",
  "gray-50": "bg-gray-50",
};

const textColors = {
  white: "text-white",
  "gray-800": "text-gray-800",
  "blue-600": "text-blue-600",
};

const CallToActionCard = ({
  title,
  description,
  route,
  bgColor,
  textColor,
}) => {
  const router = useRouter();

  return (
    <div
      className={`${
        bgColors[bgColor] || "bg-white"
      } rounded-md shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
    >
      <h3
        className={`text-xl font-semibold ${
          textColors[textColor] || "text-gray-800"
        } mb-4`}
      >
        {title}
      </h3>
      <p
        className={`mb-6 ${
          textColor === "white" ? "text-gray-200" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      <button
        onClick={() => router.push(route)}
        className={`${
          bgColor === "white"
            ? "bg-gray-100 text-blue-600"
            : "bg-white text-blue-600"
        } font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 flex items-center gap-2`}
      >
        Register Now
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const CallToAction = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CallToActionCard
            title="Become a Candidate"
            description="Create a profile, upload your resume, and start applying for jobs today."
            route="/register"
            bgColor="white"
            textColor="gray-800"
          />
          <CallToActionCard
            title="Become an Employer"
            description="Post jobs and connect with top talent quickly and easily."
            route="/register"
            bgColor="blue-600"
            textColor="white"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

// "use client"; // Required for useRouter in app/ directory

// import { useRouter } from "next/navigation";

// const CallToActionCard = ({
//   title,
//   description,
//   route,
//   bgColor,
//   textColor,
// }) => {
//   const router = useRouter();

//   return (
//     <div
//       className={`bg-${bgColor} rounded-md shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
//     >
//       <h3 className={`text-xl font-semibold text-${textColor} mb-4`}>
//         {title}
//       </h3>
//       <p
//         className={`mb-6 ${
//           textColor === "white" ? "text-gray-200" : "text-gray-600"
//         }`}
//       >
//         {description}
//       </p>
//       <button
//         onClick={() => router.push(route)}
//         className={`${
//           bgColor === "white"
//             ? "bg-gray-150 text-blue-600"
//             : "bg-white text-blue-600"
//         } font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 flex items-center gap-2`}
//       >
//         Register Now
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// const CallToAction = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <CallToActionCard
//             title="Become a Candidate"
//             description="Create a profile, upload your resume, and start applying for jobs today."
//             route="/register"
//             bgColor="white"
//             textColor="gray-800"
//           />
//           <CallToActionCard
//             title="Become an Employer"
//             description="Post jobs and connect with top talent quickly and easily."
//             route="/register-employer"
//             bgColor="white"
//             textColor="gray-800"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

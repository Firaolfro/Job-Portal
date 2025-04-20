"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import from next/navigation

// Helper to format numbers
const formatNumber = (num) => new Intl.NumberFormat().format(num);

// Reusable Icons
const LiveJobIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h4l3-3m0 0l3 3h4m-4 0l-3 3m0 0l-3-3"
    />
  </svg>
);

const CompaniesIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7h18M3 12h18M3 17h18"
    />
  </svg>
);

const CandidatesIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A3 3 0 017 15h10a3 3 0 011.879.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const NewJobIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const Statistics = ({ stats }) => {
  const router = useRouter(); // Using useRouter from next/navigation

  return (
    <section className="w-full bg-gray-100 pt-2 pb-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: index * 0.1,
            }}
            className="cursor-pointer"
            onClick={() => router.push(stat.link)} // Navigate using router.push
          >
            <div className="bg-white rounded-md shadow-sm hover:shadow-md transition p-3 h-[90px] flex items-center">
              <div className="flex items-center justify-center text-blue-500 mr-3">
                {stat.icon}
              </div>
              <div>
                <h2 className="text-base font-semibold text-blue-700">
                  {formatNumber(stat.value)}
                </h2>
                <p className="text-gray-500 text-[10px]">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Example usage with links
const statsData = [
  {
    label: "Live Jobs",
    value: 175324,
    icon: <LiveJobIcon />,
    link: "/jobs/live",
  },
  {
    label: "Companies",
    value: 97354,
    icon: <CompaniesIcon />,
    link: "/companies",
  },
  {
    label: "Candidates",
    value: 3847154,
    icon: <CandidatesIcon />,
    link: "/candidates",
  },
  { label: "New Jobs", value: 7532, icon: <NewJobIcon />, link: "/jobs/new" },
];

export default function StatisticsSection() {
  return <Statistics stats={statsData} />;
}
